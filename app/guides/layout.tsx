import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Guides — Linked Records, Permissions, Pricing & More",
  description: "In-depth guides on the Airtable topics people keep getting stuck on. Built from 800 real community posts.",
  keywords: ["airtable guide", "airtable help", "airtable tutorial"],
  openGraph: {
    title: "Airtable Guides — Linked Records, Permissions, Pricing & More",
    description: "In-depth guides on the Airtable topics people keep getting stuck on. Built from 800 real community posts.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Guides — Linked Records, Permissions, Pricing & More",
    description: "In-depth guides on the Airtable topics people keep getting stuck on. Built from 800 real community posts.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
