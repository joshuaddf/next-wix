import { MetadataRoute } from "next";
import sitemap from "./sitemap";

export default function robot(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/blog"],
            disallow: [],
        },
        sitemap: "https://www.next-wix.vercel.app/sitemap.xml",
    };
}