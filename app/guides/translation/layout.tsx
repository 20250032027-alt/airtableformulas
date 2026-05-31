import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Translation in Airtable, Four Options That Actually Work",
  description: "Airtable has no native translate formula. Four real approaches from the AI field to a free Google Translate API script.",
  keywords: ["airtable translation", "translate airtable records", "airtable multilingual"],
  openGraph: {
    title: "Translation in Airtable, Four Options That Actually Work",
    description: "Airtable has no native translate formula. Four real approaches from the AI field to a free Google Translate API script.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Translation in Airtable, Four Options That Actually Work",
    description: "Airtable has no native translate formula. Four real approaches from the AI field to a free Google Translate API script.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
