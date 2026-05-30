"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const planComparison = [
  { plan: "Free", records: "1,000 per base", automations: "100 runs/mo", history: "2 weeks", verdict: "Hits limits faster than you expect" },
  { plan: "Team", records: "50,000 per base", automations: "25,000 runs/mo", history: "6 months", verdict: "Covers most real workflows" },
  { plan: "Business", records: "125,000 per base", automations: "100,000 runs/mo", history: "1 year", verdict: "Needed for Interface sharing and SSO" },
  { plan: "Enterprise", records: "500,000 per base", automations: "500,000 runs/mo", history: "3 years", verdict: "Custom pricing, for compliance-heavy orgs" },
];

const sections = [
  {
    heading: "The per-seat model is Airtable's biggest complaint",
    body: `The most upvoted post in the Airtable subreddit for months was a straightforward complaint about per-user pricing. Not a bug report. Not a feature request. Just frustration that every person who needs access to a base costs money.

Airtable charges per editor seat. That covers everyone who adds or modifies records. On most paid plans, read-only users cost seats too, which surprises people who assumed view access would be free.

For a five-person team that all actively uses Airtable, the math is predictable. For an agency managing 20 clients who each need to see their project data, or a company where 50 people work in the same workspace but only 8 regularly update records, the model creates real friction.`,
  },
  {
    heading: "What actually counts toward record limits",
    body: `The limit is per base, not per workspace. Three bases each with 40,000 records is fine on the Team plan. Total workspace records don't matter.

Deleted records count until you empty the trash. Airtable keeps deleted records in the trash for up to 30 days on free, longer on paid plans. Until you empty it, those records still count against your limit. People hit record limits and can't figure out why until someone points this out.

Linked records count in the table where they live, not in every table that references them. 10,000 contacts linked to 200 projects still counts as 10,000 records, not 10,000 times 200.

Attachments don't count toward record limits but they count toward a separate storage limit, which is easy to overlook until you start storing a lot of files.`,
  },
  {
    heading: "The free plan's real ceiling",
    body: `1,000 records sounds like plenty until you use Airtable for anything real. A basic CRM for a small business hits this in a few weeks. A project management base with tasks, subtasks, and comments gets there in a couple of months.

The hidden limit on free is automations: 100 runs per month. That's about three automated actions per day. Any workflow built on automations burns through this fast.

Airtable's Interface Designer is not available on the free plan. That's a significant chunk of what makes Airtable useful as a collaborative tool for non-builders on your team.

The community's honest take: free is fine for learning and personal use. Once you bring a second person or build any workflow you depend on, you need to budget for Team.`,
  },
  {
    heading: "The workarounds people use to stay under limits",
    body: `There is a thread in the subreddit titled something like "Does everyone use hacks to stay under Airtable's limits?" The answer from the replies is basically yes.

The most common one is archiving. When records are done, export them to a separate archive base or CSV, then delete from the active base. Keeps record counts low. Requires some discipline and a regular cleanup process.

Some teams split data across multiple bases to stay under per-base limits. This works until you need linked records across those bases, at which point things get complicated. Synced tables solve this but add their own complexity and require a paid plan.

The honest assessment: if you're spending real time managing record counts, the Team plan probably costs less than the hours you're burning on workarounds.`,
  },
  {
    heading: "When the pricing model is the wrong fit",
    body: `There are real cases where Airtable's pricing doesn't work and switching makes sense.

If you have more than 15 or 20 external collaborators who need to interact with data, the per-seat cost adds up fast. Softr or a similar portal tool on top of Airtable, or switching to Notion (more generous seat model), are worth pricing out.

If your use case is primarily a spreadsheet with some structure, Google Sheets at its free tier probably covers your needs without the cost.

If you're doing pure project management without relational data, Monday.com at mid-size team scale may work out cheaper with better built-in reporting.

The case for staying is the data model. If you've built linked tables, rollups, and automations that depend on Airtable's relational structure, recreating that elsewhere has a real cost. The pricing is high. What you get for it is a real database with a decent interface, not a spreadsheet pretending to be one.`,
  },
];

const faqs = [
  { q: "Do deleted records count toward the record limit?", a: "Yes, until you empty the trash. Airtable keeps deleted records in the trash for up to 30 days depending on your plan. They count against your limit the entire time they sit there. If you are close to your limit and just bulk-deleted records, empty the trash before assuming you have headroom." },
  { q: "Is view-only access free on Airtable?", a: "Not on paid plans in the default model. Read-only collaborators still count as seats on most Airtable plans. This is the core complaint behind the most-upvoted post in the Airtable community. The workaround is shared view links, which are free and require no account." },
  { q: "What is the cheapest way to give clients access to Airtable data?", a: "A shared view link is free and requires no Airtable account. It shows exactly what the view shows and nothing else. For more interactive access, Softr has a free plan that builds a proper client portal on top of your Airtable base, with each client seeing only their own records." },
  { q: "How many records can I have on the free plan?", a: "1,000 records per base. This sounds like a lot but fills up quickly for any real use case. A CRM for a small business hits this in weeks. The free plan also limits you to 100 automation runs per month and does not include Interface Designer." },
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
            What the pricing page doesn&apos;t tell you. Which limits you actually hit first, and when the per-seat model stops making sense.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>5 min read</span>
        </section>

        <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "56px" }}>
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
              <thead>
                <tr style={{ background: "var(--bg-2)" }}>
                  {["Plan", "Records / base", "Automations", "History", "Verdict"].map(h => (
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


      {/* FAQ Section - plain HTML for AI and SEO crawlers */}
      <section style={{ paddingBottom: "80px" }}>
        <h2 className="observe-reveal" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 24px" }}>
          Common questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="observe-reveal"
              itemScope
              itemType="https://schema.org/Question"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                transitionDelay: `${i * 0.04}s`,
              }}
            >
              <h3
                itemProp="name"
                style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.4 }}
              >
                {faq.q}
              </h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p itemProp="text" style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
