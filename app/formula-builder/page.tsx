"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormulaBuilder from "@/components/FormulaBuilder";
import ScrollReveal from "@/components/ScrollReveal";

const categories = [
  { name: "Date & Time", examples: ["Business days between dates", "Next Monday from today", "Age from birthdate", "Quarter from a date"] },
  { name: "Text", examples: ["Combine first and last name", "Extract domain from email", "Capitalize first letter", "Remove spaces from text"] },
  { name: "Conditional", examples: ["Show overdue if past due date", "If checkbox is checked show Done", "Assign tier based on revenue", "Flag if value is empty"] },
  { name: "Math & Numbers", examples: ["Percentage of total", "Round to 2 decimal places", "Cap a value at a maximum", "Average of linked records"] },
  { name: "Lookup & Rollup", examples: ["Count records where status is Done", "Sum amounts from linked table", "Latest date from linked records", "Unique values from linked field"] },
];

export default function FormulaBuilderPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--accent-subtle)", border: "1px solid rgba(212,98,42,0.2)", borderRadius: "999px", padding: "5px 14px", marginBottom: "20px", animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>AI-Powered</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.15s both" }}>
            Describe it.
            <br />
            <span style={{ color: "var(--accent)" }}>Get the formula.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "520px", margin: "0 0 40px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
            You tell it what you need. It writes the Airtable formula. Copy, paste, done.
            Works for date math, conditional logic, text manipulation, and rollups.
          </p>
        </section>

        <section style={{ paddingBottom: "64px" }} className="observe-reveal">
          <FormulaBuilder />
        </section>

        <section style={{ paddingBottom: "80px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", marginBottom: "24px" }}>
            What people ask for
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
            {categories.map((cat, i) => (
              <div
                key={cat.name}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
                  padding: "20px 24px", transitionDelay: `${i * 0.06}s`,
                }}
              >
                <h3 style={{ margin: "0 0 12px", fontSize: "14px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{cat.name}</h3>
                <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "8px" }}>
                  {cat.examples.map((ex) => (
                    <span
                      key={ex}
                      style={{
                        fontSize: "13px", color: "var(--ink-2)", background: "var(--bg)",
                        border: "1px solid var(--border)", borderRadius: "999px", padding: "5px 14px",
                        cursor: "default",
                      }}
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
