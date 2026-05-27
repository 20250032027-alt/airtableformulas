"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const categories = [
  {
    slug: "date-time",
    title: "Date & Time",
    count: 34,
    description: "Business day calculations, date differences, quarter extraction, relative dates.",
    topFormulas: ["Business days between dates", "Age from birthdate", "Next Monday from today"],
  },
  {
    slug: "conditional",
    title: "Conditional Logic",
    count: 28,
    description: "IF/SWITCH logic, nested conditions, status flags, tier assignments.",
    topFormulas: ["Overdue status with days remaining", "Assign tier by revenue", "Multi-condition status label"],
  },
  {
    slug: "text",
    title: "Text & String",
    count: 32,
    description: "Name formatting, email parsing, URL extraction, text cleanup.",
    topFormulas: ["Full name from parts", "Domain from email address", "Capitalize first letter"],
  },
  {
    slug: "math",
    title: "Math & Numbers",
    count: 24,
    description: "Rounding, percentages, capping values, averages, running totals.",
    topFormulas: ["Percentage of total", "Round to 2 decimal places", "Cap value at maximum"],
  },
  {
    slug: "lookup",
    title: "Lookup & Rollup",
    count: 22,
    description: "Count linked records, sum amounts, latest date, unique values.",
    topFormulas: ["Count linked records by status", "Sum from linked table", "Latest date from links"],
  },
  {
    slug: "boolean",
    title: "Boolean & Checkboxes",
    count: 14,
    description: "Checkbox logic, true/false conditions, all-or-nothing flags.",
    topFormulas: ["All checkboxes checked", "Any item overdue", "Flip boolean logic"],
  },
  {
    slug: "url",
    title: "URLs & Links",
    count: 10,
    description: "Build Airtable record URLs, create hyperlinks, parse URL parts.",
    topFormulas: ["Link to this record", "Extract domain from URL", "Build button URL"],
  },
  {
    slug: "array",
    title: "Arrays & Multi-Select",
    count: 16,
    description: "Multi-select parsing, count selected options, join values.",
    topFormulas: ["Count multi-select options", "Join array values", "Check if option selected"],
  },
];

export default function FormulasPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "120px", paddingBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px", animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>200+ Formulas</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.15s both" }}>
            Formula Cookbook
          </h1>
          <p style={{ fontSize: "18px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "560px", margin: "0 0 32px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
            The formulas people search for. Organized by what you are trying to do,
            not by function name.
          </p>
          <div style={{ animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.25s both" }}>
            <Link
              href="/formula-builder"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "var(--accent)", color: "#fff", padding: "11px 22px",
                borderRadius: "999px", textDecoration: "none", fontSize: "14px", fontWeight: 600,
              }}
            >
              Not finding it? Try the Builder
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        <section style={{ paddingBottom: "96px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "12px" }}>
            {categories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/formulas/${cat.slug}`}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
                  padding: "24px", textDecoration: "none", display: "block",
                  transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)", transitionDelay: `${i * 0.04}s`,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.07)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                  <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>{cat.title}</h2>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--accent)", background: "var(--accent-subtle)", padding: "3px 10px", borderRadius: "999px" }}>{cat.count}</span>
                </div>
                <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.6 }}>{cat.description}</p>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "4px" }}>
                  {cat.topFormulas.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "var(--border-2)", display: "inline-block", flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
