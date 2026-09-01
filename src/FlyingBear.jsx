import { useEffect, useRef } from "react";

import BearFloating from "./assets/images/mascot/bear-floating.png";
import BearWaving from "./assets/images/mascot/bear-waving.png";

const DURATION = 900;
const DEBUG = false;
const STAGE_LINE = 0.52;

const STAGES = ["hero", "about", "experience", "projects", "research", "skills", "contact"];

function hasUsableRect(rect) {
    return Boolean(rect && rect.width > 0 && rect.height > 0);
}

function isRectInViewport(rect) {
    return (
        hasUsableRect(rect) &&
        rect.bottom > 0 &&
        rect.top < window.innerHeight &&
        rect.right > 0 &&
        rect.left < window.innerWidth
    );
}

function copyRect(rect) {
    return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
    };
}

export default function FlyingBear() {
    const flyingRef = useRef(null);
    const position = useRef("hero");
    const desiredPosition = useRef("hero");
    const animating = useRef(false);
    const lastFrameTime = useRef(0);
    const scrollRaf = useRef(null);
    const syncViewportRef = useRef(null);

    const lastExperienceRect = useRef(null);

    function getExperienceElements() {
        const anchor = document.getElementById("experience-bear");
        const wrapper = document.querySelector(".experience-bear-wrapper");
        const wrapperRect = wrapper?.getBoundingClientRect();

        return {
            anchor,
            wrapper,
            active:
                wrapper && hasUsableRect(wrapperRect)
                    ? wrapper
                    : anchor,
        };
    }

    function rememberExperienceBearPosition() {
        const { anchor, wrapper } = getExperienceElements();
        const wrapperRect = wrapper?.getBoundingClientRect();
        const anchorRect = anchor?.getBoundingClientRect();

        const rect = hasUsableRect(wrapperRect)
            ? wrapperRect
            : anchorRect;

        if (isRectInViewport(rect)) {
            lastExperienceRect.current = copyRect(rect);
        }
    }

    function getStageElement(stage) {
        if (stage === "hero") {
            return document.querySelector(".hero-bear");
        }

        if (stage === "about") {
            return document.querySelector(".about-bear");
        }

        if (stage === "experience") {
            return getExperienceElements().active;
        }

        if (stage === "projects") {
            return document.getElementById("projects-bear-flight-target");
        }

        if (stage === "research") {
            return (
                document.getElementById("research-bear-flight-target") ||
                document.querySelector(".research-thinking-bear")
            );
        }

        if (stage === "skills") {
            return (
                document.getElementById("skills-bear-flight-target") ||
                document.querySelector(".skills-mascot-image")
            );
        }

        if (stage === "contact") {
            return (
                document.getElementById("contact-bear-flight-target") ||
                document.querySelector(".contact-mascot-image")
            );
        }

        return null;
    }

    function getProjectCodingBears() {
        return Array.from(document.querySelectorAll(".projects-bear"));
    }

    function hideProjectCodingBears() {
        getProjectCodingBears().forEach((bear) => {
            bear.style.transition = "opacity .22s ease, filter .22s ease";
            bear.style.opacity = "0";
            bear.style.filter = "blur(3px)";
        });
    }

    function revealProjectCodingBears() {
        const bears = getProjectCodingBears();

        bears.forEach((bear, index) => {
            bear.style.transition = "opacity .38s ease, filter .38s ease";
            bear.style.opacity = "0";
            bear.style.filter = "blur(4px)";

            window.setTimeout(() => {
                requestAnimationFrame(() => {
                    bear.style.opacity = "1";
                    bear.style.filter = "blur(0px)";
                });
            }, 45 + index * 85);
        });
    }

    function getResearchThinkingBear() {
        return (
            document.getElementById("research-bear-flight-target") ||
            document.querySelector(".research-thinking-bear")
        );
    }

    function hideResearchThinkingBear() {
        const bear = getResearchThinkingBear();
        if (!bear) return;

        const thoughtTrail = bear.querySelector(".research-thought-trail");
        const orbit = bear.querySelector(".research-bear-orbit");

        bear.style.transition = "opacity .22s ease, filter .22s ease";
        bear.style.opacity = "0";
        bear.style.filter = "blur(4px)";

        if (thoughtTrail) {
            thoughtTrail.style.transition = "opacity .18s ease";
            thoughtTrail.style.opacity = "0";
        }

        if (orbit) {
            orbit.style.transition = "opacity .18s ease";
            orbit.style.opacity = "0";
        }
    }

    function revealResearchThinkingBear() {
        const bear = getResearchThinkingBear();
        if (!bear) return;

        const thoughtTrail = bear.querySelector(".research-thought-trail");
        const orbit = bear.querySelector(".research-bear-orbit");

        bear.style.transition = "opacity .4s ease, filter .4s ease";
        bear.style.opacity = "0";
        bear.style.filter = "blur(5px)";

        if (thoughtTrail) {
            thoughtTrail.style.transition = "opacity .32s ease";
            thoughtTrail.style.opacity = "0";
        }

        if (orbit) {
            orbit.style.transition = "opacity .38s ease";
            orbit.style.opacity = "0";
        }

        requestAnimationFrame(() => {
            bear.style.opacity = "1";
            bear.style.filter = "blur(0px)";
        });

        window.setTimeout(() => {
            if (thoughtTrail) thoughtTrail.style.opacity = "1";
        }, 90);

        window.setTimeout(() => {
            if (orbit) orbit.style.opacity = "1";
        }, 150);
    }

    function getSkillsExplorerBear() {
        return document.querySelector(".skills-mascot-wrap");
    }

    function hideSkillsExplorerBear() {
        const bear = getSkillsExplorerBear();
        if (!bear) return;

        bear.style.transition = "opacity .22s ease, filter .22s ease";
        bear.style.opacity = "0";
        bear.style.filter = "blur(4px)";
    }

    function revealSkillsExplorerBear() {
        const bear = getSkillsExplorerBear();
        if (!bear) return;

        const floating = bear.querySelector(".skills-mascot-float");

        bear.style.transition = "none";
        bear.style.opacity = "0";
        bear.style.filter = "blur(10px)";

        if (floating) {
            floating.style.opacity = "0";
            floating.style.filter = "brightness(1.55) saturate(1.12)";
            floating.style.scale = ".78";
        }

        window.setTimeout(() => {
            bear.style.transition =
                "opacity .72s cubic-bezier(.22, 1, .36, 1), filter .82s ease";
            bear.style.opacity = "1";
            bear.style.filter = "blur(0px)";

            if (!floating) return;

            floating.style.transition =
                "opacity .72s ease, filter .9s ease, scale .9s cubic-bezier(.22, 1, .36, 1)";
            floating.style.opacity = "1";
            floating.style.filter = "brightness(1) saturate(1)";
            floating.style.scale = "1.06";

            window.setTimeout(() => {
                floating.style.scale = "1";
            }, 560);

            window.setTimeout(() => {
                floating.style.transition = "";
                floating.style.opacity = "";
                floating.style.filter = "";
                floating.style.scale = "";
            }, 1050);
        }, 155);
    }

    function getContactStandingBear() {
        return document.querySelector(".contact-mascot-float");
    }

    function getContactGroundShadow() {
        return document.querySelector(".contact-mascot-ground-shadow");
    }

    function hideContactStandingBear() {
        const bear = getContactStandingBear();
        const shadow = getContactGroundShadow();

        if (bear) {
            bear.style.transition = "opacity .22s ease, filter .22s ease";
            bear.style.opacity = "0";
            bear.style.filter = "blur(5px) brightness(1.18)";
        }

        if (shadow) {
            // The shadow has its own CSS opacity animation, so temporarily
            // disable that animation while the destination mascot is hidden.
            shadow.style.animation = "none";
            shadow.style.transition = "opacity .2s ease, filter .2s ease";
            shadow.style.opacity = "0";
            shadow.style.filter = "blur(11px)";
        }
    }

    function revealContactStandingBear() {
        const bear = getContactStandingBear();
        const shadow = getContactGroundShadow();

        if (!bear) return;

        bear.style.transition = "none";
        bear.style.opacity = "0";
        bear.style.filter = "blur(10px) brightness(1.38)";
        bear.style.scale = ".84";

        if (shadow) {
            shadow.style.animation = "none";
            shadow.style.transition = "none";
            shadow.style.opacity = "0";
            shadow.style.filter = "blur(12px)";
        }

        window.setTimeout(() => {
            bear.style.transition =
                "opacity .68s cubic-bezier(.22, 1, .36, 1), filter .82s ease, scale .86s cubic-bezier(.22, 1, .36, 1)";
            bear.style.opacity = "1";
            bear.style.filter = "blur(0px) brightness(1)";
            bear.style.scale = "1.055";

            if (shadow) {
                shadow.style.transition =
                    "opacity .72s ease, filter .72s ease";
                shadow.style.opacity = ".48";
                shadow.style.filter = "blur(8px)";
            }

            window.setTimeout(() => {
                bear.style.scale = "1";
            }, 520);

            window.setTimeout(() => {
                bear.style.transition = "";
                bear.style.opacity = "";
                bear.style.filter = "";
                bear.style.scale = "";

                if (shadow) {
                    shadow.style.transition = "";
                    shadow.style.opacity = "";
                    shadow.style.filter = "";
                    shadow.style.animation = "";
                }
            }, 1080);
        }, 135);
    }

    function spawnContactArrival(x, y) {
        const flash = document.createElement("span");

        flash.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1002;
            opacity: .9;
            transform: translate(-50%, -50%) scale(.5);
            background:
                radial-gradient(
                    circle,
                    rgba(255,255,255,.92) 0%,
                    color-mix(in srgb, var(--primary) 62%, white 38%) 16%,
                    color-mix(in srgb, var(--primary) 22%, transparent) 44%,
                    transparent 72%
                );
            box-shadow:
                0 0 24px color-mix(in srgb, var(--primary) 54%, transparent),
                0 0 70px color-mix(in srgb, var(--primary) 24%, transparent);
            transition:
                width .88s cubic-bezier(.22, 1, .36, 1),
                height .88s cubic-bezier(.22, 1, .36, 1),
                transform .88s cubic-bezier(.22, 1, .36, 1),
                opacity .9s ease;
        `;

        document.body.appendChild(flash);

        requestAnimationFrame(() => {
            flash.style.width = "154px";
            flash.style.height = "154px";
            flash.style.transform = "translate(-50%, -50%) scale(1)";
            flash.style.opacity = "0";
        });

        window.setTimeout(() => flash.remove(), 980);

        const rings = [
            { start: 42, end: 124, duration: 880, delay: 0, opacity: .66 },
            { start: 56, end: 176, duration: 1040, delay: 75, opacity: .46 },
            { start: 72, end: 228, duration: 1160, delay: 150, opacity: .28 },
        ];

        rings.forEach(({ start, end, duration, delay, opacity }) => {
            const ring = document.createElement("span");

            ring.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${start}px;
                height: ${start}px;
                border-radius: 50%;
                border: 1px solid
                    color-mix(in srgb, var(--primary) 52%, transparent);
                box-shadow:
                    0 0 20px color-mix(in srgb, var(--primary) 18%, transparent);
                opacity: 0;
                pointer-events: none;
                z-index: 1000;
                transform: translate(-50%, -50%) scale(.76);
                transition:
                    width ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    height ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    transform ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    opacity ${duration}ms ease;
            `;

            document.body.appendChild(ring);

            window.setTimeout(() => {
                ring.style.opacity = `${opacity}`;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        ring.style.width = `${end}px`;
                        ring.style.height = `${end}px`;
                        ring.style.transform =
                            "translate(-50%, -50%) scale(1)";
                        ring.style.opacity = "0";
                    });
                });
            }, delay);

            window.setTimeout(
                () => ring.remove(),
                duration + delay + 160
            );
        });

        const particles = [
            { angle: -160, distance: 92, size: 5 },
            { angle: -126, distance: 108, size: 4 },
            { angle: -92, distance: 118, size: 5 },
            { angle: -54, distance: 104, size: 4 },
            { angle: -18, distance: 116, size: 5 },
            { angle: 22, distance: 104, size: 4 },
            { angle: 58, distance: 116, size: 5 },
            { angle: 96, distance: 106, size: 4 },
            { angle: 132, distance: 114, size: 5 },
            { angle: 166, distance: 96, size: 4 },
        ];

        particles.forEach(({ angle, distance, size }, index) => {
            const particle = document.createElement("span");
            const radians = (angle * Math.PI) / 180;
            const dx = Math.cos(radians) * distance;
            const dy = Math.sin(radians) * distance;
            const duration = 760 + (index % 3) * 80;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: ${index % 2 === 0 ? "50%" : "3px"};
                background: var(--primary);
                box-shadow:
                    0 0 13px color-mix(in srgb, var(--primary) 48%, transparent);
                opacity: .82;
                pointer-events: none;
                z-index: 1001;
                transform: translate(-50%, -50%) scale(.8);
                transition:
                    transform ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    opacity ${duration}ms ease;
            `;

            document.body.appendChild(particle);

            window.setTimeout(() => {
                requestAnimationFrame(() => {
                    particle.style.transform = `
                        translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                        scale(.2)
                    `;
                    particle.style.opacity = "0";
                });
            }, 25 + index * 12);

            window.setTimeout(
                () => particle.remove(),
                duration + 170 + index * 12
            );
        });
    }

    function spawnTrailParticle(x, y) {
        const particle = document.createElement("div");

        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: var(--primary);
            opacity: .58;
            pointer-events: none;
            z-index: 998;
            transform: translate(-50%, -50%) scale(1);
            transition:
                opacity .48s ease,
                transform .48s ease;
        `;

        document.body.appendChild(particle);

        requestAnimationFrame(() => {
            particle.style.opacity = "0";
            particle.style.transform =
                "translate(-50%, -50%) scale(.25)";
        });

        window.setTimeout(() => particle.remove(), 520);
    }

    function spawnProjectBurst(x, y) {
        const burstItems = [
            { angle: -165, distance: 54, size: 7 },
            { angle: -135, distance: 66, size: 5 },
            { angle: -105, distance: 58, size: 6 },
            { angle: -72, distance: 68, size: 5 },
            { angle: -35, distance: 56, size: 7 },
            { angle: 5, distance: 70, size: 5 },
            { angle: 38, distance: 58, size: 6 },
            { angle: 76, distance: 68, size: 5 },
            { angle: 112, distance: 58, size: 7 },
            { angle: 148, distance: 65, size: 5 },
        ];

        burstItems.forEach(({ angle, distance, size }, index) => {
            const particle = document.createElement("span");
            const radians = (angle * Math.PI) / 180;
            const dx = Math.cos(radians) * distance;
            const dy = Math.sin(radians) * distance;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 999px;
                background: var(--primary);
                box-shadow: 0 0 14px color-mix(in srgb, var(--primary) 70%, transparent);
                opacity: .9;
                pointer-events: none;
                z-index: 1000;
                transform: translate(-50%, -50%) scale(.7);
                transition:
                    transform .52s cubic-bezier(.22, 1, .36, 1),
                    opacity .52s ease;
            `;

            document.body.appendChild(particle);

            requestAnimationFrame(() => {
                particle.style.transform = `
                    translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                    scale(.2)
                `;
                particle.style.opacity = "0";
            });

            window.setTimeout(() => particle.remove(), 580 + index * 5);
        });

        const symbols = [
            { text: "</>", dx: -68, dy: -34, rotate: -8 },
            { text: "{ }", dx: 68, dy: -28, rotate: 8 },
            { text: "_", dx: 0, dy: 58, rotate: 0 },
        ];

        symbols.forEach(({ text, dx, dy, rotate }, index) => {
            const symbol = document.createElement("span");
            symbol.textContent = text;

            symbol.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                color: var(--primary);
                font-size: .72rem;
                font-weight: 800;
                line-height: 1;
                padding: .25rem .42rem;
                border-radius: 8px;
                background: color-mix(in srgb, var(--card) 76%, transparent);
                border: 1px solid color-mix(in srgb, var(--primary) 22%, var(--border));
                box-shadow: 0 8px 22px color-mix(in srgb, var(--primary) 16%, transparent);
                backdrop-filter: blur(8px);
                opacity: 0;
                pointer-events: none;
                z-index: 1001;
                transform: translate(-50%, -50%) scale(.65);
                transition:
                    transform .62s cubic-bezier(.22, 1, .36, 1),
                    opacity .28s ease;
            `;

            document.body.appendChild(symbol);

            window.setTimeout(() => {
                requestAnimationFrame(() => {
                    symbol.style.opacity = "1";
                    symbol.style.transform = `
                        translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                        rotate(${rotate}deg)
                        scale(1)
                    `;
                });
            }, index * 35);

            window.setTimeout(() => {
                symbol.style.opacity = "0";
            }, 360 + index * 35);

            window.setTimeout(() => symbol.remove(), 720);
        });
    }


    function spawnResearchBurst(x, y) {
        const burstItems = [
            { angle: -160, distance: 48, size: 6 },
            { angle: -126, distance: 60, size: 5 },
            { angle: -92, distance: 54, size: 6 },
            { angle: -52, distance: 62, size: 5 },
            { angle: -12, distance: 52, size: 6 },
            { angle: 28, distance: 64, size: 5 },
            { angle: 70, distance: 56, size: 6 },
            { angle: 112, distance: 62, size: 5 },
            { angle: 148, distance: 52, size: 6 },
        ];

        burstItems.forEach(({ angle, distance, size }, index) => {
            const particle = document.createElement("span");
            const radians = (angle * Math.PI) / 180;
            const dx = Math.cos(radians) * distance;
            const dy = Math.sin(radians) * distance;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 999px;
                background: var(--primary);
                box-shadow: 0 0 14px color-mix(in srgb, var(--primary) 68%, transparent);
                opacity: .82;
                pointer-events: none;
                z-index: 1000;
                transform: translate(-50%, -50%) scale(.72);
                transition:
                    transform .56s cubic-bezier(.22, 1, .36, 1),
                    opacity .56s ease;
            `;

            document.body.appendChild(particle);

            requestAnimationFrame(() => {
                particle.style.transform = `
                    translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                    scale(.15)
                `;
                particle.style.opacity = "0";
            });

            window.setTimeout(() => particle.remove(), 620 + index * 5);
        });

        const concepts = [
            { text: "AI", dx: -58, dy: -34, rotate: -7 },
            { text: "SCAN", dx: 62, dy: -24, rotate: 7 },
            { text: "Σ", dx: 8, dy: 56, rotate: 0 },
        ];

        concepts.forEach(({ text, dx, dy, rotate }, index) => {
            const chip = document.createElement("span");
            chip.textContent = text;

            chip.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                color: var(--primary);
                font-size: ${text === "Σ" ? ".82rem" : ".62rem"};
                font-weight: 850;
                line-height: 1;
                letter-spacing: ${text === "SCAN" ? ".06em" : "0"};
                padding: .28rem .42rem;
                border-radius: 9px;
                background: color-mix(in srgb, var(--card) 78%, transparent);
                border: 1px solid color-mix(in srgb, var(--primary) 24%, var(--border));
                box-shadow: 0 8px 22px color-mix(in srgb, var(--primary) 14%, transparent);
                backdrop-filter: blur(8px);
                opacity: 0;
                pointer-events: none;
                z-index: 1001;
                transform: translate(-50%, -50%) scale(.62);
                transition:
                    transform .64s cubic-bezier(.22, 1, .36, 1),
                    opacity .3s ease;
            `;

            document.body.appendChild(chip);

            window.setTimeout(() => {
                requestAnimationFrame(() => {
                    chip.style.opacity = "1";
                    chip.style.transform = `
                        translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                        rotate(${rotate}deg)
                        scale(1)
                    `;
                });
            }, 30 + index * 45);

            window.setTimeout(() => {
                chip.style.opacity = "0";
            }, 390 + index * 45);

            window.setTimeout(() => chip.remove(), 760);
        });
    }

    function spawnSkillsBurst(x, y) {
        const particles = [
            { angle: -168, distance: 118, size: 5 },
            { angle: -145, distance: 152, size: 6 },
            { angle: -118, distance: 104, size: 4 },
            { angle: -92, distance: 142, size: 6 },
            { angle: -66, distance: 112, size: 5 },
            { angle: -38, distance: 158, size: 4 },
            { angle: -12, distance: 126, size: 6 },
            { angle: 16, distance: 150, size: 5 },
            { angle: 44, distance: 116, size: 4 },
            { angle: 72, distance: 146, size: 6 },
            { angle: 102, distance: 122, size: 5 },
            { angle: 132, distance: 154, size: 4 },
            { angle: 158, distance: 110, size: 6 },
        ];

        // Central activation flash.
        const flash = document.createElement("span");
        flash.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1002;
            opacity: .96;
            transform: translate(-50%, -50%) scale(.45);
            background:
                radial-gradient(
                    circle,
                    rgba(255,255,255,.96) 0%,
                    color-mix(in srgb, var(--primary) 72%, white 28%) 18%,
                    color-mix(in srgb, var(--primary) 34%, transparent) 42%,
                    transparent 72%
                );
            box-shadow:
                0 0 24px color-mix(in srgb, var(--primary) 72%, transparent),
                0 0 62px color-mix(in srgb, var(--primary) 42%, transparent),
                0 0 110px color-mix(in srgb, var(--primary) 20%, transparent);
            transition:
                width 1s cubic-bezier(.22, 1, .36, 1),
                height 1s cubic-bezier(.22, 1, .36, 1),
                transform 1s cubic-bezier(.22, 1, .36, 1),
                opacity 1.05s ease;
        `;

        document.body.appendChild(flash);

        requestAnimationFrame(() => {
            flash.style.width = "178px";
            flash.style.height = "178px";
            flash.style.transform = "translate(-50%, -50%) scale(1)";
            flash.style.opacity = "0";
        });

        window.setTimeout(() => flash.remove(), 1150);

        // Wider, slower particles so the landing is readable while scrolling.
        particles.forEach(({ angle, distance, size }, index) => {
            const particle = document.createElement("span");
            const radians = (angle * Math.PI) / 180;
            const dx = Math.cos(radians) * distance;
            const dy = Math.sin(radians) * distance;
            const duration = 980 + (index % 4) * 70;

            particle.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
                border-radius: 999px;
                background: var(--primary);
                box-shadow:
                    0 0 12px color-mix(in srgb, var(--primary) 78%, transparent),
                    0 0 28px color-mix(in srgb, var(--primary) 34%, transparent);
                opacity: .96;
                pointer-events: none;
                z-index: 1001;
                transform: translate(-50%, -50%) scale(.9);
                transition:
                    transform ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    opacity ${duration}ms ease;
            `;

            document.body.appendChild(particle);

            window.setTimeout(() => {
                requestAnimationFrame(() => {
                    particle.style.transform = `
                        translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))
                        scale(.16)
                    `;
                    particle.style.opacity = "0";
                });
            }, 35 + index * 12);

            window.setTimeout(
                () => particle.remove(),
                duration + 180 + index * 12
            );
        });

        // Three large holographic activation waves.
        const rings = [
            { start: 42, end: 145, duration: 1020, opacity: .76, delay: 0 },
            { start: 58, end: 205, duration: 1160, opacity: .58, delay: 80 },
            { start: 74, end: 268, duration: 1280, opacity: .4, delay: 165 },
        ];

        rings.forEach(({ start, end, duration, opacity, delay }) => {
            const ring = document.createElement("span");

            ring.style.cssText = `
                position: fixed;
                left: ${x}px;
                top: ${y}px;
                width: ${start}px;
                height: ${start}px;
                border-radius: 50%;
                border: 1px solid
                    color-mix(in srgb, var(--primary) 58%, transparent);
                box-shadow:
                    0 0 18px color-mix(in srgb, var(--primary) 26%, transparent),
                    inset 0 0 20px color-mix(in srgb, var(--primary) 10%, transparent);
                opacity: 0;
                pointer-events: none;
                z-index: 1000;
                transform: translate(-50%, -50%) scale(.72);
                transition:
                    width ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    height ${duration}ms cubic-bezier(.22, 1, .36, 1),
                    opacity ${duration}ms ease,
                    transform ${duration}ms cubic-bezier(.22, 1, .36, 1);
            `;

            document.body.appendChild(ring);

            window.setTimeout(() => {
                ring.style.opacity = `${opacity}`;

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        ring.style.width = `${end}px`;
                        ring.style.height = `${end}px`;
                        ring.style.opacity = "0";
                        ring.style.transform =
                            "translate(-50%, -50%) scale(1)";
                    });
                });
            }, delay);

            window.setTimeout(
                () => ring.remove(),
                duration + delay + 180
            );
        });
    }

    function showStageVisual(stage) {
        if (stage === "contact") {
            const target = getStageElement("contact");
            const rect = target?.getBoundingClientRect();

            if (hasUsableRect(rect)) {
                spawnContactArrival(
                    rect.left + rect.width / 2,
                    rect.top + rect.height * 0.46
                );
            }

            revealContactStandingBear();
            return;
        }

        if (stage === "skills") {
            const target = getStageElement("skills");
            const rect = target?.getBoundingClientRect();

            if (hasUsableRect(rect)) {
                spawnSkillsBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height * 0.36
                );
            }

            revealSkillsExplorerBear();
            return;
        }

        if (stage === "research") {
            const target = getStageElement("research");
            const rect = target?.getBoundingClientRect();

            if (hasUsableRect(rect)) {
                spawnResearchBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }

            revealResearchThinkingBear();
            return;
        }

        if (stage === "projects") {
            const target = getStageElement("projects");
            const rect = target?.getBoundingClientRect();

            if (hasUsableRect(rect)) {
                spawnProjectBurst(
                    rect.left + rect.width / 2,
                    rect.top + rect.height / 2
                );
            }

            revealProjectCodingBears();
            return;
        }

        if (stage === "experience") {
            const { anchor, wrapper } = getExperienceElements();

            // The walking bear can be portaled inside the heading anchor.
            if (anchor) {
                anchor.style.transition = "opacity .3s ease";
                anchor.style.opacity = "1";
            }

            if (wrapper) {
                wrapper.style.transition = "opacity .3s ease";
                wrapper.style.opacity = "1";
            }
            return;
        }

        const element = getStageElement(stage);
        if (element) {
            element.style.transition = "opacity .3s ease";
            element.style.opacity = "1";
        }
    }

    function hideStageVisual(stage) {
        if (stage === "contact") {
            hideContactStandingBear();
            return;
        }

        if (stage === "skills") {
            hideSkillsExplorerBear();
            return;
        }

        if (stage === "research") {
            hideResearchThinkingBear();
            return;
        }

        if (stage === "projects") {
            hideProjectCodingBears();
            return;
        }

        if (stage === "experience") {
            const { anchor, wrapper } = getExperienceElements();

            if (wrapper) {
                wrapper.style.opacity = "0";
            } else if (anchor) {
                anchor.style.opacity = "0";
            }
            return;
        }

        const element = getStageElement(stage);
        if (element) {
            element.style.opacity = "0";
        }
    }

    function getDesiredStage() {
        const aboutSection = document.getElementById("about");
        const experienceSection = document.getElementById("experience");
        const projectsSection = document.getElementById("projects");
        const researchSection = document.getElementById("research");
        const skillsSection = document.getElementById("skills");
        const contactSection = document.getElementById("contact");

        if (
            !aboutSection ||
            !experienceSection ||
            !projectsSection ||
            !researchSection ||
            !skillsSection ||
            !contactSection
        ) {
            return position.current;
        }

        const stageLine = window.innerHeight * STAGE_LINE;
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const experienceTop = experienceSection.getBoundingClientRect().top;
        const projectsTop = projectsSection.getBoundingClientRect().top;
        const researchTop = researchSection.getBoundingClientRect().top;
        const skillsTop = skillsSection.getBoundingClientRect().top;
        const contactTop = contactSection.getBoundingClientRect().top;

        if (aboutTop > stageLine) return "hero";
        if (experienceTop > stageLine) return "about";
        if (projectsTop > stageLine) return "experience";
        if (researchTop > stageLine) return "projects";
        if (skillsTop > stageLine) return "research";
        if (contactTop > stageLine) return "skills";
        return "contact";
    }

    function syncToViewport() {
        rememberExperienceBearPosition();

        const nextStage = getDesiredStage();
        desiredPosition.current = nextStage;

        if (DEBUG) {
            console.log("[FlyingBear] viewport wants:", nextStage);
        }

        if (
            !animating.current &&
            position.current !== desiredPosition.current
        ) {
            flyTo(desiredPosition.current);
        }
    }

    function flyTo(targetStage) {
        const flying = flyingRef.current;
        const fromStage = position.current;
        const fromEl = getStageElement(fromStage);
        const toEl = getStageElement(targetStage);

        if (
            !flying ||
            !fromEl ||
            !toEl ||
            !STAGES.includes(fromStage) ||
            !STAGES.includes(targetStage) ||
            fromStage === targetStage
        ) {
            return;
        }

        let startRect = fromEl.getBoundingClientRect();

        // Dynamic Experience source: preserve the exact last visible place.
        if (
            fromStage === "experience" &&
            !isRectInViewport(startRect) &&
            lastExperienceRect.current
        ) {
            startRect = lastExperienceRect.current;
        }

        const firstEndRect = toEl.getBoundingClientRect();

        if (!hasUsableRect(startRect) || !hasUsableRect(firstEndRect)) {
            return;
        }

        animating.current = true;

        hideStageVisual(fromStage);
        hideStageVisual(targetStage);

        const fromIndex = STAGES.indexOf(fromStage);
        const toIndex = STAGES.indexOf(targetStage);
        const movingDown = toIndex > fromIndex;

        flying.src = movingDown ? BearFloating : BearWaving;
        flying.style.width = `${startRect.width}px`;
        flying.style.opacity = "1";

        const startX = startRect.left;
        const startY = startRect.top;
        const startWidth = startRect.width;
        const isContactTransition =
            fromStage === "contact" || targetStage === "contact";
        const isSkillsTransition =
            fromStage === "skills" || targetStage === "skills";
        const isResearchTransition =
            fromStage === "research" || targetStage === "research";

        const arcHeight = isContactTransition
            ? 182
            : isSkillsTransition
                ? 165
                : isResearchTransition
                    ? 205
                    : fromStage === "projects" || targetStage === "projects"
                        ? 185
                        : 150;

        const flightDuration = isContactTransition
            ? 1040
            : DURATION;

        let poseSwapped = false;
        const startTime = performance.now();
        lastFrameTime.current = startTime;

        function step(now) {
            const t = Math.min((now - startTime) / flightDuration, 1);
            const ease =
                t < 0.5
                    ? 2 * t * t
                    : 1 - Math.pow(-2 * t + 2, 2) / 2;

            const liveEndRect = toEl.getBoundingClientRect();
            const endX = liveEndRect.left;
            const endY = liveEndRect.top;
            const endWidth = liveEndRect.width;

            const midX = (startX + endX) / 2;
            const midY = Math.min(startY, endY) - arcHeight;

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

            const movingRight = endX >= x;
            const flip = movingRight ? 1 : -1;
            const rotationAmount = movingRight ? 8 : -8;
            const rotation = Math.sin(ease * Math.PI) * rotationAmount;

            flying.style.transform = `
                translate(${x}px, ${y}px)
                scaleX(${flip})
                rotate(${rotation}deg)
            `;
            flying.style.width = `${width}px`;

            if (now - lastFrameTime.current > 44) {
                spawnTrailParticle(
                    x + width / 2,
                    y + width / 2
                );
                lastFrameTime.current = now;
            }

            if (!poseSwapped && t >= 0.52) {
                poseSwapped = true;
                flying.src = movingDown ? BearWaving : BearFloating;
            }

            if (t < 1) {
                requestAnimationFrame(step);
                return;
            }

            flying.style.opacity = "0";

            position.current = targetStage;
            showStageVisual(targetStage);
            animating.current = false;

            if (DEBUG) {
                console.log(
                    "[FlyingBear] landed:",
                    fromStage,
                    "→",
                    targetStage
                );
            }

            requestAnimationFrame(() => {
                syncViewportRef.current?.();
            });
        }

        flying.style.transform =
            `translate(${startX}px, ${startY}px)`;

        requestAnimationFrame(step);
    }

    useEffect(() => {
        const aboutSection = document.getElementById("about");
        const experienceSection = document.getElementById("experience");
        const projectsSection = document.getElementById("projects");
        const researchSection = document.getElementById("research");
        const skillsSection = document.getElementById("skills");
        const contactSection = document.getElementById("contact");
        const projectsTarget = document.getElementById(
            "projects-bear-flight-target"
        );
        const researchTarget = document.getElementById(
            "research-bear-flight-target"
        );
        const skillsTarget = document.getElementById(
            "skills-bear-flight-target"
        );
        const contactTarget = document.getElementById(
            "contact-bear-flight-target"
        );

        if (
            !aboutSection ||
            !experienceSection ||
            !projectsSection ||
            !researchSection ||
            !skillsSection ||
            !contactSection ||
            !projectsTarget ||
            !researchTarget ||
            !skillsTarget ||
            !contactTarget
        ) {
            if (DEBUG) {
                console.log("[FlyingBear] sections/targets not found", {
                    aboutSection,
                    experienceSection,
                    projectsSection,
                    researchSection,
                    skillsSection,
                    contactSection,
                    projectsTarget,
                    researchTarget,
                    skillsTarget,
                    contactTarget,
                });
            }
            return;
        }

        const initialStage = getDesiredStage();
        position.current = initialStage;
        desiredPosition.current = initialStage;

        // Keep destination mascots visually consistent on refresh/deep scroll.
        if (initialStage === "contact") {
            hideProjectCodingBears();
            hideResearchThinkingBear();
            hideSkillsExplorerBear();
            revealContactStandingBear();
        } else if (initialStage === "skills") {
            hideProjectCodingBears();
            hideResearchThinkingBear();
            revealSkillsExplorerBear();
            hideContactStandingBear();
        } else if (initialStage === "research") {
            hideProjectCodingBears();
            revealResearchThinkingBear();
            hideSkillsExplorerBear();
            hideContactStandingBear();
        } else {
            hideResearchThinkingBear();
            hideSkillsExplorerBear();
            hideContactStandingBear();

            if (initialStage === "projects") {
                revealProjectCodingBears();
            }
        }

        syncViewportRef.current = syncToViewport;
        rememberExperienceBearPosition();

        function scheduleSync() {
            if (scrollRaf.current != null) return;

            scrollRaf.current = requestAnimationFrame(() => {
                scrollRaf.current = null;
                syncToViewport();
            });
        }

        window.addEventListener("scroll", scheduleSync, { passive: true });
        window.addEventListener("resize", scheduleSync);

        // One first read after layout settles.
        requestAnimationFrame(scheduleSync);

        return () => {
            window.removeEventListener("scroll", scheduleSync);
            window.removeEventListener("resize", scheduleSync);

            if (scrollRaf.current != null) {
                cancelAnimationFrame(scrollRaf.current);
            }

            syncViewportRef.current = null;
        };
    }, []);

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
                willChange: "transform, width, opacity",
            }}
        />
    );
}