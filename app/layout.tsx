import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://airtableformulas.com"),
  title: {
    default: "AirtableFormulas.com — Formulas, Automations & Honest Alternatives",
    template: "%s | AirtableFormulas.com",
  },
  description: "Stop Googling Airtable formulas. Get exact formulas, automation guides, and straight answers on when to switch tools.",
  keywords: ["airtable formulas", "airtable automations", "airtable alternatives", "notion vs airtable", "airtable formula builder"],
  openGraph: {
    title: "AirtableFormulas.com",
    description: "Stop Googling Airtable formulas. Get the exact formula you need, guides on automations, and honest tool comparisons.",
    url: "https://airtableformulas.com",
    siteName: "AirtableFormulas.com",
    type: "website",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "AirtableFormulas.com" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirtableFormulas.com",
    description: "Stop Googling Airtable formulas.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* AdSense: replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID before submitting */}
        {/* <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX" /> */}
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              const saved = localStorage.getItem('theme');
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (saved === 'dark' || (!saved && prefersDark)) {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            } catch(e) {}
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <style>{`
          /* Accessibility */
          .skip-link {
            position: absolute;
            top: -100px;
            left: 16px;
            background: var(--accent);
            color: #fff;
            padding: 8px 16px;
            border-radius: 0 0 8px 8px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            z-index: 9999;
            transition: top 0.2s ease;
          }
          .skip-link:focus { top: 0; }
          *:focus-visible {
            outline: 2px solid var(--accent);
            outline-offset: 3px;
            border-radius: 4px;
          }
          button, a, input, textarea, select {
            min-height: 44px;
          }
          nav a, nav button { min-height: 36px; }
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
            .observe-reveal {
              opacity: 1 !important;
              transform: none !important;
            }
          }
        `}</style>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <div className="grain-overlay" aria-hidden="true" />
        <StructuredData />
        <div id="main-content">
          {children}
        </div>
      </body>
    </html>
  );
}
