"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteSearch from "@/components/SiteSearch";

const guides = [
  { label: "Getting Started", href: "/guides/getting-started" },
  { label: "Linked Records", href: "/guides/linked-records" },
  { label: "Interface Designer", href: "/guides/interfaces" },
  { label: "Airtable Forms", href: "/guides/forms" },
  { label: "AI Features", href: "/guides/ai-features" },
  { label: "Permissions", href: "/guides/permissions" },
  { label: "Pricing Reality", href: "/guides/pricing" },
  { label: "Record Limits", href: "/guides/record-limits" },
  { label: "Scripting", href: "/guides/scripting" },
  { label: "Translation", href: "/guides/translation" },
  { label: "PDF Generation", href: "/guides/pdf-generation" },
];

const formulas = [
  { label: "Date & Time", href: "/formulas/date-time" },
  { label: "Conditional Logic", href: "/formulas/conditional" },
  { label: "Text & String", href: "/formulas/text" },
  { label: "Math & Numbers", href: "/formulas/math" },
  { label: "Lookup & Rollup", href: "/formulas/lookup" },
  { label: "Boolean & Checkbox", href: "/formulas/boolean" },
  { label: "URLs & Links", href: "/formulas/url" },
  { label: "Multi-Select", href: "/formulas/array" },
];

