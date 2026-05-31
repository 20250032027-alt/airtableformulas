"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FormulaBuilder from "@/components/FormulaBuilder";
import AlternativePicker from "@/components/AlternativePicker";
import ScrollReveal from "@/components/ScrollReveal";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";
import HeroLayoutToggle from "@/components/HeroLayoutToggle";

const formulaCards = [
  { title: "Business Days Between Dates", category: "Date & Time", formula: "WORKDAY_DIFF({Start Date}, {End Date})", slug: "date-time" },
  { title: "Overdue Status", category: "Conditional", formula: 'IF({Due Date}<TODAY(), "Overdue", DATETIME_DIFF({Due Date},TODAY(),\'days\')&" days left")', slug: "conditional" },
  { title: "Full Name from Parts", category: "Text", formula: 'TRIM({First Name}&" "&{Last Name})', slug: "text" },
  { title: "Quarter from Date", category: "Date & Time", formula: '"Q"&CEILING(MONTH({Date})/3,1)&" "&YEAR({Date})', slug: "date-time" },
  { title: "Cap a Value at Maximum", category: "Math", formula: "MIN({Value}, 100)", slug: "math" },
  { title: "Days Since Last Update", category: "Date & Time", formula: "DATETIME_DIFF(TODAY(),{Last Modified},'days')&\" days ago\"", slug: "date-time" },
];

const contentCards = [
  { title: "New to Airtable?", description: "Start here. What actually matters when you are new, how to design your base before touching the tool, and why structure beats features.", href: "/guides/getting-started", badge: "Start here" },
  { title: "Formula Cookbook", description: "200+ ready-to-paste formulas in 8 categories. Business days, conditional logic, rollups, text manipulation. Organized by what you're trying to do.", href: "/formulas", badge: "Most visited" },
  { title: "Guides", description: "Linked records, permissions, pricing reality, forms, AI features, translation, scripting, Interface Designer. Built from 800 real community posts.", href: "/guides", badge: "11 guides" },
  { title: "Alternatives", description: "Airtable vs Notion, Google Sheets, Monday.com. Tool picker that gives a real recommendation based on your use case, team size, and budget.", href: "/alternatives", badge: "Buyer intent" },
];

