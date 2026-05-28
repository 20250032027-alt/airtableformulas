"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const guides = [
  {
    href: "/guides/linked-records",
    title: "Linked Records Explained",
    description: "The concept that trips up almost every new Airtable user. What linked records actually are, when to use them vs a simple field, and the mistakes that cause data chaos later.",
    badge: "Most confusing",
    badgeColor: "#7A3A1A",
    readTime: "7 min",
  },
  {
    href: "/guides/interfaces",
    title: "Interface Designer Guide",
    description: "Airtable's Interface Designer is powerful and confusing in equal measure. When to build an interface vs use a view, how to structure one that doesn't break, and the new 2026 components.",
    badge: "High demand",
    badgeColor: "#1A4A8A",
    readTime: "10 min",
  },
  {
    href: "/guides/permissions",
    title: "Permissions Without the Mess",
    description: "Why Airtable permissions feel messy, what the actual options are at each plan level, and how to give clients or external collaborators access without paying for a full seat.",
    badge: "Painful",
    badgeColor: "#D4622A",
    readTime: "6 min",
  },
  {
    href: "/guides/pricing",
    title: "Airtable Pricing Reality Check",
    description: "What the pricing page doesn't tell you. Which limits you hit first, what actually counts toward records, and whether the per-seat model makes sense for your team size.",
    badge: "Controversial",
    badgeColor: "#2A5A1A",
    readTime: "5 min",
  },
  {
    href: "/guides/scripting",
    title: "Scripting in Airtable",
    description: "When formulas aren't enough. How Airtable's script block works, what it can and can't do, and five real scripts worth copying for common tasks like deduplication and batch updates.",
    badge: "Power user",
    badgeColor: "#1A3A6A",
    readTime: "9 min",
  },
  {
    href: "/guides/record-limits",
    title: "Record Limit Survival Guide",
    description: "What actually happens when you hit 50k records and what to do about it. Eight approaches ordered by effort and cost, including free workarounds most people don't know about.",
    badge: "Pain point",
    badgeColor: "#6A1A3A",
    readTime: "6 min",
  },
  {
    href: "/guides/pdf-generation",
    title: "Generate PDFs from Airtable",
    description: "No clean native solution exists. Here is what works: Zapier with Google Docs, JotForm, Carbone, and the makeshift workarounds that people actually ship in production.",
    badge: "Workaround heavy",
    badgeColor: "#3A2A6A",
    readTime: "7 min",
  },
];

export default function GuidesPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "56px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--bg-2)", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>From real user pain</span>
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Guides
          </h1>
          <p style={{ fontSize: "18px", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "520px", margin: 0 }}>
            Built from 800 real Airtable community posts. These are the topics people keep asking about because the official docs don&apos;t answer them clearly.
          </p>
        </section>

        <section style={{ paddingBottom: "96px" }}>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
            {guides.map((g, i) => (
              <Link
                key={g.href}
                href={g.href}
                className="observe-reveal"
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", padding: "24px 28px",
                  textDecoration: "none", display: "flex", alignItems: "center",
                  justifyContent: "space-between", gap: "24px",
                  transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
                  transitionDelay: `${i * 0.04}s`,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" as const }}>
                    <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>{g.title}</h2>
                    <span style={{ fontSize: "11px", fontWeight: 700, color: g.badgeColor, background: g.badgeColor + "18", padding: "2px 10px", borderRadius: "999px", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>{g.badge}</span>
                    <span style={{ fontSize: "12px", color: "var(--ink-3)" }}>{g.readTime}</span>
                  </div>
                  <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.6 }}>{g.description}</p>
                </div>
                <svg style={{ flexShrink: 0 }} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