const tools = [
  { label: "Formula Builder", href: "/formula-builder" },
  { label: "Field Translator", href: "/tools/translator" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState<"guides" | "formulas" | "tools" | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't interfere with trigger buttons - their onClick handles toggle
      if (target.closest(".nav-trigger")) return;
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setDropdown(null);
      }
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdown(null);
    };
    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, []);

  const openDropdown = (name: typeof dropdown) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdown(name);
  };

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => setDropdown(null), 400);
  };

  return (
    <>
      <style>{`
        .nav-pill {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          width: calc(100% - 40px);
          max-width: 960px;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .nav-pill.scrolled {
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          border-color: var(--border-2);
        }
        .nav-logo {
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.02em;
          flex-shrink: 0;
        }
        .nav-logo span { color: var(--accent); }
        .nav-links-desktop {
          display: flex;
          gap: 2px;
          align-items: center;
        }
        .nav-trigger {
          font-size: 13px;
          color: var(--ink-2);
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
          font-weight: 450;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-geist-sans);
          display: flex;
          align-items: center;
          gap: 4px;
          white-space: nowrap;
          min-height: 36px;
        }
        .nav-trigger:hover, .nav-trigger.active {
          background: var(--bg-2);
          color: var(--ink);
        }
        .nav-trigger svg {
          transition: transform 0.2s ease;
        }
        .nav-trigger.active svg {
          transform: rotate(180deg);
        }
        .nav-cta {
          font-size: 13px;
          font-weight: 600;
          color: #fff !important;
          background: var(--accent);
          padding: 7px 16px;
          border-radius: 999px;
          text-decoration: none;
          margin-left: 4px;
          transition: background 0.2s ease, transform 0.2s ease;
          white-space: nowrap;
          min-height: 36px;
          display: flex;
          align-items: center;
        }
        .nav-cta:hover {
          background: var(--accent-2);
          transform: scale(1.02);
        }
        .dropdown-panel {
          position: fixed;
          top: 58px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          box-shadow: 0 12px 48px rgba(0,0,0,0.12);
          padding: 16px;
          padding-top: 26px;
          z-index: 99;
          animation: fadeUp 0.2s cubic-bezier(0.32,0.72,0,1) forwards;
          min-width: 200px;
        }
        /* Invisible bridge between nav pill and dropdown - prevents gap from closing menu */
        .dropdown-panel::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 0;
          right: 0;
          height: 18px;
          background: transparent;
        }
        .dropdown-link {
          display: flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 13px;
          color: var(--ink-2);
          text-decoration: none;
          transition: background 0.15s ease, color 0.15s ease;
          white-space: nowrap;
          font-weight: 450;
        }
        .dropdown-link:hover {
          background: var(--bg-2);
          color: var(--ink);
        }
        .dropdown-section-label {
          font-size: 10px;
          font-weight: 700;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 4px 12px 6px;
          margin-top: 4px;
        }
        .dropdown-divider {
          height: 1px;
          background: var(--border);
          margin: 8px 0;
        }
        .dropdown-footer-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          text-decoration: none;
          transition: background 0.15s ease;
        }
        .dropdown-footer-link:hover { background: var(--accent-subtle); }
        .nav-hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: none;
        }
        .nav-bar {
          display: block;
          width: 20px;
          height: 1.5px;
          background: var(--ink);
          transition: all 0.3s cubic-bezier(0.32,0.72,0,1);
          margin: 4px 0;
        }
        .nav-mobile-overlay {
          position: fixed;
          inset: 0;
          z-index: 90;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
          overflow-y: auto;
          padding: 40px 24px;
        }
        .nav-mobile-section {
          width: 100%;
          max-width: 300px;
          margin-bottom: 16px;
        }
        .nav-mobile-section-label {
          font-size: 10px;
          font-weight: 700;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
          padding: 0 4px;
        }
        .nav-mobile-link {
          display: block;
          font-size: 16px;
          font-weight: 600;
          color: var(--ink);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 10px;
          transition: background 0.15s ease;
          opacity: 0;
          transform: translateY(12px);
        }
        .nav-mobile-link:hover { background: var(--bg-2); }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-links-desktop { display: flex !important; }
        }
      `}</style>

      <nav className={`nav-pill${scrolled ? " scrolled" : ""}`} ref={dropdownRef}>
        <Link href="/" className="nav-logo">
          AirtableFormulas<span>.com</span>
        </Link>

        <div className="nav-links-desktop">
          {/* Formulas dropdown */}
          <button
            className={`nav-trigger${dropdown === "formulas" ? " active" : ""}`}
            onMouseEnter={() => openDropdown("formulas")}
            onClick={() => setDropdown(dropdown === "formulas" ? null : "formulas")}
            aria-expanded={dropdown === "formulas"}
          >
            Formulas
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          {/* Guides dropdown */}
          <button
            className={`nav-trigger${dropdown === "guides" ? " active" : ""}`}
            onMouseEnter={() => openDropdown("guides")}
            onClick={() => setDropdown(dropdown === "guides" ? null : "guides")}
            aria-expanded={dropdown === "guides"}
          >
            Guides
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <Link href="/alternatives" className="nav-trigger">Alternatives</Link>
          <Link href="/automations" className="nav-trigger">Automations</Link>

          {/* Tools dropdown */}
          <button
            className={`nav-trigger${dropdown === "tools" ? " active" : ""}`}
            onMouseEnter={() => openDropdown("tools")}
            onClick={() => setDropdown(dropdown === "tools" ? null : "tools")}
            aria-expanded={dropdown === "tools"}
          >
            Tools
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>

          <SiteSearch />

          <Link href="/formula-builder" className="nav-cta">
            Try Builder
          </Link>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="nav-bar" style={{ transform: open ? "translateY(5.5px) rotate(45deg)" : "none" }} />
          <span className="nav-bar" style={{ opacity: open ? 0 : 1 }} />
          <span className="nav-bar" style={{ transform: open ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
        </button>
      </nav>

      {/* Formulas dropdown panel */}
      {dropdown === "formulas" && (
        <div
          className="dropdown-panel"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", minWidth: "320px" }}
          onMouseEnter={() => openDropdown("formulas")}
          onMouseLeave={closeDropdown}
        >
          {formulas.map((l) => (
            <Link key={l.href} href={l.href} className="dropdown-link" onClick={() => setDropdown(null)}>
              {l.label}
            </Link>
          ))}
          <div style={{ gridColumn: "1 / -1" }}>
            <div className="dropdown-divider" />
            <Link href="/formulas" className="dropdown-footer-link" onClick={() => setDropdown(null)}>
              Browse all 200+ formulas
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      )}

      {/* Guides dropdown panel */}
      {dropdown === "guides" && (
        <div
          className="dropdown-panel"
          style={{ minWidth: "240px" }}
          onMouseEnter={() => openDropdown("guides")}
          onMouseLeave={closeDropdown}
        >
          {guides.map((l) => (
            <Link key={l.href} href={l.href} className="dropdown-link" onClick={() => setDropdown(null)}>
              {l.label}
            </Link>
          ))}
          <div className="dropdown-divider" />
          <Link href="/guides" className="dropdown-footer-link" onClick={() => setDropdown(null)}>
            All guides
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      )}

      {/* Tools dropdown panel */}
      {dropdown === "tools" && (
        <div
          className="dropdown-panel"
          style={{ minWidth: "200px" }}
          onMouseEnter={() => openDropdown("tools")}
          onMouseLeave={closeDropdown}
        >
          {tools.map((l) => (
            <Link key={l.href} href={l.href} className="dropdown-link" onClick={() => setDropdown(null)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile overlay */}
      {open && (
        <div className="nav-mobile-overlay" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          {[
            { label: "Formulas", items: formulas, all: { label: "All formulas", href: "/formulas" } },
            { label: "Guides", items: guides, all: { label: "All guides", href: "/guides" } },
            { label: "Tools", items: tools, all: null },
          ].map((section, si) => (
            <div key={section.label} className="nav-mobile-section">
              <p className="nav-mobile-section-label">{section.label}</p>
              {section.items.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="nav-mobile-link"
                  onClick={() => setOpen(false)}
                  style={{ animation: `fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) ${(si * 4 + i) * 0.03 + 0.05}s forwards` }}
                >
                  {l.label}
                </Link>
              ))}
              {section.all && (
                <Link
                  href={section.all.href}
                  className="nav-mobile-link"
                  onClick={() => setOpen(false)}
                  style={{ color: "var(--accent)", animation: `fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) ${(si * 4 + section.items.length) * 0.03 + 0.05}s forwards` }}
                >
                  {section.all.label} →
                </Link>
              )}
            </div>
          ))}

          <div className="nav-mobile-section">
            <p className="nav-mobile-section-label">More</p>
            {[
              { label: "Alternatives", href: "/alternatives" },
              { label: "Automations", href: "/automations" },
            ].map((l, i) => (
              <Link key={l.href} href={l.href} className="nav-mobile-link" onClick={() => setOpen(false)}
                style={{ animation: `fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) ${(i + 12) * 0.03 + 0.05}s forwards` }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
