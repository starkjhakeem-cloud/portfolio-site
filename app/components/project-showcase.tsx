"use client";

import Image from "next/image";
import { useState } from "react";
import { profile, projects, type Project } from "@/app/data/portfolio";
import { Icon } from "./ui-icon";

const filters = ["All projects", "Web", "Mobile"] as const;

function ProjectVisual({ project }: { project: Project }) {
  if (!project.image)
    return (
      <div className="project-visual notes-visual" aria-hidden="true">
        <div className="notes-orbit" />
        <div className="notes-mark">
          <Icon name="file" width="48" height="48" />
          <span>
            links <i>&</i> notes
            <span className="notes-mark-line" />
          </span>
        </div>
        <span className="visual-caption">A SPACE FOR IDEAS.</span>
      </div>
    );
  return (
    <div className={`project-visual ${project.id}-visual`}>
      <span className="visual-corner" aria-hidden="true">
        {project.category === "Mobile"
          ? "MOBILE EXPERIENCE"
          : "WEB APPLICATION"}
      </span>
      <div className="project-image-frame">
        {project.id === "finance" ? (
          <div className="browser-chrome" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>finance-tracker / dashboard</span>
          </div>
        ) : null}
        <Image
          src={project.image}
          alt={project.imageAlt ?? project.title}
          width={project.id === "finance" ? 1200 : 540}
          height={project.id === "finance" ? 1057 : 1163}
          sizes="(max-width: 767px) 90vw, (max-width: 1199px) 50vw, 650px"
        />
      </div>
      <span className="visual-caption">ACTUAL PROJECT SCREENSHOT</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`project-card project-${project.id}`}
      aria-labelledby={`project-${project.id}-title`}
    >
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-overline">
          <span className="mono">
            {project.number} / {project.category.toUpperCase()}
          </span>
          <Icon
            name={project.category === "Mobile" ? "terminal" : "globe"}
            width="17"
            height="17"
          />
        </div>
        <p className="project-kind">{project.kind}</p>
        <h3 id={`project-${project.id}-title`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        {project.stack.length > 0 ? (
          <ul className="tag-list" aria-label="Technologies">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="source-note">
            <span className="status-dot muted-dot" /> Repository currently
            unavailable
          </p>
        )}
        <div className="project-links">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} source on GitHub (opens in new tab)`}
            >
              <Icon name="github" width="17" height="17" /> View source{" "}
              <Icon name="northeast" width="15" height="15" />
            </a>
          ) : (
            <a
              href={`mailto:${profile.email}?subject=Link%20%26%20Notes%20Application`}
            >
              Ask about the project{" "}
              <Icon name="northeast" width="15" height="15" />
            </a>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noopener noreferrer">
              Live demo <Icon name="northeast" width="15" height="15" />
            </a>
          ) : null}
        </div>
        {project.details.length > 0 ? (
          <details className="project-details">
            <summary>
              Behind the build <Icon name="plus" width="18" height="18" />
            </summary>
            <div>
              {project.details.map((detail) => (
                <section key={detail.title}>
                  <h4>{detail.title}</h4>
                  <p>{detail.body}</p>
                </section>
              ))}
            </div>
          </details>
        ) : null}
      </div>
    </article>
  );
}

export function ProjectShowcase() {
  const [filter, setFilter] =
    useState<(typeof filters)[number]>("All projects");
  const visible = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  return (
    <>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by platform"
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={item === filter}
              aria-controls="project-results"
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {String(
                  projects.filter(
                    (project) =>
                      item === "All projects" || project.category === item,
                  ).length,
                ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <p className="project-count mono" role="status" aria-live="polite">
          {String(visible.length).padStart(2, "0")} SELECTED{" "}
          {visible.length === 1 ? "PROJECT" : "PROJECTS"}
        </p>
      </div>
      <div
        id="project-results"
        className={`project-grid ${filter !== "All projects" ? "is-filtered" : ""}`}
      >
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
