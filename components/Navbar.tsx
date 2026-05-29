"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Formula Cookbook", href: "/formulas" },
  { label: "Guides", href: "/guides" },
  { label: "Alternatives", href: "/alternatives" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

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
          max-width: 900px;
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
        }
        .nav-logo span { color: var(--accent); }
        .nav-link {
          font-size: 13px;
          color: var(--ink-2);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 999px;
          transition: background 0.2s ease, color 0.2s ease;
          font-weight: 450;
        }
        .nav-link:hover {
          background: var(--bg-2);
          color: var(--ink);
        }
        .nav-cta {
          font-size: 13px;
          font-weight: 600;
          color: #fff !important;
          background: var(--accent);
          padding: 7px 18px;
          border-radius: 999px;
          text-decoration: none;
          margin-left: 4px;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .nav-cta:hover {
          background: var(--accent-2);
          transform: scale(1.02);
        }
        .nav-links-desktop {
          display: flex;
          gap: 4px;
          align-items: center;
        }
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
          gap: 8px;
        }
        .nav-mobile-link {
          font-size: 28px;
          font-weight: 700;
          color: var(--ink);
          text-decoration: none;
          letter-spacing: -0.03em;
          padding: 8px 0;
          opacity: 0;
          transform: translateY(16px);
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-hamburger { display: none !important; }
          .nav-links-desktop { display: flex !important; }
        }
      `}</style>

      <nav className={`nav-pill${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="nav-logo">
          AirtableFormulas<span>.com</span>
        </Link>

        <div className="nav-links-desktop">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
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

      {open && (
        <div className="nav-mobile-overlay" onClick={() => setOpen(false)}>
          {[...links, { label: "Try Builder", href: "/formula-builder" }].map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
              style={{ animation: `fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) ${i * 0.07 + 0.05}s forwards` }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
