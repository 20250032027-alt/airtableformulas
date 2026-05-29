import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scripting in Airtable — When Formulas Aren't Enough",
  description: "What Airtable scripts can and can't do, and five real scripts worth copying for deduplication, batch updates, and API calls.",
  keywords: ["airtable scripting", "airtable script block", "airtable javascript"],
  openGraph: {
    title: "Scripting in Airtable — When Formulas Aren't Enough",
    description: "What Airtable scripts can and can't do, and five real scripts worth copying for deduplication, batch updates, and API calls.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scripting in Airtable — When Formulas Aren't Enough",
    description: "What Airtable scripts can and can't do, and five real scripts worth copying for deduplication, batch updates, and API calls.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
