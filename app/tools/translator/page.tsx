"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

const LANGUAGES = [
  "French", "Spanish", "German", "Portuguese", "Italian",
  "Dutch", "Polish", "Japanese", "Chinese (Simplified)", "Chinese (Traditional)",
  "Korean", "Arabic", "Russian", "Turkish", "Swedish",
  "Norwegian", "Danish", "Finnish", "Czech", "Hungarian",
  "Romanian", "Greek", "Hebrew", "Thai", "Vietnamese",
  "Indonesian", "Malay", "Filipino", "Swahili", "Hindi",
];

type Field = { name: string; value: string };
type Translation = { name: string; original: string; translated: string };

export default function TranslatorPage() {
  const [fields, setFields] = useState<Field[]>([
    { name: "Name", value: "" },
    { name: "Description", value: "" },
  ]);
  const [targetLanguage, setTargetLanguage] = useState("French");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Translation[] | null>(null);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [csvCopied, setCsvCopied] = useState(false);

  const addField = () => {
    setFields([...fields, { name: `Field ${fields.length + 1}`, value: "" }]);
  };

  const removeField = (i: number) => {
    setFields(fields.filter((_, idx) => idx !== i));
  };

  const updateField = (i: number, key: "name" | "value", val: string) => {
    const updated = [...fields];
    updated[i] = { ...updated[i], [key]: val };
    setFields(updated);
  };

  const hasContent = fields.some((f) => f.value.trim());

  const translate = async () => {
    const populated = fields.filter((f) => f.value.trim());
    if (!populated.length) return;
    setLoading(true);
    setResults(null);
    setError("");

    try {
      const res = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fields: populated, targetLanguage }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResults(data.translations);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
    setLoading(false);
  };

  const copyOne = async (text: string, i: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(i);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const copyAllCsv = async () => {
    if (!results) return;
    const header = "Field Name,Original,Translated";
    const rows = results.map(
      (r) => `"${r.name}","${r.original.replace(/"/g, '""')}","${r.translated.replace(/"/g, '""')}"`
    );
    await navigator.clipboard.writeText([header, ...rows].join("\n"));
    setCsvCopied(true);
    setTimeout(() => setCsvCopied(false), 2500);
  };

  return (
    <>
      <style>{`
        .tl-input {
          width: 100%;
          padding: 10px 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          min-height: 44px;
        }
        .tl-input:focus { border-color: var(--accent); }
        .tl-input::placeholder { color: var(--ink-3); }
        .tl-textarea {
          width: 100%;
          padding: 10px 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
          resize: vertical;
          min-height: 80px;
          line-height: 1.5;
        }
        .tl-textarea:focus { border-color: var(--accent); }
        .tl-textarea::placeholder { color: var(--ink-3); }
        .tl-select {
          padding: 10px 36px 10px 14px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          outline: none;
          transition: border-color 0.2s ease;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%238A8278' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          min-height: 44px;
          min-width: 180px;
        }
        .tl-select:focus { border-color: var(--accent); }
        .field-row {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 16px;
          display: grid;
          grid-template-columns: 160px 1fr auto;
          gap: 10px;
          align-items: start;
          transition: border-color 0.2s ease;
        }
        .field-row:focus-within { border-color: var(--accent); }
        .remove-btn {
          background: none;
          border: 1px solid var(--border);
          border-radius: 8px;
          width: 32px;
          height: 32px;
          cursor: pointer;
          color: var(--ink-3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 6px;
          flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }
        .remove-btn:hover { border-color: #DC2626; color: #DC2626; }
        .result-card {
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          overflow: hidden;
          animation: fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) both;
        }
        .result-header {
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
          padding: 10px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .result-field-name {
          font-size: 11px;
          font-weight: 700;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0;
        }
        .copy-small {
          background: none;
          border: 1px solid var(--border);
          border-radius: 999px;
          padding: 3px 12px;
          font-size: 11px;
          font-weight: 600;
          cursor: pointer;
          color: var(--ink-3);
          font-family: var(--font-geist-sans);
          transition: all 0.2s ease;
          min-height: 28px;
        }
        .copy-small:hover { border-color: var(--accent); color: var(--accent); }
        .copy-small-done { background: var(--accent); color: #fff; border-color: var(--accent); }
        .result-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .result-col {
          padding: 14px 16px;
        }
        .result-col-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin: 0 0 6px;
        }
        .result-col-text {
          font-size: 14px;
          color: var(--ink);
          line-height: 1.6;
          margin: 0;
        }
        .result-col-translated { border-left: 1px solid var(--border); background: var(--bg); }
        @media (max-width: 600px) {
          .field-row { grid-template-columns: 1fr auto; }
          .field-row .tl-input:first-child { grid-column: 1; }
          .field-row .tl-textarea { grid-column: 1 / -1; }
          .result-cols { grid-template-columns: 1fr; }
          .result-col-translated { border-left: none; border-top: 1px solid var(--border); }
        }
      `}</style>

      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/guides/translation" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Translation guide
          </Link>

          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A4A8A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A4A8A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Free tool</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 14px" }}>
            Airtable Field Translator
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0", maxWidth: "560px" }}>
            Paste your Airtable field values, pick a language, get translations ready to copy back in.
            Airtable has no built-in translate function. This fills that gap.
          </p>
        </section>

        {/* Tool */}
        <section style={{ paddingBottom: "96px" }}>

          {/* Language selector */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px", flexWrap: "wrap" as const }}>
            <label style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-2)" }}>
              Translate to:
            </label>
            <select
              className="tl-select"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
              aria-label="Target language"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>

          {/* Field inputs */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px", marginBottom: "16px" }}>
            {fields.map((field, i) => (
              <div key={i} className="field-row">
                <input
                  className="tl-input"
                  value={field.name}
                  onChange={(e) => updateField(i, "name", e.target.value)}
                  placeholder="Field name"
                  aria-label={`Field ${i + 1} name`}
                />
                <textarea
                  className="tl-textarea"
                  value={field.value}
                  onChange={(e) => updateField(i, "value", e.target.value)}
                  placeholder="Paste field value here..."
                  aria-label={`Field ${i + 1} value`}
                  rows={2}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeField(i)}
                  aria-label={`Remove field ${i + 1}`}
                  disabled={fields.length === 1}
                  style={{ opacity: fields.length === 1 ? 0.3 : 1, cursor: fields.length === 1 ? "not-allowed" : "pointer" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Add field + Translate */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "32px", flexWrap: "wrap" as const }}>
            <button
              onClick={addField}
              style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "999px", padding: "9px 18px", fontSize: "13px", fontWeight: 500, color: "var(--ink-2)", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px", transition: "all 0.2s ease", fontFamily: "var(--font-geist-sans)", minHeight: "44px" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-2)"; }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg>
              Add field
            </button>

            <button
              onClick={translate}
              disabled={loading || !hasContent}
              style={{
                background: loading || !hasContent ? "var(--bg-2)" : "var(--accent)",
                color: loading || !hasContent ? "var(--ink-3)" : "#fff",
                border: "none", borderRadius: "999px", padding: "9px 24px",
                fontSize: "14px", fontWeight: 600,
                cursor: loading || !hasContent ? "not-allowed" : "pointer",
                transition: "all 0.25s ease", fontFamily: "var(--font-geist-sans)",
                display: "flex", alignItems: "center", gap: "8px", minHeight: "44px",
              }}
            >
              {loading ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 1s linear infinite" }}>
                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                  </svg>
                  Translating...
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
                  </svg>
                  Translate to {targetLanguage}
                </>
              )}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "var(--radius-sm)", padding: "12px 16px", fontSize: "14px", color: "#DC2626", marginBottom: "24px" }}>
              {error}
            </div>
          )}

          {/* Results */}
          {results && results.length > 0 && (
            <div style={{ animation: "fadeUp 0.5s cubic-bezier(0.32,0.72,0,1) forwards" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px", flexWrap: "wrap" as const, gap: "10px" }}>
                <h2 style={{ margin: 0, fontSize: "16px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em" }}>
                  {results.length} field{results.length !== 1 ? "s" : ""} translated to {targetLanguage}
                </h2>
                <button
                  onClick={copyAllCsv}
                  className={`copy-small ${csvCopied ? "copy-small-done" : ""}`}
                >
                  {csvCopied ? "CSV copied!" : "Copy all as CSV"}
                </button>
              </div>

              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {results.map((r, i) => (
                  <div
                    key={i}
                    className="result-card"
                    style={{ animationDelay: `${i * 0.06}s` }}
                  >
                    <div className="result-header">
                      <p className="result-field-name">{r.name}</p>
                      <button
                        className={`copy-small ${copiedIndex === i ? "copy-small-done" : ""}`}
                        onClick={() => copyOne(r.translated, i)}
                      >
                        {copiedIndex === i ? "Copied!" : "Copy translation"}
                      </button>
                    </div>
                    <div className="result-cols">
                      <div className="result-col">
                        <p className="result-col-label">Original</p>
                        <p className="result-col-text">{r.original}</p>
                      </div>
                      <div className="result-col result-col-translated">
                        <p className="result-col-label">{targetLanguage}</p>
                        <p className="result-col-text" style={{ fontWeight: 500 }}>{r.translated}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "12px", color: "var(--ink-3)", marginTop: "12px", lineHeight: 1.5 }}>
                Translations are AI-generated. Review before pasting into a client-facing base.
                For bulk translation of entire tables, see the{" "}
                <Link href="/guides/translation" style={{ color: "var(--accent)", textDecoration: "none" }}>
                  translation guide
                </Link>.
              </p>
            </div>
          )}
        </section>

      </main>

      <Footer />

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
