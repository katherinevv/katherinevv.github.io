import "./Skills.css";
import { SKILL_CATEGORIES } from "./data";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

import BearExplore from "../../assets/images/Mascot/bear-explore.png";

function SkillIcon({ skill, size = 28 }) {
  if (skill.iconSrc) {
    return (
      <span
        className="skills-image-icon-wrap"
        style={{ "--icon-glow": skill.brandColor || "var(--primary)" }}
        aria-hidden="true"
      >
        <img
          src={skill.iconSrc}
          alt=""
          width={size}
          height={size}
          className="skills-logo-image"
        />
      </span>
    );
  }

  const Icon = skill.icon;

  return (
    <Icon
      size={size}
      className="skills-vector-icon"
      style={{ color: skill.brandColor || "currentColor" }}
      aria-hidden="true"
    />
  );
}

function buildOrbitItems(category) {
  const items = category.skills;
  const inner = items.slice(0, category.innerCount);
  const outer = items.slice(category.innerCount);

  const mapRing = (ringItems, ring) =>
    ringItems.map((skill, index) => {
      const angle = (360 / ringItems.length) * index - 90;

      return {
        skill,
        ring,
        angle,
        counterAngle: angle * -1,
      };
    });

  return [...mapRing(inner, "inner"), ...mapRing(outer, "outer")];
}

