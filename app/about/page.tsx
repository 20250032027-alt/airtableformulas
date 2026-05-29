import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | AirtableFormulas.com",
  description: "What AirtableFormulas.com is, where the content comes from, and why it exists.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "680px", margin: "0 auto", padding: "120px 24px 96px" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 24px" }}>
          About
        </h1>

        {[
          {
            h: "What this site is",
            p: "AirtableFormulas.com is an independent reference for people who use Airtable and want direct answers. The formula cookbook, guides, and tool comparisons were built from analysis of real community posts — the questions people keep asking, the problems they keep running into, and the workarounds that actually work."
          },
          {
            h: "Where the content comes from",
            p: "The site's content is grounded in 800+ scraped posts from the Airtable subreddit and community forum, cross-referenced with Airtable's official documentation. Recurring questions shaped which formulas to cover, which guides to write, and what honest comparisons to make. The formula builder uses the Gemini API to generate Airtable-compatible formulas on demand."
          },
          {
            h: "What we are not",
            p: "AirtableFormulas.com is not affiliated with Airtable Inc. in any way. We don't have a referral deal with any of the tools mentioned. When a comparison says Notion or Google Sheets is the better fit for a given situation, that's because it is — not because someone paid to say so."
          },
          {
            h: "The formula builder",
            p: "The AI formula builder at /formula-builder takes plain English descriptions and returns exact Airtable formulas. It runs on Google's Gemini 2.5 Flash model. It's free to use and requires no account."
          },
        ].map((s) => (
          <div key={s.h} style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em", color: "var(--ink)", margin: "0 0 10px" }}>{s.h}</h2>
            <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: 0 }}>{s.p}</p>
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
}
