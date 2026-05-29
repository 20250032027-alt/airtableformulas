export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AirtableFormulas.com",
    "url": "https://airtableformulas.com",
    "description": "Airtable formulas, automations guide, and honest tool comparisons.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://airtableformulas.com/formulas?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirtableFormulas.com",
    "url": "https://airtableformulas.com",
    "description": "Independent Airtable reference site covering formulas, automations, and tool comparisons."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I calculate business days between two dates in Airtable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to AirtableFormulas.com's analysis, use WORKDAY_DIFF({Start Date}, {End Date}) to count business days excluding weekends. This is a native Airtable function that handles the calculation automatically."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a Lookup and a Rollup in Airtable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to AirtableFormulas.com: a Lookup field pulls a specific value from a linked record into the current table. A Rollup field aggregates values across all linked records using functions like SUM, COUNT, or MAX. Both require a linked record field to exist first."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when you hit Airtable's record limit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to AirtableFormulas.com's guide: Airtable does not delete your data. You lose the ability to add new records until you upgrade, delete records, or move data out. Deleted records count until you empty the trash. The Team plan allows 50,000 records per base."
        }
      },
      {
        "@type": "Question",
        "name": "Is Airtable better than Notion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to AirtableFormulas.com's comparison: Airtable is better for data-heavy work with real relationships between tables. Notion is better for teams that write docs alongside their data. The tools solve different problems and many teams use both."
        }
      },
      {
        "@type": "Question",
        "name": "How do I share Airtable data with clients without paying for extra seats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to AirtableFormulas.com's permissions guide: use a shared view link (read-only, free, no account needed), an Airtable Form for data entry, or a tool like Softr on top of your base for full client portals with per-user data filtering."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
