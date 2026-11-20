"use client";

import Image from "next/image";
import { useState } from "react";
import { projects, type Project } from "@/app/data/portfolio";
import { Icon } from "./ui-icon";
import {
  filterProjects,
  projectFilters,
  type ProjectFilter,
} from "@/app/lib/project-filter";

function ProjectVisual({ project }: { project: Project }) {
  if (project.access === "proprietary") {
    return (
      <div
        className="project-visual helios-visual"
        role="img"
        aria-label="Abstract HELIOS ONE identity illustration. Conceptual placeholder, not an application screenshot."
      >
        <span className="visual-corner">
          INDEPENDENT RESEARCH & DEVELOPMENT
        </span>
        <div className="helios-emblem" aria-hidden="true">
          <span className="helios-ring" />
          <span className="helios-core">
            <Icon name="lock" width="28" height="28" />
          </span>
          <span className="helios-wordmark">
            HELIOS <span>ONE</span>
          </span>
          <span className="helios-discipline mono">
            NATIVE macOS · LOCAL SERVICES
          </span>
        </div>
        <span className="visual-caption">
          PROJECT IDENTITY · CONCEPT VISUAL
        </span>
      </div>
    );
  }
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
          alt={project.imageAlt}
          width={project.id === "finance" ? 1200 : 540}
          height={project.id === "finance" ? 1057 : 1163}
          sizes={
            project.id === "jobs"
              ? "(max-width: 767px) 140px, 160px"
              : "(max-width: 767px) calc(100vw - 100px), (max-width: 1024px) calc(100vw - 120px), 600px"
          }
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
        {project.access === "proprietary" ? (
          <p className="project-flagship mono">FLAGSHIP · INDEPENDENT R&D</p>
        ) : null}
        <p className="project-kind">{project.kind}</p>
        <h3 id={`project-${project.id}-title`}>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label="Technologies">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        {project.access === "proprietary" ? (
          <p className="project-privacy">
            <Icon name="lock" width="16" height="16" />
            Proprietary Project — Source Private
          </p>
        ) : (
          <div className="project-links">
            <a
              href={project.image}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View screenshot: ${project.title} (opens in new tab)`}
            >
              View screenshot <Icon name="northeast" width="15" height="15" />
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source: ${project.title} on GitHub (opens in new tab)`}
            >
              <Icon name="github" width="17" height="17" /> View source{" "}
              <Icon name="northeast" width="15" height="15" />
            </a>
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live demo <Icon name="northeast" width="15" height="15" />
              </a>
            ) : null}
          </div>
        )}
        {project.details.length > 0 ? (
          <details className="project-details">
            <summary aria-label={`Behind the build: ${project.title}`}>
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
  const [filter, setFilter] = useState<ProjectFilter>("All projects");
  const visible = filterProjects(projects, filter);
  return (
    <>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter projects by platform"
        >
          {projectFilters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={item === filter}
              aria-controls="project-results"
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {String(filterProjects(projects, item).length).padStart(2, "0")}
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
        key={filter}
        data-result-count={visible.length}
        className="project-grid"
      >
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
