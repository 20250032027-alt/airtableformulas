import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Formula Builder — Describe It, Get the Formula",
  description: "Type what you want in plain English and get the exact Airtable formula ready to paste. Powered by AI, free to use.",
  keywords: ["airtable formula generator", "airtable formula builder", "airtable formula ai"],
  openGraph: {
    title: "Airtable Formula Builder — Describe It, Get the Formula",
    description: "Type what you want in plain English and get the exact Airtable formula ready to paste. Powered by AI, free to use.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Formula Builder — Describe It, Get the Formula",
    description: "Type what you want in plain English and get the exact Airtable formula ready to paste. Powered by AI, free to use.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
