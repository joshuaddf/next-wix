import type { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  const baseUrl = "https://next-wix.vercel.app/";

  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: `${baseUrl}sitemap.xml`,
  };
}
