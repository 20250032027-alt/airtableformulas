import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Automations Guide, Native vs Zapier, 16 Patterns",
  description: "When to use native Airtable automations vs Zapier vs Make. 16 real patterns with trigger, action, tool, and setup notes.",
  keywords: ["airtable automations", "airtable zapier", "airtable automation examples"],
  openGraph: {
    title: "Airtable Automations Guide, Native vs Zapier, 16 Patterns",
    description: "When to use native Airtable automations vs Zapier vs Make. 16 real patterns with trigger, action, tool, and setup notes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Automations Guide, Native vs Zapier, 16 Patterns",
    description: "When to use native Airtable automations vs Zapier vs Make. 16 real patterns with trigger, action, tool, and setup notes.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
