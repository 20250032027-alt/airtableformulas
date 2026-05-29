import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lookup & Rollup Formulas for Airtable",
  description: "Count linked records, sum amounts, find latest dates, count by status. How Airtable rollups and lookups work with copy-ready formulas.",
  keywords: ["airtable rollup formula", "airtable lookup formula", "airtable linked records formula"],
  openGraph: {
    title: "Lookup & Rollup Formulas for Airtable",
    description: "Count linked records, sum amounts, find latest dates, count by status. How Airtable rollups and lookups work with copy-ready formulas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lookup & Rollup Formulas for Airtable",
    description: "Count linked records, sum amounts, find latest dates, count by status. How Airtable rollups and lookups work with copy-ready formulas.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
