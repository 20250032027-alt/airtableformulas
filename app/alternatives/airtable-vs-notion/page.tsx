"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import YouTubeLinks from "@/components/YouTubeLinks";

const rows = [
  { feature: "Data model", airtable: "Relational tables with linked records", notion: "Pages with inline databases" },
  { feature: "Formulas", airtable: "Full formula language, 100+ functions", notion: "Limited formula support, improving slowly" },
  { feature: "Linked records", airtable: "Native, powerful, two-way", notion: "Relations exist but less flexible" },
  { feature: "Views", airtable: "Grid, Gallery, Kanban, Calendar, Timeline, Gantt", notion: "Table, Board, Calendar, Gallery, Timeline, List" },
  { feature: "Automations", airtable: "25,000 runs/mo on Team plan", notion: "Automations available, fewer integrations" },
  { feature: "Free plan records", airtable: "1,000 per base", notion: "Unlimited pages and blocks" },
  { feature: "Docs / writing", airtable: "Not designed for it", notion: "Core strength" },
  { feature: "Collaboration seats", airtable: "Per seat pricing on paid plans", notion: "More generous free tier" },
  { feature: "Interface building", airtable: "Interface Designer, Business plan+", notion: "No equivalent" },
  { feature: "API", airtable: "REST API, good documentation", notion: "REST API, also solid" },
];

const verdictSections = [
  {
    heading: "Pick Airtable when",
    items: [
      "Your data has real relationships: contacts linked to companies, tasks linked to projects",
      "You need formulas that actually work: date math, conditional logic, rollups",
      "You're building something that resembles an internal app or tracker",
      "You need views like Gantt or Timeline for project planning",
      "You're integrating with other tools via automations",
    ],
    color: "#D4622A",
  },
  {
    heading: "Pick Notion when",
    items: [
      "Your team writes docs alongside data and wants it in the same tool",
      "You're building a wiki, knowledge base, or company handbook",
      "Budget is tight: Notion's free plan is genuinely usable for teams",
      "Your database needs are lightweight: basic tables without linked records",
      "You want a combined notes + tasks + docs workspace",
    ],
    color: "#1A4A8A",
  },
];

const youtubeVideos = [
  { title: "Airtable Tutorial: A-Z Guide [2025]", channel: "YouTube", url: "https://www.youtube.com/watch?v=cnvB7vsYo5I" },
];

export default function AirtableVsNotionPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/alternatives" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All comparisons
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A5A5A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A5A5A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Updated 2026</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Airtable vs Notion vs Google Sheets
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            The comparison that gets asked constantly. Honest take, no affiliate incentives.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>8 min read</span>
        </section>

        {/* Quick verdict */}
        <div className="observe-reveal" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "48px" }}>
          {verdictSections.map((v) => (
            <div key={v.heading} style={{ background: "var(--card)", border: `1px solid ${v.color}30`, borderRadius: "var(--radius-lg)", padding: "22px" }}>
              <h3 style={{ margin: "0 0 14px", fontSize: "14px", fontWeight: 700, color: v.color, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{v.heading}</h3>
              {v.items.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "8px", fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.5 }}>
                  <span style={{ color: v.color, flexShrink: 0, marginTop: "2px" }}>+</span>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "48px" }}>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--bg-2)" }}>
                  {["Feature", "Airtable", "Notion"].map(h => (
                    <th key={h} style={{ padding: "12px 18px", textAlign: "left" as const, fontWeight: 700, color: "var(--ink-3)", fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.07em", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>
                    <td style={{ padding: "13px 18px", fontWeight: 600, color: "var(--ink-3)", fontSize: "13px" }}>{row.feature}</td>
                    <td style={{ padding: "13px 18px", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.5 }}>{row.airtable}</td>
                    <td style={{ padding: "13px 18px", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.5 }}>{row.notion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <YouTubeLinks videos={youtubeVideos} />

        <article style={{ paddingBottom: "80px" }}>
          {[
            {
              heading: "The real question",
              body: `People frame this as Airtable vs Notion, but they solve different problems. Airtable is a database tool that happens to have a decent interface. Notion is a writing tool that added databases.\n\nIf your primary need is structured data with real relationships between tables, Airtable wins clearly. If your primary need is documentation with some lightweight data tracking, Notion wins.\n\nWhere it gets complicated is the middle: teams that need both. A startup tracking customers (Airtable strength) and writing product specs (Notion strength) often ends up with both tools. That's not inefficiency. It's using the right tool for each job.\n\nGoogle Sheets fits best when you need raw formula power, have data that doesn't need relational structure, or want something your whole team knows without training.`
            },
            {
              heading: "The 2026 update: what changed",
              body: `Airtable's 2024 redesign was polarizing. The subreddit hit 81 upvotes on a post simply titled 'So, how many of you hate the new design?' The core complaint was that the new UI added complexity without adding capability for common tasks.\n\nNotion has steadily improved its database features. Formulas got a significant upgrade. Relations and rollups work better than they did two years ago. The gap has narrowed, though Airtable's formula language is still more complete.\n\nNeither tool has fundamentally changed their core value proposition. Airtable is still the stronger database. Notion is still the better writing environment.`
            }
          ].map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px" }}>{s.heading}</h2>
              {s.body.split("\n\n").map((p, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>{p}</p>
              ))}
            </section>
          ))}

          <div className="observe-reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "16px" }}>Still deciding?</p>
            <Link href="/alternatives" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
              Use the tool picker
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
