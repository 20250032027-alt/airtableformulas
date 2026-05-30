import { NextRequest, NextResponse } from "next/server";

// Known formulas that trip up the model - served instantly, no API call needed
const KNOWN_FORMULAS: Record<string, { formula: string; explanation: string }> = {
  "business days": {
    formula: "WORKDAY_DIFF({Start Date}, {End Date})",
    explanation: "WORKDAY_DIFF is Airtable's native function for counting working days between two dates. It automatically excludes Saturdays and Sundays. Rename the field names to match yours."
  },
  "workday": {
    formula: "WORKDAY_DIFF({Start Date}, {End Date})",
    explanation: "WORKDAY_DIFF is Airtable's native function for counting working days between two dates. It automatically excludes Saturdays and Sundays. Rename the field names to match yours."
  },
  "overdue": {
    formula: "IF({Due Date} < TODAY(), \"Overdue\", DATETIME_DIFF({Due Date}, TODAY(), 'days') & \" days left\")",
    explanation: "Compares the due date to today. If it has already passed, shows Overdue. Otherwise calculates and displays how many days remain."
  },
  "days remaining": {
    formula: "DATETIME_DIFF({Due Date}, TODAY(), 'days')",
    explanation: "Returns how many days are left until the due date. Negative values mean the date has already passed. Change the field name to match yours."
  },
  "days until": {
    formula: "DATETIME_DIFF({Due Date}, TODAY(), 'days')",
    explanation: "Returns how many days are left until the due date. Negative values mean the date has already passed. Change the field name to match yours."
  },
  "quarter": {
    formula: "\"Q\" & CEILING(MONTH({Date}) / 3, 1) & \" \" & YEAR({Date})",
    explanation: "Divides the month number by 3 and rounds up to get the quarter (1 through 4), then combines it with the year. Returns values like Q1 2026."
  },
  "full name": {
    formula: "TRIM({First Name} & \" \" & {Last Name})",
    explanation: "Joins first and last name with a space between them. TRIM removes any extra whitespace if one of the fields is empty."
  },
  "concatenate": {
    formula: "TRIM({First Name} & \" \" & {Last Name})",
    explanation: "Joins first and last name with a space between them. TRIM removes any extra whitespace if one of the fields is empty."
  },
  "first name last name": {
    formula: "TRIM({First Name} & \" \" & {Last Name})",
    explanation: "Joins first and last name with a space between them. TRIM removes any extra whitespace if one of the fields is empty."
  },
  "age": {
    formula: "DATETIME_DIFF(TODAY(), {Birthdate}, 'years')",
    explanation: "Calculates the number of full years between the birthdate and today. Change the field name to match yours."
  },
  "days since": {
    formula: "DATETIME_DIFF(TODAY(), {Date}, 'days')",
    explanation: "Returns how many days have passed since the date in the field. Change the field name to match yours."
  },
  "percentage": {
    formula: "IF({Total} = 0, 0, ROUND({Amount} / {Total} * 100, 1))",
    explanation: "Divides the amount by the total and multiplies by 100 to get a percentage. The IF guard prevents a divide-by-zero error when Total is empty."
  },
  "round": {
    formula: "ROUND({Amount}, 2)",
    explanation: "Rounds the value to 2 decimal places. Change the second argument to round to more or fewer places. Use 0 for whole numbers."
  },
};

function findKnownFormula(query: string) {
  const lower = query.toLowerCase();
  for (const [key, value] of Object.entries(KNOWN_FORMULAS)) {
    if (lower.includes(key)) return value;
  }
  return null;
}

const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"];

async function callGemini(apiKey: string, model: string, prompt: string) {
  return fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          maxOutputTokens: 1000,
          temperature: 0.1,
          responseMimeType: "application/json",
        },
      }),
    }
  );
}

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query?.trim()) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  // Check known formulas first — instant, no API cost, 100% reliable
  const known = findKnownFormula(query);
  if (known) return NextResponse.json(known);

  const apiKey = process.env.AIRTABLE;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const prompt = `You are an expert Airtable formula builder. Write the exact Airtable formula for what the user describes.

CRITICAL: Respond ONLY with a raw JSON object. No markdown. No code fences. No preamble. No thinking.

Required format:
{"formula": "YOUR_AIRTABLE_FORMULA_HERE", "explanation": "2-3 plain sentences on how it works. No bullet points. No em dashes."}

User request: ${query}`;

  let lastError = "";

  for (const model of MODELS) {
    try {
      const res = await callGemini(apiKey, model, prompt);

      if (!res.ok) {
        lastError = `${model}: ${res.status}`;
        if (res.status !== 503 && res.status !== 429) break;
        continue;
      }

      const data = await res.json();
      let text = "";
      const parts = data.candidates?.[0]?.content?.parts ?? [];
      for (const part of parts) {
        if (part.text && !part.thought) text += part.text;
      }

      const clean = text.replace(/```json|```/g, "").trim();
      const match = clean.match(/\{[\s\S]*\}/);
      if (!match) { lastError = `${model}: no JSON found`; continue; }

      const parsed = JSON.parse(match[0]);
      return NextResponse.json(parsed);
    } catch (err) {
      lastError = `${model}: ${err}`;
      continue;
    }
  }

  console.error("All models failed:", lastError);
  return NextResponse.json(
    { error: "Formula service is busy. Try again in a moment." },
    { status: 503 }
  );
}
