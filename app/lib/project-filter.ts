import type { ProjectCategory } from "@/app/data/portfolio";

export const projectFilters = [
  "All projects",
  "Systems",
  "Web",
  "Mobile",
] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects<T extends { category: ProjectCategory }>(
  projects: readonly T[],
  filter: ProjectFilter,
): T[] {
  return projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
}
