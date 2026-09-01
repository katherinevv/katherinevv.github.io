import "./Experience.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Calendar } from "lucide-react";

import AABLogo from "../../assets/images/Logo/logo-AAB.png";
import AABBuilding from "../../assets/images/Logo/company-AAB.png";
import BearWalking from "../../assets/images/mascot/bear-walking.png";
import BearFace from "../../assets/images/mascot/bear-face.png";

const EXPERIENCES = [
    {
        role: "Application Developer Intern",
        company: "PT Asuransi Astra Buana",
        period: "Mar 2025 – Feb 2026",
        image: AABLogo,
        buildingImage: AABBuilding,
        bullets: [
            <>Enhanced features within the internal{" "} <Highlight>Vendor Management System (VMS)</Highlight>, improving vendor management workflows and overall operational efficiency.</>,
            <>Developed RESTful APIs for{" "} <Highlight>MyGarda × Medcare</Highlight>, enabling mobile integration and supporting user-facing digital healthcare services.</>,
            <>Built a{" "} <Highlight>Centralized Push Notification Service</Highlight>, standardizing notification delivery across multiple applications and improving backend maintainability.</>,
            <>Developed{" "} <Highlight>scheduler</Highlight> and {" "} <Highlight>automation services</Highlight> for <Highlight>Partnership Products</Highlight>, streamlining high-volume request processing and reducing manual operational workloads.</>,
            <>Improved application maintainability through {" "} <Highlight>framework upgrades</Highlight>, {" "} <Highlight>API documentation</Highlight>, and {" "} <Highlight>database performance optimization</Highlight> to increase system maintainability.</>,
            <>Collaborated with{" "} <Highlight> Business Analysts</Highlight>, {" "} <Highlight>QC</Highlight>, and{" "} <Highlight> stakeholders</Highlight> in a{" "} <Highlight>Scrum</Highlight> environment to translate business requirements into reliable digital solutions.</>,
        ],
        techStack: ["Laravel", "C# (.NET)", "MySQL", "SQL Server", "PostgreSQL", "Bitbucket", "Jira", "Swagger"],
    },
    
    // Future Experience

];

