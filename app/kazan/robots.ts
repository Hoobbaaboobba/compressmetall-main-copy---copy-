import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
<<<<<<< HEAD
    sitemap: "https://www.kometal.ru/sitemap.xml",
=======
    sitemap: "https://www.kometal.ru/kazan/sitemap.xml",
>>>>>>> 7b47037 (commt)
  };
}
