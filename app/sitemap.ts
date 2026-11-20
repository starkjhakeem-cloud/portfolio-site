import type { MetadataRoute } from "next";
import { profile } from "@/app/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
