import { useEffect, useRef } from "react";

import BearFloating from "./assets/images/mascot/bear-floating.png";
import BearWaving from "./assets/images/mascot/bear-waving.png";

const DURATION = 1100;
const DEBUG = false; // set false kalau sudah yakin semua jalan, biar console bersih

export default function FlyingBear() {
    const flyingRef = useRef(null);
    const position = useRef("hero"); // "hero" | "about"
    const animating = useRef(false);
    const lastFrameTime = useRef(0);

    useEffect(() => {
        const aboutSection = document.getElementById("about");
        if (!aboutSection) {
            if (DEBUG) console.log("[FlyingBear] #about not found");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (DEBUG) {
                    console.log("[FlyingBear] observer:", {
                        isIntersecting: entry.isIntersecting,
                        rectTop: entry.boundingClientRect.top,
                        position: position.current,
                        animating: animating.current,
                    });
                }

                if (animating.current) return;

                if (entry.isIntersecting && position.current === "hero") {
                    fly({ toAbout: true });
                } else if (
                    !entry.isIntersecting &&
                    position.current === "about" &&
                    entry.boundingClientRect.top > 0
                ) {
                    fly({ toAbout: false });
                }
            },
            { threshold: [0, 0.3] }
        );

        observer.observe(aboutSection);
        return () => observer.disconnect();
    }, []);

    function fly({ toAbout }) {
        const heroBear = document.querySelector(".hero-bear");
        const aboutBear = document.querySelector(".about-bear");
        const flying = flyingRef.current;
        if (!heroBear || !aboutBear || !flying) {
            if (DEBUG) console.log("[FlyingBear] missing element", { heroBear, aboutBear, flying });
            return;
        }

        if (DEBUG) console.log("[FlyingBear] flying:", toAbout ? "hero -> about" : "about -> hero");

        const fromEl = toAbout ? heroBear : aboutBear;
        const toEl = toAbout ? aboutBear : heroBear;

        const startRect = fromEl.getBoundingClientRect();
        const endRect = toEl.getBoundingClientRect();

        animating.current = true;
        heroBear.style.opacity = "0";
        aboutBear.style.opacity = "0";

        flying.src = toAbout ? BearFloating : BearWaving;
        flying.style.width = `${startRect.width}px`;
        flying.style.opacity = "1";

        const startX = startRect.left;
        const startY = startRect.top;
        const endX = endRect.left;
        const endY = endRect.top;
        const startWidth = startRect.width;
        const endWidth = endRect.width;

        const arcHeight = 160;
        const midX = (startX + endX) / 2;
        const midY = Math.min(startY, endY) - arcHeight;

        let poseSwapped = false;
        const startTime = performance.now();
        lastFrameTime.current = startTime;

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
                transition: opacity .5s ease, transform .5s ease;
            `;
            document.body.appendChild(p);
            requestAnimationFrame(() => {
                p.style.opacity = "0";
                p.style.transform = "scale(.3)";
            });
            setTimeout(() => p.remove(), 550);
        }

        function step(now) {
            const t = Math.min((now - startTime) / DURATION, 1);
            const ease = t < 0.5
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
            const width = startWidth + (endWidth - startWidth) * ease;

            flying.style.transform = `translate(${x}px, ${y}px) rotate(${
                Math.sin(ease * Math.PI) * (toAbout ? 8 : -8)
            }deg)`;
            flying.style.width = `${width}px`;

            // spawn particles ~40ms for each animation
            if (now - lastFrameTime.current > 40) {
                spawnParticle(x + width / 2, y + width / 2);
                lastFrameTime.current = now;
            }

            if (!poseSwapped && t >= 0.5) {
                poseSwapped = true;
                flying.src = toAbout ? BearWaving : BearFloating;
            }

            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                flying.style.opacity = "0";
                toEl.style.transition = "opacity .3s ease";
                toEl.style.opacity = "1";
                position.current = toAbout ? "about" : "hero";
                animating.current = false;
                if (DEBUG) console.log("[FlyingBear] landed at", toAbout ? "about" : "hero");
            }
        }

        flying.style.transform = `translate(${startX}px, ${startY}px)`;
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