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

type Rec = { winner: string; why: string; alternatives: { name: string; reason: string }[] };

const RECOMMENDATIONS: Record<string, Rec> = {
  // Project + free
  "project-solo-free":   { winner: "Notion", why: "Notion's free plan is genuinely usable for solo project tracking. You get unlimited pages, basic databases, and a clean kanban view. Airtable's free plan caps at 1,000 records and 2 editors, which you hit faster than expected.", alternatives: [{ name: "Airtable", reason: "Better if your project work is data-heavy with lots of linked records." }, { name: "Google Sheets", reason: "Zero learning curve if you already live in Google Workspace." }] },
  "project-small-free":  { winner: "Notion", why: "For small teams on a zero budget, Notion's free tier supports up to 10 guests and covers light project tracking well. Airtable free is too limited for collaborative work at this size.", alternatives: [{ name: "Linear", reason: "Free for small teams and far better for software projects specifically." }, { name: "Trello", reason: "Simpler kanban if your team just needs a board and nothing else." }] },
  "project-small-low":   { winner: "Airtable", why: "At the Plus plan level, Airtable pulls ahead for project management. You get multiple views, automations, and enough records to run a real workflow. The relational data model handles dependencies better than Notion.", alternatives: [{ name: "Notion", reason: "Still a strong pick if your team prefers writing docs alongside tasks." }, { name: "Monday.com", reason: "More polished project dashboards if you need stakeholder reporting." }] },
  "project-mid-mid":     { winner: "Monday.com", why: "For teams of 11 to 50 doing project management with a real budget, Monday.com's reporting, resource management, and timeline views are hard to beat. Airtable requires more setup to get the same results.", alternatives: [{ name: "Airtable", reason: "Worth it if your projects involve complex relational data or custom tooling." }, { name: "Notion", reason: "Good if your team needs a combined wiki and project space." }] },
  "project-large-high":  { winner: "Monday.com", why: "At scale, Monday.com's enterprise features, permissions, and reporting make the most sense for project management. Airtable scales well too but requires more admin overhead.", alternatives: [{ name: "Airtable", reason: "Better if you need custom apps or interfaces built on top of your data." }, { name: "Jira", reason: "The default for large software engineering orgs." }] },

  // CRM
  "crm-solo-free":       { winner: "Airtable", why: "Airtable's free CRM template is genuinely good for solo use. You get contact tracking, deal stages, and linked records out of the box. Notion CRM templates require more setup for less payoff.", alternatives: [{ name: "HubSpot", reason: "HubSpot's free CRM is purpose-built and worth trying if you want pipeline views." }, { name: "Notion", reason: "Works fine if you already use Notion and just need a contact list." }] },
  "crm-small-low":       { winner: "Airtable", why: "For small sales teams on a modest budget, Airtable is the best CRM base you can build without paying for dedicated CRM software. Linked contacts, companies, and deals with automations cover 80% of what most small teams need.", alternatives: [{ name: "HubSpot Starter", reason: "More polished pipeline UI if your team lives in email." }, { name: "Notion", reason: "Viable if your CRM needs are lightweight and your team prefers docs." }] },
  "crm-mid-mid":         { winner: "HubSpot", why: "At this team size and budget, a dedicated CRM beats a DIY Airtable setup. HubSpot's Sales Hub gives you email tracking, sequences, and reporting that would take weeks to replicate in Airtable.", alternatives: [{ name: "Airtable", reason: "Still good if you need a highly customized data model that standard CRMs don't support." }, { name: "Pipedrive", reason: "Cleaner pipeline UI at a lower price point than HubSpot." }] },

  // Inventory
  "inventory-solo-free": { winner: "Google Sheets", why: "For solo inventory tracking on a free plan, Google Sheets is unbeatable. Formulas, conditional formatting, and sharing are all there with zero cost. Airtable free hits record limits quickly for inventory.", alternatives: [{ name: "Airtable", reason: "Better once you need barcode scanning, linked suppliers, or multiple views." }, { name: "Notion", reason: "Works for simple lists but formula support is weak for inventory math." }] },
  "inventory-small-low": { winner: "Airtable", why: "Once you have a team and a small budget, Airtable is the right inventory tool. Linked records for suppliers and products, barcode field support, gallery views for visual stock, and automations for low-stock alerts.", alternatives: [{ name: "Google Sheets", reason: "Still works if your inventory is simple and your team knows Sheets well." }, { name: "Notion", reason: "Not recommended for serious inventory tracking." }] },

  // HR
  "hr-solo-free":        { winner: "Notion", why: "For solo HR work on a free plan, Notion handles employee docs, onboarding checklists, and basic people tracking better than Airtable. Airtable's free plan is too restrictive for building out HR systems.", alternatives: [{ name: "Airtable", reason: "Switch to Airtable once you need structured data like leave tracking or org charts." }, { name: "Google Sheets", reason: "Works fine for headcount tracking and simple HR lists." }] },
  "hr-mid-mid":          { winner: "Airtable", why: "For mid-size HR teams, Airtable handles structured people data well. Employee records, onboarding workflows, leave tracking, and performance review cycles all fit naturally in a relational database.", alternatives: [{ name: "Notion", reason: "Better for knowledge bases and HR wikis alongside people data." }, { name: "Dedicated HRIS", reason: "Consider BambooHR or Rippling at this scale if you need payroll integration." }] },

  // Content
  "content-solo-free":   { winner: "Notion", why: "For solo content calendars, Notion's free plan is excellent. Calendar view, kanban for status tracking, and rich text drafts in the same row make it the best free content tool.", alternatives: [{ name: "Airtable", reason: "Better if you manage content across multiple clients or publications." }, { name: "Google Sheets", reason: "Workable for simple editorial calendars if you prefer spreadsheets." }] },
  "content-small-low":   { winner: "Airtable", why: "For small content teams with a budget, Airtable's content calendar template is hard to beat. Multiple views, attachment fields for assets, linked records for authors and categories, and automations for publishing workflows.", alternatives: [{ name: "Notion", reason: "Still strong if your team writes drafts in the same tool they plan in." }, { name: "CoSchedule", reason: "Purpose-built content calendar with social scheduling if you need that." }] },

  // Finance
  "finance-solo-free":   { winner: "Google Sheets", why: "For personal or solo finance tracking, Google Sheets with its formula power beats everything else on a free plan. Budget templates, pivot tables, and charts are all built in.", alternatives: [{ name: "Airtable", reason: "Worth considering if you need to link expenses to projects or clients." }, { name: "Notion", reason: "Not recommended for serious number crunching." }] },
  "finance-small-mid":   { winner: "Airtable", why: "For small teams tracking budgets, expenses, or financial data linked to projects, Airtable's relational model is the right fit. Link expenses to projects, clients, and categories without losing the spreadsheet feel.", alternatives: [{ name: "Google Sheets", reason: "Better for raw formula work and financial modeling." }, { name: "QuickBooks", reason: "If you need actual accounting, use accounting software." }] },

  // Dev
  "dev-solo-free":       { winner: "Notion", why: "For solo developers, Notion's free plan covers project notes, task tracking, and documentation in one place. Linear is also worth trying for pure task management.", alternatives: [{ name: "Linear", reason: "Better pure task tracker for software work, free for small teams." }, { name: "Airtable", reason: "Good if your work involves tracking data sets, not just tasks." }] },
  "dev-small-low":       { winner: "Linear", why: "For small dev teams on a low budget, Linear is the best-in-class tool. Fast, keyboard-driven, designed for engineers. Airtable is better when you need a custom data layer alongside your dev workflow.", alternatives: [{ name: "Airtable", reason: "Use it for data-heavy work like bug databases, client portals, or release tracking." }, { name: "Notion", reason: "Good for documentation and lightweight project tracking." }] },
  "dev-mid-mid":         { winner: "Airtable", why: "For mid-size dev teams with budget, Airtable shines as a flexible internal tool platform. Build custom views for QA, release tracking, client feedback, or feature requests on top of a shared data model.", alternatives: [{ name: "Linear", reason: "Keep Linear for sprint tracking and use Airtable for everything else." }, { name: "Jira", reason: "The default choice if your org already uses Atlassian products." }] },
};

