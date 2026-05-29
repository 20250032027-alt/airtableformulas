import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Record Limit Survival Guide",
  description: "What happens when you hit 50k records and eight ways to deal with it, from emptying trash to splitting bases.",
  keywords: ["airtable record limit", "airtable 50000 records", "airtable too many records"],
  openGraph: {
    title: "Airtable Record Limit Survival Guide",
    description: "What happens when you hit 50k records and eight ways to deal with it, from emptying trash to splitting bases.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Record Limit Survival Guide",
    description: "What happens when you hit 50k records and eight ways to deal with it, from emptying trash to splitting bases.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
