import type { MetadataRoute } from "next"

// This function generates robots.txt to guide search engine crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.hamlinconstructionco.com/sitemap.xml",
  }
}
