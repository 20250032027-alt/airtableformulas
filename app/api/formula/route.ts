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

  try {
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

CRITICAL: Respond ONLY with a raw JSON object. No markdown. No code fences. No explanation outside the JSON. No thinking tags.

Exact format required:
{"formula": "YOUR_AIRTABLE_FORMULA_HERE", "explanation": "2-3 plain sentences on how it works. No bullet points. No em dashes."}

User request: ${query}`,
                },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 1000,
            temperature: 0.1,
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini API error:", res.status, errText);
      return NextResponse.json({ error: `Gemini API error: ${res.status}` }, { status: 500 });
    }

    const data = await res.json();

    // Extract text from response — handle both standard and thinking model layouts
    let text = "";
    const parts = data.candidates?.[0]?.content?.parts ?? [];
    for (const part of parts) {
      if (part.text && !part.thought) {
        text += part.text;
      }
    }

    // Strip any stray markdown fences just in case
    const clean = text.replace(/```json|```/g, "").trim();

    // Find the JSON object even if there's surrounding text
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) {
      console.error("No JSON found in response:", clean);
      return NextResponse.json({ error: "Could not parse formula response" }, { status: 500 });
    }

    const parsed = JSON.parse(match[0]);
    return NextResponse.json(parsed);
  } catch (err) {
    console.error("Formula route error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
