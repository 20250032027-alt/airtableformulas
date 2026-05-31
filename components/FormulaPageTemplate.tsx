"use client";
import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import YouTubeLinks from "@/components/YouTubeLinks";
import Link from "next/link";

type Formula = {
  name: string;
  use: string;
  formula: string;
  note: string;
};

type Video = {
  title: string;
  channel: string;
  url: string;
};

type Props = {
  title: string;
  description: string;
  formulas: Formula[];
  videos?: Video[];
};

export default function FormulaPageTemplate({ title, description, formulas, videos }: Props) {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return formulas;
    return formulas.filter(
      (f) =>
        f.name.toLowerCase().includes(q) ||
        f.use.toLowerCase().includes(q) ||
        f.formula.toLowerCase().includes(q) ||
        f.note.toLowerCase().includes(q)
    );
  }, [search, formulas]);

  const copy = async (formula: string, name: string) => {
    await navigator.clipboard.writeText(formula);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <style>{`
        .formula-search {
          width: 100%;
          padding: 12px 16px 12px 42px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          font-size: 14px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }
        .formula-search::placeholder { color: var(--ink-3); }
        .formula-search:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px var(--accent-subtle);
        }
        .formula-search-wrap {
          position: relative;
          margin-bottom: 32px;
        }
        .formula-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
          color: var(--ink-3);
        }
        .formula-search-clear {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--bg-2);
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-3);
          font-size: 12px;
          line-height: 1;
          padding: 0;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .formula-search-clear:hover {
          background: var(--border-2);
          color: var(--ink);
        }
        .formula-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }
        .formula-card:hover {
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border-color: var(--border-2);
        }
        .formula-card-header {
          padding: 20px 24px 0;
        }
        .formula-card-use {
          margin: 0 0 14px;
          font-size: 14px;
          color: var(--ink-3);
          line-height: 1.5;
        }
        .formula-card-code-row {
          background: var(--bg-2);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .formula-code {
          font-family: var(--font-geist-mono);
          font-size: 13px;
          color: var(--accent);
          line-height: 1.5;
          flex: 1;
          word-break: break-all;
        }
        .copy-btn {
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 5px 14px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
          font-family: var(--font-geist-sans);
          min-height: 30px;
        }
        .copy-btn-idle {
          background: var(--card);
          color: var(--ink-2);
        }
        .copy-btn-idle:hover {
          background: var(--bg-2);
          border-color: var(--accent);
          color: var(--accent);
        }
        .copy-btn-done {
          background: var(--accent);
          color: #fff;
          border-color: var(--accent);
        }
        .formula-card-note {
          padding: 12px 24px;
          font-size: 13px;
          color: var(--ink-3);
          line-height: 1.6;
          margin: 0;
        }
        .no-results {
          text-align: center;
          padding: 48px 24px;
          color: var(--ink-3);
        }
        .no-results-title {
          font-size: 17px;
          font-weight: 600;
          color: var(--ink-2);
          margin: 0 0 8px;
        }
        .no-results-sub {
          font-size: 14px;
          margin: 0 0 20px;
        }
        .search-highlight {
          background: var(--accent-subtle);
          color: var(--accent);
          border-radius: 3px;
          padding: 0 2px;
        }
      `}</style>

      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <section style={{ paddingTop: "120px", paddingBottom: "32px" }}>
          <Link
            href="/formulas"
            style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            All formulas
          </Link>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 12px" }}>
            {title}
          </h1>
          <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 28px", maxWidth: "600px" }}>
            {description}
          </p>

          {/* Search bar */}
          <div className="formula-search-wrap">
            <svg className="formula-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              className="formula-search"
              placeholder={`Search ${formulas.length} formulas...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search formulas"
            />
            {search && (
              <button
                className="formula-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Result count when searching */}
          {search && (
            <p style={{ fontSize: "13px", color: "var(--ink-3)", margin: "-20px 0 20px" }}>
              {filtered.length === 0
                ? "No formulas matched"
                : `${filtered.length} of ${formulas.length} formulas`}
            </p>
          )}
        </section>

        {/* Formula list */}
        <section style={{ paddingBottom: "24px" }}>
          {filtered.length === 0 ? (
            <div className="no-results">
              <p className="no-results-title">No formulas matched &ldquo;{search}&rdquo;</p>
              <p className="no-results-sub">Try a different keyword, or describe what you need in the formula builder.</p>
              <Link
                href="/formula-builder"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--accent)", color: "#fff", padding: "11px 22px", borderRadius: "999px", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}
              >
                Try Formula Builder
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "12px" }}>
              {filtered.map((f, i) => (
                <div
                  key={f.name}
                  className="formula-card observe-reveal"
                  style={{ transitionDelay: `${Math.min(i, 6) * 0.04}s` }}
                >
                  <div className="formula-card-header">
                    <h2 style={{ margin: "0 0 6px", fontSize: "16px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                      {f.name}
                    </h2>
                    <p className="formula-card-use">{f.use}</p>
                  </div>
                  <div className="formula-card-code-row">
                    <code className="formula-code">{f.formula}</code>
                    <button
                      onClick={() => copy(f.formula, f.name)}
                      className={`copy-btn ${copied === f.name ? "copy-btn-done" : "copy-btn-idle"}`}
                      aria-label={`Copy formula: ${f.name}`}
                    >
                      {copied === f.name ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <p className="formula-card-note">{f.note}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Builder CTA */}
        <section style={{ paddingBottom: "32px" }}>
          <div style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" as const }}>
            <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)" }}>
              Not finding what you need?
            </p>
            <Link
              href="/formula-builder"
              style={{ background: "var(--accent)", color: "#fff", padding: "9px 20px", borderRadius: "999px", textDecoration: "none", fontSize: "13px", fontWeight: 600, flexShrink: 0, whiteSpace: "nowrap" as const }}
            >
              Describe it, get the formula
            </Link>
          </div>
        </section>

        {/* YouTube links */}
        {videos && videos.length > 0 && (
          <section style={{ paddingBottom: "48px" }}>
            <YouTubeLinks videos={videos} />
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
