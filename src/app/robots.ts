import { MetadataRoute } from "next";

export default function robots(): Promise<MetadataRoute.Robots> {
    return Promise.resolve({
        rules: {
            userAgent: "*",
            allow: ["/", "/blog"],
            disallow: [],
        },
        sitemap: "https://next-wix.vercel.app/sitemap.xml",
    });
}