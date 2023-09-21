import { posts } from "@/posts";

export default function sitemap() {
  const city = "voronezh";
  const baseUrl = "https://www.kometal.ru";

  const links = posts;
  const linksUrls = links.map((link) => ({
    url: `${baseUrl}/${city}/catalog/${link[0]}/${link[1]}?i=${link[2]}&amp;q=${link[3]}&amp;amount=${link[4]}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/${city}/services`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/information`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/contacts`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/clients`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/catalog`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/certificates`, lastModified: new Date() },
    { url: `${baseUrl}/${city}/about_company`, lastModified: new Date() },
    {
      url: `${baseUrl}/${city}/about_company/partners`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/${city}/about_company/requisites`,
      lastModified: new Date(),
    },
    ...linksUrls,
  ];
}
