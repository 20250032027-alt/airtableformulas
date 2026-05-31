"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

type Result = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords?: string;
};

const SEARCH_INDEX: Result[] = [
  { category: "Formulas", title: "Date & Time Formulas", description: "Business days, quarters, age, date differences, relative dates", href: "/formulas/date-time", keywords: "workday_diff datetime_diff today weekday" },
  { category: "Formulas", title: "Conditional Logic Formulas", description: "IF, SWITCH, nested conditions, status labels, tier assignments", href: "/formulas/conditional", keywords: "if switch nested overdue status tier" },
  { category: "Formulas", title: "Text & String Formulas", description: "Name formatting, email parsing, concatenation, text cleanup", href: "/formulas/text", keywords: "trim concat left right mid find len upper lower" },
  { category: "Formulas", title: "Math & Numbers Formulas", description: "Rounding, percentages, capping values, markup calculations", href: "/formulas/math", keywords: "round min max sum average percentage" },
  { category: "Formulas", title: "Lookup & Rollup Formulas", description: "Count linked records, sum amounts, latest date across links", href: "/formulas/lookup", keywords: "rollup lookup linked records count sum values" },
  { category: "Formulas", title: "Boolean & Checkbox Formulas", description: "True/false conditions, checkbox logic, all-or-nothing flags", href: "/formulas/boolean", keywords: "checkbox true false not or and weekday" },
  { category: "Formulas", title: "URL & Link Formulas", description: "Link to records, pre-filled forms, Google Maps, encode URL", href: "/formulas/url", keywords: "record_id base_id encode_url_component button" },
  { category: "Formulas", title: "Multi-Select & Array Formulas", description: "Count selected options, check for a value, extract first option", href: "/formulas/array", keywords: "multi select tags options array find substitute" },
  { category: "Formula", title: "Business days between dates", description: "WORKDAY_DIFF({Start Date}, {End Date})", href: "/formulas/date-time", keywords: "business days weekends workday" },
  { category: "Formula", title: "Overdue status with days remaining", description: "IF({Due Date}<TODAY(), \"Overdue\", ...)", href: "/formulas/conditional", keywords: "overdue due date remaining days" },
  { category: "Formula", title: "Quarter from a date", description: "\"Q\"&CEILING(MONTH({Date})/3,1)&\" \"&YEAR({Date})", href: "/formulas/date-time", keywords: "quarter q1 q2 q3 q4 month year" },
  { category: "Formula", title: "Full name from first and last", description: "TRIM({First Name}&\" \"&{Last Name})", href: "/formulas/text", keywords: "full name concatenate combine first last" },
  { category: "Formula", title: "Percentage of total", description: "IF({Total}=0,0,ROUND({Amount}/{Total}*100,1))", href: "/formulas/math", keywords: "percentage percent total divide" },
  { category: "Formula", title: "Days until due date", description: "DATETIME_DIFF({Due Date}, TODAY(), 'days')", href: "/formulas/date-time", keywords: "days until due deadline remaining countdown" },
  { category: "Formula", title: "Extract domain from email", description: "MID({Email}, FIND(\"@\",{Email})+1, LEN({Email}))", href: "/formulas/text", keywords: "email domain extract parse @" },
  { category: "Formula", title: "Age from birthdate", description: "DATETIME_DIFF(TODAY(), {Birthdate}, 'years')", href: "/formulas/date-time", keywords: "age birthdate birthday years old" },
  { category: "Guide", title: "Getting Started with Airtable", description: "What actually matters when you are new to Airtable", href: "/guides/getting-started", keywords: "beginner new learn basics start first" },
  { category: "Guide", title: "Linked Records Explained", description: "What linked records are, lookup vs rollup, when not to use them", href: "/guides/linked-records", keywords: "linked records lookup rollup relationship" },
  { category: "Guide", title: "Interface Designer Guide", description: "When to build an interface vs use a view", href: "/guides/interfaces", keywords: "interface designer portal view component" },
  { category: "Guide", title: "Airtable Forms Guide", description: "Native forms, Fillout, Tally, approval workflows, embedding", href: "/guides/forms", keywords: "form fillout tally submission approval embed" },
  { category: "Guide", title: "AI Features in Airtable", description: "AI fields, Omni assistant, connecting Claude and ChatGPT", href: "/guides/ai-features", keywords: "ai claude chatgpt omni ai field translate summarize" },
  { category: "Guide", title: "Permissions Without the Mess", description: "Sharing without the seat cost spiral, client access options", href: "/guides/permissions", keywords: "permissions share access seat collaborator read only client" },
  { category: "Guide", title: "Pricing Reality Check", description: "What limits you hit first, record counts, per-seat model", href: "/guides/pricing", keywords: "pricing cost free plan limit records seat billing" },
  { category: "Guide", title: "Record Limit Survival Guide", description: "What happens at 50k records and eight ways to handle it", href: "/guides/record-limits", keywords: "record limit 50000 50k archive delete trash" },
  { category: "Guide", title: "Automations Guide", description: "Native automations vs Zapier vs Make, 16 patterns", href: "/automations", keywords: "automation zapier make trigger webhook native" },
  { category: "Guide", title: "Scripting in Airtable", description: "When formulas are not enough, 5 real scripts to copy", href: "/guides/scripting", keywords: "script javascript code api deduplicate batch" },
  { category: "Guide", title: "Translation in Airtable", description: "Four options for multilingual bases, free and paid", href: "/guides/translation", keywords: "translate translation french spanish language multilingual" },
  { category: "Guide", title: "Generate PDFs from Airtable", description: "Zapier + Google Docs, Carbone, JotForm, print view", href: "/guides/pdf-generation", keywords: "pdf generate export document invoice proposal" },
  { category: "Tool", title: "Formula Builder", description: "Describe it in plain English, get the exact Airtable formula", href: "/formula-builder", keywords: "build generate ai formula helper" },
  { category: "Tool", title: "Field Translator", description: "Paste field values, pick a language, get translations ready to copy", href: "/tools/translator", keywords: "translate translation tool french spanish german language" },
  { category: "Compare", title: "Airtable vs Notion vs Google Sheets", description: "Comparison table, honest verdict for 2026", href: "/alternatives/airtable-vs-notion", keywords: "notion vs airtable google sheets comparison" },
  { category: "Compare", title: "Airtable vs Google Sheets", description: "Formulas, cost, relational data, translation comparison", href: "/alternatives/airtable-vs-sheets", keywords: "google sheets vs airtable spreadsheet" },
  { category: "Compare", title: "Tool Picker", description: "Recommendation based on use case, team size, and budget", href: "/alternatives", keywords: "alternative notion monday softr compare tool pick" },
];

