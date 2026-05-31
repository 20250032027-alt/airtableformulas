import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Alternatives, Honest Comparisons for 2026",
  description: "Airtable vs Notion, Google Sheets, Monday.com. Real comparisons with a tool picker that gives an actual recommendation.",
  keywords: ["airtable alternatives", "airtable vs notion", "airtable vs google sheets"],
  openGraph: {
    title: "Airtable Alternatives, Honest Comparisons for 2026",
    description: "Airtable vs Notion, Google Sheets, Monday.com. Real comparisons with a tool picker that gives an actual recommendation.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Alternatives, Honest Comparisons for 2026",
    description: "Airtable vs Notion, Google Sheets, Monday.com. Real comparisons with a tool picker that gives an actual recommendation.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
