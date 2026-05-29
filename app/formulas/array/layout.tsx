import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Array & Multi-Select Formulas for Airtable",
  description: "Count selected options, check for a specific value, extract the first option. Working with Airtable multi-select fields in formulas.",
  keywords: ["airtable multi-select formula", "airtable array formula", "airtable count selected"],
  openGraph: {
    title: "Array & Multi-Select Formulas for Airtable",
    description: "Count selected options, check for a specific value, extract the first option. Working with Airtable multi-select fields in formulas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Array & Multi-Select Formulas for Airtable",
    description: "Count selected options, check for a specific value, extract the first option. Working with Airtable multi-select fields in formulas.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
