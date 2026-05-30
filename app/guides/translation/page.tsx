"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const options = [
  {
    title: "Airtable's built-in AI field (easiest, with limits)",
    badge: "Native",
    badgeColor: "#D4622A",
    body: `Airtable added an AI field type in 2024. You can configure it to translate the contents of another field into a target language. It runs on Airtable's AI credits, which are included at higher plan tiers and cost extra on lower ones.

This is the lowest-friction option if you're on a Business or Enterprise plan. The field updates when the source field changes. The quality is good for common languages and reasonable for less common ones.

The catch: it costs AI credits per record per run, it doesn't update in real time while you type, and it's not available on free or Team plans without purchasing add-on credits. For a base with thousands of records, costs add up.`,
  },
  {
    title: "Automation with Google Translate API (free, technical)",
    badge: "Automation",
    badgeColor: "#1A4A8A",
    body: `Google Cloud Translation API has a free tier that covers 500,000 characters per month. Past that it's $20 per million characters, which is cheap for most use cases.

The setup: create an Airtable automation triggered when a record is created or updated, add a scripting action that calls the Google Translate API with the field value, and write the translated result back to a separate field.

This is the most cost-effective option for volume. It stays in sync automatically. The downside is the setup requires writing a small script and managing a Google Cloud API key. Not difficult, but not zero effort either.`,
    code: `// Airtable script action example
const record = input.config();
const text = record.sourceText;
const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY';

const response = await fetch(
  \`https://translation.googleapis.com/language/translate/v2?key=\${apiKey}\`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      target: 'fr', // change to target language code
      format: 'text'
    })
  }
);

const data = await response.json();
const translated = data.data.translations[0].translatedText;

await output.set('translatedText', translated);`,
  },
  {
    title: "Zapier or Make with DeepL (best quality, paid)",
    badge: "Zapier / Make",
    badgeColor: "#2A5A1A",
    body: `DeepL consistently beats Google Translate on quality for European languages, especially German, French, Spanish, and Portuguese. It has a Zapier integration and a Make module.

The workflow: record created or updated in Airtable, Zapier sends the text to DeepL, DeepL returns the translation, Zapier writes it back to a translation field.

DeepL's free API plan covers 500,000 characters per month. Paid starts at $6.99/month for 1 million characters. For content that people will actually read, the quality difference is worth paying for.

The downside: there's a delay between record creation and translation, usually a few seconds to a couple of minutes depending on your Zapier/Make plan tier.`,
  },
  {
    title: "Duplicate base with manual translation (no code, no cost)",
    badge: "Manual",
    badgeColor: "#6A3A6A",
    body: `For teams that need a one-time translation or translate infrequently, the simple path is to duplicate the base, export the records to CSV, translate in Google Sheets (which has a GOOGLETRANSLATE function), and import back.

Google Sheets' GOOGLETRANSLATE formula works like this: =GOOGLETRANSLATE(A2, "en", "fr"). It's free, instant, and works on a whole column at once.

This doesn't stay in sync. If you update the original base, the translated copy falls behind. For static content like a product catalog or knowledge base that doesn't change much, this is fine. For live operational data, it's not.`,
  },
];

const sections = [
  {
    heading: "Airtable vs Google Sheets and Excel on translation",
    body: `This is one area where Airtable genuinely lags behind its competitors. Google Sheets has had a native GOOGLETRANSLATE formula for years. Type =GOOGLETRANSLATE(A2, "en", "fr") into any cell and it translates instantly, for free, with no setup.

Excel has a Translate function through its AI features, though it's less seamless than Google Sheets.

Airtable's native translation only arrived in 2024 via the AI field, and it costs credits. For teams that need translation as a core workflow, Google Sheets is more natural for this specific task.

That said, Airtable's advantage is everything else: relational data, views, automations, linked records. If you need both database features and translation, the options below let you get both.`,
  },
  {
    heading: "Keeping translations in sync",
    body: `The question that comes up most in the community is not how to translate once. It's how to keep a translation updated when the original text changes.

The automation approach handles this cleanly. Set your trigger to "When record updated" with a condition on the source text field specifically. This way, every time the English text changes, the automation fires and updates the French field.

The Airtable AI field also reruns when the source field changes, so it stays in sync automatically. Cost per re-run is the tradeoff.

If you have records that change rarely (quarterly updates, annual catalog refreshes), manual translation on a schedule is sometimes the pragmatic call. Set a reminder to export, translate in Sheets, and import back.`,
  },
];

const faqs = [
  { q: "Does Airtable have a built-in translate function like Google Sheets?", a: "No. Google Sheets has had =GOOGLETRANSLATE() for years, free and instant. Airtable's equivalent is the AI field type, which arrived in 2024 and costs AI credits per run. For free translation in Airtable, the most practical option is an automation that calls the Google Translate API and writes the result back to a field." },
  { q: "How do I keep a translated field in sync when the source text changes?", a: "Set your automation trigger to fire when the source field is updated specifically, not just when any field changes. This way the translation only reruns when the text you care about changes. Both the Airtable AI field and a Google Translate API automation will rerun when the source field updates." },
  { q: "Can I translate an entire Airtable base to another language?", a: "The most practical free approach: export the table as CSV, open it in Google Sheets, use =GOOGLETRANSLATE() on the columns you need, then import the translated CSV back into Airtable. This is a one-time operation and does not stay in sync, but it costs nothing and handles bulk translation well." },
];

export default function TranslationPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All guides
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A4A8A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A4A8A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Gap in Airtable</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Translation in Airtable
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Airtable doesn&apos;t have a built-in translate formula like Google Sheets does. Here are the four real options, from easiest to most work.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>6 min read</span>
        </section>

        {/* Context sections */}
        <article>
          {sections.map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "40px", transitionDelay: `${i * 0.05}s` }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 14px", lineHeight: 1.3 }}>{s.heading}</h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 14px" }}>{para}</p>
              ))}
            </section>
          ))}
        </article>

        {/* Options */}
        <section style={{ paddingBottom: "80px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 20px" }}>
            Your options
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "16px" }}>
            {options.map((opt, i) => (
              <div
                key={opt.title}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", overflow: "hidden",
                  transitionDelay: `${i * 0.06}s`,
                }}
              >
                <div style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <span style={{
                      fontSize: "11px", fontWeight: 700,
                      color: opt.badgeColor,
                      background: opt.badgeColor + "18",
                      padding: "3px 10px", borderRadius: "999px",
                      textTransform: "uppercase" as const, letterSpacing: "0.08em",
                    }}>{opt.badge}</span>
                  </div>
                  <h3 style={{ margin: "0 0 14px", fontSize: "16px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>{opt.title}</h3>
                  {opt.body.split("\n\n").map((para, j) => (
                    <p key={j} style={{ margin: "0 0 12px", fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.7 }}>{para}</p>
                  ))}
                </div>
                {opt.code && (
                  <div style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)", padding: "18px 24px" }}>
                    <p style={{ margin: "0 0 10px", fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                      Script action code
                    </p>
                    <pre style={{
                      margin: 0, fontFamily: "var(--font-geist-mono)", fontSize: "12px",
                      color: "var(--accent)", lineHeight: 1.6,
                      overflow: "auto" as const, whiteSpace: "pre" as const,
                    }}>
                      {opt.code}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="observe-reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", paddingBottom: "64px" }}>
          <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "16px" }}>Related</p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {[
              { href: "/automations", label: "Automations guide (for the scripting approach)" },
              { href: "/alternatives/airtable-vs-sheets", label: "Airtable vs Google Sheets" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
              >
                {l.label}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
