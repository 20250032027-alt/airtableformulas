"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  { q: "What actually happens when Airtable hits the record limit?", a: "Airtable does not delete your data. Everything stays readable. What stops working is the ability to add new records. Anyone who tries to create a new row gets an error. You need to either upgrade your plan, delete records and empty the trash, or archive data to another base before new records can be added." },
  { q: "Can I back up my Airtable base?", a: "Yes. Airtable has a built-in snapshot feature that creates a full backup of your base at a specific point in time. When you restore a snapshot, Airtable creates a new copy of the base as it existed at that moment. You can also export any table as a CSV from the grid view." },
  { q: "Do records in linked tables each count separately?", a: "Yes. Each record counts in the table where it lives. A contact linked to 50 projects counts as 1 record in the Contacts table, not 50. The record limit is per base, not per workspace, so you can have multiple bases each approaching the limit independently." },
];

export default function Page() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#6A1A3A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#6A1A3A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Pain point</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Record Limit Survival Guide
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            What actually happens when you hit 50k records, and eight ways to deal with it.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>6 min read</span>
        </section>
        <article style={{ paddingBottom: "96px" }}>
          
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              What happens when you actually hit the limit
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Airtable doesn't delete your data. You can still read everything. What you lose is the ability to create new records until you either upgrade your plan, delete records, or move data out.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The limit applies per base, not per workspace. A base on the Team plan can hold 50,000 records. Once you hit that, Airtable shows an error when anyone tries to add a new row.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The most common surprise: deleted records count until you empty the trash. If you bulk-deleted 3,000 records expecting headroom, check the trash first.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              The eight approaches
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Upgrade your plan. If you're on Team and need more room, Business gets you 125,000 records per base. Straightforward but costs money.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Empty the trash. Deleted records stay in trash for up to 30 days. Until you purge them, they count. This is free and takes 30 seconds.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Archive old records. Export completed or inactive records to a CSV or a separate archive base, then delete from the active base. Works best for data with a natural lifecycle, like closed deals or finished projects.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Split your base. Put older data in a historical base and keep only active records in the working base. Linked records won't work across bases, which is the main downside.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Use synced tables. Airtable's sync feature lets you pull data from another base into a read-only view. You can keep raw data in one base and work in another without duplicating. Requires a paid plan.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Switch to external storage for attachments. Attachments have their own storage limit separate from records, but reducing attachment bloat sometimes reveals headroom you didn't know you had.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Use an external database. At real scale, tools like Supabase or Postgres become worth the complexity. The community has active discussion about migrating Airtable to Postgres when bases grow beyond what Airtable handles well.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Build archiving into your workflow. Set up an automation that moves records to an archive base after a certain number of days or when a status changes to Closed. Prevents the limit from creeping up on you.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              When to just upgrade vs when to restructure
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>If you're at 45,000 records and growing, upgrading to Business is the path of least resistance. The cost is real but the time you'd spend restructuring is also real.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>If your base has tens of thousands of records from years ago that nobody looks at, archiving is worth the one-time effort. A clean base is easier to work with at any record count.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The community thread titled 'Done pretending Airtable is a real backend' is worth reading if you're starting to hit limits regularly. At some scale, a proper database is the right tool.</p>
          </section>

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
            <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
              Browse all guides
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </article>

      {/* Prev / Next guide navigation */}
      <nav className="observe-reveal" aria-label="Guide navigation" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", paddingBottom: "64px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <Link href="/guides/pricing" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Pricing Reality
        </Link>
                <Link href="/guides/scripting" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Scripting
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
