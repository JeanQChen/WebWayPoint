import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { getProjects, getThoughts } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl;
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/projects",
    "/thoughts",
    "/resources",
    "/about",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = getProjects().map((project) => ({
    url: `${base}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const thoughtRoutes: MetadataRoute.Sitemap = getThoughts().map((thought) => ({
    url: `${base}/thoughts/${thought.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes, ...thoughtRoutes];
}
