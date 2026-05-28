"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { useState } from "react";

const formulas = [
  {
    "name": "Full Name from First and Last",
    "use": "Combine separate name fields into one display name.",
    "formula": "TRIM({First Name} & \" \" & {Last Name})",
    "note": "TRIM removes any extra spaces if one of the fields is empty."
  },
  {
    "name": "Extract Domain from Email",
    "use": "Pull the domain out of an email address for company matching.",
    "formula": "MID({Email}, FIND(\"@\", {Email}) + 1, LEN({Email}))",
    "note": "Returns everything after the @ symbol. 'jane@example.com' becomes 'example.com'."
  },
  {
    "name": "Capitalize First Letter",
    "use": "Fix lowercase names or titles that were entered inconsistently.",
    "formula": "UPPER(LEFT({Name}, 1)) & LOWER(MID({Name}, 2, LEN({Name})))",
    "note": "Only capitalizes the first character. For title case across all words, you need a more complex formula or a script."
  },
  {
    "name": "Truncate Long Text with Ellipsis",
    "use": "Show a short preview of a long description field.",
    "formula": "IF(LEN({Description}) > 100, LEFT({Description}, 100) & \"...\", {Description})",
    "note": "Change 100 to however many characters you want before the cutoff."
  },
  {
    "name": "Remove Spaces from Text",
    "use": "Clean up text that has extra internal or surrounding spaces.",
    "formula": "TRIM(SUBSTITUTE({Field}, \"  \", \" \"))",
    "note": "TRIM handles leading and trailing spaces. SUBSTITUTE catches double spaces in the middle."
  },
  {
    "name": "Count Words in a Field",
    "use": "Count how many words are in a text field.",
    "formula": "LEN(TRIM({Text})) - LEN(SUBSTITUTE(TRIM({Text}), \" \", \"\")) + 1",
    "note": "Works by counting spaces plus one. Returns 0 for empty fields, so wrap in IF({Text} = \"\", 0, ...) if needed."
  },
  {
    "name": "Check if Text Contains a Word",
    "use": "Return true if a text field contains a specific word or phrase.",
    "formula": "IF(FIND(\"urgent\", LOWER({Notes})), TRUE(), FALSE())",
    "note": "LOWER makes it case-insensitive. FIND returns 0 if not found, which IF treats as false."
  }
];

export default function FormulaPage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (formula: string, name: string) => {
    await navigator.clipboard.writeText(formula);
    setCopied(name);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/formulas" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All formulas
          </Link>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 12px" }}>
            Text & String Formulas
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 24px", maxWidth: "600px" }}>
            Name formatting, email parsing, text cleanup, concatenation. The formulas for making your text fields useful.
          </p>
          <Link href="/formula-builder" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--accent)", color: "#fff", padding: "10px 20px", borderRadius: "999px", textDecoration: "none", fontSize: "13px", fontWeight: 600 }}>
            Need something else? Try the Builder
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </section>

        <section style={{ paddingBottom: "96px", display: "flex", flexDirection: "column" as const, gap: "16px" }}>
          {formulas.map((f, i) => (
            <div
              key={f.name}
              className="observe-reveal"
              style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", transitionDelay: `${i * 0.05}s` }}
            >
              <div style={{ padding: "24px 24px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", marginBottom: "8px" }}>
                  <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>{f.name}</h2>
                </div>
                <p style={{ margin: "0 0 16px", fontSize: "14px", color: "var(--ink-3)", lineHeight: 1.5 }}>{f.use}</p>
              </div>
              <div style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <code style={{ fontFamily: "var(--font-geist-mono)", fontSize: "13px", color: "var(--accent)", lineHeight: 1.5, flex: 1, wordBreak: "break-all" as const }}>
                  {f.formula}
                </code>
                <button
                  onClick={() => copy(f.formula, f.name)}
                  style={{ background: copied === f.name ? "var(--accent)" : "var(--card)", color: copied === f.name ? "#fff" : "var(--ink-2)", border: "1px solid var(--border)", borderRadius: "999px", padding: "6px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s ease", flexShrink: 0, fontFamily: "var(--font-geist-sans)" }}
                >
                  {copied === f.name ? "Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ padding: "14px 24px" }}>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--ink-3)", lineHeight: 1.6 }}>{f.note}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
