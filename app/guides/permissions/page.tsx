"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const sections = [
  {
    heading: "Why permissions feel messy in Airtable",
    body: `The most upvoted post on the Airtable subreddit for a long stretch was literally titled "Why does giving limited access still feel so messy?" The replies ran for pages. Nobody argued with the premise.

The core issue is that Airtable's permission model is workspace-first. When you add a collaborator, you add them to the workspace and then try to restrict what they can see. Every person you give access to counts against your seat cost, including read-only users on most plans.

For teams sharing data with clients, contractors, or external partners, this creates an immediate math problem: you either pay for seats you didn't plan on, or you route around the system with workarounds that take real time to build.

The good news is the workarounds are solid. They're just not obvious from the interface.`,
  },
  {
    heading: "The four roles and what they actually mean",
    body: `Airtable has four collaborator roles at the base level.

Owner can do everything, including delete the base and touch billing. Keep this to one or two people.

Creator can build tables, create fields, and modify the base structure. This is the level that can accidentally break things. Only give it to people who are actively building the base.

Editor can add, edit, and delete records. Right level for most team members who use the base day to day.

Commenter can leave comments but not edit records. Read-only can see records but nothing else. Both require a paid seat on most plans, which is the part that frustrates people the most.`,
  },
  {
    heading: "Three ways to share without paying for extra seats",
    body: `Shared views are the most common path. Create a view, click Share, get a public link. Anyone with the link sees exactly what that view shows, with no Airtable account required. They can't edit records or see hidden fields. If read-only access is enough, this is the cleanest option and it's free.

Airtable Forms work well for data collection. If external people need to add information but not see or edit existing records, a form is the right call. Free, no accounts required, data goes straight into your base.

Interface Designer with public sharing lets you build a custom interface on top of your base and share it without requiring accounts, on Business plan and above. You can make it read-only or allow form submissions. It gives a cleaner experience than a raw Airtable view.`,
  },
  {
    heading: "The client portal problem and how to solve it",
    body: `Here is the situation that frustrates people more than almost anything: you want 15 clients to each see only their own project data. In Airtable's default model, that's 15 paid seats.

The community solution for this is Softr, Stacker, or MiniExtensions. These tools sit on top of your Airtable base and build a portal where each user logs in and sees only their own records. No Airtable account needed on their end.

Softr has a free plan that covers basic portals. For most small agencies managing client data in Airtable, it's the answer to the external access problem.

If you want to stay entirely within Airtable, the Interface Designer on Business plan lets you share interfaces to specific people by email. They get viewer access to the interface only, no full base access, and they don't need a collaborator seat. This launched in 2024 and not enough people know about it.`,
  },
  {
    heading: "Field hiding is not field-level security",
    body: `You can hide fields in a view and share that view as a link. The recipient only sees what you've chosen. They can't unhide hidden fields from a shared view link.

But for collaborators inside the base, view-level hiding is not security. Any Editor can create a new view and see every field. If you have truly sensitive data like salary figures or personal information in a field, hiding it in a view does not protect it from people who have base access.

The only real option for sensitive fields is to put that data in a separate base with tighter access, or use a dedicated tool that supports field-level permissions. Airtable doesn't have true field-level permissions and there's no indication that's changing soon.`,
  },
];

const faqs = [
  { q: "Can I hide specific fields from certain collaborators?", a: "Not at the data level. Airtable does not support field-level permissions. Any Editor can create a new view and see all fields in the base. What you can do is hide fields in a shared view link, whoever accesses the link via URL only sees what the view shows. But collaborators with base access can always unhide fields." },
  { q: "Does view-only access cost a seat?", a: "On most paid plans, yes. This is Airtable's most complained-about pricing issue. The workaround most teams use is shared view links (free, read-only, no account needed) or Softr/Stacker for building client portals where external users log in without needing an Airtable seat." },
  { q: "Can I share an Airtable interface without giving someone base access?", a: "Yes, on Business plan and above. You can share an Interface Designer interface to specific people by email. They get viewer access to the interface only and do not need a full collaborator seat. This is the cleanest option for giving clients or external stakeholders a limited view without paying per seat." },
  { q: "What is the difference between Editor and Creator access?", a: "Editors can add, edit, and delete records. Creators can also modify the base structure: add tables, create or delete fields, and change field types. Only give Creator access to people who are actively building the base. An accidental field deletion or type change by a Creator can break formulas and automations across the entire base." },
];

export default function PermissionsPage() {
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#D4622A18", borderRadius: "999px", padding: "4px 12px", marginBottom: "16px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#D4622A", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Painful</span>
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, color: "var(--ink)", margin: "0 0 16px" }}>
            Permissions Without the Mess
          </h1>
          <p style={{ fontSize: "17px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Why giving limited access feels broken, what the actual options are, and how to share with clients without the seat cost spiral.
          </p>
          <span style={{ fontSize: "13px", color: "var(--ink-3)" }}>6 min read</span>
        </section>

        <article style={{ paddingBottom: "80px" }}>
          {sections.map((s, i) => (
            <section key={i} className="observe-reveal" style={{ marginBottom: "48px", transitionDelay: `${i * 0.06}s` }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 16px", lineHeight: 1.3 }}>{s.heading}</h2>
              {s.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.75, margin: "0 0 16px" }}>{para}</p>
              ))}
            </section>
          ))}

          <div className="observe-reveal" style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "24px 28px", marginBottom: "48px" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>External Access Options</h3>
            {[
              ["Shared view link", "Read-only, no account needed. Free."],
              ["Airtable Form", "Data entry only, no record viewing. Free."],
              ["Interface (shared)", "Read-only or form-based. Business plan and above."],
              ["Softr / Stacker", "Full client portal with per-user data filtering. Paid third-party."],
            ].map(([option, desc]) => (
              <div key={option as string} style={{ display: "flex", gap: "16px", marginBottom: "10px", fontSize: "14px" }}>
                <span style={{ fontWeight: 700, color: "var(--ink)", minWidth: "170px", flexShrink: 0 }}>{option}</span>
                <span style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>


      {/* FAQ Section - plain HTML for AI and SEO crawlers */}
      <section style={{ paddingBottom: "80px" }}>
        <h2 className="observe-reveal" style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "-0.03em", color: "var(--ink)", margin: "0 0 24px" }}>
          Common questions
        </h2>
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="observe-reveal"
              itemScope
              itemType="https://schema.org/Question"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                padding: "20px 24px",
                transitionDelay: `${i * 0.04}s`,
              }}
            >
              <h3
                itemProp="name"
                style={{ margin: "0 0 10px", fontSize: "15px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1.4 }}
              >
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
                { href: "/guides/pricing", label: "Airtable pricing reality check" },
                { href: "/alternatives", label: "When Softr beats Airtable Interfaces" },
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
                <Link href="/guides/forms" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          Airtable Forms
        </Link>
                <Link href="/guides/pricing" style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--ink-3)", textDecoration: "none", fontWeight: 500, padding: "10px 14px", background: "var(--card)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", transition: "border-color 0.2s ease", marginLeft: "auto" }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
        >
          Pricing Reality
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </Link>
      </nav>
      </main>
      <Footer />
    </>
  );
}
