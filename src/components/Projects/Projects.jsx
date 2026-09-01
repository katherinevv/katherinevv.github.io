import "./Projects.css";
import { PROJECTS } from "./data/index";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiCalendar } from "react-icons/fi";

import BearCoding from "../../assets/images/Mascot/bear-coding.png";

const FILTERS = ["All", "Professional", "Web", "Mobile", "API & Backend", "UI/UX"];

function ProjectCover({ project, variant = "card" }) {
  const { cover = {}, title, id } = project;
  const isModal = variant === "modal";
  const wrapClass = isModal ? "project-modal-hero" : "project-card-cover";

  if (cover.src) {
    return (
      <div className={wrapClass}>
        <img src={cover.src} alt={cover.alt || title} loading="lazy" />
      </div>
    );
  }

  if (cover.type === "branded") {
    const brandedClass = isModal
      ? "project-modal-hero-branded"
      : "project-card-cover-branded";

    return (
      <div className={wrapClass}>
        <div className={brandedClass}>
          <span className={isModal ? "project-modal-cover-mark" : "project-card-cover-mark"}>
            {cover.mark || title.charAt(0)}
          </span>

          <span className="project-branded-cover-label">
            {cover.label || "Project"}
          </span>
        </div>
      </div>
    );
  }

  const placeholderClass = isModal ? "project-modal-hero-placeholder" : "project-card-cover-placeholder";
  const iconClass = isModal ? "project-modal-hero-placeholder-icon" : "project-card-cover-placeholder-icon";
  const labelClass = isModal ? "project-modal-hero-placeholder-label" : "project-card-cover-placeholder-label";
  const pathClass = isModal ? "project-modal-hero-placeholder-path" : "project-card-cover-placeholder-path";

  return (
    <div className={wrapClass}>
      <div className={placeholderClass}>
        <span className={iconClass} aria-hidden="true">
          🖼️
        </span>
        <span className={labelClass}>Add {isModal ? "hero image" : "screenshot"}</span>
        <span className={pathClass}>cover.src → /images/projects/{id}.png</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, onSelect }) {
  return (
    <button
      type="button"
      className="project-card"
      onClick={() => onSelect(project)}
      aria-haspopup="dialog"
    >
      <div style={{ position: "relative" }}>
        <ProjectCover project={project} variant="card" />
        <span className="project-card-badge">{project.context}</span>
      </div>

      <div className="project-card-body">
        <h3 className="project-card-title">{project.title}</h3>
        <p className="project-card-oneliner">{project.oneLiner}</p>

        {project.tags?.length > 0 && (
          <div className="project-card-tags">
            {project.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="project-card-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {project.tech?.length > 0 && (
          <div className="project-card-tech">
            {project.tech.slice(0, 4).map((tech) => (
              <span key={tech} className="project-card-tech-item">
                {tech}
              </span>
            ))}
          </div>
        )}

        <span className="project-card-cta">
          View Project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M3 11L11 3M11 3H5M11 3V9"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </button>
  );
}

function ProjectMarquee({ projects, onSelect, filterKey }) {
  const trackRef = useRef(null);
  const isHovering = useRef(false);
  const isDragging = useRef(false);
  const pointerIsDown = useRef(false);
  const didDrag = useRef(false);
  const dragOrigin = useRef({ x: 0, scrollLeft: 0 });
  const rafId = useRef(null);
  const currentSpeed = useRef(0);
  const lastFrame = useRef(0);

  const loopItems = useMemo(() => {
    if (projects.length === 0) return [];

    const repeatCount = projects.length <= 2 ? 4 : 2;

    return Array.from(
      { length: repeatCount },
      () => projects
    ).flat();
  }, [projects]);

  const speed = 26;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    track.scrollLeft = 0;
    lastFrame.current = performance.now();
    currentSpeed.current = 0;

    function tick(now) {
      const dt = (now - lastFrame.current) / 1000;
      lastFrame.current = now;

      const targetSpeed =
        !isHovering.current && !isDragging.current && projects.length > 1 ? speed : 0;

      currentSpeed.current +=
        (targetSpeed - currentSpeed.current) * Math.min(dt * 5, 1);

      if (!isDragging.current && Math.abs(currentSpeed.current) > 0.01) {
        track.scrollLeft += currentSpeed.current * dt;

        const half = track.scrollWidth / 2;
        if (half > 0) {
          if (track.scrollLeft >= half) track.scrollLeft -= half;
          if (track.scrollLeft < 0) track.scrollLeft += half;
        }
      }

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [filterKey, projects.length]);

  const handlePointerDown = useCallback((event) => {
    const track = trackRef.current;
    if (!track) return;

    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerIsDown.current = true;
    didDrag.current = false;

    dragOrigin.current = {
      x: event.clientX,
      scrollLeft: track.scrollLeft,
    };
  }, []);

  const handlePointerMove = useCallback((event) => {
    const track = trackRef.current;

    if (!track || !pointerIsDown.current) return;

    const dx = event.clientX - dragOrigin.current.x;

    if (!isDragging.current && Math.abs(dx) > 6) {
      isDragging.current = true;
      didDrag.current = true;

      track.setPointerCapture?.(event.pointerId);
      track.classList.add("is-dragging");
    }

    if (!isDragging.current) return;

    track.scrollLeft =
      dragOrigin.current.scrollLeft - dx;
  }, []);

  const endDrag = useCallback((event) => {
    const track = trackRef.current;

    pointerIsDown.current = false;
    isDragging.current = false;

    track?.classList.remove("is-dragging");

    if (
      track &&
      event?.pointerId != null &&
      track.hasPointerCapture?.(event.pointerId)
    ) {
      track.releasePointerCapture?.(event.pointerId);
    }

    window.setTimeout(() => {
      didDrag.current = false;
    }, 0);
  }, []);

  if (projects.length === 0) {
    return <ProjectsEmptyState />;
  }

  return (
    <div
      className="project-marquee"
      onMouseEnter={() => {
        isHovering.current = true;
      }}
      onMouseLeave={() => {
        isHovering.current = false;
        endDrag();
      }}
    >
      <div
        className="project-marquee-track"
        ref={trackRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {loopItems.map((project, index) => (
          <div className="project-marquee-item" key={`${project.id}-${index}`}>
            <ProjectCard project={project} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectGrid({ projects, onSelect }) {
  if (projects.length === 0) {
    return <ProjectsEmptyState />;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onSelect={onSelect} />
      ))}
    </div>
  );
}

function ProjectsEmptyState() {
  return (
    <div className="projects-empty-state">
      <span>No projects found in this category yet.</span>
    </div>
  );
}

function ProjectModal({ project, onClose, onSelectProject }) {
  const dialogRef = useRef(null);
  const scrollRef = useRef(null);
  const previouslyFocused = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const relatedProjects = useMemo(() => {
    if (!project) return [];

    const currentCategories = new Set(project.categories || []);

    return PROJECTS
      .filter((candidate) => candidate.id !== project.id)
      .map((candidate) => {
        const sharedCategories = (candidate.categories || []).filter((category) =>
          currentCategories.has(category)
        ).length;

        const contextBonus = candidate.context === project.context ? 0.5 : 0;
        const featuredBonus = candidate.featured ? 0.15 : 0;

        return {
          project: candidate,
          score: sharedCategories + contextBonus + featuredBonus,
        };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.project);
  }, [project]);

  useEffect(() => {
    previouslyFocused.current = document.activeElement;

    function handleKey(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKey);
      previouslyFocused.current?.focus?.();
    };
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    scrollRef.current?.scrollTo({ top: 0, behavior: "auto" });
    setScrollProgress(0);
  }, [project?.id]);

  if (!project) return null;

  const handleModalScroll = (event) => {
    const element = event.currentTarget;
    const maxScroll = element.scrollHeight - element.clientHeight;
    const progress = maxScroll > 0 ? (element.scrollTop / maxScroll) * 100 : 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  return createPortal(
    <div
      className="project-modal-backdrop"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${project.id}-modal-title`}
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="project-modal-topbar">
          <button
            type="button"
            className="project-modal-back"
            onClick={onClose}
            aria-label="Back to projects"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M12.5 7.5H2.5M2.5 7.5L6.5 3.5M2.5 7.5L6.5 11.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to Projects</span>
          </button>

          <span className="project-modal-current-title" aria-hidden="true">
            {project.title}
          </span>

          <button
            type="button"
            className="project-modal-close"
            onClick={onClose}
            aria-label="Close project details"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="project-modal-progress" aria-hidden="true">
            <span style={{ width: `${scrollProgress}%` }} />
          </div>
        </div>

        <div
          className="project-modal-scroll"
          ref={scrollRef}
          onScroll={handleModalScroll}
        >
          <ProjectCover project={project} variant="modal" />

          <div className="project-modal-content">
            <div className="project-modal-intro">
              <div className="project-modal-meta-row">
                <span className="project-modal-badge">
                  {project.modalContext || project.context}
                </span>

                {project.timeline && (
                  <div className="project-modal-timeline">
                    <FiCalendar pan className="project-modal-timeline-icon" />
                    <span>{project.timeline}</span>
                  </div>
                )}
              </div>

              <h2 id={`${project.id}-modal-title`} className="project-modal-title">
                {project.title}
              </h2>

              <p className="project-modal-oneliner">
                {project.shortIntroduction || project.oneLiner}
              </p>
            </div>

            <ModalSection heading="Overview" text={project.overview} />
            <ModalSection heading="Challenge" text={project.challenge} />

            {(project.role || project.roleDescription) && (
              <div className="project-modal-section">
                <ProjectModalSectionHeading>My Role</ProjectModalSectionHeading>
                <div className="project-modal-role-card">
                  {project.role && <p className="project-modal-role">{project.role}</p>}
                  {project.roleDescription && (
                    <p className="project-modal-text">{project.roleDescription}</p>
                  )}
                </div>
              </div>
            )}

            {project.myContributions?.length > 0 && (
              <ModalList heading="My Contributions" items={project.myContributions} />
            )}

            {project.teamContributions?.length > 0 && (
              <ModalList heading="Team Contributions" items={project.teamContributions} />
            )}

            {project.deepDive?.map((section) => (
              <DeepDiveSection key={section.heading} section={section} />
            ))}

            {project.collaboration && (
              <ModalSection heading="Collaboration & Process" text={project.collaboration} />
            )}

            {project.process?.length > 0 && (
              <ProjectProcess steps={project.process} />
            )}

            <ImpactSection project={project} />

            {project.techStack?.length > 0 && (
              <div className="project-modal-section">
                <ProjectModalSectionHeading>Tech Stack</ProjectModalSectionHeading>

                <div className="project-modal-stack-groups">
                  {project.techStack.map((group, index) => (
                    <div
                      className="project-modal-stack-group"
                      key={group.category || index}
                    >
                      <p className="project-modal-stack-category">
                        {group.category}
                      </p>

                      <div className="project-modal-stack">
                        {group.items?.map((tech) => (
                          <span
                            key={tech}
                            className="project-modal-stack-item"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.assets?.length > 0 && (
              <div className="project-modal-section">
                <ProjectModalSectionHeading>Project Assets</ProjectModalSectionHeading>
                <div className="project-modal-stack">
                  {project.assets.map((asset) => (
                    <span key={asset} className="project-modal-stack-item">
                      {asset}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.links?.length > 0 && (
              <div className="project-modal-section">
                <ProjectModalSectionHeading>Links</ProjectModalSectionHeading>
                <div className="project-modal-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      className="project-modal-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.confidentialityNote && (
              <div className="project-modal-confidentiality">
                <span className="project-modal-confidentiality-icon" aria-hidden="true">✦</span>
                <span>{project.confidentialityNote}</span>
              </div>
            )}

            {relatedProjects.length > 0 && (
              <RelatedProjects
                projects={relatedProjects}
                onSelect={(nextProject) => onSelectProject?.(nextProject)}
              />
            )}

            <div className="project-modal-end-actions">
              <button type="button" className="project-modal-back-bottom" onClick={onClose}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                  <path
                    d="M12.5 7.5H2.5M2.5 7.5L6.5 3.5M2.5 7.5L6.5 11.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function ProjectModalSectionHeading({ children }) {
  return (
    <div className="project-modal-heading-row">
      <h3 className="project-modal-heading">{children}</h3>
      <span className="project-modal-heading-line" aria-hidden="true" />
    </div>
  );
}

function ModalSection({ heading, text }) {
  if (!text) return null;

  return (
    <div className="project-modal-section">
      <ProjectModalSectionHeading>{heading}</ProjectModalSectionHeading>
      <p className="project-modal-text">{text}</p>
    </div>
  );
}

function ModalList({ heading, items }) {
  if (!items || items.length === 0) return null;

  return (
    <div className="project-modal-section">
      <ProjectModalSectionHeading>{heading}</ProjectModalSectionHeading>
      <ul className="project-modal-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function DeepDiveSection({ section }) {
  const hasItems = section.items?.length > 0;
  const hasGroups = section.groups?.length > 0;

  if (!hasItems && !hasGroups) return null;

  return (
    <div className="project-modal-section project-modal-deep-dive">
      <ProjectModalSectionHeading>{section.heading}</ProjectModalSectionHeading>

      {hasItems && (
        <ul className="project-modal-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {hasGroups && (
        <div className="project-modal-workstreams">
          {section.groups.map((group) => (
            <div className="project-modal-workstream" key={group.heading}>
              <h4 className="project-modal-subheading">{group.heading}</h4>
              <ul className="project-modal-list">
                {group.items?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ProjectProcess({ steps }) {
  return (
    <div className="project-modal-section">
      <ProjectModalSectionHeading>Development Process</ProjectModalSectionHeading>
      <div className="project-modal-process" aria-label="Development process">
        {steps.map((step, index) => (
          <React.Fragment key={`${step}-${index}`}>
            <span className="project-modal-process-step">{step}</span>
            {index < steps.length - 1 && (
              <span className="project-modal-process-arrow" aria-hidden="true">
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function ImpactSection({ project }) {
  const metrics = project.impactMetrics || project.impact || [];
  const items = project.impactItems || [];
  const hasMetrics = metrics.length > 0;
  const hasItems = items.length > 0;

  if (!project.impactSummary && !hasMetrics && !hasItems) return null;

  return (
    <div className="project-modal-section">
      <ProjectModalSectionHeading>Impact & Result</ProjectModalSectionHeading>

      {project.impactSummary && (
        <p className="project-modal-text project-modal-impact-summary">
          {project.impactSummary}
        </p>
      )}

      {hasMetrics && (
        <div className="project-modal-impact-grid">
          {metrics.map((metric) => (
            <div className="project-modal-impact-card" key={metric.label}>
              <span className="project-modal-impact-label">{metric.label}</span>
              <div className="project-modal-impact-values">
                <span className="project-modal-impact-before">{metric.before}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M2 8H14M14 8L9 3M14 8L9 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="project-modal-impact-after">{metric.after}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {hasItems && (
        <ul className="project-modal-list project-modal-impact-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function RelatedProjects({ projects, onSelect }) {
  return (
    <section className="project-modal-related" aria-labelledby="project-related-title">
      <div className="project-modal-related-head">
        <span className="project-modal-related-kicker">CONTINUE EXPLORING</span>
        <h3 id="project-related-title">See another side of my work</h3>
        <p>Projects with related skills, context, or problem-solving areas.</p>
      </div>

      <div className="project-modal-related-grid">
        {projects.map((project) => (
          <button
            type="button"
            className="project-modal-related-card"
            key={project.id}
            onClick={() => onSelect(project)}
          >
            <span className="project-modal-related-context">{project.context}</span>
            <strong>{project.title}</strong>
            <span className="project-modal-related-description">{project.oneLiner}</span>
            <span className="project-modal-related-link">
              View Project
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M2.5 10.5L10.5 2.5M10.5 2.5H5M10.5 2.5V8"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [viewMode, setViewMode] = useState("featured");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return viewMode === "featured"
        ? PROJECTS.filter((project) => project.featured)
        : PROJECTS;
    }

    return PROJECTS.filter((project) =>
      project.categories?.includes(activeFilter)
    );
  }, [activeFilter, viewMode]);

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const handleViewAll = () => {
    setActiveFilter("All");
    setViewMode("all");
  };

  const handleBackToFeatured = () => {
    setActiveFilter("All");
    setViewMode("featured");
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading-shell">
          {/* LEFT BEAR */}
          <div
            className="projects-bear projects-bear-left"
            aria-hidden="true"
          >
            <span className="projects-bear-glow" />

            <span className="projects-code-symbol projects-code-symbol-1">
              &lt;/&gt;
            </span>

            <span className="projects-code-symbol projects-code-symbol-2">
              {"{ }"}
            </span>

            <div className="projects-bear-float">
              <img
                src={BearCoding}
                alt=""
                className="projects-bear-image"
              />
            </div>
          </div>

          {/* CENTER HEADING */}
          <header className="projects-header">
            <span className="projects-eyebrow">
              SELECTED WORK
            </span>

            <h2
              className="projects-heading"
              style={{ position: "relative" }}
            >
              Projects That Shaped How I Build
              <span
                id="projects-bear-flight-target"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: "clamp(70px, 7vw, 108px)",
                  aspectRatio: "1 / 1",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
              />
            </h2>

            <p className="projects-subtitle">
              A mix of professional, academic, and personal work — spanning full-stack apps,
              APIs, and interfaces built to solve a real problem.
            </p>
          </header>

          {/* RIGHT BEAR */}
          <div
            className="projects-bear projects-bear-right"
            aria-hidden="true"
          >
            <span className="projects-bear-glow" />

            <span className="projects-code-symbol projects-code-symbol-1">
              &lt;/&gt;
            </span>

            <span className="projects-code-symbol projects-code-symbol-2">
              {"{ }"}
            </span>

            <div className="projects-bear-float">
              <img
                src={BearCoding}
                alt=""
                className="projects-bear-image"
              />
            </div>
          </div>
        </div>

        <div className="projects-filters" role="tablist" aria-label="Filter projects">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`projects-filter-pill ${activeFilter === filter ? "is-active" : ""
                }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {viewMode === "featured" ? (
          <>
            <ProjectMarquee
              projects={visibleProjects}
              onSelect={setActiveProject}
              filterKey={activeFilter}
            />

            <div className="projects-view-all-wrap">
              <button
                type="button"
                className="projects-view-all-button"
                onClick={handleViewAll}
              >
                <span className="projects-view-all-icon" aria-hidden="true">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <rect x="2" y="2" width="5" height="5" rx="1.2" stroke="currentColor" />
                    <rect x="10" y="2" width="5" height="5" rx="1.2" stroke="currentColor" />
                    <rect x="2" y="10" width="5" height="5" rx="1.2" stroke="currentColor" />
                    <rect x="10" y="10" width="5" height="5" rx="1.2" stroke="currentColor" />
                  </svg>
                </span>

                <span className="projects-view-all-copy">
                  <span className="projects-view-all-label">
                    Explore All Projects
                  </span>

                  <span className="projects-view-all-count">
                    {PROJECTS.length} projects
                  </span>
                </span>

                <svg
                  className="projects-view-all-arrow"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 7.5H12M12 7.5L8.5 4M12 7.5L8.5 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="projects-all-view">
            <div className="projects-all-toolbar">
              <div>
                <span className="projects-all-kicker">
                  {activeFilter === "All" ? "ALL PROJECTS" : `${activeFilter.toUpperCase()} PROJECTS`}
                </span>
                <p className="projects-all-count">
                  {visibleProjects.length} project{visibleProjects.length === 1 ? "" : "s"}
                </p>
              </div>

              <button
                type="button"
                className="projects-back-featured-button"
                onClick={handleBackToFeatured}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path
                    d="M11 7H3M3 7L6 4M3 7L6 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Back to Featured</span>
              </button>
            </div>

            <ProjectGrid projects={visibleProjects} onSelect={setActiveProject} />
          </div>
        )}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onSelectProject={setActiveProject}
        />
      )}
    </section>
  );
}