function getRecommendation(useCase: string, teamSize: string, budget: string): Rec {
  const key = `${useCase}-${teamSize}-${budget}`;
  if (RECOMMENDATIONS[key]) return RECOMMENDATIONS[key];

  // Fallback logic
  const budgetMap: Record<string, Rec> = {
    free: {
      winner: "Notion",
      why: "On a free plan, Notion gives you the most flexibility. Airtable's free tier caps at 1,000 records and 2 editors, which limits most real workflows. Start with Notion and switch to Airtable once you have a budget.",
      alternatives: [{ name: "Google Sheets", reason: "Zero cost, no record limits, and powerful enough for many use cases." }, { name: "Airtable", reason: "Worth it once you hit Notion's database limits or need linked records." }],
    },
    low: {
      winner: "Airtable",
      why: "At under $20/month, Airtable's Plus plan gives you 5,000 records per base, multiple views, and basic automations. It outperforms Notion for structured data at this price point.",
      alternatives: [{ name: "Notion", reason: "Still competitive if your work mixes docs and databases." }, { name: "Google Sheets", reason: "Free alternative with more formula power but no relational data." }],
    },
    mid: {
      winner: "Airtable",
      why: "At this budget, Airtable's Pro plan unlocks the full feature set: unlimited records, advanced automations, interface designer, and custom views. It handles most business workflows without needing additional tools.",
      alternatives: [{ name: "Monday.com", reason: "More polished dashboards and reporting for project-heavy teams." }, { name: "Notion", reason: "Consider it for teams that need a combined wiki and database." }],
    },
    high: {
      winner: "Airtable",
      why: "At a high budget, Airtable Enterprise gives you SSO, advanced permissions, audit logs, and dedicated support. It scales well as a custom internal tool platform.",
      alternatives: [{ name: "Monday.com", reason: "Stronger out-of-the-box reporting and project management dashboards." }, { name: "Salesforce", reason: "For CRM or sales-heavy workflows at enterprise scale." }],
    },
  };

  return budgetMap[budget] || budgetMap.mid;
}

