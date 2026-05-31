"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  { q: "What language do Airtable scripts use?", a: "JavaScript. Airtable's scripting environment runs a sandboxed version of JavaScript with access to the Airtable Scripting API. You can use modern JS syntax including async/await and fetch for external API calls. The environment does not support npm packages or file system access." },
  { q: "How long can an Airtable script run before it times out?", a: "30 seconds. If your script needs to process thousands of records, you need to batch the work or split it across multiple automation runs. For large batch operations, triggering the script from a scheduled automation that runs repeatedly is more reliable than trying to do everything in one execution." },
  { q: "Can I use environment variables or secrets in Airtable scripts?", a: "Not natively. API keys need to be passed as input variables (which you set in the automation trigger step) rather than hardcoded. For sensitive credentials, this is the recommended approach: define the key as an input variable in the automation config, then reference it in the script as input.config().apiKey." },
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A3A6A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A3A6A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Power user</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Scripting in Airtable
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            When formulas aren't enough. What Airtable's script block can and can't do, and five scripts worth copying.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>9 min read</span>
        </section>
        <article style={{ paddingBottom: "96px" }}>
          
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              What scripting is and when you need it
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Airtable's scripting feature lets you run JavaScript in a sandbox attached to your base. You can read records, create records, update fields, and make HTTP requests to external APIs. It runs either on demand (you click Run) or as an action inside an automation.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>You need scripting when: you want to update dozens of records based on a condition, your formula would need to be recursive or stateful, you want to call an external API and write the result back to a field, or you need to do something across multiple tables that automations can't chain together cleanly.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              What scripting can not do
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Scripts can't run in the background on a schedule without an automation trigger. They can't access external storage directly (files, databases) without an API call. They can't run longer than 30 seconds before timing out. They can't create or delete tables, only read and write records.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Scripts also don't have access to environment variables, so any API keys you use need to be hardcoded in the script or passed in as input variables. For sensitive keys, input variables are the right approach.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Five scripts worth copying
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Deduplicate records: find all records where a field value appears more than once, keep the oldest, mark the rest for deletion. Saves hours of manual cleanup.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Batch update a field: when you want to change a formula-based value to a static one across thousands of records, a script can read each record, calculate the value, and write it back as a plain text or number field.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Generate a slug from a title: take a Name field, lowercase it, replace spaces with hyphens, strip special characters, write it to a Slug field. Useful for content and URL generation.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Call an external API per record: loop through records, make a fetch() call with field values, write the response back. Used for geocoding addresses, enriching contact data, or calling your own internal API.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Cross-table sync: find records in Table A that match records in Table B by a shared identifier, then update fields in one table based on values in the other. Airtable's native sync is read-only; a script can do bidirectional updates.</p>
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
                <Link href="/guides/record-limits" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Record Limits
        </Link>
                <Link href="/guides/ai-features" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          AI Features
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
