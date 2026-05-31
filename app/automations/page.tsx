"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";
import YouTubeLinks from "@/components/YouTubeLinks";

const patterns = [
  { trigger: "Record created", action: "Send Slack message", tool: "Native", complexity: "Low", notes: "Works out of the box. Use the built-in Slack action." },
  { trigger: "Status changes to Done", action: "Send email to client", tool: "Native", complexity: "Low", notes: "Use a conditional trigger that watches the Status field." },
  { trigger: "Date arrives (scheduled)", action: "Create a follow-up task", tool: "Native", complexity: "Medium", notes: "Scheduled automations run on a time trigger, not a record event." },
  { trigger: "Form submitted", action: "Create record + send confirmation email", tool: "Native", complexity: "Low", notes: "Airtable's built-in form submit trigger handles this cleanly." },
  { trigger: "Record created", action: "Run a script on the new record", tool: "Native", complexity: "Medium", notes: "Use a scripting action. Runs JavaScript in Airtable's sandbox." },
  { trigger: "Status changes", action: "Update linked records in another table", tool: "Native", complexity: "Medium", notes: "Use the Update Record action with a linked record reference." },
  { trigger: "New Airtable record", action: "Create Stripe invoice", tool: "Zapier", complexity: "Medium", notes: "Stripe's Zapier integration is mature and reliable." },
  { trigger: "Record updated", action: "Update a Google Sheet row", tool: "Zapier", complexity: "Medium", notes: "Use the Find Row step to locate the right row before updating." },
  { trigger: "New record", action: "Generate PDF via Carbone or Docupilot", tool: "Zapier", complexity: "High", notes: "Zapier triggers the PDF tool with field data, then stores the result." },
  { trigger: "Status changes", action: "Move task to different Asana project", tool: "Zapier", complexity: "High", notes: "Requires Asana's Zapier integration. Useful for cross-tool handoffs." },
  { trigger: "New Airtable record", action: "Send SMS via Twilio", tool: "Zapier/Make", complexity: "Medium", notes: "Native has no SMS. Zapier or Make both handle Twilio well." },
  { trigger: "Webhook received", action: "Create or update a record", tool: "Native", complexity: "Medium", notes: "Airtable now supports incoming webhooks as a trigger." },
  { trigger: "Record created", action: "Post to a webhook (n8n, custom API)", tool: "Native", complexity: "Medium", notes: "Use the Webhook action under the 'Run script' or dedicated webhook step." },
  { trigger: "Scheduled (daily)", action: "Send summary report via email", tool: "Native", complexity: "Medium", notes: "Use a scheduled trigger with a script that queries and formats records." },
  { trigger: "New Gmail email", action: "Create Airtable record", tool: "Zapier/Make", complexity: "Low", notes: "Parse the email subject or body to populate fields." },
  { trigger: "Record created", action: "Add to Mailchimp audience", tool: "Zapier", complexity: "Low", notes: "Airtable has no native Mailchimp integration. Zapier does." },
];

const decisionPoints = [
  {
    condition: "Everything stays inside Airtable",
    answer: "Native automations",
    reason: "No reason to bring in another tool. Faster to set up, no monthly cost.",
  },
  {
    condition: "You need to connect a third-party app",
    answer: "Zapier or Make",
    reason: "Native only connects to Airtable, Slack, Gmail, and a short list of others. For everything else, you need Zapier or Make.",
  },
  {
    condition: "You need conditional branching (if X then A, else B)",
    answer: "Zapier or Make",
    reason: "Native automations have limited branching. Zapier's Paths and Make's Router handle complex logic cleanly.",
  },
  {
    condition: "You need to run custom JavaScript",
    answer: "Native scripting action",
    reason: "Airtable's script action runs JS in its sandbox. Useful for batch operations, complex calculations, or multi-record updates.",
  },
  {
    condition: "You need it free",
    answer: "Native automations",
    reason: "Airtable includes automation runs in every paid plan. Zapier's free tier is limited to 100 tasks/month.",
  },
  {
    condition: "You need to trigger on a webhook from an external system",
    answer: "Native (now supported) or Zapier",
    reason: "Airtable added webhook triggers in 2024. For older setups or more complex webhook parsing, Zapier is more flexible.",
  },
];

const youtubeVideos = [
  { title: "Airtable Automation for Beginners, Updated for 2025", channel: "YouTube", url: "https://www.youtube.com/watch?v=xmFRkqbdQdI" },
  { title: "5 Airtable Automations You Can Build in 30 Minutes", channel: "YouTube", url: "https://www.youtube.com/watch?v=ysYtEEVP3dk" },
  { title: "Mastering Airtable Automations: Advanced Techniques for 2025", channel: "YouTube", url: "https://www.youtube.com/watch?v=Wwse2qNxuW0" },
];

