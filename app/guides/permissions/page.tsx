"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const sections = [
  {
    heading: "Why Airtable permissions feel broken",
    body: `The top complaint on the Airtable subreddit about permissions is not a bug. It's a design choice that most users discover at the worst possible time.

Airtable's permission model is workspace-first, not base-first. When you add a collaborator, you're adding them to the workspace, and then restricting what they can see within it. This means every person you give access to counts against your seat count, even if they only need to view one base.

For teams sharing data with clients, contractors, or external partners, this creates an immediate problem: you either pay for seats you didn't plan on, or you use shared views and lose the ability to let people interact with the data.

The good news is there are real options. They just aren't obvious from the interface.`,
  },
  {
    heading: "The four access levels and what they actually mean",
    body: `Airtable has four collaborator roles at the base level: Owner, Creator, Editor, and Commenter/Read-only (the last two depend on your plan).

Owner can do everything including delete the base and manage billing. There should be one, maybe two.

Creator can build new tables, create fields, and modify the structure of the base. Give this to your internal builders only. Anyone with Creator access can accidentally break your base structure.

Editor can add, edit, and delete records. This is the right level for most internal team members who use the base day to day.

Commenter can leave comments but not edit records. Read-only can see records but nothing else. Both require a paid seat on most plans, which is the frustrating part.`,
  },
  {
    heading: "How to share without paying for seats",
    body: `There are three legitimate paths that don't require paying for a full collaborator seat.

Shared views are the most common. You can create a view in your base, click Share, and get a link that anyone can access without an Airtable account. They see exactly what the view shows and nothing else. They can't edit records. If read-only access is enough, this is the cleanest solution.

Interface Designer with public sharing lets you build a custom interface on top of your base and share it without requiring accounts, depending on your plan. The interface can be read-only or allow form submissions. This is the right path for client portals where you want a cleaner experience than a raw Airtable view.

Airtable Forms are underused for data collection. If external people need to add data but not see or edit existing records, a form is the right tool. Free plan, no accounts required, data goes directly into your base.`,
  },
  {
    heading: "The external collaborator cost spiral",
    body: `This is the scenario that frustrates Airtable users more than almost anything else: you want to give 10 clients read access to their own project data. In Airtable's default model, that's 10 paid seats.

The community-tested solutions for this problem are Softr, Stacker, and MiniExtensions. These tools sit on top of your Airtable base and let you build a portal where each user sees only their own records, without needing an Airtable account. They authenticate users themselves.

Softr has a free plan that covers basic portals. For most small agencies and consultancies managing client data, it's the right answer to the external access problem.

If you need to stay entirely within Airtable, the Interface Designer on the Pro plan lets you share interfaces to specific people by email without them needing a full collaborator seat — they get viewer access to the interface only. This launched in 2024 and is underused.`,
  },
  {
    heading: "Field-level and table-level hiding",
    body: `Airtable doesn't have true field-level permissions — you can't say "this collaborator can't see this field." What you can do is hide fields in a view, and then lock the view.

If you create a view, hide the sensitive fields, and use the Share View option, the recipient only sees the fields you've chosen. They can't unhide the hidden fields from a shared view link.

For collaborators inside the base, view-level field hiding is not security — Editors can always create a new view and see all fields. If you have truly sensitive fields (salary data, personal information), the only real option is to put that data in a separate base with tighter access, or use a dedicated tool that supports field-level permissions.`,
  },
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
            Why giving limited access feels so broken, what your actual options are, and how teams share with clients without a seat cost spiral.
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
            <h3 style={{ margin: "0 0 16px", fontSize: "15px", fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>External Access Options at a Glance</h3>
            {[
              ["Shared view link", "Read-only, no account needed. Free."],
              ["Airtable Form", "Data entry only, no record viewing. Free."],
              ["Interface (shared)", "Read-only or form-based portal. Pro plan+."],
              ["Softr / Stacker", "Full client portal, per-user data filtering. Paid third-party."],
            ].map(([option, desc]) => (
              <div key={option as string} style={{ display: "flex", gap: "16px", marginBottom: "10px", fontSize: "14px" }}>
                <span style={{ fontWeight: 700, color: "var(--ink)", minWidth: "170px", flexShrink: 0 }}>{option}</span>
                <span style={{ color: "var(--ink-2)", lineHeight: 1.5 }}>{desc}</span>
              </div>
            ))}
          </div>

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
      </main>
      <Footer />
    </>
  );
}
