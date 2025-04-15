import type { MetadataRoute } from "next"

// This function generates a sitemap for search engines to better index our site
export default function sitemap(): MetadataRoute.Sitemap {
  // Base URL for the website
  const baseUrl = "https://www.hamlinconstructionco.com"

  // Current date for lastModified field
  const currentDate = new Date()

  // Define all routes in the website
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/legal-disclaimer`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}
