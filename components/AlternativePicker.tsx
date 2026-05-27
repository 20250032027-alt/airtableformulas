"use client";
import { useState } from "react";

type Option = { id: string; label: string };

const USE_CASES: Option[] = [
  { id: "project", label: "Project Management" },
  { id: "crm", label: "CRM / Sales" },
  { id: "inventory", label: "Inventory Tracking" },
  { id: "hr", label: "HR / People Ops" },
  { id: "content", label: "Content Calendar" },
  { id: "finance", label: "Budgeting / Finance" },
  { id: "dev", label: "Dev / Engineering" },
];

const TEAM_SIZES: Option[] = [
  { id: "solo", label: "Just me" },
  { id: "small", label: "2 to 10" },
  { id: "mid", label: "11 to 50" },
  { id: "large", label: "50+" },
];

const BUDGETS: Option[] = [
  { id: "free", label: "Free only" },
  { id: "low", label: "Under $20/mo" },
  { id: "mid", label: "$20 to $100/mo" },
  { id: "high", label: "$100+/mo" },
];

type Result = {
  winner: string;
  why: string;
  alternatives: { name: string; reason: string }[];
};

export default function AlternativePicker() {
  const [useCase, setUseCase] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canRun = useCase && teamSize && budget;

  const getRecommendation = async () => {
    if (!canRun) return;
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const res = await fetch("/api/alternative", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ useCase, teamSize, budget }),
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError("Could not fetch a recommendation. Try again.");
      console.error(err);
    }
    setLoading(false);
  };

  const SelectGroup = ({
    label, options, value, onChange,
  }: { label: string; options: Option[]; value: string; onChange: (v: string) => void }) => (
    <div>
      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "8px" }}>
        {label}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
        {options.map((o) => (
          <button
            key={o.id}
            onClick={() => onChange(o.id)}
            style={{
              padding: "7px 14px", borderRadius: "999px",
              border: `1px solid ${value === o.id ? "var(--accent)" : "var(--border)"}`,
              background: value === o.id ? "var(--accent-subtle)" : "var(--card)",
              color: value === o.id ? "var(--accent)" : "var(--ink-2)",
              fontSize: "13px", fontWeight: value === o.id ? 600 : 450,
              cursor: "pointer", transition: "all 0.2s cubic-bezier(0.32,0.72,0,1)",
              fontFamily: "var(--font-geist-sans)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        background: "var(--card)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-xl)", padding: "2px",
        boxShadow: "0 8px 48px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          background: "var(--bg)", borderRadius: "calc(var(--radius-xl) - 2px)",
          padding: "32px", display: "flex", flexDirection: "column" as const, gap: "24px",
        }}
      >
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--accent-subtle)", borderRadius: "999px", padding: "4px 12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Tool Picker</span>
          </div>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>
            Find the right tool for your situation
          </h3>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--ink-3)" }}>
            Airtable is not always the answer. Tell us what you&apos;re building.
          </p>
        </div>

        <SelectGroup label="What are you building?" options={USE_CASES} value={useCase} onChange={setUseCase} />
        <SelectGroup label="Team size" options={TEAM_SIZES} value={teamSize} onChange={setTeamSize} />
        <SelectGroup label="Budget" options={BUDGETS} value={budget} onChange={setBudget} />

        <button
          onClick={getRecommendation}
          disabled={!canRun || loading}
          style={{
            background: canRun && !loading ? "var(--accent)" : "var(--bg-2)",
            color: canRun && !loading ? "#fff" : "var(--ink-3)",
            border: "none", borderRadius: "999px", padding: "13px 28px",
            fontSize: "14px", fontWeight: 600,
            cursor: canRun && !loading ? "pointer" : "not-allowed",
            transition: "all 0.25s cubic-bezier(0.32,0.72,0,1)",
            alignSelf: "flex-start" as const,
            fontFamily: "var(--font-geist-sans)",
          }}
        >
          {loading ? "Comparing tools..." : "Get Recommendation"}
        </button>

        {error && (
          <div style={{ padding: "12px 16px", background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "var(--radius-sm)", fontSize: "13px", color: "#DC2626" }}>
            {error}
          </div>
        )}

        {result && (
          <div style={{ animation: "fadeUp 0.5s cubic-bezier(0.32,0.72,0,1) forwards" }}>
            <div
              style={{
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "24px", marginBottom: "12px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{ background: "var(--accent)", color: "#fff", borderRadius: "999px", padding: "3px 12px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>
                  Best fit
                </div>
                <span style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>
                  {result.winner}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.7" }}>
                {result.why}
              </p>
            </div>

            {result.alternatives.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {result.alternatives.map((alt) => (
                  <div
                    key={alt.name}
                    style={{
                      background: "var(--card)", border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)", padding: "14px 18px",
                      display: "flex", alignItems: "flex-start", gap: "12px",
                    }}
                  >
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink)", minWidth: "80px" }}>{alt.name}</span>
                    <span style={{ fontSize: "13px", color: "var(--ink-2)", lineHeight: "1.5" }}>{alt.reason}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
