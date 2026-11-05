import type { MetadataRoute } from "next";
import { getAllEpisodes } from "@/lib/episodes";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const episodes = getAllEpisodes();
  return [
    {
      url: SITE_URL,
      lastModified: new Date(episodes[0]?.date ?? Date.now()),
      changeFrequency: "weekly",
      priority: 1,
    },
    { url: `${SITE_URL}/partenariats`, changeFrequency: "monthly", priority: 0.6 },
    ...["/mentions-legales", "/confidentialite"].map((path) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
    ...episodes.map((e) => ({
      url: `${SITE_URL}/articles/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
