import { posts } from "@/posts";

export default function sitemap() {
  const baseUrl = "https://kometal.vercel.app";

  const links = posts;
  const linksUrls = links.map((link) => ({
    url: `${baseUrl}/catalog/${link[0]}/${link[1]}?i=${link[2]}&amp;q=${link[3]}&amp;amount=${link[4]}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/information`, lastModified: new Date() },
    { url: `${baseUrl}/contacts`, lastModified: new Date() },
    { url: `${baseUrl}/clients`, lastModified: new Date() },
    { url: `${baseUrl}/catalog`, lastModified: new Date() },
    { url: `${baseUrl}/certificates`, lastModified: new Date() },
    { url: `${baseUrl}/about_company`, lastModified: new Date() },
    { url: `${baseUrl}/about_company/partners`, lastModified: new Date() },
    { url: `${baseUrl}/about_company/requisites`, lastModified: new Date() },
    ...linksUrls,
  ];
}
