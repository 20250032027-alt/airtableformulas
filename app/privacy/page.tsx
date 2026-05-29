import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AirtableFormulas.com",
  description: "Privacy policy for AirtableFormulas.com covering data collection, cookies, and Google AdSense.",
};

export default function PrivacyPage() {
  const sections = [
    {
      h: "What data we collect",
      p: "AirtableFormulas.com does not require an account and does not collect personal information directly. When you use the formula builder, your query is sent to Google's Gemini API to generate a formula. We do not store these queries beyond the duration of the request."
    },
    {
      h: "Google AdSense and advertising",
      p: "This site uses Google AdSense to display advertisements. Google AdSense uses cookies and similar tracking technologies to serve ads based on your prior visits to this site and other sites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site. You can opt out of personalized advertising by visiting Google's Ad Settings at https://adssettings.google.com."
    },
    {
      h: "Google Analytics",
      p: "This site may use Google Analytics to collect anonymized usage data including pages visited, time on site, and browser type. This data is used to improve the site's content and performance. Google Analytics data is subject to Google's Privacy Policy. You can opt out via the Google Analytics Opt-out Browser Add-on."
    },
    {
      h: "Cookies",
      p: "This site stores a single cookie locally in your browser to remember your dark or light mode preference. No personal information is stored in this cookie. Third-party services including Google AdSense and Google Analytics may set their own cookies subject to their respective privacy policies."
    },
    {
      h: "Third-party services",
      p: "This site uses the following third-party services: Google AdSense (advertising), Google Analytics (usage analytics), Google Gemini API (formula generation), and Formspree (contact form submissions). Each of these services operates under their own privacy policies."
    },
    {
      h: "Your rights",
      p: "You can disable cookies in your browser settings at any time. You can opt out of Google's personalized advertising at https://adssettings.google.com. For questions about this privacy policy, use the contact page."
    },
    {
      h: "Changes to this policy",
      p: "This policy may be updated periodically. The date at the top of this page reflects the most recent revision. Continued use of the site after a policy update constitutes acceptance of the revised terms."
    },
  ];

  return (
    <>
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 96px" }}>
        <p style={{ fontSize: "13px", color: "var(--ink-3)", marginBottom: "8px" }}>Last updated: May 2026</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 40px" }}>
          Privacy Policy
        </h1>
        {sections.map((s) => (
          <div key={s.h} style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 10px" }}>{s.h}</h2>
            <p style={{ fontSize: "15px", color: "var(--ink-2)", lineHeight: 1.75, margin: 0 }}>{s.p}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
