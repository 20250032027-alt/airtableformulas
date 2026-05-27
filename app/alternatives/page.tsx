"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AlternativePicker from "@/components/AlternativePicker";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const comparisons = [
  {
    title: "Airtable vs Notion",
    slug: "airtable-vs-notion",
    verdict: "Airtable for data-heavy work. Notion for docs-first teams that also need a database.",
    updatedDate: "March 2026",
    readTime: "8 min",
  },
  {
    title: "Airtable vs Google Sheets",
    slug: "airtable-vs-sheets",
    verdict: "Sheets wins on pure math and formulas. Airtable wins on relational data and views.",
    updatedDate: "February 2026",
    readTime: "6 min",
  },
  {
    title: "Softr vs Interfaces vs Portals",
    slug: "softr-vs-interfaces",
    verdict: "Softr for external portals. Interfaces for internal Airtable views. Portals for client access.",
    updatedDate: "April 2026",
    readTime: "10 min",
  },
  {
    title: "Zapier vs Native Automations",
    slug: "zapier-vs-native",
    verdict: "Native automations for simple Airtable-only workflows. Zapier when you need other apps.",
    updatedDate: "January 2026",
    readTime: "7 min",
  },
  {
    title: "Airtable vs Monday.com",
    slug: "airtable-vs-monday",
    verdict: "Monday for project-focused teams. Airtable for teams that build custom data workflows.",
    updatedDate: "March 2026",
    readTime: "9 min",
  },
  {
    title: "Airtable Free vs Pro vs Business",
    slug: "airtable-pricing",
    verdict: "Free hits a wall fast. Pro covers most teams. Business only when you need SSO or advanced admin.",
    updatedDate: "April 2026",
    readTime: "5 min",
  },
];

export default function AlternativesPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "120px", paddingBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px", animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>No affiliate bias</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.15s both" }}>
            Honest Comparisons
          </h1>
          <p style={{ fontSize: "18px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "560px", margin: 0, animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
            Airtable is not the right tool for every job. These comparisons tell you when to switch
            and what to switch to, based on what you are actually building.
          </p>
        </section>

        <section style={{ paddingBottom: "64px" }} className="observe-reveal">
          <AlternativePicker />
        </section>

        <section style={{ paddingBottom: "96px" }}>
          <h2 className="observe-reveal" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 24px" }}>
            All comparisons
          </h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
            {comparisons.map((c, i) => (
              <Link
                key={c.slug}
                href={`/alternatives/${c.slug}`}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                  padding: "20px 24px", textDecoration: "none", display: "flex", alignItems: "flex-start",
                  justifyContent: "space-between", gap: "20px",
                  transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)", transitionDelay: `${i * 0.04}s`,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(3px)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateX(0)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                    <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>{c.title}</h3>
                    <span style={{ fontSize: "11px", color: "var(--ink-3)" }}>{c.updatedDate} · {c.readTime}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.5 }}>{c.verdict}</p>
                </div>
                <svg style={{ flexShrink: 0, marginTop: "2px" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
