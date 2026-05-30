"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import YouTubeLinks from "@/components/YouTubeLinks";

const sections = [
  {
    heading: "What a linked record actually is",
    body: `In a regular spreadsheet, every row is independent. A Projects sheet and a Tasks sheet have no real connection. You copy data between them manually and they drift out of sync within a week.

Airtable works differently. A linked record field creates a real relationship between two tables in the same base. Link a task to a project, and Airtable knows those two records belong together. Change the project name, and every linked task updates automatically.

Think of it like a foreign key in a database, without the SQL.`,
  },
  {
    heading: "The mental model that makes it click",
    body: `Linked records are for things that belong to other things.

A Task belongs to a Project. A Sale belongs to a Client. An Invoice belongs to a Company. A Student belongs to a Course.

The table with many records (Tasks) links to the table with fewer records (Projects). Each task has one project. Each project has many tasks. That's a many-to-one relationship, the most common type you'll build in Airtable.

When people get stuck, it's usually one of two things: they're trying to link two tables that should actually be one, or they're typing data into the link field when they should be using a Lookup field to pull it across.`,
  },
  {
    heading: "Linked records vs Lookup vs Rollup",
    body: `These three work together and they're where most confusion lives.

The linked record field creates the connection. It stores which records are linked. Nothing else.

A Lookup field pulls a specific value from the linked record into the current table. Link a Task to a Project, and a Lookup lets you display the Project's due date right on the Task row without typing it again.

A Rollup field runs a calculation across all linked records. SUM, COUNT, AVERAGE, MAX. On a Project, you can Rollup the estimated hours from all linked Tasks to get a total.

The mistake most people make: they copy data from one table into another by hand instead of using Lookups. If you're manually duplicating information across tables, a Lookup field is what you actually need.`,
  },
  {
    heading: "The two-way link you didn't ask for",
    body: `This surprises almost everyone the first time.

When you create a linked record field in Table A pointing to Table B, Airtable automatically creates a corresponding link field in Table B pointing back. You can't turn this off.

Link a Task to a Project, and the Project record now shows all Tasks linked to it. Most of the time this is exactly what you want. It's how you see all tasks for a project from the project view. But it clutters your table structure if you're not expecting it.

Name both sides clearly from the start. "Tasks" on the Project table. "Project" on the Tasks table. Don't delete the reverse link field because Rollup and Lookup fields on the other side depend on it.`,
  },
  {
    heading: "When not to use linked records",
    body: `Not everything should be linked. Some patterns to avoid.

Don't link when a single select field works. If a task has a Priority of Low, Medium, or High, that's a single select. Not a linked record to a Priorities table.

Don't link for static reference data that never changes and never needs its own records. A Countries table linked to every contact is overkill in most cases. A single select or text field gets the job done.

The right signal for linked records: you need to update data in one place and have it reflect everywhere, or you need to aggregate across multiple records connected to a parent.`,
  },
];

const faqs = [
  { q: "Why is my Lookup field showing blank values?", a: "A blank Lookup almost always means one of three things: the record is not linked to anything yet, the field you are trying to look up is empty in the linked record, or the linked record field is pointing to the wrong table. Check the link first before troubleshooting the Lookup formula itself." },
  { q: "Can I link records across different Airtable bases?", a: "No. Linked records only work within the same base. If you need data from another base, use Airtable's Sync feature to pull a read-only copy of a table into your working base, then link to that synced table." },
  { q: "What is the difference between a Lookup field and a Rollup field?", a: "A Lookup pulls a single value from the linked record into the current table. A Rollup runs a calculation (SUM, COUNT, MAX, etc.) across all linked records and returns one aggregated result. If you want to see a specific field from a linked record, use Lookup. If you want to total or count across many linked records, use Rollup." },
  { q: "Why does Airtable create a link field in the other table automatically?", a: "Airtable always creates a two-way link. When you link Table A to Table B, Table B automatically gets a field showing which Table A records link to each Table B record. You cannot turn this off. Name both sides clearly from the start so the reverse link field makes sense to anyone looking at Table B." },
];

const youtubeVideos = [
  { title: "Airtable Basics: Count, Lookup & Rollup Fields Explained", channel: "YouTube", url: "https://www.youtube.com/watch?v=e7mo3sLtLrM" },
  { title: "How to Summarize Data From Linked Records in Airtable", channel: "YouTube", url: "https://www.youtube.com/watch?v=wmILnOT2I7Y" },
];

export default function LinkedRecordsPage() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#7A3A1A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#7A3A1A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Most confusing</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Linked Records Explained
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            The concept that trips up almost every new Airtable user. Once it clicks, the whole platform makes sense.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>7 min read</span>
        </section>

        <article style={{ paddingBottom: "80px" }}>
          {sections.map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "48px", transitionDelay: `${i * 0.06}s` }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
                {s.heading}
              </h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>
                  {para}
                </p>
              ))}
            </section>
          ))}

          <div className="observe-reveal" style={{ background: "var(--accent-subtle)", border: "1px solid rgba(212,98,42,0.2)", borderRadius: "var(--radius-lg)", padding: "24px 28px", marginBottom: "48px" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
              Quick Reference
            </h3>
            {[
              ["Linked record field", "Creates the relationship between two tables"],
              ["Lookup field", "Pulls a value from the linked record into this table"],
              ["Rollup field", "Aggregates values across all linked records (SUM, COUNT, etc)"],
              ["Two-way link", "Always created automatically. Name both sides clearly."],
            ].map(([term, def]) => (
              <div key={term} style={{ display: "flex", gap: "16px", marginBottom: "10px", fontSize: "14px" }}>
                <span style={{ fontWeight: 700, color: "var(--accent)", minWidth: "160px", flexShrink: 0 }}>{term}</span>
                <span style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>{def}</span>
              </div>
            ))}
          </div>


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
                { href: "/formulas/lookup", label: "Lookup formula patterns" },
                { href: "/guides/interfaces", label: "Interface Designer guide" },
                { href: "/formula-builder", label: "Build a formula for your linked data" },
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
