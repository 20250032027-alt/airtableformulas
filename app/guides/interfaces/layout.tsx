import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airtable Interface Designer Guide",
  description: "When to build an interface vs use a view, what each component does, and how the 2024 redesign changed things.",
  keywords: ["airtable interface designer", "airtable interface builder", "airtable interface vs view"],
  openGraph: {
    title: "Airtable Interface Designer Guide",
    description: "When to build an interface vs use a view, what each component does, and how the 2024 redesign changed things.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Airtable Interface Designer Guide",
    description: "When to build an interface vs use a view, what each component does, and how the 2024 redesign changed things.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
