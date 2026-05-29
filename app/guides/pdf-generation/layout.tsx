import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Generate PDFs from Airtable",
  description: "No native solution exists. Here are the four approaches that work: Zapier + Google Docs, Carbone, JotForm, and print view.",
  keywords: ["airtable pdf", "generate pdf from airtable", "airtable to pdf"],
  openGraph: {
    title: "How to Generate PDFs from Airtable",
    description: "No native solution exists. Here are the four approaches that work: Zapier + Google Docs, Carbone, JotForm, and print view.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Generate PDFs from Airtable",
    description: "No native solution exists. Here are the four approaches that work: Zapier + Google Docs, Carbone, JotForm, and print view.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