export default function AlternativePicker() {
  const [useCase, setUseCase] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState<Rec | null>(null);

  const canRun = useCase && teamSize && budget;

  const getResult = () => {
    if (!canRun) return;
    setResult(getRecommendation(useCase, teamSize, budget));
  };

  const SelectGroup = ({ label, options, value, onChange }: { label: string; options: Option[]; value: string; onChange: (v: string) => void }) => (
    <div>
      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: "8px" }}>{label}</p>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "6px" }}>
        {options.map((o) => (
          <button key={o.id} onClick={() => onChange(o.id)} style={{ padding: "7px 14px", borderRadius: "999px", border: `1px solid ${value === o.id ? "var(--accent)" : "var(--border)"}`, background: value === o.id ? "var(--accent-subtle)" : "var(--card)", color: value === o.id ? "var(--accent)" : "var(--ink-2)", fontSize: "13px", fontWeight: value === o.id ? 600 : 450, cursor: "pointer", transition: "all 0.2s ease", fontFamily: "var(--font-geist-sans)" }}>
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-xl)", padding: "2px", boxShadow: "0 8px 48px rgba(0,0,0,0.08)" }}>
      <div style={{ background: "var(--bg)", borderRadius: "calc(var(--radius-xl) - 2px)", padding: "32px", display: "flex", flexDirection: "column" as const, gap: "24px" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "var(--accent-subtle)", borderRadius: "999px", padding: "4px 12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Tool Picker</span>
          </div>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>Find the right tool for your situation</h3>
          <p style={{ margin: "4px 0 0", fontSize: "13px", color: "var(--ink-3)" }}>Airtable is not always the answer. Tell us what you&apos;re building.</p>
        </div>
        <SelectGroup label="What are you building?" options={USE_CASES} value={useCase} onChange={(v) => { setUseCase(v); setResult(null); }} />
        <SelectGroup label="Team size" options={TEAM_SIZES} value={teamSize} onChange={(v) => { setTeamSize(v); setResult(null); }} />
        <SelectGroup label="Budget" options={BUDGETS} value={budget} onChange={(v) => { setBudget(v); setResult(null); }} />

        <button onClick={getResult} disabled={!canRun} style={{ background: canRun ? "var(--accent)" : "var(--bg-2)", color: canRun ? "#fff" : "var(--ink-3)", border: "none", borderRadius: "999px", padding: "13px 28px", fontSize: "14px", fontWeight: 600, cursor: canRun ? "pointer" : "not-allowed", transition: "all 0.25s ease", alignSelf: "flex-start" as const, fontFamily: "var(--font-geist-sans)" }}>
          Get Recommendation
        </button>

        {result && (
          <div style={{ animation: "fadeUp 0.4s cubic-bezier(0.32,0.72,0,1) forwards" }}>
            <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px", marginBottom: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                <div style={{ background: "var(--accent)", color: "#fff", borderRadius: "999px", padding: "3px 12px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Best fit</div>
                <span style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.03em" }}>{result.winner}</span>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: "1.7" }}>{result.why}</p>
            </div>
            {result.alternatives.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
                {result.alternatives.map((alt) => (
                  <div key={alt.name} style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "14px 18px", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink)", minWidth: "90px", flexShrink: 0 }}>{alt.name}</span>
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
