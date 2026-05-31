import { NextRequest, NextResponse } from "next/server";

const MODELS = ["gemini-2.5-flash", "gemini-2.0-flash"];

export async function POST(req: NextRequest) {
  const { fields, targetLanguage } = await req.json();

  if (!fields || !Array.isArray(fields) || fields.length === 0) {
    return NextResponse.json({ error: "No fields provided" }, { status: 400 });
  }
  if (!targetLanguage) {
    return NextResponse.json({ error: "No target language provided" }, { status: 400 });
  }

  const apiKey = process.env.AIRTABLE;
  if (!apiKey) {
    return NextResponse.json({ error: "API key not configured" }, { status: 500 });
  }

  // Build a single prompt that translates all fields at once
  const fieldList = fields
    .map((f: { name: string; value: string }, i: number) => `${i + 1}. Field "${f.name}": ${f.value}`)
    .join("\n");

  const prompt = `Translate the following Airtable field values to ${targetLanguage}. 
Preserve any special characters, numbers, dates, and field references like {Field Name}.
Do not translate field names in curly braces.

${fieldList}

Respond ONLY with valid JSON array. No markdown. No code fences. No explanation.
Return exactly this format:
[{"name": "field name here", "original": "original text", "translated": "translated text"}]

One object per field, in the same order as input.`;

  let lastError = "";

  for (const model of MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              maxOutputTokens: 2000,
              temperature: 0.1,
              responseMimeType: "application/json",
            },
          }),
        }
      );

      if (!res.ok) {
        lastError = `${model}: ${res.status}`;
        if (res.status !== 503 && res.status !== 429) break;
        continue;
      }

      const data = await res.json();
      let text = "";
      for (const part of data.candidates?.[0]?.content?.parts ?? []) {
        if (part.text && !part.thought) text += part.text;
      }

      const clean = text.replace(/```json|```/g, "").trim();
      const match = clean.match(/\[[\s\S]*\]/);
      if (!match) { lastError = `${model}: no JSON array found`; continue; }

      const parsed = JSON.parse(match[0]);
      return NextResponse.json({ translations: parsed });
    } catch (err) {
      lastError = `${model}: ${err}`;
      continue;
    }
  }

  console.error("Translator failed:", lastError);
  return NextResponse.json({ error: "Translation service is busy. Try again in a moment." }, { status: 503 });
}
