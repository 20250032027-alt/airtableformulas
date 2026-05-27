import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { useCase, teamSize, budget } = await req.json();
  if (!useCase || !teamSize || !budget) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
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
                text: `You are a database tool expert. Give direct, opinionated recommendations with no marketing speak and no em dashes.

The user is building: ${useCase}. Team size: ${teamSize}. Budget: ${budget}.

Compare Airtable, Notion, Google Sheets, Monday.com, and Softr for this exact situation. Pick the best fit.

Respond ONLY with valid JSON, no markdown, no code fences:
{"winner": "Tool Name", "why": "2-3 direct sentences on why this wins for their situation", "alternatives": [{"name": "Tool Name", "reason": "One sentence on when to pick this instead"}, {"name": "Tool Name", "reason": "One sentence on when to pick this instead"}]}`,
              },
            ],
          },
        ],
        generationConfig: { maxOutputTokens: 600, temperature: 0.2 },
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
