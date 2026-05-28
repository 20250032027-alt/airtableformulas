"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormulaBuilder from "@/components/FormulaBuilder";
import AlternativePicker from "@/components/AlternativePicker";
import ScrollReveal from "@/components/ScrollReveal";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

const formulaCards = [
  {
    title: "Business Days Between Dates",
    category: "Date & Time",
    formula: `IF(WEEKDAY({End Date})=1, NETWORKDAYS({Start Date},{End Date})-2, NETWORKDAYS({Start Date},{End Date}))`,
    tags: ["Date", "Business Logic"],
    slug: "date-time",
  },
  {
    title: "Overdue Status",
    category: "Conditional",
    formula: `IF({Due Date}<TODAY(), "Overdue", DATETIME_DIFF({Due Date},TODAY(),'days')&" days left")`,
    tags: ["Conditional", "Dates"],
    slug: "conditional",
  },
  {
    title: "Full Name from Parts",
    category: "Text",
    formula: `TRIM({First Name}&" "&{Last Name})`,
    tags: ["Text", "Basic"],
    slug: "text",
  },
  {
    title: "Quarter from Date",
    category: "Date & Time",
    formula: `"Q"&CEILING(MONTH({Date})/3,1)&" "&YEAR({Date})`,
    tags: ["Date", "Reporting"],
    slug: "date-time",
  },
  {
    title: "Conditional Rollup Cap",
    category: "Math",
    formula: `MIN(SUM(VALUES({Linked Field})), 50000)`,
    tags: ["Math", "Rollup"],
    slug: "math",
  },
  {
    title: "Days Since Last Update",
    category: "Date & Time",
    formula: `DATETIME_DIFF(TODAY(),{Last Modified},'days')&" days ago"`,
    tags: ["Date", "Tracking"],
    slug: "date-time",
  },
];

