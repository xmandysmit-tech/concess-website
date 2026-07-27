import { MetadataRoute } from "next";
import { partnershipCases, studioCases } from "./data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://concess.nl";

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/creators`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/partnerships`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${base}/studio`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/over-ons`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
  ];

  const partnershipPages = partnershipCases
    .filter((c) => c.slug && !c.href)
    .map((c) => ({
      url: `${base}/partnerships/${c.slug}`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }));

  const studioPages = studioCases
    .filter((p) => p.slug)
    .map((p) => ({
      url: `${base}/studio/${p.slug}`,
      priority: 0.6,
      changeFrequency: "monthly" as const,
    }));

  return [...staticPages, ...partnershipPages, ...studioPages];
}
