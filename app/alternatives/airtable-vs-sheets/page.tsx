"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const rows = [
  { feature: "Formula language", airtable: "Purpose-built for databases, good date functions", sheets: "More powerful math, statistical functions, GOOGLETRANSLATE" },
  { feature: "Relational data", airtable: "Native linked records between tables", sheets: "No real relations, manual workarounds only" },
  { feature: "Views", airtable: "Grid, Gallery, Kanban, Calendar, Timeline", sheets: "Spreadsheet only, pivot tables via separate sheet" },
  { feature: "Record limits", airtable: "1,000 free, 50,000 on Team", sheets: "10 million cells per spreadsheet, effectively unlimited" },
  { feature: "Collaboration", airtable: "Per seat on paid plans", sheets: "Free for everyone with a Google account" },
  { feature: "Automations", airtable: "Native automations + Zapier", sheets: "Google Apps Script, Zapier, Make" },
  { feature: "Forms", airtable: "Built-in Airtable Forms", sheets: "Google Forms (separate tool, feeds into Sheets)" },
  { feature: "APIs", airtable: "REST API built for database use", sheets: "Google Sheets API, widely supported" },
  { feature: "Translation", airtable: "AI field (paid, per credit)", sheets: "=GOOGLETRANSLATE() native, free" },
  { feature: "Cost", airtable: "Free tier limited, Team from ~$20/seat/mo", sheets: "Free with Google account" },
];

export default function AirtableVsSheetsPage() {
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
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Airtable vs Google Sheets
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Google Sheets wins on formulas and cost. Airtable wins on relational data and views. Here is when each one is the right call.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>6 min read</span>
        </section>

        <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "48px" }}>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--bg-2)" }}>
                  {["Feature", "Airtable", "Google Sheets"].map(h => (
                    <th key={h} style={{ padding: "12px 18px", textAlign: "left" as const, fontWeight: 700, color: "var(--ink-3)", fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.07em", borderBottom: "1px solid var(--border)" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.feature} style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>
                    <td style={{ padding: "13px 18px", fontWeight: 600, color: "var(--ink-3)", fontSize: "13px" }}>{row.feature}</td>
                    <td style={{ padding: "13px 18px", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.5 }}>{row.airtable}</td>
                    <td style={{ padding: "13px 18px", color: "var(--ink-2)", fontSize: "13px", lineHeight: 1.5 }}>{row.sheets}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <article style={{ paddingBottom: "80px" }}>
          {[
            {
              heading: "When Google Sheets is the honest answer",
              body: "If your data is rows and columns without relationships between different entity types, Google Sheets is probably the right tool. It's free, everyone already knows it, and its formula language handles math, statistics, and text manipulation better than Airtable's.\n\nIf you need translation, Sheets has =GOOGLETRANSLATE() built in. Free, instant, works on a full column at once. Airtable's equivalent requires an AI field that costs credits.\n\nIf your team has 20 people who need to view and edit data but you can't afford per-seat pricing, Sheets is free for everyone with a Google account.\n\nIf you're doing financial modeling, pivot analysis, or anything that requires VLOOKUP, SUMIF, ARRAYFORMULA, or Google's statistical functions, Sheets has more formula depth than Airtable."
            },
            {
              heading: "When Airtable is worth the cost",
              body: "Once your data has relationships, Sheets starts requiring workarounds that don't scale. Contacts linked to companies, tasks linked to projects, invoices linked to clients. Airtable's linked records handle this cleanly. In Sheets you're copying values between tabs and hoping they stay in sync.\n\nAirtable's views are the other big differentiator. A Kanban board for a project, a gallery view for a product catalog, a calendar view for a content schedule. These are native in Airtable. In Sheets they require third-party add-ons or significant Apps Script work.\n\nAirtable's forms feed directly into your structured base with field types enforced. Google Forms feeds into Sheets but without Airtable's field type validation.\n\nThe community thread 'Moved from ClickUp to Airtable for project and task management, best decision I've made' reflects a real pattern: teams that manage projects with dependencies and multiple entity types tend to prefer Airtable despite the cost."
            }
          ].map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "40px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px" }}>{s.heading}</h2>
              {s.body.split("\n\n").map((p, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>{p}</p>
              ))}
            </section>
          ))}

          <div className="observe-reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" as const }}>
            <Link href="/alternatives" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
              Use the tool picker
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link href="/guides/translation" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500 }}>
              Translation in Airtable guide
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
