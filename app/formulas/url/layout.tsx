import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL & Link Formulas for Airtable",
  description: "Link to a record, build pre-filled form URLs, extract domains, generate Google Maps links from addresses.",
  keywords: ["airtable url formula", "airtable record link", "airtable encode_url_component"],
  openGraph: {
    title: "URL & Link Formulas for Airtable",
    description: "Link to a record, build pre-filled form URLs, extract domains, generate Google Maps links from addresses.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL & Link Formulas for Airtable",
    description: "Link to a record, build pre-filled form URLs, extract domains, generate Google Maps links from addresses.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