function OrbitNode({ item, activeSkillId, onSelect }) {
  const isActive = activeSkillId === item.skill.id;

  return (
    <button
      type="button"
      className={`skills-orbit-node skills-orbit-node-${item.ring} ${isActive ? "is-active" : ""
        } ${item.skill.iconSrc ? "has-image-icon" : ""}`}
      data-skill-id={item.skill.id}
      style={{
        "--skill-angle": `${item.angle}deg`,
        "--skill-counter-angle": `${item.counterAngle}deg`,
        "--brand-color": item.skill.brandColor || "var(--primary)",
      }}
      onClick={() => onSelect(item.skill.id)}
      aria-label={`View ${item.skill.name} details`}
      aria-pressed={isActive}
    >
      <span className="skills-orbit-node-face">
        <SkillIcon skill={item.skill} size={27} />
      </span>
    </button>
  );
}

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState(
    SKILL_CATEGORIES[0].id
  );
  const [activeSkillId, setActiveSkillId] = useState(
    SKILL_CATEGORIES[0].skills[0].id
  );

  const activeCategory = useMemo(
    () =>
      SKILL_CATEGORIES.find(
        (category) => category.id === activeCategoryId
      ) ?? SKILL_CATEGORIES[0],
    [activeCategoryId]
  );

  const activeSkill =
    activeCategory.skills.find((skill) => skill.id === activeSkillId) ??
    activeCategory.skills[0];

  const orbitItems = useMemo(
    () => buildOrbitItems(activeCategory),
    [activeCategory]
  );

  function handleCategoryChange(category) {
    setActiveCategoryId(category.id);
    setActiveSkillId(category.skills[0].id);
  }

  return (
    <section className="skills" id="skills">
      <div className="skills-ambient" aria-hidden="true">
        <span className="skills-ambient-orb skills-ambient-orb-one" />
        <span className="skills-ambient-orb skills-ambient-orb-two" />
        <span className="skills-ambient-grid" />
      </div>

      <div className="skills-container">
        <div className="skills-intro">
          <div className="skills-mascot-panel" aria-hidden="true">
            <div className="skills-mascot-wrap">
              <div className="skills-mascot-float">
                <span className="skills-mascot-aura skills-mascot-aura-one" />
                <span className="skills-mascot-aura skills-mascot-aura-two" />

                <span className="skills-mascot-orb" />
                <span className="skills-mascot-ring" />
                <span className="skills-mascot-ring skills-mascot-ring-two" />

                <span className="skills-mascot-stream-anchor">
                  <span className="skills-mascot-stream skills-mascot-stream-1">
                    <i className="skills-mascot-stream-line" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-1" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-2" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-3" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-4" />
                  </span>

                  <span className="skills-mascot-stream skills-mascot-stream-2">
                    <i className="skills-mascot-stream-line" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-1" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-2" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-3" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-4" />
                  </span>

                  <span className="skills-mascot-stream skills-mascot-stream-3">
                    <i className="skills-mascot-stream-line" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-1" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-2" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-3" />
                    <i className="skills-mascot-stream-dot skills-mascot-stream-dot-4" />
                  </span>
                </span>

                <span className="skills-mascot-chip skills-mascot-chip-data">
                  Data
                </span>
                <span className="skills-mascot-chip skills-mascot-chip-ui">
                  UI
                </span>
                <span className="skills-mascot-chip skills-mascot-chip-api">
                  API
                </span>

                <span className="skills-mascot-spark skills-mascot-spark-1" />
                <span className="skills-mascot-spark skills-mascot-spark-2" />
                <span className="skills-mascot-spark skills-mascot-spark-3" />
                <span className="skills-mascot-spark skills-mascot-spark-4" />

                <img
                  id="skills-bear-flight-target"
                  src={BearExplore}
                  alt=""
                  className="skills-mascot-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <header className="skills-header">
            <div className="skills-eyebrow-row">
              <span className="skills-eyebrow-line" aria-hidden="true" />
              <span className="skills-eyebrow">Skills & Toolkit</span>
              <span className="skills-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="skills-heading">The Stack Behind How I Build</h2>

            <p className="skills-subtitle">
              A toolkit shaped through building applications, integrating systems,
              analyzing data, and collaborating across teams.
            </p>
          </header>
        </div>

        <div
          className="skills-filters"
          role="tablist"
          aria-label="Skill categories"
        >
          {SKILL_CATEGORIES.map((category) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`skills-filter-pill ${isActive ? "is-active" : ""
                  } ${category.exploring ? "is-exploring" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="skills-showcase">
          <span
            className="skills-card-edge skills-card-edge-top"
            aria-hidden="true"
          />
          <span
            className="skills-card-edge skills-card-edge-bottom"
            aria-hidden="true"
          />

          <div className="skills-universe-panel">
            <div className="skills-category-copy">
              <span className="skills-category-eyebrow">
                {activeCategory.eyebrow}
              </span>

              <span className="skills-category-count">
                {String(activeCategory.skills.length).padStart(2, "0")} TOOLS
              </span>

              <p>{activeCategory.description}</p>
            </div>

            <div
              className={`skills-orbit-stage ${activeCategory.exploring ? "is-exploring" : ""
                }`}
              key={activeCategory.id}
            >
              <span className="skills-orbit-halo" aria-hidden="true" />
              <span className="skills-orbit-nebula" aria-hidden="true" />
              <span className="skills-orbit-aurora" aria-hidden="true" />
              <span className="skills-orbit-sweep" aria-hidden="true" />
              <span className="skills-orbit-galaxy-ring" aria-hidden="true" />

              <span className="skills-orbit-stars" aria-hidden="true">
                <i className="skills-star skills-star-1" />
                <i className="skills-star skills-star-2" />
                <i className="skills-star skills-star-3" />
                <i className="skills-star skills-star-4" />
                <i className="skills-star skills-star-5" />
                <i className="skills-star skills-star-6" />
                <i className="skills-star skills-star-7" />
                <i className="skills-star skills-star-8" />
                <i className="skills-star skills-star-9" />
                <i className="skills-star skills-star-10" />
                <i className="skills-star skills-star-11" />
                <i className="skills-star skills-star-12" />
              </span>

              <span
                className="skills-orbit-comet skills-orbit-comet-one"
                aria-hidden="true"
              />
              <span
                className="skills-orbit-comet skills-orbit-comet-two"
                aria-hidden="true"
              />

              <span
                className="skills-orbit-particle skills-orbit-particle-one"
                aria-hidden="true"
              />
              <span
                className="skills-orbit-particle skills-orbit-particle-two"
                aria-hidden="true"
              />
              <span
                className="skills-orbit-particle skills-orbit-particle-three"
                aria-hidden="true"
              />

              <span
                className="skills-orbit-path skills-orbit-path-inner"
                aria-hidden="true"
              />
              <span
                className="skills-orbit-path skills-orbit-path-outer"
                aria-hidden="true"
              />

              <div className="skills-orbit-ring skills-orbit-ring-inner">
                {orbitItems
                  .filter((item) => item.ring === "inner")
                  .map((item) => (
                    <OrbitNode
                      key={item.skill.id}
                      item={item}
                      activeSkillId={activeSkill.id}
                      onSelect={setActiveSkillId}
                    />
                  ))}
              </div>

              {orbitItems.some((item) => item.ring === "outer") && (
                <div className="skills-orbit-ring skills-orbit-ring-outer">
                  {orbitItems
                    .filter((item) => item.ring === "outer")
                    .map((item) => (
                      <OrbitNode
                        key={item.skill.id}
                        item={item}
                        activeSkillId={activeSkill.id}
                        onSelect={setActiveSkillId}
                      />
                    ))}
                </div>
              )}

              <div
                className={`skills-orbit-core ${activeSkill.iconSrc ? "has-image-icon" : ""
                  }`}
                data-skill-id={activeSkill.id}
                style={{
                  "--active-brand":
                    activeSkill.brandColor || "var(--primary)",
                }}
                aria-hidden="true"
              >
                <span className="skills-orbit-core-glow" />
                <span
                  className="skills-orbit-core-icon"
                  key={activeSkill.id}
                >
                  <SkillIcon skill={activeSkill} size={35} />
                </span>
                <span className="skills-orbit-core-pulse" />
              </div>
            </div>

            <div className="skills-orbit-footer">
              <span className="skills-orbit-live-dot" aria-hidden="true" />
              <span>Select a logo to explore the skill.</span>
            </div>
          </div>

          <aside
            className={`skills-detail-card ${activeSkill.experience === "Currently Exploring" ||
              activeSkill.experience === "Exploration & Testing"
              ? "is-exploring"
              : ""
              }`}
            aria-live="polite"
          >
            <span className="skills-detail-glow" aria-hidden="true" />

            <div className="skills-detail-header">
              <div
                className={`skills-detail-icon ${activeSkill.iconSrc ? "has-image-icon" : ""
                  }`}
                data-skill-id={activeSkill.id}
                style={{
                  "--active-brand":
                    activeSkill.brandColor || "var(--primary)",
                }}
                key={`${activeSkill.id}-icon`}
              >
                <SkillIcon skill={activeSkill} size={31} />
              </div>

              <div className="skills-detail-title-group">
                <span className="skills-detail-context">
                  {activeSkill.context}
                </span>
                <h3 className="skills-detail-name">{activeSkill.name}</h3>
              </div>
            </div>

            <div className="skills-detail-status-row">
              <span className="skills-detail-experience">
                {activeSkill.experience}
              </span>

              {(activeSkill.experience === "Currently Exploring" ||
                activeSkill.experience === "Exploration & Testing") && (
                  <span className="skills-detail-exploring">
                    <Sparkles size={12} aria-hidden="true" />
                    Exploring
                  </span>
                )}
            </div>

            <p className="skills-detail-description">
              {activeSkill.description}
            </p>

            {activeSkill.note && (
              <div className="skills-detail-note">
                <Sparkles size={13} aria-hidden="true" />
                <span>{activeSkill.note}</span>
              </div>
            )}

            <div className="skills-detail-related">
              <span className="skills-detail-label">Related</span>

              <div className="skills-related-list">
                {activeSkill.related.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="skills-detail-footer">
              <span>
                {String(
                  activeCategory.skills.findIndex(
                    (skill) => skill.id === activeSkill.id
                  ) + 1
                ).padStart(2, "0")}
              </span>

              <span className="skills-detail-index-line" />

              <span>
                {String(activeCategory.skills.length).padStart(2, "0")}
              </span>

              <span className="skills-detail-footer-label">
                {activeCategory.label}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
