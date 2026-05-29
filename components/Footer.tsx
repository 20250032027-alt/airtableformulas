import Link from "next/link";

const sections = [
  {
    heading: "Formulas",
    links: [
      { label: "Date & Time", href: "/formulas/date-time" },
      { label: "Conditional Logic", href: "/formulas/conditional" },
      { label: "Text & String", href: "/formulas/text" },
      { label: "Math & Numbers", href: "/formulas/math" },
      { label: "Lookup & Rollup", href: "/formulas/lookup" },
      { label: "Boolean & Checkboxes", href: "/formulas/boolean" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Linked Records Explained", href: "/guides/linked-records" },
      { label: "Automations Guide", href: "/automations" },
      { label: "Permissions Guide", href: "/guides/permissions" },
      { label: "Pricing Reality Check", href: "/guides/pricing" },
      { label: "Record Limit Survival", href: "/guides/record-limits" },
      { label: "Generate PDFs", href: "/guides/pdf-generation" },
      { label: "Scripting in Airtable", href: "/guides/scripting" },
      { label: "Translation Guide", href: "/guides/translation" },
      { label: "Interface Designer", href: "/guides/interfaces" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "Airtable vs Notion", href: "/alternatives/airtable-vs-notion" },
      { label: "Airtable vs Google Sheets", href: "/alternatives/airtable-vs-sheets" },
      { label: "All Alternatives", href: "/alternatives" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Formula Builder", href: "/formula-builder" },
      { label: "Formula Cookbook", href: "/formulas" },
      { label: "Tool Picker", href: "/alternatives" },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          border-top: 1px solid var(--border);
          padding: 64px 24px 40px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }
        .footer-logo {
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          letter-spacing: -0.02em;
          margin-bottom: 10px;
          display: block;
          text-decoration: none;
        }
        .footer-logo span { color: var(--accent); }
        .footer-tagline {
          font-size: 14px;
          color: var(--ink-3);
          line-height: 1.7;
          max-width: 240px;
          margin: 0;
        }
        .footer-heading {
          font-size: 11px;
          font-weight: 700;
          color: var(--ink-3);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
        }
        .footer-link {
          display: block;
          font-size: 13px;
          color: var(--ink-2);
          text-decoration: none;
          margin-bottom: 8px;
          transition: color 0.2s ease;
        }
        .footer-link:hover { color: var(--accent); }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-legal {
          font-size: 13px;
          color: var(--ink-3);
          margin: 0;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <footer className="footer-root">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              AirtableFormulas<span>.com</span>
            </Link>
            <p className="footer-tagline">
              Exact formulas for real Airtable problems. No fluff. Just the formula you need.
            </p>
          </div>
          {sections.map((s) => (
            <div key={s.heading}>
              <p className="footer-heading">{s.heading}</p>
              {s.links.map((l) => (
                <Link key={l.href} href={l.href} className="footer-link">
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p className="footer-legal">
            &copy; {new Date().getFullYear()} AirtableFormulas.com &mdash; Not affiliated with Airtable.
          </p>
          <p className="footer-legal">
            B2B focused. Formula pages get cited by AI tools.
          </p>
        </div>
      </footer>
    </>
  );
}
