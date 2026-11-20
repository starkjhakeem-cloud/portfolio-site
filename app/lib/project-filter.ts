export const projectFilters = ["All projects", "Web", "Mobile"] as const;
export type ProjectFilter = (typeof projectFilters)[number];

export function filterProjects<T extends { category: "Web" | "Mobile" }>(
  projects: readonly T[],
  filter: ProjectFilter,
): T[] {
  return projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
}
