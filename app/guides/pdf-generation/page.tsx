"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  { q: "Does Airtable have native PDF export?", a: "No. Airtable can print a record view to PDF via the browser's print dialog, but this is not a designed PDF tool. For formatted documents like invoices, proposals, or reports, you need a third-party tool such as Carbone, Docupilot, or Zapier connected to Google Docs." },
  { q: "What is the cheapest way to generate PDFs from Airtable?", a: "Zapier connected to Google Docs is free within Zapier's free tier (100 tasks/month). Create a Google Docs template with placeholder text, set up a Zap that triggers on a new Airtable record, fills the template with field values, and exports it as a PDF. Past 100 tasks per month, Zapier's paid plans start at around $20/month." },
  { q: "Can I generate PDFs automatically when a record is created?", a: "Yes, using an automation. The most common setup: Airtable record created triggers a Zapier automation, Zapier sends field data to a document tool (Carbone, Docupilot, or Google Docs), the tool generates a PDF and returns a URL, Zapier writes the PDF URL back to the Airtable record. The whole process takes a few seconds." },
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#3A2A6A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#3A2A6A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Workaround heavy</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Generate PDFs from Airtable
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Airtable has no native PDF export. Here are the four real approaches, from cheapest to most reliable.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>7 min read</span>
        </section>
        <article style={{ paddingBottom: "96px" }}>
          
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Why there is no clean built-in solution
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Airtable intentionally doesn't have a native document generation feature. It's a database, not a document tool. The workarounds exist because users need invoices, proposals, and reports built from their Airtable data.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Every approach involves pulling data out of Airtable and pushing it into something that generates PDFs. The question is how much setup you want and how much the output needs to look polished.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Zapier + Google Docs (free tier, medium setup)
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Create a Google Docs template with placeholder text like &#123;&#123;client_name&#125;&#125; and &#123;&#123;invoice_total&#125;&#125;. Set up a Zapier automation: when a record is created in Airtable, create a copy of the Google Doc with the placeholders replaced by field values, then export it as a PDF and either email it or store the link back in Airtable.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The free Zapier tier limits you to 100 tasks per month. Paid plans remove that. Google Docs templates are free. This is the most common DIY approach for invoices and reports.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Carbone or Docupilot (cleaner output, paid)
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Carbone and Docupilot are dedicated document generation tools that work well with Airtable via Zapier or Make. You build a template in Word or a web editor with variable placeholders, then the tool fills it with Airtable data and outputs a clean PDF.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Both have free trials. Carbone's hosted plan starts around $19/month. Docupilot is similar. For businesses generating contracts, proposals, or invoices regularly, the quality and reliability justify the cost compared to the Zapier + Google Docs hack.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              JotForm (if you collect via form)
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>If your PDF workflow starts with a form submission, JotForm can generate PDFs directly from form responses and store data in Airtable via integration. It bypasses the separate PDF tool entirely.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>JotForm's PDF feature produces professional-looking documents. The limitation is that it only works if data entry happens through a JotForm form, not directly in Airtable.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Airtable's print view (last resort)
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Airtable's expanded record view has a Print option that generates a basic printable version of a record. It's not designed as a PDF tool and the output isn't styled, but for internal use or quick data exports it works.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>For anything customer-facing or professional, use one of the above approaches instead.</p>
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
                <Link href="/guides/translation" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Translation
        </Link>
                <div />
      </nav>
      </main>
      <Footer />
    </>
  );
}
