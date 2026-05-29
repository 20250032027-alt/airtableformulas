"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        .contact-input {
          width: 100%;
          padding: 12px 16px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 15px;
          color: var(--ink);
          font-family: var(--font-geist-sans);
          outline: none;
          transition: border-color 0.2s ease;
          box-sizing: border-box;
        }
        .contact-input:focus { border-color: var(--accent); }
        .contact-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--ink-3);
          margin-bottom: 6px;
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }
        .contact-submit {
          background: var(--accent);
          color: #fff;
          border: none;
          border-radius: 999px;
          padding: 13px 28px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          font-family: var(--font-geist-sans);
          transition: background 0.2s ease;
        }
        .contact-submit:hover { background: var(--accent-2); }
        .contact-submit:disabled { background: var(--bg-2); color: var(--ink-3); cursor: not-allowed; }
      `}</style>
      <Navbar />
      <DarkModeToggle />
      <main style={{ maxWidth: "560px", margin: "0 auto", padding: "120px 24px 96px" }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.04em", color: "var(--ink)", margin: "0 0 12px" }}>
          Contact
        </h1>
        <p style={{ fontSize: "16px", color: "var(--ink-2)", lineHeight: 1.7, margin: "0 0 40px" }}>
          Formula wrong? Guide missing something? Found a broken link? Let us know.
        </p>

        {submitted ? (
          <div style={{ background: "var(--accent-subtle)", border: "1px solid rgba(212,98,42,0.2)", borderRadius: "var(--radius-lg)", padding: "32px", textAlign: "center" }}>
            <p style={{ fontSize: "18px", fontWeight: 700, color: "var(--accent)", margin: "0 0 8px" }}>Message sent</p>
            <p style={{ fontSize: "14px", color: "var(--ink-2)", margin: 0 }}>Thanks. We read everything.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div>
              <label className="contact-label" htmlFor="email">Your email</label>
              <input id="email" name="email" type="email" required className="contact-input" placeholder="you@example.com" />
            </div>
            <div>
              <label className="contact-label" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" required className="contact-input" placeholder="Formula issue, missing guide, broken link..." />
            </div>
            <div>
              <label className="contact-label" htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={5} className="contact-input" placeholder="Tell us what's wrong or what's missing." style={{ resize: "vertical", minHeight: "120px" }} />
            </div>
            <button type="submit" disabled={loading} className="contact-submit">
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
