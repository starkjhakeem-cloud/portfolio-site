type SectionPosition = { id: string; top: number };

// Use section starts instead of intersection ratios: case studies can be taller
// than the viewport, and returning to the hero must clear the previous marker.
export function selectActiveSection(
  sections: readonly SectionPosition[],
  activationLine: number,
  atBottom: boolean,
): string {
  if (atBottom && sections.some((section) => section.id === "contact"))
    return "contact";
  let active = "";
  for (const section of sections) {
    if (section.top > activationLine) break;
    active = section.id;
  }
  return active === "top" || active === "resume" ? "" : active;
}