const CATEGORY_COLORS: Record<string, string> = {
  "Formula": "#D4622A",
  "Formulas": "#D4622A",
  "Guide": "#1A4A8A",
  "Tool": "#2A5A1A",
  "Compare": "#6A1A3A",
};

const QUICK_LINKS = [
  { label: "Formula Builder", href: "/formula-builder" },
  { label: "Getting Started", href: "/guides/getting-started" },
  { label: "Date & Time Formulas", href: "/formulas/date-time" },
  { label: "Linked Records", href: "/guides/linked-records" },
  { label: "Airtable Forms", href: "/guides/forms" },
  { label: "Field Translator", href: "/tools/translator" },
];

export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length < 2 ? [] : SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      (item.keywords || "").toLowerCase().includes(q)
    );
  }).slice(0, 8);

  const openSearch = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelected(0);
    setTimeout(() => inputRef.current?.focus(), 30);
  }, []);

  const closeSearch = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  // Close on outside click - watch for clicks outside the modal
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeSearch();
      }
    };
    // Small delay so the open-click doesn't immediately close
    const timer = setTimeout(() => {
      document.addEventListener("mousedown", handler);
    }, 100);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handler);
    };
  }, [open, closeSearch]);

  // Keyboard shortcuts
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? closeSearch() : openSearch();
        return;
      }
      if (!open) return;
      if (e.key === "Escape") { closeSearch(); return; }
      if (e.key === "ArrowDown") { e.preventDefault(); setSelected((s) => Math.min(s + 1, results.length - 1)); }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelected((s) => Math.max(s - 1, 0)); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, results.length, openSearch, closeSearch]);

  useEffect(() => { setSelected(0); }, [query]);

  return (
    <>
      <style>{`
        .search-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          background: var(--bg-2);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 6px 14px;
          font-size: 13px;
          color: var(--ink-3);
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: var(--font-geist-sans);
          min-height: 36px;
          white-space: nowrap;
        }
        .search-trigger:hover {
          border-color: var(--accent);
          color: var(--ink-2);
        }
        .search-trigger kbd {
          font-family: var(--font-geist-mono);
          font-size: 10px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1px 5px;
          color: var(--ink-3);
        }
        .search-overlay {
          position: fixed;
          inset: 0;
          z-index: 300;
          pointer-events: none;
        }
        .search-modal {
          position: fixed;
          top: 72px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 40px);
          max-width: 580px;
          background: var(--card);
          border: 1px solid var(--border-2);
          border-radius: var(--radius-xl);
          box-shadow: 0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06);
          overflow: hidden;
          z-index: 301;
          animation: searchSlideDown 0.18s cubic-bezier(0.32,0.72,0,1) forwards;
          pointer-events: all;
        }
        @keyframes searchSlideDown {
          from { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        .search-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          border-bottom: 1px solid var(--border);
        }
        .search-input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          font-size: 15px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          caret-color: var(--accent);
          min-height: 28px;
        }
        .search-input::placeholder { color: var(--ink-3); }
        .search-result {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          cursor: pointer;
          transition: background 0.1s ease;
          text-decoration: none;
          border-bottom: 1px solid var(--border);
        }
        .search-result:last-child { border-bottom: none; }
        .search-result:hover, .search-result.active {
          background: var(--bg-2);
        }
        .search-result-cat {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 2px 8px;
          border-radius: 999px;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .search-result-title {
          font-size: 13px;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 1px;
          line-height: 1.3;
        }
        .search-result-desc {
          font-size: 12px;
          color: var(--ink-3);
          margin: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .search-empty {
          padding: 28px 18px;
          text-align: center;
          color: var(--ink-3);
          font-size: 14px;
        }
        .search-footer {
          padding: 8px 18px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 14px;
          font-size: 11px;
          color: var(--ink-3);
          background: var(--bg);
        }
        .search-footer kbd {
          font-family: var(--font-geist-mono);
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1px 5px;
          font-size: 10px;
          margin-right: 3px;
        }
        .quick-link-item {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: var(--ink-2);
          cursor: pointer;
          transition: background 0.15s ease, color 0.15s ease;
          text-decoration: none;
          display: block;
          font-weight: 450;
        }
        .quick-link-item:hover {
          background: var(--bg-2);
          color: var(--ink);
        }
        @media (max-width: 560px) {
          .search-trigger kbd { display: none; }
          .search-trigger .search-label { display: none; }
        }
      `}</style>

      {/* Trigger */}
      <button className="search-trigger" onClick={openSearch} aria-label="Search the site">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
        <span className="search-label">Search</span>
        <kbd>⌘K</kbd>
      </button>

      {/* Modal — no backdrop div, just the modal itself anchored to top */}
      {open && (
        <>
          {/* Thin overlay just to intercept outside clicks — no visual effect */}
          <div
            style={{ position: "fixed", inset: 0, zIndex: 300 }}
            onClick={closeSearch}
            aria-hidden="true"
          />
          <div
            ref={modalRef}
            className="search-modal"
            role="dialog"
            aria-label="Site search"
            aria-modal="true"
          >
            {/* Input row */}
            <div className="search-input-row">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--ink-3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                className="search-input"
                placeholder="Search formulas, guides, tools..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search query"
                autoComplete="off"
                spellCheck={false}
              />
              {query && (
                <button
                  onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--ink-3)", padding: "2px", display: "flex", alignItems: "center", minHeight: "auto" }}
                  aria-label="Clear"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
                </button>
              )}
              <button
                onClick={closeSearch}
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "6px", padding: "2px 8px", fontSize: "11px", color: "var(--ink-3)", cursor: "pointer", fontFamily: "var(--font-geist-sans)", flexShrink: 0, minHeight: "auto" }}
              >
                Esc
              </button>
            </div>

            {/* Results */}
            {query.trim().length >= 2 ? (
              <>
                {results.length === 0 ? (
                  <div className="search-empty">
                    No results for &ldquo;{query}&rdquo;
                    <br />
                    <Link href="/formula-builder" onClick={closeSearch} style={{ fontSize: "13px", color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
                      Try the Formula Builder instead
                    </Link>
                  </div>
                ) : (
                  <div role="listbox">
                    {results.map((r, i) => (
                      <Link
                        key={r.href + r.title + i}
                        href={r.href}
                        className={`search-result${i === selected ? " active" : ""}`}
                        role="option"
                        aria-selected={i === selected}
                        onClick={closeSearch}
                        onMouseEnter={() => setSelected(i)}
                      >
                        <span
                          className="search-result-cat"
                          style={{
                            color: CATEGORY_COLORS[r.category] || "var(--ink-3)",
                            background: (CATEGORY_COLORS[r.category] || "var(--ink-3)") + "18",
                          }}
                        >
                          {r.category}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p className="search-result-title">{r.title}</p>
                          <p className="search-result-desc">{r.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <div className="search-footer">
                  <span><kbd>↑</kbd><kbd>↓</kbd>Navigate</span>
                  <span><kbd>↵</kbd>Open</span>
                  <span><kbd>Esc</kbd>Close</span>
                </div>
              </>
            ) : (
              /* Quick links */
              <div style={{ padding: "14px 18px" }}>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", margin: "0 0 8px 4px" }}>
                  Quick links
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
                  {QUICK_LINKS.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="quick-link-item"
                      onClick={closeSearch}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
