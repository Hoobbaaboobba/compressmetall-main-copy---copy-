import { ids } from "./components/pagesLinks";

const lastmode = "2023-08-05";

export default function generateSiteMap() {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ids
      .map(
        (link) =>
          `
        <url>
            <loc>http://kometal.vercel.app/${link.id[0]}/${link.id[1]}/${link.id[2]}</loc>
            <lastmod>${lastmode}</lastmod>
        </url>
        `
      )
      .join("")}
    `;
}

console.log(generateSiteMap);