export default function Home() {
  return (
    <>
      <style>{`
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent-subtle);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 16px;
          margin-bottom: 28px;
          animation: fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both;
        }
        .hero-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse-dot 2s ease infinite;
        }
        .hero-badge-text {
          font-size: 12px; font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .stat-num {
          font-size: 28px; font-weight: 800;
          color: var(--ink);
          letter-spacing: -0.04em;
        }
        .stat-label {
          font-size: 13px;
          color: var(--ink-3);
          margin-top: 2px;
        }
        .formula-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2px;
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .formula-card:hover {
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          border-color: var(--border-2);
        }
        .formula-card-inner {
          background: var(--bg);
          border-radius: calc(var(--radius-lg) - 2px);
          padding: 20px;
        }
        .formula-cat-badge {
          font-size: 11px; font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: var(--accent-subtle);
          padding: 3px 10px;
          border-radius: 999px;
        }
        .formula-code {
          display: block;
          font-family: var(--font-geist-mono);
          font-size: 12px;
          color: var(--accent);
          background: var(--bg-2);
          padding: 12px;
          border-radius: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 10px 0;
        }
        .formula-more-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-2);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .formula-more-link:hover { color: var(--accent); }
        .content-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 24px;
          text-decoration: none;
          display: block;
          transition: transform 0.3s cubic-bezier(0.32,0.72,0,1), box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .content-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.08);
          border-color: var(--border-2);
        }
        .content-card-badge {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: 999px;
        }
        .content-card-title {
          font-size: 17px; font-weight: 700;
          color: var(--ink);
          letter-spacing: -0.03em;
          line-height: 1.3;
          margin: 10px 0 8px;
        }
        .content-card-desc {
          font-size: 14px;
          color: var(--ink-2);
          line-height: 1.65;
          margin: 0;
        }
        .cta-section {
          background: var(--ink);
          border-radius: var(--radius-xl);
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-blob-1 {
          position: absolute; top: -80px; right: -80px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.12; pointer-events: none;
        }
        .cta-blob-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: var(--accent-2);
          opacity: 0.08; pointer-events: none;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--accent);
          color: #fff;
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.15);
        }
        .btn-primary:hover {
          background: var(--accent-2);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.2);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--ink);
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          border: 1px solid var(--border-2);
          transition: border-color 0.25s ease;
        }
        .btn-secondary:hover { border-color: var(--ink); }
        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--bg-2);
          border-radius: 999px;
          padding: 4px 12px;
          margin-bottom: 12px;
          font-size: 11px;
          font-weight: 700;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .section-heading {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--ink);
          margin: 0 0 8px;
        }
        .section-sub {
          font-size: 15px;
          color: var(--ink-3);
          margin: 0;
        }
      `}</style>

      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <HeroLayoutToggle />

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>

        {/* Hero — class-based for layout toggle */}
        <section className="hero-section">

          {/* Left / centered text column */}
          <div className="hero-text">
            <div className="hero-badge" style={{ animation: "fadeUp 0.6s cubic-bezier(0.32,0.72,0,1) 0.1s both" }}>
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">Formulas, Automations, Honest Comparisons</span>
            </div>

            <h1 className="hero-h1" style={{ fontSize: "clamp(44px, 7vw, 80px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--ink)", margin: "0 0 24px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.2s both" }}>
              Stop Googling<br />
              <span style={{ color: "var(--accent)" }}>Airtable formulas.</span>
            </h1>

            <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--ink-2)", lineHeight: 1.7, maxWidth: "520px", margin: "0 0 40px", animation: "fadeUp 0.7s cubic-bezier(0.32,0.72,0,1) 0.3s both" }}>
              Every formula you actually need. Honest guide on when Airtable is not the right tool. A formula builder that works the way you think.
            </p>

            <div className="hero-actions">
              <Link href="/formula-builder" className="btn-primary">
                Try Formula Builder
                <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px" }}>↗</span>
              </Link>
              <Link href="/formulas" className="btn-secondary">
                Browse Cookbook
              </Link>
            </div>

            <div className="hero-stats">
              {[{ num: "200+", label: "Ready formulas" }, { num: "16", label: "Automation patterns" }, { num: "8", label: "In-depth guides" }].map((s) => (
                <div key={s.label} style={{ textAlign: "inherit" }}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — only visible in asymmetric mode */}
          <div className="hero-side">
            <div style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "28px",
              boxShadow: "0 12px 48px rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "var(--accent-subtle)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: "14px", fontWeight: 600, color: "var(--ink)" }}>Quick Formula Examples</p>
                  <p style={{ margin: 0, fontSize: "12px", color: "var(--ink-3)" }}>Copy and paste into Airtable</p>
                </div>
              </div>
              {[
                { label: "Business days", formula: "WORKDAY_DIFF({Start}, {End})" },
                { label: "Overdue flag", formula: 'IF({Due Date}<TODAY(),"Overdue","On track")' },
                { label: "Quarter", formula: '"Q"&CEILING(MONTH({Date})/3,1)' },
                { label: "Full name", formula: 'TRIM({First}&" "&{Last})' },
              ].map((ex) => (
                <div key={ex.label} style={{ marginBottom: "10px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.07em" }}>{ex.label}</p>
                  <code style={{ display: "block", fontFamily: "var(--font-geist-mono)", fontSize: "12px", color: "var(--accent)", background: "var(--bg-2)", padding: "8px 10px", borderRadius: "6px" }}>
                    {ex.formula}
                  </code>
                </div>
              ))}
              <Link href="/formulas" style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "14px", fontSize: "13px", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                Browse all 200+ formulas
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Formula Builder */}
        <section className="observe-reveal" style={{ paddingBottom: "96px" }}>
          <FormulaBuilder />
        </section>

        {/* Formula cards */}
        <section style={{ paddingBottom: "96px" }}>
          <div className="observe-reveal" style={{ marginBottom: "40px" }}>
            <div className="section-label">Formula Cookbook</div>
            <h2 className="section-heading">The formulas people actually search for</h2>
            <p className="section-sub">Copy and paste. Adjust the field names.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "12px" }}>
            {formulaCards.map((card, i) => (
              <div key={card.title} className="formula-card observe-reveal" style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="formula-card-inner">
                  <span className="formula-cat-badge">{card.category}</span>
                  <p style={{ margin: "10px 0 0", fontSize: "15px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>{card.title}</p>
                  <code className="formula-code" title={card.formula}>
                    {card.formula.length > 52 ? card.formula.slice(0, 52) + "..." : card.formula}
                  </code>
                  <Link href={`/formulas/${card.slug}`} className="formula-more-link">
                    Full formula
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="observe-reveal" style={{ marginTop: "24px", textAlign: "center" }}>
            <Link href="/formulas" className="btn-secondary" style={{ display: "inline-flex" }}>
              Browse all 200+ formulas
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </section>

        {/* Content hub cards */}
        <section style={{ paddingBottom: "96px" }}>
          <div className="observe-reveal" style={{ marginBottom: "40px" }}>
            <h2 className="section-heading">Everything you keep searching for</h2>
            <p className="section-sub">Built from 800 real Airtable community posts.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }} className="cards-grid">
            {contentCards.map((card, i) => (
              <Link key={card.href} href={card.href} className="content-card observe-reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span className="content-card-badge" style={{ background: "var(--bg-2)", color: "var(--ink-3)" }}>{card.badge}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
                <p className="content-card-title">{card.title}</p>
                <p className="content-card-desc">{card.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Alternative Picker */}
        <section style={{ paddingBottom: "96px" }} className="observe-reveal">
          <AlternativePicker />
        </section>

        {/* CTA */}
        <section className="observe-reveal" style={{ paddingBottom: "96px" }}>
          <div className="cta-section">
            <div className="cta-blob-1" />
            <div className="cta-blob-2" />
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", margin: "0 0 16px", position: "relative" }}>
              Type it in plain English.<br />Get the exact formula.
            </h2>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.6)", maxWidth: "400px", margin: "0 auto 32px", lineHeight: 1.6, position: "relative" }}>
              No memorizing function names. No digging through docs.
            </p>
            <Link href="/formula-builder" className="btn-primary" style={{ position: "relative" }}>
              Open Formula Builder
            </Link>
          </div>
        </section>

      </main>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .cta-section { padding: 40px 24px !important; }
        }
      `}</style>
    </>
  );
}
