"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const planComparison = [
  { plan: "Free", records: "1,000 per base", automations: "100 runs/mo", history: "2 weeks", seats: "Up to 5 editors", verdict: "Hits limits faster than you think" },
  { plan: "Team (was Plus)", records: "50,000 per base", automations: "25,000 runs/mo", history: "6 months", seats: "Per seat pricing starts", verdict: "Covers most real workflows" },
  { plan: "Business (was Pro)", records: "125,000 per base", automations: "100,000 runs/mo", history: "1 year", seats: "Per seat, same price", verdict: "For Interface Designer and SSO" },
  { plan: "Enterprise", records: "500,000 per base", automations: "500,000 runs/mo", history: "3 years", seats: "Custom pricing", verdict: "When you need audit logs and compliance" },
];

const sections = [
  {
    heading: "The per-seat model is Airtable's biggest complaint",
    body: `The highest-voted post on the Airtable subreddit at time of writing is about per-user pricing. The second most popular category of posts is people asking how to avoid the cost spiral.

Airtable charges per editor seat. That means every person who needs to add or modify records costs money at Team plan and above. Viewers and commenters also cost seats on paid plans, which surprises people who assumed read-only access would be free.

For a five-person team that all actively uses Airtable, the per-seat cost is predictable. For an agency managing 20 clients who each need access, or a company with 50 employees where only 10 use Airtable heavily, the model creates real friction.`,
  },
  {
    heading: "What actually counts toward record limits",
    body: `The record limit applies per base, not per workspace. If you have three separate bases each with 40,000 records, you're within the 50,000 limit on Team plan even though your total workspace has 120,000 records.

Deleted records don't count against your limit — but only after you empty the trash. Airtable keeps deleted records in trash for up to 30 days on free, longer on paid plans. Until you empty the trash, those records still count.

Linked records count in the table they live in, not in every table that links to them. If you have 10,000 contacts in a Contacts table and link them to projects, each contact counts once regardless of how many projects it's linked to.

Attachments don't count toward record limits, but they count toward your storage limit, which is separate and often overlooked.`,
  },
  {
    heading: "The free plan's real ceiling",
    body: `1,000 records sounds like a lot until you start using Airtable for anything with real data. A CRM for a small business will hit this in weeks. A project management base with tasks, subtasks, and comments hits it in months.

The free plan's hidden limit is automations: 100 runs per month. That's roughly three automated actions per day. Any real workflow built on automations burns through this immediately.

The free plan does not include Airtable Interfaces, which means a large chunk of what makes Airtable useful as a team tool is unavailable on free. You get views, forms, and the grid — that's it.

The community consensus: free is for learning and personal use. The moment you bring a second person or build any workflow you depend on, you need to budget for the Team plan.`,
  },
  {
    heading: "The hacks people use to stay free longer",
    body: `The subreddit has an honest thread titled "Does everyone use hacks to bypass Airtable's crazy pricing?" The short answer is yes, people do, and Airtable knows about them.

The most common workaround is archiving. Instead of leaving old records in the active base, people export completed records to a separate archive base or CSV. This keeps record counts low on the active base while preserving history. It requires discipline and a cleanup process.

Some teams split their data across multiple bases to stay under per-base limits. This works but creates a different problem: linked records don't work across bases, so your relational data model breaks.

Synced tables (a feature on paid plans anyway) solve the cross-base problem but introduce sync delays and complexity.

The honest answer: if you're doing meaningful work in Airtable and you're playing games with record counts, the Team plan is probably worth it and the workarounds cost more in time than the subscription.`,
  },
  {
    heading: "When to leave Airtable over pricing",
    body: `There are legitimate cases where Airtable's pricing model is the wrong fit and you should switch.

If you have more than 15 to 20 external collaborators who need to interact with data — clients, contractors, partners — the per-seat cost becomes hard to justify. Tools like Notion (more generous seats), Google Sheets (free), or a portal layer like Softr on top of Airtable are worth evaluating.

If you're a solo user or small team who primarily needs a spreadsheet with some structure, Google Sheets with strong formulas or Notion databases at their free tier likely covers your needs for free.

If your use case is pure project management without relational data, Monday.com's pricing may work out cheaper at mid-size team scale with better built-in reporting.

The case for staying is the data model. If you've built linked tables, rollups, and automations that depend on Airtable's relational structure, recreating that elsewhere is a real cost. The pricing is high, but what you get is a real database with a good interface, not a spreadsheet.`,
  },
];

export default function PricingPage() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#2A5A1A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#2A5A1A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Controversial</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Airtable Pricing Reality Check
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            What the pricing page doesn&apos;t tell you. Which limits you hit first, and when the per-seat model stops making sense.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>5 min read</span>
        </section>

        {/* Plan comparison table */}
        <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "56px" }}>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--bg-2)" }}>
                  {["Plan", "Records / base", "Automations", "Revision history", "Seats", "Verdict"].map(h => (
                    <th key={h} style={{ padding: "12px 16px", textAlign: "left" as const, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.07em", fontSize: "11px", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {planComparison.map((row, i) => (
                  <tr key={row.plan} style={{ borderBottom: i < planComparison.length - 1 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>
                    <td style={{ padding: "14px 16px", fontWeight: 700, color: "var(--ink)" }}>{row.plan}</td>
                    <td style={{ padding: "14px 16px", color: "var(--ink-2)" }}>{row.records}</td>
                    <td style={{ padding: "14px 16px", color: "var(--ink-2)" }}>{row.automations}</td>
                    <td style={{ padding: "14px 16px", color: "var(--ink-2)" }}>{row.history}</td>
                    <td style={{ padding: "14px 16px", color: "var(--ink-2)" }}>{row.seats}</td>
                    <td style={{ padding: "14px 16px", color: "var(--ink-3)", fontStyle: "italic" }}>{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <article style={{ paddingBottom: "80px" }}>
          {sections.map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "48px", transitionDelay: `${i * 0.06}s` }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>{s.heading}</h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>{para}</p>
              ))}
            </section>
          ))}

          <div className="observe-reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "16px" }}>Related</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {[
                { href: "/alternatives", label: "Honest tool comparisons" },
                { href: "/guides/permissions", label: "Sharing without paying for seats" },
                { href: "/guides/record-limits", label: "Record limit survival guide" },
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
        </article>
      </main>
      <Footer />
    </>
  );
}
