import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Permissions Guide, Sharing Without the Seat Cost",
  description: "Why Airtable permissions feel messy, what the actual options are, and how to share with clients without paying per seat.",
  keywords: ["airtable permissions", "airtable share without seat", "airtable collaborator access"],
  openGraph: {
    title: "Airtable Permissions Guide, Sharing Without the Seat Cost",
    description: "Why Airtable permissions feel messy, what the actual options are, and how to share with clients without paying per seat.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Permissions Guide, Sharing Without the Seat Cost",
    description: "Why Airtable permissions feel messy, what the actual options are, and how to share with clients without paying per seat.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
