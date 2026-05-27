"use client";
import { useState } from "react";

const EXAMPLES = [
  "Calculate business days between two dates, excluding weekends",
  "Show 'Overdue' if due date has passed, otherwise show days remaining",
  "Concatenate first name and last name with a space",
  "Return the quarter (Q1, Q2, Q3, Q4) from a date field",
];

export default function FormulaBuilder() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<{ formula: string; explanation: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const buildFormula = async (q?: string) => {
    const input = q || query;
    if (!input.trim()) return;
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("/api/formula", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: input }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError("Something went wrong. Try rephrasing your request.");
      console.error(err);
    }
    setLoading(false);
  };

  const copy = async () => {
    if (!result) return;
    await navigator.clipboard.writeText(result.formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)",
        padding: "2px",
        boxShadow: "0 8px 48px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          background: "var(--bg)",
          borderRadius: "calc(var(--radius-xl) - 2px)",
          padding: "32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "20px" }}>
          <div
            style={{
              width: "36px", height: "36px", borderRadius: "10px",
              background: "var(--accent-subtle)", display: "flex",
              alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
            </svg>
          </div>
          <div>
            <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>
              Airtable Formula Builder
            </h3>
            <p style={{ margin: "2px 0 0", fontSize: "13px", color: "var(--ink-3)" }}>
              Describe what you need in plain English
            </p>
          </div>
        </div>

        <div
          style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-md)", overflow: "hidden" }}
          onFocusCapture={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onBlurCapture={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="e.g. Calculate business days between two dates, excluding weekends"
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); buildFormula(); } }}
            style={{
              width: "100%", padding: "16px", background: "var(--card)",
              border: "none", outline: "none", resize: "none" as const,
              fontSize: "14px", color: "var(--ink)", fontFamily: "var(--font-geist-sans)",
              lineHeight: "1.6", minHeight: "80px",
            }}
          />
          <div
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "10px 16px", background: "var(--bg)", borderTop: "1px solid var(--border)",
            }}
          >
            <span style={{ fontSize: "12px", color: "var(--ink-3)" }}>Press Enter to generate</span>
            <button
              onClick={() => buildFormula()}
              disabled={loading || !query.trim()}
              style={{
                background: loading || !query.trim() ? "var(--bg-2)" : "var(--accent)",
                color: loading || !query.trim() ? "var(--ink-3)" : "#fff",
                border: "none", borderRadius: "999px", padding: "8px 20px",
                fontSize: "13px", fontWeight: 600,
                cursor: loading || !query.trim() ? "not-allowed" : "pointer",
                transition: "all 0.25s cubic-bezier(0.32,0.72,0,1)",
                display: "flex", alignItems: "center", gap: "6px",
                fontFamily: "var(--font-geist-sans)",
              }}
            >
              {loading ? "Building..." : "Generate Formula"}
            </button>
          </div>
        </div>

        {/* Examples */}
        <div style={{ marginTop: "14px" }}>
          <p style={{ fontSize: "12px", color: "var(--ink-3)", marginBottom: "8px", fontWeight: 500 }}>
            Try an example:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                onClick={() => { setQuery(ex); buildFormula(ex); }}
                style={{
                  background: "var(--card)", border: "1px solid var(--border)",
                  borderRadius: "999px", padding: "5px 12px", fontSize: "12px",
                  color: "var(--ink-2)", cursor: "pointer",
                  transition: "all 0.2s ease", fontFamily: "var(--font-geist-sans)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-2)"; }}
              >
                {ex.length > 42 ? ex.slice(0, 42) + "..." : ex}
              </button>
            ))}
          </div>
        </div>

        {/* Error */}
        {error && (
          <div style={{ marginTop: "16px", padding: "12px 16px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "var(--radius-sm)", fontSize: "13px", color: "#DC2626" }}>
            {error}
          </div>
        )}

        {/* Result */}
        {result && (
          <div
            style={{
              marginTop: "20px", background: "var(--card)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", overflow: "hidden",
              animation: "fadeUp 0.5s cubic-bezier(0.32,0.72,0,1) forwards",
            }}
          >
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", borderBottom: "1px solid var(--border)", background: "var(--bg)",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                Your Formula
              </span>
              <button
                onClick={copy}
                style={{
                  background: copied ? "var(--accent)" : "var(--bg-2)",
                  color: copied ? "#fff" : "var(--ink-2)",
                  border: "none", borderRadius: "999px", padding: "5px 14px",
                  fontSize: "12px", fontWeight: 600, cursor: "pointer",
                  transition: "all 0.2s ease", fontFamily: "var(--font-geist-sans)",
                }}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <div style={{ padding: "16px" }}>
              <code
                style={{
                  display: "block", fontFamily: "var(--font-geist-mono)", fontSize: "14px",
                  color: "var(--accent)", lineHeight: "1.6", wordBreak: "break-all" as const,
                  marginBottom: "12px",
                }}
              >
                {result.formula}
              </code>
              <p
                style={{
                  margin: 0, fontSize: "13px", color: "var(--ink-2)", lineHeight: "1.6",
                  borderTop: "1px solid var(--border)", paddingTop: "12px",
                }}
              >
                {result.explanation}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