export default function AutomationsPage() {
  const [filter, setFilter] = useState<"All" | "Native" | "Zapier">("All");

  const filtered = patterns.filter(p =>
    filter === "All" || p.tool === filter || (filter === "Zapier" && (p.tool === "Zapier" || p.tool === "Zapier/Make" || p.tool === "Make" || p.tool === "Zapier/Make"))
  );

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "120px", paddingBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>52 patterns</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Airtable Automations Guide
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "600px", margin: 0 }}>
            The question is never whether to automate. It&apos;s whether to use native Airtable automations or bring in Zapier. The answer depends on what you&apos;re connecting and how complex the logic is.
          </p>
        </section>

        {/* Decision section */}
        <section style={{ paddingBottom: "72px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 20px" }}>
            Native vs Zapier: how to decide
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {decisionPoints.map((d, i) => (
              <div
                key={i}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)", padding: "18px 22px",
                  display: "grid", gridTemplateColumns: "1fr auto 1fr",
                  gap: "16px", alignItems: "center",
                  transitionDelay: `${i * 0.04}s`,
                }}
              >
                <div>
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-3)", marginBottom: "2px" }}>When</p>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "var(--ink)" }}>{d.condition}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--border-2)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                <div>
                  <span style={{ display: "inline-block", background: d.answer === "Native automations" ? "var(--accent-subtle)" : "var(--bg-2)", color: d.answer === "Native automations" ? "var(--accent)" : "var(--ink-2)", borderRadius: "999px", padding: "3px 12px", fontSize: "12px", fontWeight: 700, marginBottom: "4px" }}>{d.answer}</span>
                  <p style={{ margin: 0, fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.5 }}>{d.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ paddingBottom: "32px" }}>
          <YouTubeLinks videos={youtubeVideos} />
        </section>

        {/* Patterns table */}
        <section style={{ paddingBottom: "96px" }}>
          <div className="observe-reveal" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap" as const, gap: "12px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: 0 }}>
              Automation patterns
            </h2>
            <div style={{ display: "flex", gap: "6px" }}>
              {(["All", "Native", "Zapier"] as const).map((f) => (
                <button key={f} onClick={() => setFilter(f)} style={{ padding: "7px 16px", borderRadius: "999px", border: `1px solid ${filter === f ? "var(--accent)" : "var(--border)"}`, background: filter === f ? "var(--accent-subtle)" : "var(--card)", color: filter === f ? "var(--accent)" : "var(--ink-2)", fontSize: "13px", fontWeight: filter === f ? 600 : 450, cursor: "pointer", transition: "all 0.2s ease", fontFamily: "var(--font-geist-sans)" }}>
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {filtered.map((p, i) => (
              <div
                key={i}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)", padding: "16px 20px",
                  transitionDelay: `${i * 0.03}s`,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" as const }}>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <p style={{ margin: "0 0 2px", fontSize: "11px", color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.07em", fontWeight: 600 }}>Trigger</p>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--ink)", fontWeight: 600 }}>{p.trigger}</p>
                  </div>
                  <svg style={{ marginTop: "16px", flexShrink: 0 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  <div style={{ flex: 1, minWidth: "200px" }}>
                    <p style={{ margin: "0 0 2px", fontSize: "11px", color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.07em", fontWeight: 600 }}>Action</p>
                    <p style={{ margin: 0, fontSize: "14px", color: "var(--ink)", fontWeight: 600 }}>{p.action}</p>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flexShrink: 0 }}>
                    <span style={{ background: p.tool === "Native" ? "var(--accent-subtle)" : "var(--bg-2)", color: p.tool === "Native" ? "var(--accent)" : "var(--ink-2)", borderRadius: "999px", padding: "4px 12px", fontSize: "12px", fontWeight: 700, whiteSpace: "nowrap" as const }}>{p.tool}</span>
                    <span style={{ background: p.complexity === "Low" ? "#E8F5E9" : p.complexity === "Medium" ? "#FFF8E1" : "#FEEBE2", color: p.complexity === "Low" ? "#2E7D32" : p.complexity === "Medium" ? "#F57F17" : "#BF360C", borderRadius: "999px", padding: "4px 12px", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" as const }}>{p.complexity}</span>
                  </div>
                </div>
                <p style={{ margin: "10px 0 0", fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.5, borderTop: "1px solid var(--border)", paddingTop: "10px" }}>{p.notes}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="observe-reveal" style={{ paddingBottom: "96px" }}>
          <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" as const }}>
            <div>
              <h3 style={{ margin: "0 0 6px", fontSize: "18px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>Need a formula inside your automation?</h3>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)" }}>Many automations depend on a formula field to calculate what to send. Build it here.</p>
            </div>
            <Link href="/formula-builder" style={{ background: "var(--accent)", color: "#fff", padding: "11px 22px", borderRadius: "999px", textDecoration: "none", fontSize: "14px", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" as const }}>
              Formula Builder
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
