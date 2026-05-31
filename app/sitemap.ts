import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://airtableformulas.com";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/formula-builder", priority: 0.95, changeFrequency: "monthly" as const },
    { url: "/formulas", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/formulas/date-time", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/formulas/conditional", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/formulas/text", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/formulas/math", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/formulas/lookup", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/formulas/boolean", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/formulas/url", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/formulas/array", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/alternatives", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/alternatives/airtable-vs-notion", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/alternatives/airtable-vs-sheets", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/automations", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/guides/linked-records", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/interfaces", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/permissions", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/record-limits", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/guides/pdf-generation", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/guides/scripting", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/guides/translation", priority: 0.75, changeFrequency: "monthly" as const },
    { url: "/guides/getting-started", priority: 0.88, changeFrequency: "monthly" as const },
    { url: "/guides/forms", priority: 0.88, changeFrequency: "monthly" as const },
    { url: "/guides/ai-features", priority: 0.85, changeFrequency: "monthly" as const },
    { url: "/tools/translator", priority: 0.85, changeFrequency: "monthly" as const },
  ];

  return routes.map((r) => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
