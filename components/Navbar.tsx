"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Formula Cookbook", href: "/formulas" },
  { label: "Guides", href: "/guides" },
  { label: "Automations", href: "/automations" },
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

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "calc(100% - 40px)",
          maxWidth: "900px",
          backgroundColor: scrolled ? "rgba(253,251,247,0.92)" : "rgba(253,251,247,0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid var(--border)",
          borderRadius: "999px",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.5s cubic-bezier(0.32,0.72,0,1)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "0 2px 8px rgba(0,0,0,0.04)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-geist-sans)",
            fontWeight: 700,
            fontSize: "15px",
            color: "var(--ink)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          AirtableFormulas
          <span style={{ color: "var(--accent)", marginLeft: "1px" }}>.com</span>
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontSize: "13px",
                color: "var(--ink-2)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "999px",
                transition: "all 0.25s cubic-bezier(0.32,0.72,0,1)",
                fontWeight: 450,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "var(--bg-2)";
                (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/formula-builder"
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              backgroundColor: "var(--accent)",
              padding: "7px 18px",
              borderRadius: "999px",
              textDecoration: "none",
              marginLeft: "4px",
              transition: "all 0.25s cubic-bezier(0.32,0.72,0,1)",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-2)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Try Builder
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
            display: "none",
          }}
          className="show-mobile"
        >
          <div style={{ position: "relative", width: "20px", height: "16px" }}>
            <span
              style={{
                position: "absolute",
                width: "20px",
                height: "1.5px",
                backgroundColor: "var(--ink)",
                top: open ? "7px" : "0",
                transform: open ? "rotate(45deg)" : "none",
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "20px",
                height: "1.5px",
                backgroundColor: "var(--ink)",
                top: "7px",
                opacity: open ? 0 : 1,
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
            />
            <span
              style={{
                position: "absolute",
                width: "20px",
                height: "1.5px",
                backgroundColor: "var(--ink)",
                top: open ? "7px" : "14px",
                transform: open ? "rotate(-45deg)" : "none",
                transition: "all 0.3s cubic-bezier(0.32,0.72,0,1)",
              }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            backgroundColor: "rgba(253,251,247,0.97)",
            backdropFilter: "blur(24px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: "28px",
                fontWeight: 600,
                color: "var(--ink)",
                textDecoration: "none",
                letterSpacing: "-0.03em",
                opacity: 0,
                transform: "translateY(16px)",
                animation: `fadeUp 0.5s cubic-bezier(0.32,0.72,0,1) ${i * 0.07 + 0.1}s forwards`,
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