function ExperienceItem({ data, index, open, onToggle, dotRefs }) {
    const isLeft = index % 2 === 0;
    const itemRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = itemRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.15, rootMargin: "-40px 0px -40px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const cardBlock = (
        <div className={`experience-card-col ${visible ? "is-visible" : ""}`}>
            <div className="experience-card">
                <button
                    className="experience-header"
                    onClick={onToggle}
                    aria-expanded={open}
                >
                    <div className="experience-header-text">
                        <p className="experience-role">{data.role}</p>
                        <div className="experience-meta">
                            <span className="experience-meta-item">{data.company}</span>
                            <span className="experience-meta-item">
                                <Calendar size={14} />
                                {data.period}
                            </span>
                        </div>
                    </div>
                    <ChevronDown
                        size={20}
                        className={`experience-chevron ${open ? "rotated" : ""}`}
                    />
                </button>

                <div className={`experience-collapse ${open ? "open" : ""}`}>
                    <div className="experience-collapse-inner">
                        <ul className="experience-bullets">
                            {data.bullets.map((bullet, i) => (
                                <li key={i}>{bullet}</li>
                            ))}
                        </ul>
                        <div className="experience-tech-tags">
                            {data.techStack.map((tech, i) => (
                                <span key={i} className="experience-tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const imageBlock = (
        <div className={`experience-image-col ${visible ? "is-visible" : ""}`}>
            <div className="experience-image-stack" id={`experience-image-stack-${index}`}>
                <div className={`experience-image-glow glow-logo ${!open ? "glow-active" : ""}`}></div>
                <div className={`experience-image-glow glow-building ${open ? "glow-active" : ""}`}></div>

                <img
                    src={data.image}
                    alt={data.company}
                    className={`experience-image-logo ${!open ? "img-active" : ""}`}
                />
                <img
                    src={data.buildingImage}
                    alt={`${data.company} building`}
                    className={`experience-image-building ${open ? "img-active" : ""}`}
                />
            </div>
        </div>
    );

    return (
        <div
            ref={itemRef}
            data-exp-index={index}
            className={`experience-row ${isLeft ? "row-left" : "row-right"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {isLeft ? cardBlock : imageBlock}

            <div
                className={`experience-dot-col ${visible ? "is-visible" : ""}`}
                ref={(el) => (dotRefs.current[index] = el)}
            >
                <div className="experience-dot">
                    <span className="experience-dot-core"></span>
                    <span className="experience-dot-pulse"></span>
                </div>
            </div>

            {isLeft ? imageBlock : cardBlock}
        </div>
    );
}

function Highlight({ children }) {
    return (
        <span className="experience-highlight">
            {children}
        </span>
    );
}

function WalkingBear({ activeIndex }) {
    const [target, setTarget] = useState(null);
    const [corner, setCorner] = useState("right");

    useEffect(() => {
        if (activeIndex === null) {
            setTarget(document.getElementById("experience-bear"));
            return;
        }
        const row = document.querySelector(`.experience-row[data-exp-index="${activeIndex}"]`);
        if (!row) return;
        const isLeft = row.classList.contains("row-left");
        setCorner(isLeft ? "right" : "left");

        const timeout = setTimeout(() => {
            setTarget(document.getElementById(`experience-image-stack-${activeIndex}`));
        }, 220);

        return () => clearTimeout(timeout);
    }, [activeIndex]);

    if (!target) return null;

    const isHeading = activeIndex === null;

    return createPortal(
        <div
            className={`experience-bear-wrapper
                ${isHeading ? "at-heading" : `corner-${corner}`}
                ${corner === "right" ? "face-right" : "face-left"}`}
        >
            <span className="bear-dash d1"></span>
            <span className="bear-dash d2"></span>
            <span className="bear-dash d3"></span>

            <div className="experience-bear-float">
                <img src={BearWalking} alt="" className="experience-walking-bear" />
            </div>
        </div>,
        target
    );
}

export default function Experience() {
    const [openStates, setOpenStates] = useState(
        EXPERIENCES.map(() => false)
    );

    // Walking bear
    const [activeIndex, setActiveIndex] = useState(null);

    // Bear face
    const [timelineActiveIndex, setTimelineActiveIndex] = useState(0);

    const dotRefs = useRef([]);
    const timelineRef = useRef(null);

    const [bearPos, setBearPos] = useState({ top: 0, left: 0, ready: false });

    function handleToggle(index) {
        setOpenStates((prev) => {
            const next = [...prev];
            next[index] = !next[index];

            if (next[index]) {
                setActiveIndex(index);

                setTimelineActiveIndex(index);
            } else if (activeIndex === index) {
                const stillOpen = next.findIndex((o) => o);
                setActiveIndex(stillOpen === -1 ? null : stillOpen);

                if (stillOpen !== -1) {
                    setTimelineActiveIndex(stillOpen);
                }
            }
            return next;
        });
    }

    useEffect(() => {
        if (timelineActiveIndex == null) return;

        const timeline = timelineRef.current;
        const row = document.querySelector(
            `.experience-row[data-exp-index="${timelineActiveIndex}"]`
        );

        if (!timeline || !row) return;

        function measure() {
            const dot = dotRefs.current[timelineActiveIndex];

            if (!dot || !timeline) return;

            const dotRect = dot.getBoundingClientRect();
            const timelineRect = timeline.getBoundingClientRect();

            const isMobile = window.matchMedia("(max-width: 760px)").matches;

            let top =
                dotRect.top -
                timelineRect.top +
                dotRect.height / 2;

            const left =
                dotRect.left -
                timelineRect.left +
                dotRect.width / 2;

            // Only for desktop
            if (!isMobile && openStates.every((open) => !open)) {
                top += 280;
            }

            setBearPos({
                top,
                left,
                ready: true,
            });
        }

        const frame = requestAnimationFrame(() => {
            measure();

            requestAnimationFrame(() => {
                measure();
            });
        });

        const ro = new ResizeObserver(measure);
        ro.observe(row);
        ro.observe(timeline);

        window.addEventListener("resize", measure);

        return () => {
            cancelAnimationFrame(frame);
            ro.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [timelineActiveIndex, openStates]);

    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <p className="experience-eyebrow">Professional Experience</p>
                <div className="experience-heading-wrap">
                    <span className="experience-heading-inline">
                        <h2 id="experience-heading" className="experience-heading">
                            What I Have Done So Far
                        </h2>
                        <span id="experience-bear" className="experience-bear-anchor"></span>
                    </span>
                </div>

                <div ref={timelineRef} className="experience-timeline">
                    {bearPos.ready && (
                        <div
                            className="timeline-bear show"
                            style={{ top: bearPos.top, left: bearPos.left }}
                        >
                            <img src={BearFace} className="timeline-bear-face" alt="" />
                        </div>
                    )}

                    {EXPERIENCES.map((exp, i) => (
                        <ExperienceItem
                            key={i}
                            data={exp}
                            index={i}
                            open={openStates[i]}
                            onToggle={() => handleToggle(i)}
                            dotRefs={dotRefs}
                        />
                    ))}
                </div>

                <WalkingBear activeIndex={activeIndex} />
            </div>
        </section>
    );
}