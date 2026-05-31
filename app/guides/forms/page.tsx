"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const faqs = [
  {
    q: "What is the main limitation of Airtable's built-in forms?",
    a: "Three things come up constantly: slow load times when embedded, the redirect after submission not working reliably, and no conditional logic on the free plan. Fillout solves all three and has become the community's default recommendation for anything beyond a basic form."
  },
  {
    q: "Can I create linked records through an Airtable form?",
    a: "Not natively with Airtable's built-in forms. This was a top-requested feature in the community for years. Fillout supports linked record fields in forms. It is probably the most common reason people switch from Airtable's native forms to a third-party tool."
  },
  {
    q: "How do I set up an approval workflow from a form submission?",
    a: "The standard pattern: form submission creates a record with a Status field set to Pending. An automation watches for Status = Approved or Status = Rejected and sends the relevant email. You can add a Button field that sets the status and triggers the notification in one click, so approvers just open the record and click a button."
  },
  {
    q: "Can someone edit an existing record through a form?",
    a: "Airtable's native forms only create new records. To let someone update an existing record, you need Fillout, which supports prefilled forms linked to existing records via a URL parameter. This is useful for update requests, event RSVPs where someone needs to change their response, or client onboarding flows."
  },
  {
    q: "What is Fillout and why does the community prefer it over Airtable forms?",
    a: "Fillout is a third-party form builder that integrates directly with Airtable. It supports conditional logic, multi-page forms, linked record fields, pre-filled forms for record updates, payments via Stripe, file uploads, and custom branding. It charges a flat monthly fee rather than per seat. The community response to it has been strongly positive."
  },
  {
    q: "How do I embed an Airtable form on a website?",
    a: "Airtable gives you an embed code from the Share menu on any form. Paste it into an iframe on your site. The common complaint is slow load time on the embedded form. Fillout and Tally both embed faster in community testing. If load speed matters for your use case, test a few before committing."
  }
];

const sections = [
  {
    heading: "Airtable's built-in forms: what they do well",
    body: `Native Airtable forms work cleanly for basic data collection. You create a form from any table, choose which fields to show, and share a link or embed code. Submissions create new records directly. No account needed for the person submitting.

For simple internal forms, like a team submitting project requests or logging issues, the built-in option is often enough. Setup takes minutes. It respects your base's field types and validation rules automatically.

The load time on embedded forms has been a persistent complaint. If you embed the form on a high-traffic page, expect some users to see a slow initial load. Airtable has not resolved this consistently.`
  },
  {
    heading: "Where native forms fall short",
    body: `Three limitations come up over and over in the community.

No conditional logic on free plans. If you want to show or hide fields based on earlier answers, you need a paid plan. A form that asks "Do you have a company?" and then shows a company name field only if the answer is yes requires the Pro or Business plan.

No linked record fields. You cannot let someone pick from existing records in a linked table through a native form. This is one of the most requested features and still not fully solved natively.

No record updates. Native forms only create new records. If you want someone to update their own existing record, like changing a dietary preference or updating contact details, you need a workaround or a third-party tool.`
  },
  {
    heading: "Fillout: the community's preferred alternative",
    body: `Fillout connects directly to Airtable and addresses every native form limitation. It supports conditional logic, multi-step forms, linked record fields, record updates via prefilled forms, file uploads, payment collection via Stripe, and custom branding.

The community response has been straightforward: people who switch to Fillout for Airtable forms tend to stay. The most-upvoted comment on the Fillout post in the Airtable subreddit called it "hands down the best form builder out there" and said the user never went back to native Airtable forms.

Fillout charges a flat monthly fee, which works out better than per-seat pricing for use cases where many people submit forms.

The limitation is that it adds a dependency and cost. If your forms are simple and you are on a tight budget, native forms are still a reasonable choice.`
  },
  {
    heading: "Tally: the free option worth knowing",
    body: `Tally is a form builder with a generous free plan that integrates with Airtable via webhooks or Zapier. It has better conditional logic than Airtable's native forms and embeds faster on most sites.

It does not have direct native Airtable integration the way Fillout does. The connection goes through a webhook or automation, which adds one step of setup. For straightforward forms where you just need submissions to land in Airtable, it works well and costs nothing.`
  },
  {
    heading: "Approval workflows from form submissions",
    body: `The standard approval pattern in Airtable is simple once you see it.

Form submission creates a record. The record has a Status field, default value Pending. An automation triggers when Status changes to Approved and sends an email, updates another record, or fires whatever action you need. A second automation does the same for Rejected.

The approver opens the record, reviews it, and changes the Status field manually or clicks an Interface button. That is the trigger.

For multi-step approvals, where a manager approves first and then finance approves, chain two Status fields: Manager Status and Finance Status. The first automation fires when Manager Status is Approved, sets Finance Status to Pending, and notifies the finance team. The second automation fires when Finance Status is Approved.

This pattern works entirely with native Airtable features. No Zapier needed.`
  },
  {
    heading: "Embedding forms on external sites",
    body: `Both Airtable's native forms and Fillout give you an embed code. Paste it into an iframe wherever you need it.

For portfolio sites, client portals, and landing pages, Fillout embeds more cleanly in most cases. It loads faster, handles mobile better, and you can style it to match your site.

For internal tools where aesthetics matter less, the native Airtable embed is fine. Your colleagues do not care that the form looks like Airtable.

One practical note: forms embedded in iframes do not work well in email clients. If you need a form link in an email, link to a dedicated form page rather than embedding it.`
  }
];

