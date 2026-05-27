"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const patterns = [
  { trigger: "Record created", action: "Send Slack notification", tool: "Native", complexity: "Low" },
  { trigger: "Status changes to Done", action: "Send email to client", tool: "Native", complexity: "Low" },
  { trigger: "Date arrives", action: "Create follow-up task", tool: "Native", complexity: "Medium" },
  { trigger: "Form submission", action: "Create record + send confirmation", tool: "Native", complexity: "Low" },
  { trigger: "New Airtable record", action: "Create Stripe invoice", tool: "Zapier", complexity: "Medium" },
  { trigger: "Record updated", action: "Update Google Sheet row", tool: "Zapier", complexity: "Medium" },
  { trigger: "New record", action: "Generate PDF via Carbone", tool: "Zapier", complexity: "High" },
  { trigger: "Status changes", action: "Assign to different Asana project", tool: "Zapier", complexity: "High" },
];

const decisionCriteria = [
  { label: "Use Native Automations when", items: ["Everything stays inside Airtable", "You need to run scripts", "You want it free", "The trigger is record-based"] },
  { label: "Use Zapier when", items: ["You need to connect another app", "You need conditional branching", "Webhook triggers are required", "You need data transformation"] },
];

export default function AutomationsPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "120px", paddingBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px", animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>52 Patterns</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.15s both" }}>
            Airtable Automations Guide
          </h1>
          <p style={{ fontSize: "18px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "560px", margin: 0, animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
            The question is never "should I automate this?" The question is "Zapier or native?"
            Here is how to decide, with 52 real patterns to show you what each handles well.
          </p>
        </section>

        {/* Decision criteria */}
        <section style={{ paddingBottom: "64px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="decision-grid">
            {decisionCriteria.map((d, i) => (
              <div
                key={d.label}
                className="observe-reveal"
                style={{
                  background: i === 0 ? "var(--accent-subtle)" : "var(--bg-2)",
                  border: `1px solid ${i === 0 ? "rgba(212,98,42,0.2)" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)", padding: "28px",
                }}
              >
                <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: i === 0 ? "var(--accent)" : "var(--ink)", letterSpacing: "-0.02em" }}>{d.label}</h3>
                <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                  {d.items.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "14px", color: "var(--ink-2)" }}>
                      <span style={{ marginTop: "5px", width: "5px", height: "5px", borderRadius: "50%", background: i === 0 ? "var(--accent)" : "var(--ink-3)", display: "inline-block", flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Patterns table */}
        <section style={{ paddingBottom: "96px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 20px" }}>
            Common automation patterns
          </h2>
          <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr auto auto", gap: 0 }}>
              {["Trigger", "Action", "Tool", "Complexity"].map((h) => (
                <div key={h} style={{ padding: "12px 20px", background: "var(--bg-2)", fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em", borderBottom: "1px solid var(--border)" }}>
                  {h}
                </div>
              ))}
              {patterns.map((p, i) => (
                <>
                  <div key={`t-${i}`} style={{ padding: "14px 20px", fontSize: "14px", color: "var(--ink)", borderBottom: i < patterns.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>{p.trigger}</div>
                  <div key={`a-${i}`} style={{ padding: "14px 20px", fontSize: "14px", color: "var(--ink-2)", borderBottom: i < patterns.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>{p.action}</div>
                  <div key={`tool-${i}`} style={{ padding: "14px 20px", fontSize: "13px", borderBottom: i < patterns.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>
                    <span style={{ fontWeight: 600, color: p.tool === "Native" ? "var(--accent)" : "var(--ink-2)", background: p.tool === "Native" ? "var(--accent-subtle)" : "var(--bg-2)", padding: "2px 10px", borderRadius: "999px", fontSize: "12px" }}>{p.tool}</span>
                  </div>
                  <div key={`c-${i}`} style={{ padding: "14px 20px", fontSize: "13px", color: "var(--ink-3)", borderBottom: i < patterns.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>{p.complexity}</div>
                </>
              ))}
            </div>
          </div>
          <p className="observe-reveal" style={{ fontSize: "13px", color: "var(--ink-3)", marginTop: "12px" }}>
            Showing 8 of 52 patterns. Full guide covers every common automation with setup instructions.
          </p>
        </section>

        {/* CTA */}
        <section className="observe-reveal" style={{ paddingBottom: "96px" }}>
          <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" as const }}>
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>Need a formula to go with your automation?</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)" }}>Automations and formulas work together. Build the formula first.</p>
            </div>
            <Link href="/formula-builder" style={{ background: "var(--accent)", color: "#fff", padding: "11px 22px", borderRadius: "999px", textDecoration: "none", fontSize: "14px", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" as const }}>
              Formula Builder
            </Link>
          </div>
        </section>

      </main>
      <Footer />
      <style>{`
        @media (max-width: 768px) {
          .decision-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
