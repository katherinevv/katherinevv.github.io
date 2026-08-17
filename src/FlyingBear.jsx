import { useEffect, useRef } from "react";

import BearFloating from "./assets/images/mascot/bear-floating.png";
import BearWaving from "./assets/images/mascot/bear-waving.png";
import BearWalking from "./assets/images/Mascot/bear-walking.png";

const DURATION = 1100;
const DEBUG = false; // set false when everythings went right

export default function FlyingBear() {
    const flyingRef = useRef(null);
    const position = useRef("hero"); // "hero" | "about" | "experience"
    const animating = useRef(false);
    const lastFrameTime = useRef(0);

    useEffect(() => {
        const aboutSection =
            document.getElementById("about");

        const experienceSection =
            document.getElementById("experience");

        if (!aboutSection || !experienceSection) {
            if (DEBUG) {
                console.log(
                    "[FlyingBear] sections not found",
                    {
                        aboutSection,
                        experienceSection,
                    }
                );
            }

            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (animating.current) return;

                const aboutEntry = entries.find(
                    (entry) =>
                        entry.target === aboutSection
                );

                const experienceEntry = entries.find(
                    (entry) =>
                        entry.target === experienceSection
                );

                // Hero -> About
                if (
                    aboutEntry?.isIntersecting &&
                    position.current === "hero"
                ) {
                    fly({
                        direction: "hero-about",
                    });

                    return;
                }

                // About -> Hero
                if (
                    !aboutEntry?.isIntersecting &&
                    position.current === "about" &&
                    aboutEntry?.boundingClientRect.top > 0
                ) {
                    fly({
                        direction: "about-hero",
                    });
                }

                // About -> Experience
                if (
                    experienceEntry?.isIntersecting &&
                    position.current === "about"
                ) {
                    fly({
                        direction: "about-experience",
                    });

                    return;
                }

                // Experience -> About
                if (
                    aboutEntry?.isIntersecting &&
                    position.current === "experience"
                ) {
                    fly({
                        direction: "experience-about",
                    });

                    return;
                }
            },
            {
                threshold: [0.3],
            }
        );

        observer.observe(aboutSection);
        observer.observe(experienceSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    function fly({ direction }) {
        const heroBear = document.querySelector(".hero-bear");
        const aboutBear = document.querySelector(".about-bear");
        const experienceBear = document.getElementById("experience-bear");
        const flying = flyingRef.current;

        if (!heroBear || !aboutBear || !experienceBear || !flying) {
            if (DEBUG) {
                console.log("[FlyingBear] missing element", {
                    heroBear,
                    aboutBear,
                    experienceBear,
                    flying,
                });
            }
            return;
        }

        // Determine Start & Destination
        let fromEl;
        let toEl;

        switch (direction) {
            case "hero-about":
                fromEl = heroBear;
                toEl = aboutBear;
                break;

            case "about-experience":
                fromEl = aboutBear;
                toEl = experienceBear;
                break;

            case "experience-about":
                fromEl = experienceBear;
                toEl = aboutBear;
                break;

            case "about-hero":
                fromEl = aboutBear;
                toEl = heroBear;
                break;

            default:
                return;
        }

        const startRect = fromEl.getBoundingClientRect();
        const endRect = toEl.getBoundingClientRect();

        animating.current = true;

        heroBear.style.opacity = "0";
        aboutBear.style.opacity = "0";

        const experienceWrapper = document.querySelector(
            ".experience-bear-wrapper"
        );

        if (experienceWrapper) {
            experienceWrapper.style.opacity = "0";
        }

        // Initial Flying Bear
        flying.src =
            direction === "hero-about"
                ? BearFloating
                : direction === "about-experience"
                    ? BearFloating
                    : direction === "experience-about"
                        ? BearFloating
                        : BearWaving;

        flying.style.width = `${startRect.width}px`;
        flying.style.opacity = "1";

        // Position
        const startX = startRect.left;
        const startY = startRect.top;

        const endX = endRect.left;
        const endY = endRect.top;

        const startWidth = startRect.width;
        const endWidth = endRect.width;

        // Arc
        const arcHeight = 160;

        const midX = (startX + endX) / 2;
        const midY = Math.min(startY, endY) - arcHeight;

        let poseSwapped = false;

        const startTime = performance.now();
        lastFrameTime.current = startTime;

        // Particles
        function spawnParticle(x, y) {
            const p = document.createElement("div");

            p.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--primary);
            opacity: .6;
            pointer-events: none;
            z-index: 998;
            transition:
                opacity .5s ease,
                transform .5s ease;
        `;

            document.body.appendChild(p);

            requestAnimationFrame(() => {
                p.style.opacity = "0";
                p.style.transform = "scale(.3)";
            });

            setTimeout(() => p.remove(), 550);
        }

        // Animation
        function step(now) {
            const t = Math.min(
                (now - startTime) / DURATION,
                1
            );

            const ease =
                t < 0.5
                    ? 2 * t * t
                    : 1 - Math.pow(-2 * t + 2, 2) / 2;

            const x =
                (1 - ease) ** 2 * startX +
                2 * (1 - ease) * ease * midX +
                ease ** 2 * endX;

            const y =
                (1 - ease) ** 2 * startY +
                2 * (1 - ease) * ease * midY +
                ease ** 2 * endY;

            const width =
                startWidth +
                (endWidth - startWidth) * ease;

            // Rotation/Direction
            let rotationDirection = 8;

            if (direction === "about-experience") {
                rotationDirection = -8;
            }

            if (direction === "experience-about") {
                rotationDirection = 8;
            }

            if (direction === "about-hero") {
                rotationDirection = -8;
            }

            const rotation =
                direction === "about-experience"
                    ? -8
                    : direction === "experience-about"
                        ? 8
                        : direction === "about-hero"
                            ? -8
                            : 8;

            const flip =
                direction === "about-experience"
                    ? -1
                    : 1;

            flying.style.transform = `
                translate(${x}px, ${y}px)
                scaleX(${flip})
                rotate(${Math.sin(ease * Math.PI) * rotation}deg)
            `;

            flying.style.width = `${width}px`;

            // Particel Trail
            if (now - lastFrameTime.current > 40) {
                spawnParticle(
                    x + width / 2,
                    y + width / 2
                );

                lastFrameTime.current = now;
            }

            // Mid-Flight Pose
            if (!poseSwapped && t >= 0.5) {
                poseSwapped = true;

                if (
                    direction === "hero-about" ||
                    direction === "about-experience"
                ) {
                    flying.src = BearWaving;
                } else {
                    flying.src = BearFloating;
                }
            }

            if (t < 1) {
                requestAnimationFrame(step);
                return;
            }

            // Landing
            flying.style.opacity = "0";

            if (direction === "about-experience") {
                if (experienceWrapper) {
                    experienceWrapper.style.transition =
                        "opacity .3s ease";

                    experienceWrapper.style.opacity = "1";
                }
            }

            else if (direction === "experience-about") {
                aboutBear.style.transition =
                    "opacity .3s ease";

                aboutBear.style.opacity = "1";
            }

            else if (direction === "about-hero") {
                heroBear.style.transition =
                    "opacity .3s ease";

                heroBear.style.opacity = "1";
            }

            else if (direction === "hero-about") {
                aboutBear.style.transition =
                    "opacity .3s ease";

                aboutBear.style.opacity = "1";
            }

            // Update Position State
            switch (direction) {
                case "hero-about":
                    position.current = "about";
                    break;

                case "about-experience":
                    position.current = "experience";
                    break;

                case "experience-about":
                    position.current = "about";
                    break;

                case "about-hero":
                    position.current = "hero";
                    break;
            }

            animating.current = false;

            if (DEBUG) {
                console.log(
                    "[FlyingBear] landed:",
                    direction,
                    "→",
                    position.current
                );
            }
        }

        flying.style.transform =
            `translate(${startX}px, ${startY}px)`;

        requestAnimationFrame(step);
    }

    return (
        <img
            ref={flyingRef}
            src={BearFloating}
            alt=""
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 999,
                opacity: 0,
                pointerEvents: "none",
                height: "auto",
            }}
        />
    );
}