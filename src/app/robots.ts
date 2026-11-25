import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Replaces the old static public/robots.txt so the domain lives in one place.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
