import Link from "next/link";

const sections = [
  {
    heading: "Formulas",
    links: [
      { label: "Date & Time Formulas", href: "/formulas/date-time" },
      { label: "Text Formulas", href: "/formulas/text" },
      { label: "Conditional Logic", href: "/formulas/conditional" },
      { label: "Math & Numbers", href: "/formulas/math" },
      { label: "Lookup & Rollup", href: "/formulas/lookup" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Automations Guide", href: "/automations" },
      { label: "Record Limit Survival", href: "/guides/record-limits" },
      { label: "Generate PDFs from Airtable", href: "/guides/pdf-generation" },
      { label: "Airtable vs Notion", href: "/alternatives/airtable-vs-notion" },
      { label: "Airtable vs Google Sheets", href: "/alternatives/airtable-vs-sheets" },
    ],
  },
  {
    heading: "Tools",
    links: [
      { label: "Formula Builder", href: "/formula-builder" },
      { label: "Alternative Picker", href: "/alternatives" },
      { label: "Formula Cookbook", href: "/formulas" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "64px 24px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr repeat(3, auto)",
          gap: "48px",
          marginBottom: "48px",
        }}
        className="footer-grid"
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-geist-sans)",
              fontWeight: 700,
              fontSize: "16px",
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              marginBottom: "10px",
            }}
          >
            AirtableFormulas
            <span style={{ color: "var(--accent)" }}>.com</span>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--ink-3)",
              lineHeight: "1.7",
              maxWidth: "260px",
              margin: 0,
            }}
          >
            Exact formulas for real Airtable problems. No fluff, no filler. Just the formula you need.
          </p>
        </div>
        {sections.map((s) => (
          <div key={s.heading}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                color: "var(--ink-3)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "14px",
              }}
            >
              {s.heading}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {s.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "14px",
                    color: "var(--ink-2)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "var(--ink-2)";
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p style={{ fontSize: "13px", color: "var(--ink-3)", margin: 0 }}>
          &copy; {new Date().getFullYear()} AirtableFormulas.com. Not affiliated with Airtable.
        </p>
        <p style={{ fontSize: "13px", color: "var(--ink-3)", margin: 0 }}>
          B2B focused. AdSense safe. Formula pages get cited by AI.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
          }
        }
      `}</style>
    </footer>
  );
}
