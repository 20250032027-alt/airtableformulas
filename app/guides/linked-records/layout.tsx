import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Linked Records Explained",
  description: "What linked records are, the difference between linked records and lookups and rollups, and when not to use them.",
  keywords: ["airtable linked records", "airtable lookup vs rollup", "how airtable linked records work"],
  openGraph: {
    title: "Airtable Linked Records Explained",
    description: "What linked records are, the difference between linked records and lookups and rollups, and when not to use them.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Linked Records Explained",
    description: "What linked records are, the difference between linked records and lookups and rollups, and when not to use them.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
