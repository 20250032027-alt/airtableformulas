import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditional Logic Formulas for Airtable",
  description: "IF statements, SWITCH, nested conditions, status labels, tier assignments. 28 Airtable conditional formulas ready to copy.",
  keywords: ["airtable if formula", "airtable switch formula", "airtable conditional logic"],
  openGraph: {
    title: "Conditional Logic Formulas for Airtable",
    description: "IF statements, SWITCH, nested conditions, status labels, tier assignments. 28 Airtable conditional formulas ready to copy.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conditional Logic Formulas for Airtable",
    description: "IF statements, SWITCH, nested conditions, status labels, tier assignments. 28 Airtable conditional formulas ready to copy.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
