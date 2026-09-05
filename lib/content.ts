import { projects } from "@/data/projects";
import { thoughts } from "@/data/thoughts";
import { resources } from "@/data/resources";
import type { Project, Resource, Thought } from "./types";

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((project) => project.featured);
}

export function getOtherProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}

export function getThoughts(): Thought[] {
  return thoughts;
}

export function getThoughtBySlug(slug: string): Thought | undefined {
  return thoughts.find((thought) => thought.slug === slug);
}

export function getResources(): Resource[] {
  return resources;
}
