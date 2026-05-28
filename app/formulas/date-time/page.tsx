"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";

const formulas = [
  {
    "name": "Business Days Between Two Dates",
    "use": "Count working days between a start and end date, skipping weekends.",
    "formula": "WORKDAY_DIFF({Start Date}, {End Date})",
    "note": "WORKDAY_DIFF is native to Airtable and handles weekends automatically. Add a third argument for custom holidays."
  },
  {
    "name": "Days Until Due Date",
    "use": "Show how many days remain before a deadline. Negative means overdue.",
    "formula": "DATETIME_DIFF({Due Date}, TODAY(), 'days')",
    "note": "Change 'days' to 'hours', 'minutes', 'months', or 'years' depending on what you need."
  },
  {
    "name": "Quarter from a Date",
    "use": "Turn any date into Q1 2026, Q2 2026, etc.",
    "formula": "\"Q\"&CEILING(MONTH({Date})/3,1)&\" \"&YEAR({Date})",
    "note": "CEILING rounds up so months 1-3 become 1, months 4-6 become 2, and so on."
  },
  {
    "name": "Age from Birthdate",
    "use": "Calculate someone's current age in years.",
    "formula": "DATETIME_DIFF(TODAY(), {Birthdate}, 'years')",
    "note": "Returns a whole number. For months, change 'years' to 'months'."
  },
  {
    "name": "Next Monday from Today",
    "use": "Find the date of the coming Monday, useful for sprint planning.",
    "formula": "DATEADD(TODAY(), 8-WEEKDAY(TODAY()), 'days')",
    "note": "WEEKDAY returns 1 for Sunday through 7 for Saturday. This offsets to the next Monday."
  },
  {
    "name": "Format Date as YYYY-MM-DD",
    "use": "Convert a date field to a specific text format for exports or concatenation.",
    "formula": "DATETIME_FORMAT({Date}, 'YYYY-MM-DD')",
    "note": "Change the format string to match whatever you need. 'DD/MM/YYYY', 'MMMM D, YYYY', etc."
  },
  {
    "name": "Week Number from Date",
    "use": "Get the ISO week number for a given date.",
    "formula": "WEEKNUM({Date})",
    "note": "Returns a number 1-53. Useful for grouping records by week in reports."
  },
  {
    "name": "Is Date in the Past?",
    "use": "Flag records where a date has already passed.",
    "formula": "IF({Date} < TODAY(), TRUE(), FALSE())",
    "note": "Returns a boolean. Can be used directly in filters or as a conditional field."
  }
];

export default function FormulaPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (formula: string, name: string) => {
    await navigator.clipboard.writeText(formula);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/formulas" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All formulas
          </Link>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 12px" }}>
            Date & Time Formulas
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 24px", maxWidth: "600px" }}>
            Business days, date differences, quarters, age calculations, relative dates. These get asked more than any other category.
          </p>
          <Link href="/formula-builder" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--accent)", color: "#fff", padding: "10px 20px", borderRadius: "999px", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            Need something else? Try the Builder
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </section>

        <section style={{ paddingBottom: "96px", display: "flex", flexDirection: "column" as const, gap: "16px" }}>
          {formulas.map((f, i) => (
            <div
              key={f.name}
              className="observe-reveal"
              style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", transitionDelay: `${i * 0.05}s` }}
            >
              <div style={{ padding: "24px 24px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "8px" }}>
                  <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>{f.name}</h2>
                </div>
                <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--ink-3)", lineHeight: 1.5 }}>{f.use}</p>
              </div>
              <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <code style={{ fontFamily: "var(--font-geist-mono)", fontSize: "13px", color: "var(--accent)", lineHeight: 1.5, flex: 1, wordBreak: "break-all" as const }}>
                  {f.formula}
                </code>
                <button
                  onClick={() => copy(f.formula, f.name)}
                  style={{ background: copied === f.name ? "var(--accent)" : "var(--card)", color: copied === f.name ? "#fff" : "var(--ink-2)", border: "1px solid var(--border)", borderRadius: "999px", padding: "6px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", flexShrink: 0, fontFamily: "var(--font-geist-sans)" }}
                >
                  {copied === f.name ? "Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ padding: "14px 24px" }}>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.6 }}>{f.note}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
