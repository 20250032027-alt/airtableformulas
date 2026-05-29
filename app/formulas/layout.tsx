import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formula Cookbook — 200+ Airtable Formulas",
  description: "Every Airtable formula you actually need. Business days, conditional logic, rollups, text, math. Organized by task, not function name.",
  keywords: ["airtable formula cookbook", "airtable formulas list", "airtable formula examples"],
  openGraph: {
    title: "Formula Cookbook — 200+ Airtable Formulas",
    description: "Every Airtable formula you actually need. Business days, conditional logic, rollups, text, math. Organized by task, not function name.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formula Cookbook — 200+ Airtable Formulas",
    description: "Every Airtable formula you actually need. Business days, conditional logic, rollups, text, math. Organized by task, not function name.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
