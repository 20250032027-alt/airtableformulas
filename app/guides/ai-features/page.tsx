"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  {
    q: "Is Airtable's AI actually useful or just a marketing feature?",
    a: "The community is split and honest about it. The most-upvoted post on this topic in the Airtable subreddit had 75 upvotes and was titled 'Airtable should focus on improving normal features, not AI.' The top comment asked why cell-level conditional formatting still doesn't exist. That said, the AI summarize field and AI categorize field genuinely save time for teams processing lots of text. The AI app builder is more experimental. The honest answer: try the specific feature for your specific use case."
  },
  {
    q: "What can Airtable's AI field actually do?",
    a: "Four things that work reliably: summarize long text fields, categorize records into predefined categories, extract specific data from unstructured text (like pulling a company name from a messy notes field), and translate text. Each runs on credits. It reruns when the source field changes. Quality is good for common languages and standard summarization tasks."
  },
  {
    q: "Can I use Claude or ChatGPT with Airtable?",
    a: "Yes, through automations. The standard approach is an Airtable automation that calls the Anthropic or OpenAI API via a webhook or script action, processes the response, and writes the result back to a field. This gives you more control than the built-in AI field and uses your own API key rather than Airtable's credits. Airtable also has an official integration with OpenAI in its automations."
  },
  {
    q: "What is Airtable's Omni AI assistant?",
    a: "Omni is Airtable's conversational AI that can help build base structure, write formulas, and answer questions about your base. It is available in the right-hand sidebar. Community reception has been mixed. Some find it useful for formula generation. Others report it suggests incorrect formulas or patterns that don't work. For reliable formulas, the formula builder on this site is a better option."
  },
  {
    q: "Does Airtable's AI sidebar slow down the app?",
    a: "This was a specific complaint in the community. One post titled 'AI SIDEBAR IS FKIN ANNOYING' got 43 upvotes, with comments noting the sidebar opening automatically on the Data tab and contributing to the general slowdown many users have noticed. You can collapse the sidebar manually. There is no permanent setting to disable it as of 2026."
  },
  {
    q: "Can AI help me build an Airtable base from scratch?",
    a: "Airtable's own AI app builder lets you describe a workflow and generates a base structure. The community's verdict is that it's a useful starting point but needs significant cleanup before it's production-ready. For formulas specifically, do not use generic ChatGPT. It gets Airtable's syntax wrong often. The formula builder on this site generates formulas that actually work."
  }
];

