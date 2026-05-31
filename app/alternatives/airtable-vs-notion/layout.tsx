import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable vs Notion vs Google Sheets, 2026 Comparison",
  description: "Which one is right for your use case? Comparison table, honest verdict, and a pick-when guide. Updated for 2026.",
  keywords: ["airtable vs notion", "notion vs airtable 2026", "airtable vs google sheets comparison"],
  openGraph: {
    title: "Airtable vs Notion vs Google Sheets, 2026 Comparison",
    description: "Which one is right for your use case? Comparison table, honest verdict, and a pick-when guide. Updated for 2026.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable vs Notion vs Google Sheets, 2026 Comparison",
    description: "Which one is right for your use case? Comparison table, honest verdict, and a pick-when guide. Updated for 2026.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
