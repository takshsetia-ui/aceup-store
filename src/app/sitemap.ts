import { MetadataRoute } from "next";
import { getAllArtworkSlugs } from "@/data/artwork";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aceup.store";
  const artworkSlugs = getAllArtworkSlugs();

  const staticPages = [
    "",
    "/floor-art",
    "/about",
    "/craft",
    "/contact",
    "/faq",
    "/shipping",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const artworkPages = artworkSlugs.map((slug) => ({
    url: `${baseUrl}/floor-art/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...artworkPages];
}
