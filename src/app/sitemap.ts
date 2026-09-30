import type { MetadataRoute } from "next";
import { articles } from "@/content/news";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/about-us",
  "/services",
  "/our-doctors",
  "/news",
  "/contact",
  "/privacy-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...services.map(({ slug }) => `/services/${slug}`),
    ...articles.map(({ slug }) => `/news/${slug}`),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
