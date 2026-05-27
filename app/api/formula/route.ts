import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query?.trim()) {
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const apiKey = process.env.AIRTABLE;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are an expert Airtable formula builder. The user described what they want in plain English. Write the exact Airtable formula for it.

Respond ONLY with valid JSON in this exact format, no markdown, no code fences:
{"formula": "YOUR_AIRTABLE_FORMULA_HERE", "explanation": "2-3 plain sentences explaining how it works. No bullet points. No em dashes."}

User request: ${query}`,
              },
            ],
          },
        ],
        generationConfig: { maxOutputTokens: 800, temperature: 0.1 },
      }),
    }
  );

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  const clean = text.replace(/```json|```/g, "").trim();

  try {
    const parsed = JSON.parse(clean);
    return NextResponse.json(parsed);
  } catch {
    return NextResponse.json({ error: "Failed to parse response", raw: text }, { status: 500 });
  }
}
