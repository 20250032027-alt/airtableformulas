"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";

const formulas = [
  {
    "name": "Percentage of Total",
    "use": "Calculate what percentage one number is of another.",
    "formula": "IF({Total} = 0, 0, ROUND({Amount} / {Total} * 100, 1))",
    "note": "The IF guard prevents a divide-by-zero error when Total is empty or zero."
  },
  {
    "name": "Round to Two Decimal Places",
    "use": "Clean up currency or measurement fields that have too many decimals.",
    "formula": "ROUND({Amount}, 2)",
    "note": "Use 0 for whole numbers, negative numbers to round to tens or hundreds (ROUND(x, -1) rounds to nearest 10)."
  },
  {
    "name": "Cap a Value at a Maximum",
    "use": "Prevent a calculated field from exceeding a ceiling.",
    "formula": "MIN({Value}, 100)",
    "note": "MIN returns the smaller of the two arguments, which effectively caps the value at 100."
  },
  {
    "name": "Clamp Between Min and Max",
    "use": "Keep a value within a defined range, like 0 to 100.",
    "formula": "MAX(0, MIN({Score}, 100))",
    "note": "MIN caps the top, MAX floors the bottom. Common for scores, percentages, and ratings."
  },
  {
    "name": "Absolute Value",
    "use": "Remove the sign from a number so negatives become positive.",
    "formula": "ABS({Variance})",
    "note": "Useful when you care about how different two numbers are, not which direction."
  },
  {
    "name": "Markup Price from Cost",
    "use": "Calculate a selling price from a cost with a percentage markup.",
    "formula": "ROUND({Cost} * (1 + {Markup %} / 100), 2)",
    "note": "Stores the markup as a plain number (20 for 20%). If stored as a decimal (0.2), remove the /100."
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
            Math & Numbers Formulas
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 24px", maxWidth: "600px" }}>
            Rounding, percentages, capping values, running calculations. Airtable handles numbers well once you know the right functions.
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
