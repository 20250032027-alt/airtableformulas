import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable vs Google Sheets — When Each One Wins",
  description: "Google Sheets wins on formulas and cost. Airtable wins on relational data. Full comparison with a feature table.",
  keywords: ["airtable vs google sheets", "airtable or google sheets", "google sheets airtable comparison"],
  openGraph: {
    title: "Airtable vs Google Sheets — When Each One Wins",
    description: "Google Sheets wins on formulas and cost. Airtable wins on relational data. Full comparison with a feature table.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable vs Google Sheets — When Each One Wins",
    description: "Google Sheets wins on formulas and cost. Airtable wins on relational data. Full comparison with a feature table.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
