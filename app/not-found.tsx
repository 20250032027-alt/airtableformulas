"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

const suggestions = [
  { label: "Formula Cookbook", href: "/formulas", desc: "200+ ready-to-paste formulas" },
  { label: "Formula Builder", href: "/formula-builder", desc: "Describe it, get the formula" },
  { label: "Guides", href: "/guides", desc: "Linked records, permissions, pricing" },
  { label: "Alternatives", href: "/alternatives", desc: "Honest tool comparisons" },
];

export default function NotFound() {
  return (
    <>
      <style>{`
        .not-found-link {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px 20px;
          text-decoration: none;
          display: block;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .not-found-link:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .not-found-link-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 3px;
        }
        .not-found-link-desc {
          font-size: 13px;
          color: var(--ink-3);
          margin: 0;
        }
      `}</style>
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "560px", margin: "0 auto", padding: "140px 24px 96px", textAlign: "center" }}>
        <div style={{ fontSize: "56px", marginBottom: "16px" }}>404</div>
        <h1 style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 12px" }}>
          Page not found
        </h1>
        <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.6, margin: "0 0 40px" }}>
          That page doesn&apos;t exist. If you were looking for a formula, the cookbook or builder should have what you need.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", textAlign: "left" }}>
          {suggestions.map((s) => (
            <Link key={s.href} href={s.href} className="not-found-link">
              <p className="not-found-link-title">{s.label}</p>
              <p className="not-found-link-desc">{s.desc}</p>
            </Link>
          ))}
        </div>
        <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "32px", fontSize: "14px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Back to homepage
        </Link>
      </main>
      <Footer />
    </>
  );
}
