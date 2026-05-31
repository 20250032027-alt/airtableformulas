"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import YouTubeLinks from "@/components/YouTubeLinks";

const faqs = [
  { q: "When should I build an Interface instead of using a View?", a: "Build an interface when you want to combine data from multiple tables on one screen, control exactly which fields are visible and editable, or give someone a simplified experience without exposing the full base. Use a view when the person needs full grid access or when filtering and sorting in a standard view is enough." },
  { q: "Can I trigger an automation from an Interface?", a: "Yes. Interface Designer has a Button component that triggers an automation when clicked. This is one of the most powerful combinations in Airtable: an interface gives a non-technical user a clean UI, and the button fires an automation behind the scenes without them needing to touch the base directly." },
  { q: "What changed in the Interface Designer in the 2024 redesign?", a: "The main practical change was interface sharing. You can now share an interface to specific people by email without giving them full base access, and they do not need an Airtable account for read-only access. The layout editor also changed significantly, moving some component settings to different locations." },
];

const youtubeVideos = [
  { title: "Airtable Interfaces: Updated for 2025", channel: "YouTube", url: "https://www.youtube.com/watch?v=kwsQGRzpAqI" },
  { title: "Airtable 2024: Step-by-Step Guide to Build Efficient Interfaces", channel: "YouTube", url: "https://www.youtube.com/watch?v=faYgT7858Rg" },
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A4A8A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A4A8A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>High demand</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Interface Designer Guide
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            When to build an interface vs use a view, how to structure one that doesn't break, and what each component actually does.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>10 min read</span>
        </section>
        <article style={{ paddingBottom: "96px" }}>
          
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              What Interface Designer is actually for
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Interface Designer is Airtable's tool for building custom, user-friendly views on top of your existing data. The underlying tables and records stay the same. The interface is a layer on top that can show only the fields and records relevant to a specific person or task.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The most common use case: your base is complex and built for you (the admin), but you need a simpler view for teammates who just need to update a status field, submit a request, or see a filtered list of their own records. Building that as an interface keeps your base structure intact while giving them something that doesn't overwhelm them.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              Interface vs view: when to use which
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Use a view when the person accessing your data is also a collaborator in the base, the filtering and sorting options built into views are enough, and you don't need custom layouts or multiple components on one screen.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Use an interface when you want to combine multiple tables on one screen, you want to control exactly which fields are visible and editable, you're building something for people who shouldn't navigate the full base, or you want a dashboard layout with stats, lists, and filters together.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Interfaces don't replace views. Most bases use both.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              The component types and what they do
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>List: shows records from a table in a vertical list. Supports filtering and sorting. The most common component.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Record detail: shows a single record with its fields laid out. Used as a detail view when someone clicks a record in a list.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Form: an input form that creates or updates records. Supports conditional fields.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Kanban: a board view grouped by a single-select field. Drag to change status.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Timeline and calendar: date-based views. Timeline needs a start and end date field.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Chart: basic bar, line, and pie charts based on a field. Not highly customizable but useful for at-a-glance metrics.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Number: shows a single aggregated value, like total open tasks or sum of revenue. Good for dashboard header stats.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Button: triggers an automation when clicked. Powerful for triggering actions from within an interface.</p>
          </section>
          <section className="observe-reveal" style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
              The 2024 redesign and what changed
            </h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>Airtable's new UI launched in 2024 and Interface Designer changed significantly. The 81-upvote post 'So how many of you hate the new design?' was mostly about the redesign, and Interface Designer got caught up in that backlash.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The main practical change: the way you share interfaces changed. You can now share an interface to specific people via email without giving them full base access. This is significant for client portals and limited-access views. They don't need an Airtable account for read-only access.</p>
              <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>The editing layout also changed. If you built interfaces before late 2024 and they look different after a login, that's the redesign. Some component settings moved around.</p>
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
                <Link href="/guides/linked-records" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Linked Records
        </Link>
                <Link href="/guides/forms" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Airtable Forms
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