const contentSections = [
  {
    title: "Formula Cookbook",
    description: "17 categories of ready-to-paste formulas. Business days, conditional logic, rollups, text manipulation. No hunting through the Airtable docs.",
    href: "/formulas",
    badge: "Most visited",
    badgeColor: "#D4622A",
  },
  {
    title: "Automations Guide",
    description: "When to use Zapier vs native Airtable automations, and why the answer changes based on what you are building. Covers 52 real automation patterns.",
    href: "/automations",
    badge: "Practical",
    badgeColor: "#2A7D4F",
  },
  {
    title: "Alternatives Compared",
    description: "Softr vs Interfaces vs Portals. Airtable vs Notion vs Google Sheets. Actual comparisons, not marketing copy. Updated for 2026.",
    href: "/alternatives",
    badge: "Buyer intent",
    badgeColor: "#1A4A8A",
  },
  {
    title: "Record Limit Survival Guide",
    description: "What actually happens when you hit 50k records, and what to do about it. Eight approaches, ordered by effort and cost.",
    href: "/guides/record-limits",
    badge: "Pain point",
    badgeColor: "#7A3A1A",
  },
  {
    title: "Generate PDFs from Airtable",
    description: "No clean native solution exists. Here is what works: Zapier with Google Docs, JotForm, and the workarounds that people actually use.",
    href: "/guides/pdf-generation",
    badge: "Popular",
    badgeColor: "#4A2A7A",
  },
  {
    title: "Airtable vs Notion vs Sheets",
    description: "The comparison that gets asked constantly. 2026 update with the new Airtable UI. Includes a decision matrix you can actually follow.",
    href: "/alternatives/airtable-vs-notion",
    badge: "High traffic",
    badgeColor: "#1A5A5A",
  },
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Hero */}
        <section style={{ paddingTop: "140px", paddingBottom: "80px", textAlign: "center" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--accent-subtle)",
              border: "1px solid rgba(212,98,42,0.2)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "28px",
              animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "pulse-dot 2s ease infinite" }} />
            <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>
              Formulas, Automations, Honest Comparisons
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(40px, 6vw, 76px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--ink)", margin: "0 0 24px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
            Stop Googling
            <br />
            <span style={{ color: "var(--accent)" }}>Airtable formulas.</span>
          </h1>

          <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto 40px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.3s both" }}>
            Every formula you actually need. Honest guide on when Airtable is not the right tool.
            A formula builder that works the way you think.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" as const, animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.4s both" }}>
            <Link
              href="/formula-builder"
              style={{
                background: "var(--accent)", color: "#fff", padding: "14px 28px", borderRadius: "999px",
                textDecoration: "none", fontSize: "15px", fontWeight: 600,
                display: "flex", alignItems: "center", gap: "10px",
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
                boxShadow: "0 4px 16px rgba(212,98,42,0.25)",
              }}
            >
              Try Formula Builder
              <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>↗</span>
            </Link>
            <Link
              href="/formulas"
              style={{
                background: "transparent", color: "var(--ink)", padding: "14px 28px", borderRadius: "999px",
                textDecoration: "none", fontSize: "15px", fontWeight: 500,
                border: "1px solid var(--border-2)", transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
            >
              Browse Cookbook
            </Link>
          </div>

          <div style={{ display: "flex", gap: "40px", justifyContent: "center", marginTop: "56px", flexWrap: "wrap" as const, animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.5s both" }}>
            {[{ num: "200+", label: "Ready formulas" }, { num: "52", label: "Automation patterns" }, { num: "10+", label: "Tool comparisons" }].map((s) => (
              <div key={s.label} style={{ textAlign: "center" as const }}>
                <div style={{ fontSize: "28px", fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.04em" }}>{s.num}</div>
                <div style={{ fontSize: "13px", color: "var(--ink-3)", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Formula Builder */}
        <section className="observe-reveal" style={{ paddingBottom: "96px" }}>
          <FormulaBuilder />
        </section>

        {/* Formula cards */}
        <section style={{ paddingBottom: "96px" }}>
          <div className="observe-reveal" style={{ marginBottom: "40px" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "12px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Formula Cookbook</span>
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 8px" }}>
              The formulas people actually search for
            </h2>
            <p style={{ fontSize: "15px", color: "var(--ink-3)", margin: 0 }}>
              Copy and paste. Adjust the field names.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
            {formulaCards.map((card, i) => (
              <div
                key={card.title}
                className="observe-reveal"
                style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "2px", transitionDelay: `${i * 0.05}s` }}
              >
                <div style={{ background: "var(--bg)", borderRadius: "calc(var(--radius-lg) - 2px)", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.08em", background: "var(--accent-subtle)", padding: "3px 10px", borderRadius: "999px" }}>
                      {card.category}
                    </span>
                    <div style={{ display: "flex", gap: "4px" }}>
                      {card.tags.map((t) => (
                        <span key={t} style={{ fontSize: "11px", color: "var(--ink-3)", background: "var(--bg-2)", padding: "2px 8px", borderRadius: "999px" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <h3 style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>{card.title}</h3>
                  <code style={{ display: "block", fontFamily: "var(--font-geist-mono)", fontSize: "12px", color: "var(--accent)", background: "var(--bg-2)", padding: "12px", borderRadius: "8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" as const }} title={card.formula}>
                    {card.formula.length > 60 ? card.formula.slice(0, 60) + "..." : card.formula}
                  </code>
                  <Link href={`/formulas/${card.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", fontSize: "13px", fontWeight: 500, color: "var(--ink-2)", textDecoration: "none" }}>
                    See full formula
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="observe-reveal" style={{ marginTop: "24px", textAlign: "center" as const }}>
            <Link href="/formulas" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", borderRadius: "999px", border: "1px solid var(--border-2)", fontSize: "14px", fontWeight: 500, color: "var(--ink-2)", textDecoration: "none" }}>
              Browse all 200+ formulas
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        {/* Content sections */}
        <section style={{ paddingBottom: "96px" }}>
          <div className="observe-reveal" style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 8px" }}>
              Everything you keep searching for
            </h2>
            <p style={{ fontSize: "15px", color: "var(--ink-3)", margin: 0 }}>Built from actual Reddit posts, forum threads, and support tickets.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {contentSections.map((s, i) => (
              <Link
                key={s.title}
                href={s.href}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
                  padding: "24px", textDecoration: "none", display: "block",
                  transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)", transitionDelay: `${i * 0.04}s`,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: s.badgeColor, background: s.badgeColor + "18", padding: "3px 10px", borderRadius: "999px", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{s.badge}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
                <h3 style={{ margin: "0 0 8px", fontSize: "17px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.65" }}>{s.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Alternative Picker */}
        <section style={{ paddingBottom: "96px" }} className="observe-reveal">
          <AlternativePicker />
        </section>

        {/* CTA */}
        <section className="observe-reveal" style={{ paddingBottom: "96px", textAlign: "center" as const }}>
          <div style={{ background: "var(--ink)", borderRadius: "var(--radius-xl)", padding: "64px 40px", position: "relative" as const, overflow: "hidden" }}>
            <div style={{ position: "absolute" as const, top: "-80px", right: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "var(--accent)", opacity: 0.12, pointerEvents: "none" as const }} />
            <div style={{ position: "absolute" as const, bottom: "-60px", left: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "var(--accent-2)", opacity: 0.08, pointerEvents: "none" as const }} />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", margin: "0 0 16px", position: "relative" as const }}>
              Type it in plain English.
              <br />
              Get the exact formula.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.6, position: "relative" as const }}>
              No memorizing function names. No digging through docs. Just describe what you want.
            </p>
            <Link
              href="/formula-builder"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                background: "var(--accent)", color: "#fff", padding: "15px 32px",
                borderRadius: "999px", textDecoration: "none", fontSize: "15px", fontWeight: 600,
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)", position: "relative" as const,
              }}
            >
              Open Formula Builder
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