const sections = [
  {
    heading: "What Airtable calls AI and what it actually means",
    body: `Airtable introduced AI features in 2023 and repositioned as an 'AI-native app platform' in 2025. That relaunch generated a community post with 36 upvotes, the top comment of which read: 'Has any CEO actually used AI to build anything? Every single tool is the same. Magical for the first ten minutes, then reality hits.'

That cynicism isn't universal but it's worth noting. The actual AI features split into two categories: field-level AI that processes data inside records, and app-level AI that helps you build and navigate the tool itself. They're different things with different quality levels.`
  },
  {
    heading: "AI fields: the part that actually works",
    body: `Airtable's AI field type runs on credits and applies an AI action to one field based on another. The four uses that hold up in practice:

Summarize. Long text fields get turned into short summaries. Works well for meeting notes, support tickets, or any field where people write paragraphs when you need a sentence.

Categorize. You define the categories, the AI assigns each record to one. Useful for labeling incoming leads, classifying support requests, or tagging content without manual review.

Extract. Pull specific data out of unstructured text. Get a company name from a messy notes field. Extract a dollar amount from a description. Pull a city from an address block. This one saves real time when you have inconsistent data.

Translate. Already covered in the translation guide, but the AI field handles it cleanly for field-level translation. The cost is the tradeoff.

The AI field reruns when the source field changes. Credits cost money. Check your plan's credit allowance before running it on thousands of records.`
  },
  {
    heading: "Omni: the AI assistant built into Airtable",
    body: `Omni is the conversational AI in the right-hand sidebar. Ask it to write a formula, explain a field, or help structure a base. It can also build entire bases from a text description.

Community reception is honest: useful as a starting point, unreliable for formulas specifically. One comment noted that Omni sometimes suggests formula patterns that don't exist in Airtable's formula language. It's also been cited in performance complaints. The sidebar opening automatically on the Data tab was enough of an annoyance to generate its own thread.

For formula generation, the formula builder on this site is more reliable because it's specifically trained on Airtable's actual formula functions.`
  },
  {
    heading: "Connecting external AI tools to Airtable",
    body: `The more powerful and flexible path is connecting Airtable to external AI via automations or scripts. You control the model, the prompt, the cost, and the quality.

The standard setup: an Airtable automation triggers on a record event, a script action (or webhook) calls the Claude or OpenAI API with field data as the prompt, and the response writes back to a field. This runs on your own API key.

Airtable also has a native OpenAI integration in its automations list, which handles the API connection without scripting. For GPT-4 or GPT-4o tasks, it works well. For Claude, you need the webhook or script approach.

One community member built a system to extract data from receipt PDFs and images received by email, routing them into Airtable automatically. That kind of workflow requires external AI because Airtable's built-in AI field only processes text fields, not attachments.`
  },
  {
    heading: "The performance issue nobody mentions in the marketing",
    body: `The 55-upvote post titled 'Rant: Airtable is getting slow as hell' predated most of the AI features but the slowdown continued. The most common theory in the comments was that the new UI and AI sidebar added overhead that affected loading times for tables that hadn't changed.

This matters for AI feature decisions: if you're already experiencing lag on a large base, AI fields that trigger on every record update can make it worse. Run AI transformations as a batch operation or on a scheduled basis rather than on every change.

Airtable's status page at status.airtable.com shows historical incidents. The 60-upvote 'Airtable down?' post from 2025 turned out to be a Cloudflare outage, not Airtable itself. Worth bookmarking the status page.`
  },
  {
    heading: "What the community actually uses AI for in Airtable",
    body: `From the posts and comments: processing inbound leads and categorizing them without manual review, summarizing long customer feedback fields into one-line summaries for a dashboard, extracting structured data from unstructured notes, and routing records to different workflows based on AI classification.

Less common but real: using Airtable's script block with an external AI API to generate document drafts stored as field values, and using AI categorization to clean up messy historical data.

The pattern that doesn't work well: trying to use AI as a substitute for proper base structure. AI can add a layer on top of data but it can't fix a base that wasn't designed well.`
  }
];

export default function AiFeaturesPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "760px", margin: "0 auto", padding: "0 24px" }}>

        <section style={{ paddingTop: "120px", paddingBottom: "48px" }}>
          <Link href="/guides" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", marginBottom: "24px" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--ink-3)"; }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            All guides
          </Link>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#3A1A6A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#3A1A6A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Hot topic</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            AI Features in Airtable
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            What Airtable&apos;s AI actually does, what the community thinks of it, and how to connect external models like Claude or GPT when the built-in features aren&apos;t enough.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>9 min read</span>
        </section>

        <article style={{ paddingBottom: "64px" }}>
          {sections.map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "48px", transitionDelay: `${i * 0.05}s` }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>
                {s.heading}
              </h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ margin: "0 0 16px", fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
            </section>
          ))}

          {/* FAQ */}
          <section style={{ paddingBottom: "48px" }}>
            <h2 className="observe-reveal" style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 20px" }}>
              Common questions
            </h2>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {faqs.map((faq, i) => (
                <div key={i} className="observe-reveal"
                  itemScope itemType="https://schema.org/Question"
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "20px 24px", transitionDelay: `${i * 0.04}s` }}
                >
                  <h3 itemProp="name" style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.4 }}>
                    {faq.q}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p itemProp="text" style={{ margin: 0, fontSize: "14px", color: "var(--ink-2)", lineHeight: 1.7 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="observe-reveal" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px" }}>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: "16px" }}>Related</p>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {[
                { href: "/guides/scripting", label: "Scripting guide for external API calls" },
                { href: "/automations", label: "Automations guide for AI workflow triggers" },
                { href: "/guides/translation", label: "Translation in Airtable using AI" },
                { href: "/formula-builder", label: "AI formula builder that actually works with Airtable" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0.7"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                >
                  {l.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
              ))}
            </div>
          </div>
        </article>

      {/* Prev / Next guide navigation */}
      <nav className="observe-reveal" aria-label="Guide navigation" style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", paddingBottom: "64px", display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <Link href="/guides/scripting" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Scripting
        </Link>
                <Link href="/guides/translation" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Translation
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
