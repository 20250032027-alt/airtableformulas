"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const sections = [
  {
    heading: "What a linked record actually is",
    body: `In a regular spreadsheet, every row is independent. If you have a "Projects" sheet and a "Tasks" sheet, there's no real connection between them — you copy data between them manually, and they drift out of sync.

Airtable works differently. A linked record field creates a real relationship between two tables in the same base. When you link a task to a project, Airtable knows those two records are connected. Change the project name, and every linked task reflects it automatically.

Think of it like a foreign key in a database, except you don't need to write any SQL. The link field is the relationship.`,
  },
  {
    heading: "The mental model that makes it click",
    body: `Airtable's linked records mirror a simple real-world structure: things and what they belong to.

A Task belongs to a Project. A Sale belongs to a Client. An Invoice belongs to a Company. A Student belongs to a Course.

The table with many records (Tasks) links to the table with fewer records (Projects). Each task has one project. Each project can have many tasks. That's a many-to-one relationship, and it's the most common type you'll build.

When people get confused, it's usually because they're trying to link two tables that should actually be one, or they're trying to store data in the link field itself instead of using a Lookup field to pull it across.`,
  },
  {
    heading: "Linked records vs Lookup vs Rollup",
    body: `These three are a package deal and they're the source of most confusion.

The linked record field creates the connection. It just stores which records are linked — nothing else.

A Lookup field pulls a specific value from the linked record across into the current table. If you link a Task to a Project, a Lookup lets you display the Project's due date or client name on the Task row without typing it again.

A Rollup field aggregates values across all linked records. SUM, COUNT, AVERAGE, MAX — these run across all the linked records. So on a Project, you can Rollup the estimated hours from all linked Tasks to get a total.

The common mistake: people try to put data directly in the link field, or they duplicate fields manually instead of using Lookups. If you're copying data from one table into another by hand, you need a Lookup.`,
  },
  {
    heading: "The two-way link you didn't ask for",
    body: `This surprises almost everyone. When you create a linked record field in Table A pointing to Table B, Airtable automatically creates a corresponding link field in Table B pointing back to Table A. You can't turn this off.

This means if you link a Task to a Project, the Project record now shows all Tasks linked to it in its own field. Most of the time this is useful — it's how you see all tasks for a project from the project view. But it clutters your table structure if you're not expecting it.

The practical advice: embrace the two-way link. Name both fields clearly from the start. "Tasks" on the Project table. "Project" on the Tasks table. Don't delete the reverse link field — it's used by Rollup fields and Lookup fields on the other side.`,
  },
  {
    heading: "When NOT to use linked records",
    body: `Not everything should be linked. Some common over-engineering patterns to avoid.

Don't link when a simple select field works. If a task has a "Priority" of Low, Medium, or High, that's a single select — not a linked record to a Priorities table.

Don't link when the data is truly static reference data that never changes and never needs its own records. Linking to a "Countries" table to store a country on each contact is usually overkill — a single select or text field is fine.

Don't create circular links unless you understand what you're doing. Linking Table A to Table B which links back to Table A for a different relationship works, but it gets confusing fast.

The right signal for using linked records: you need to update data in one place and have it reflected everywhere, or you need to Rollup or aggregate across multiple records connected to a parent.`,
  },
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

          {/* Quick reference box */}
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

          {/* Next steps */}
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
