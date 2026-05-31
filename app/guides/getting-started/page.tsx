"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  {
    q: "What is the single most important thing to understand before building in Airtable?",
    a: "Database design. Not the features. Not the views. Not the formulas. Before you touch Airtable, spend 10 minutes on a piece of paper deciding what your tables are and how they relate. Every experienced Airtable user who answered beginner questions in the community said the same thing: the tool knowledge comes with practice, but bad structure is hard to undo later."
  },
  {
    q: "Should I use ChatGPT to help me build my first Airtable base?",
    a: "For general ideas, fine. For actual Airtable formulas or setup instructions, be careful. ChatGPT gets Airtable wrong often enough that a well-upvoted community comment specifically warned beginners: 'Do not use ChatGPT or Omni. ChatGPT doesn't understand how Airtable works and will give you broken advice.' Use the formula builder on this site instead — it generates formulas that actually work in Airtable."
  },
  {
    q: "How long does it take to learn Airtable?",
    a: "One person in the community described spending a month building their first real project, migrating six spreadsheets from Excel, and calling it a success. Another said the builder course on Airtable Academy takes about a day. The honest answer: a few hours to get comfortable with basics, a few weeks of real use to get good at structure and formulas."
  },
  {
    q: "What is the difference between a table and a view in Airtable?",
    a: "A table holds records, like a database table or spreadsheet tab. A view is a filtered, sorted, or grouped window into those records. The same records can appear in multiple views. Deleting a view does not delete records. Deleting a table does. This trips people up early, so it is worth getting clear on from the start."
  },
  {
    q: "Is Airtable good for personal use or just teams?",
    a: "Both. The community has people using it for personal project tracking, home inventories, reading lists, travel planning, and freelance client management. The free plan's 1,000 record limit is usually enough for personal use. Where it stops making sense is if your personal use case is basically just a spreadsheet with no relational data — Google Sheets is genuinely better for that."
  }
];

const steps = [
  {
    num: "01",
    title: "Understand what Airtable actually is",
    body: `Airtable is a relational database with a spreadsheet-style interface. That distinction matters more than it sounds.

A spreadsheet stores independent rows. Each row knows nothing about the other rows. Airtable stores records that can be connected to records in other tables. A project can link to multiple tasks. A client can link to multiple invoices. Changes in one place reflect everywhere.

If your data has no relationships, no categories linking to other categories, a spreadsheet is probably fine and cheaper. If your data has things that belong to other things, Airtable starts to make sense.`
  },
  {
    num: "02",
    title: "Design your structure before touching the tool",
    body: `This is the advice that shows up repeatedly from experienced Airtable users helping beginners. Draw it out first.

Write down your entity types. Clients. Projects. Tasks. Invoices. Products. Whatever your domain has. Each entity type gets its own table.

Then draw lines between them. Does a Task belong to a Project? Yes, linked records. Does an Invoice belong to a Client? Yes, linked records. Does a Product have a Category? Could be a linked table, could be a single select field. Depends on whether Categories need their own records with their own fields.

Getting this wrong is not catastrophic, but restructuring a base with real data is annoying. Fifteen minutes of planning saves hours later.`
  },
  {
    num: "03",
    title: "Learn the four field types that matter most",
    body: `Airtable has 30+ field types. Four of them cover 90% of what most bases need.

Text and Long Text for names, descriptions, notes. Number for quantities, prices, scores. Single Select and Multiple Select for categories, statuses, tags. Date for deadlines, created dates, event dates.

The others exist for specific needs: Attachment for files, Checkbox for boolean flags, Formula for calculated values, Linked Record for relationships between tables, Rollup and Lookup for pulling data across those links.

Start with the basic four. Add the others when you have a specific reason.`
  },
  {
    num: "04",
    title: "Understand views before building automations",
    body: `A view is a filtered, sorted, or grouped window into your table's records. The same records can appear in multiple views. Views do not store separate data.

Grid view is the default spreadsheet layout. Gallery view shows records as cards, useful for visual content. Kanban groups records by a single select field, useful for status tracking. Calendar requires a date field. Timeline requires start and end date fields.

Learn to filter and group in grid view before moving on. Most Airtable problems that look like they need complex automations are actually solvable with a well-configured view.`
  },
  {
    num: "05",
    title: "Try a real small project, not a tutorial",
    body: `The most common advice from people who successfully learned Airtable: build something real, not a tutorial exercise.

Track your freelance clients. Manage your job applications. Build a reading list with notes. Run a small inventory. Something you actually care about, small enough that you can rebuild it if you mess up.

Tutorials show you features. A real project teaches you when to use them. The moment you hit a problem, like needing to know how many tasks are linked to a project, is the moment you understand why Rollup fields exist.`
  },
  {
    num: "06",
    title: "When you get stuck, search the community before building",
    body: `Almost every problem a beginner hits has been solved and posted about. The Airtable subreddit and community forums have years of answers.

Before building a complex automation, search for it. Before writing a formula, check the formula cookbook on this site. Before assuming something is impossible, check if there's a native feature or extension that does it.

The answer is often simpler than the solution you were about to build.`
  }
];

export default function GettingStartedPage() {
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
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#2A5A1A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Start here</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Getting Started with Airtable
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            The things that actually matter when you are new. Not a feature tour. A practical path from confused to competent.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>10 min read</span>
        </section>

        {/* Steps */}
        <article style={{ paddingBottom: "64px" }}>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "48px" }}>
            {steps.map((step, i) => (
              <section key={step.num} className="observe-reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <span style={{
                    fontSize: "11px", fontWeight: 800, color: "var(--accent)",
                    background: "var(--accent-subtle)", borderRadius: "8px",
                    padding: "4px 10px", flexShrink: 0, marginTop: "4px",
                    letterSpacing: "0.05em", fontFamily: "var(--font-geist-mono)"
                  }}>
                    {step.num}
                  </span>
                  <div>
                    <h2 style={{ margin: "0 0 14px", fontSize: "21px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em", lineHeight: 1.3 }}>
                      {step.title}
                    </h2>
                    {step.body.split("\n\n").map((para, j) => (
                      <p key={j} style={{ margin: "0 0 14px", fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75 }}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </article>

        {/* Quick links */}
        <section className="observe-reveal" style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px" }}>
            Where to go next
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            {[
              { label: "Formula Cookbook", desc: "200+ copy-paste formulas", href: "/formulas" },
              { label: "Linked Records Explained", desc: "The concept that clicks everything", href: "/guides/linked-records" },
              { label: "Formula Builder", desc: "Describe it, get the formula", href: "/formula-builder" },
              { label: "Pricing Reality Check", desc: "Before you hit the limit", href: "/guides/pricing" },
            ].map((l) => (
              <Link key={l.href} href={l.href} style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "16px",
                textDecoration: "none", transition: "border-color 0.2s ease",
                display: "block"
              }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >
                <p style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: 700, color: "var(--ink)" }}>{l.label}</p>
                <p style={{ margin: 0, fontSize: "12px", color: "var(--ink-3)" }}>{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ paddingBottom: "80px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 20px" }}>
            Common questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {faqs.map((faq, i) => (
              <div key={i} className="observe-reveal"
                itemScope itemType="https://schema.org/Question"
                style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "20px 24px", transitionDelay: `${i * 0.04}s` }}
              >
                <h3 itemProp="name" style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.4 }}>
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


      {/* Prev / Next guide navigation */}
      <nav className="observe-reveal" aria-label="Guide navigation" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", paddingBottom: "64px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <div />
                <Link href="/guides/linked-records" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Linked Records
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
