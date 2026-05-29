import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text & String Formulas for Airtable",
  description: "Name formatting, email parsing, text cleanup, concatenation. 32 Airtable text formulas with copy buttons.",
  keywords: ["airtable text formula", "airtable concatenate", "airtable string functions"],
  openGraph: {
    title: "Text & String Formulas for Airtable",
    description: "Name formatting, email parsing, text cleanup, concatenation. 32 Airtable text formulas with copy buttons.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text & String Formulas for Airtable",
    description: "Name formatting, email parsing, text cleanup, concatenation. 32 Airtable text formulas with copy buttons.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
