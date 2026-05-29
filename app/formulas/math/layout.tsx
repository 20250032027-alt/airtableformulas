import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Math & Number Formulas for Airtable",
  description: "Rounding, percentages, capping values, markup calculations. 24 Airtable math formulas ready to paste.",
  keywords: ["airtable math formula", "airtable round", "airtable percentage formula"],
  openGraph: {
    title: "Math & Number Formulas for Airtable",
    description: "Rounding, percentages, capping values, markup calculations. 24 Airtable math formulas ready to paste.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Math & Number Formulas for Airtable",
    description: "Rounding, percentages, capping values, markup calculations. 24 Airtable math formulas ready to paste.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
