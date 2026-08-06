import type { MetadataRoute } from "next";

const siteUrl = "https://alextyulyupo.com";
const publicRoutes = [
  "",
  "/research",
  "/tools",
  "/teaching",
  "/presentations",
  "/cv",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));
}
