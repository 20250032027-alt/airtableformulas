import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Boolean & Checkbox Formulas for Airtable",
  description: "Checkbox logic, true/false conditions, all-or-nothing flags, is-weekend checks. 14 Airtable boolean formulas.",
  keywords: ["airtable checkbox formula", "airtable boolean", "airtable true false formula"],
  openGraph: {
    title: "Boolean & Checkbox Formulas for Airtable",
    description: "Checkbox logic, true/false conditions, all-or-nothing flags, is-weekend checks. 14 Airtable boolean formulas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boolean & Checkbox Formulas for Airtable",
    description: "Checkbox logic, true/false conditions, all-or-nothing flags, is-weekend checks. 14 Airtable boolean formulas.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
