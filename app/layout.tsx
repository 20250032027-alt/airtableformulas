import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: "AirtableFormulas.com — Formulas, Automations & Honest Alternatives",
  description: "Stop Googling Airtable formulas. Get exact formulas, automation guides, and straight answers on when to switch tools.",
  keywords: ["airtable formulas", "airtable automations", "airtable alternatives", "notion vs airtable", "airtable formula builder"],
  openGraph: {
    title: "AirtableFormulas.com",
    description: "Stop Googling Airtable formulas. Get the exact formula you need, guides on automations, and honest tool comparisons.",
    url: "https://airtableformulas.com",
    siteName: "AirtableFormulas.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
