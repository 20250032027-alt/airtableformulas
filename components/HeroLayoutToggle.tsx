"use client";
import { useEffect, useState } from "react";

export default function HeroLayoutToggle() {
  const [layout, setLayout] = useState<"centered" | "asymmetric">("centered");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("heroLayout") as "centered" | "asymmetric" | null;
    if (saved) setLayout(saved);
  }, []);

  const toggle = () => {
    const next = layout === "centered" ? "asymmetric" : "centered";
    setLayout(next);
    localStorage.setItem("heroLayout", next);
    document.documentElement.setAttribute("data-hero", next);
  };

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("data-hero", layout);
    }
  }, [layout, mounted]);

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      title={`Switch to ${layout === "centered" ? "asymmetric" : "centered"} hero`}
      aria-label={`Switch to ${layout === "centered" ? "asymmetric" : "centered"} hero layout`}
      style={{
        position: "fixed",
        bottom: "76px",
        right: "24px",
        zIndex: 200,
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "var(--card)",
        border: "1px solid var(--border-2)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        transition: "all 0.25s cubic-bezier(0.32,0.72,0,1)",
        color: layout === "asymmetric" ? "var(--accent)" : "var(--ink-2)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.18)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "scale(1)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.12)";
      }}
    >
      {/* Layout icon */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {layout === "centered" ? (
          /* Centered icon — centered lines */
          <>
            <rect x="3" y="3" width="18" height="4" rx="1" />
            <rect x="6" y="10" width="12" height="2.5" rx="1" />
            <rect x="8" y="15.5" width="8" height="2.5" rx="1" />
          </>
        ) : (
          /* Asymmetric icon — split columns */
          <>
            <rect x="3" y="3" width="8" height="18" rx="1" />
            <rect x="14" y="3" width="7" height="8" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </>
        )}
      </svg>
    </button>
  );
}
