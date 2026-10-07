import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "CCBot",
          "Bytespider",
          "Applebot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://phdanielhenrique.com.br/sitemap.xml",
    host: "https://phdanielhenrique.com.br",
  };
}
