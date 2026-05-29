import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Pricing Reality Check — What the Page Doesn't Tell You",
  description: "Which limits you hit first, what counts toward records, and when the per-seat model stops making sense.",
  keywords: ["airtable pricing", "airtable cost", "airtable free plan limits"],
  openGraph: {
    title: "Airtable Pricing Reality Check — What the Page Doesn't Tell You",
    description: "Which limits you hit first, what counts toward records, and when the per-seat model stops making sense.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Pricing Reality Check — What the Page Doesn't Tell You",
    description: "Which limits you hit first, what counts toward records, and when the per-seat model stops making sense.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
