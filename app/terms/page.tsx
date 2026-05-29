import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | AirtableFormulas.com",
  description: "Terms of use for AirtableFormulas.com.",
};

export default function TermsPage() {
  const sections = [
    {
      h: "Use of this site",
      p: "AirtableFormulas.com provides formula references, guides, and tools for informational purposes. You may use the content on this site for personal and commercial projects. Reproducing the site's content wholesale on another site or service without attribution is not permitted."
    },
    {
      h: "Formula accuracy",
      p: "Formulas on this site are tested against Airtable's formula reference and community usage. However, Airtable updates its platform periodically and formula behavior may change. Always test formulas in your own base before relying on them in production. AirtableFormulas.com is not responsible for errors caused by incorrect or outdated formulas."
    },
    {
      h: "Formula builder",
      p: "The AI formula builder generates formulas based on plain English descriptions using Google's Gemini API. Generated formulas are suggestions, not guarantees. Test any generated formula before using it in a live base. Query data sent to the formula builder is processed by Google's API subject to Google's terms of service."
    },
    {
      h: "No affiliation with Airtable",
      p: "AirtableFormulas.com is an independent site and is not affiliated with, endorsed by, or sponsored by Airtable Inc. Airtable is a registered trademark of Airtable Inc. Use of the name is for descriptive and informational purposes only."
    },
    {
      h: "Advertising",
      p: "This site displays advertisements served by Google AdSense. Advertisers do not influence editorial content. The site does not accept paid placements or sponsored recommendations."
    },
    {
      h: "Limitation of liability",
      p: "AirtableFormulas.com is provided as-is. We make no warranties about the accuracy or completeness of any content. We are not liable for any damages resulting from use of the site or reliance on its content."
    },
    {
      h: "Changes to these terms",
      p: "These terms may be updated periodically. Continued use of the site after an update constitutes acceptance of the revised terms."
    },
  ];

  return (
    <>
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 96px" }}>
        <p style={{ fontSize: "13px", color: "var(--ink-3)", marginBottom: "8px" }}>Last updated: May 2026</p>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 40px" }}>
          Terms of Use
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