export default function FormsGuidePage() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#1A4A8A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A4A8A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>High demand</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Airtable Forms Guide
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Native forms, Fillout, Tally, approval workflows, embedding. What works, what doesn&apos;t, and when to stop fighting the built-in form tool.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>8 min read</span>
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

          {/* Tool comparison table */}
          <div className="observe-reveal" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "48px" }}>
            <div style={{ overflowX: "auto" as const }}>
              <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: "13px" }}>
                <thead>
                  <tr style={{ background: "var(--bg-2)" }}>
                    {["Feature", "Airtable Forms", "Fillout", "Tally"].map((h) => (
                      <th key={h} style={{ padding: "12px 16px", textAlign: "left" as const, fontWeight: 700, color: "var(--ink-3)", fontSize: "11px", textTransform: "uppercase" as const, letterSpacing: "0.07em", borderBottom: "1px solid var(--border)", whiteSpace: "nowrap" as const }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Conditional logic", "Paid plans only", "Yes", "Yes"],
                    ["Linked record fields", "No", "Yes", "No"],
                    ["Update existing records", "No", "Yes", "No"],
                    ["Multi-step forms", "No", "Yes", "Yes"],
                    ["Custom branding", "Limited", "Yes", "Yes"],
                    ["File uploads", "Yes", "Yes", "Yes"],
                    ["Stripe payments", "No", "Yes", "No"],
                    ["Embed speed", "Slow", "Fast", "Fast"],
                    ["Direct Airtable sync", "Native", "Native", "Webhook/Zapier"],
                    ["Free tier", "Yes", "Yes", "Yes"],
                  ].map(([feat, at, fo, ta], i) => (
                    <tr key={feat} style={{ borderBottom: i < 9 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "var(--card)" : "var(--bg)" }}>
                      <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--ink-3)", fontSize: "13px" }}>{feat}</td>
                      <td style={{ padding: "12px 16px", color: at === "No" ? "var(--ink-3)" : "var(--ink-2)", fontSize: "13px" }}>{at}</td>
                      <td style={{ padding: "12px 16px", color: fo === "No" ? "var(--ink-3)" : "var(--accent)", fontSize: "13px", fontWeight: fo !== "No" && fo !== "Yes" ? 400 : fo === "Yes" ? 600 : 400 }}>{fo}</td>
                      <td style={{ padding: "12px 16px", color: ta === "No" ? "var(--ink-3)" : "var(--ink-2)", fontSize: "13px" }}>{ta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

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
                { href: "/automations", label: "Automations guide for approval workflows" },
                { href: "/guides/interfaces", label: "Interface Designer for internal data entry" },
                { href: "/guides/permissions", label: "Controlling who can see submitted data" },
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
                <Link href="/guides/interfaces" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Interface Designer
        </Link>
                <Link href="/guides/permissions" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Permissions
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
