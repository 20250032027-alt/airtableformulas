import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Date & Time Formulas for Airtable",
  description: "Business days between dates, quarters, age from birthdate, days until due, date formatting. 34 ready-to-paste Airtable date formulas.",
  keywords: ["airtable date formula", "airtable business days", "airtable datetime_diff"],
  openGraph: {
    title: "Date & Time Formulas for Airtable",
    description: "Business days between dates, quarters, age from birthdate, days until due, date formatting. 34 ready-to-paste Airtable date formulas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Date & Time Formulas for Airtable",
    description: "Business days between dates, quarters, age from birthdate, days until due, date formatting. 34 ready-to-paste Airtable date formulas.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
