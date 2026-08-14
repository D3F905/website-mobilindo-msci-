import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Single-page landing site — one entry for the homepage. Anchor sections
 * (#armada, #cara-sewa, #syarat, #kontak) are not separate URLs and don't
 * belong in a sitemap; there is no per-vehicle page to fabricate URLs for.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
