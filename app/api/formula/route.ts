import { NextRequest, NextResponse } from "next/server";

const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"];

async function callGemini(apiKey: string, model: string, prompt: string) {
  const res = await fetch(
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
  return res;
}

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query?.trim()) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const apiKey = process.env.AIRTABLE;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const prompt = `You are an expert Airtable formula builder. Write the exact Airtable formula for what the user describes.

CRITICAL: Respond ONLY with a raw JSON object. No markdown. No code fences. No preamble.

Required format:
{"formula": "YOUR_AIRTABLE_FORMULA_HERE", "explanation": "2-3 plain sentences on how it works. No bullet points. No em dashes."}

User request: ${query}`;

  let lastError = "";

  for (const model of MODELS) {
    try {
      const res = await callGemini(apiKey, model, prompt);

      if (!res.ok) {
        const errText = await res.text();
        lastError = `${model}: ${res.status} ${errText.slice(0, 200)}`;
        // 503 = overloaded, try next model. Other errors are probably config issues.
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
      if (!match) {
        lastError = `${model}: no JSON in response`;
        continue;
      }

      const parsed = JSON.parse(match[0]);
      return NextResponse.json(parsed);
    } catch (err) {
      lastError = `${model}: ${err}`;
      continue;
    }
  }

  console.error("All models failed:", lastError);
  return NextResponse.json({ error: "Formula service is busy. Try again in a moment." }, { status: 503 });
}
