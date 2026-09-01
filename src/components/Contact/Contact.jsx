import "./Contact.css";
import Footer from "../Footer/Footer";

import { useLayoutEffect, useRef, useState } from "react";
import { Mail, MapPin, Sparkles, ChevronDown, ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BearStanding from "../../assets/images/Mascot/bear-standing.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CONTACT_ITEMS = [
  {
    id: "email",
    label: "Email",
    value: "katherine.vanessa12.4.2005@gmail.com",
    href: "mailto:katherine.vanessa12.4.2005@gmail.com?subject=Let's%20Connect&body=Hi%20Katherine%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.",
    icon: Mail,
    external: false,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Katherine Vanessa",
    href: "https://www.linkedin.com/in/katherine-vanessa",
    icon: FaLinkedin,
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    value: "@katherinevanessa_",
    href: "https://www.instagram.com/katherinevanessa_?igsh=bGp4YmhjZ2Y5cjhn&utm_source=qr",
    icon: FaInstagram,
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    value: "katherinevv",
    href: "https://github.com/katherinevv",
    icon: FaGithub,
    external: true,
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const curtainRef = useRef(null);
  const ambientRef = useRef(null);
  const giantTextRef = useRef(null);
  const headerRef = useRef(null);
  const stageRef = useRef(null);
  const envelopeRef = useRef(null);
  const mascotRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return undefined;

    const section = sectionRef.current;
    const curtain = curtainRef.current;

    if (!section || !curtain) return undefined;

    const targets = [
      curtain,
      ambientRef.current,
      giantTextRef.current,
      headerRef.current,
      stageRef.current,
      envelopeRef.current,
      mascotRef.current,
    ].filter(Boolean);

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(
        "(min-width: 769px) and (prefers-reduced-motion: no-preference)",
        () => {
          const reveal = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 98%",
              end: "top 4%",
              scrub: 1.35,
              invalidateOnRefresh: true,
            },
          });

          reveal
            .fromTo(
              curtain,
              {
                y: 170,
                scale: 0.935,
                clipPath: "inset(34% 4% 0% 4% round 64px)",
                boxShadow:
                  "0 -42px 90px rgba(20, 48, 112, 0.16)",
              },
              {
                y: 0,
                scale: 1,
                clipPath: "inset(0% 0% 0% 0% round 0px)",
                boxShadow:
                  "0 0 0 rgba(20, 48, 112, 0)",
                ease: "none",
              },
              0
            )
            .fromTo(
              ambientRef.current,
              {
                opacity: 0.18,
                scale: 0.94,
              },
              {
                opacity: 1,
                scale: 1,
                ease: "none",
              },
              0
            )
            .fromTo(
              giantTextRef.current,
              {
                yPercent: 28,
                scale: 0.84,
                opacity: 0,
              },
              {
                yPercent: -2,
                scale: 1,
                opacity: 0.5,
                ease: "none",
              },
              0.04
            )
            .fromTo(
              headerRef.current,
              {
                y: 72,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                ease: "none",
              },
              0.24
            )
            .fromTo(
              stageRef.current,
              {
                y: 112,
                scale: 0.975,
                opacity: 0,
              },
              {
                y: 0,
                scale: 1,
                opacity: 1,
                ease: "none",
              },
              0.34
            )
            .fromTo(
              envelopeRef.current,
              {
                y: 52,
                rotationX: 5,
                opacity: 0.25,
              },
              {
                y: 0,
                rotationX: 0,
                opacity: 1,
                ease: "none",
              },
              0.42
            )
            .fromTo(
              mascotRef.current,
              {
                y: 76,
                x: 34,
                scale: 0.94,
                opacity: 0,
              },
              {
                y: 0,
                x: 0,
                scale: 1,
                opacity: 1,
                ease: "none",
              },
              0.46
            );

          gsap.fromTo(
            giantTextRef.current,
            {
              y: 70,
            },
            {
              y: -18,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                end: "bottom bottom",
                scrub: 1.4,
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            ".contact-ambient-orb-one",
            {
              y: 34,
              x: -26,
            },
            {
              y: -18,
              x: 20,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom bottom",
                scrub: 1.8,
                invalidateOnRefresh: true,
              },
            }
          );

          gsap.fromTo(
            ".contact-ambient-orb-two",
            {
              y: -16,
              x: 24,
            },
            {
              y: 26,
              x: -18,
              ease: "none",
              scrollTrigger: {
                trigger: section,
                start: "top 90%",
                end: "bottom bottom",
                scrub: 1.8,
                invalidateOnRefresh: true,
              },
            }
          );

          const refreshTimer = window.setTimeout(() => {
            ScrollTrigger.refresh();
          }, 120);

          return () => {
            window.clearTimeout(refreshTimer);
          };
        }
      );

      mm.add(
        "(max-width: 768px), (prefers-reduced-motion: reduce)",
        () => {
          gsap.set(targets, {
            clearProps:
              "transform,clipPath,opacity,boxShadow,filter",
          });

          gsap.set(
            [
              ".contact-ambient-orb-one",
              ".contact-ambient-orb-two",
            ],
            {
              clearProps: "transform",
            }
          );
        }
      );
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-curtain" ref={curtainRef}>
        <div className="contact-depth-arc" aria-hidden="true">
          <span className="contact-depth-arc-glow" />
        </div>

        <div className="contact-ambient" ref={ambientRef} aria-hidden="true">
          <span className="contact-ambient-aurora" />
          <span className="contact-ambient-orb contact-ambient-orb-one" />
          <span className="contact-ambient-orb contact-ambient-orb-two" />
          <span className="contact-ambient-grid" />
          <span className="contact-ambient-giant" ref={giantTextRef}>
            CONNECT
          </span>
        </div>

        <div className="contact-container">
          <header className="contact-header" ref={headerRef}>
            <div className="contact-eyebrow-row">
              <span className="contact-eyebrow-line" aria-hidden="true" />
              <span className="contact-eyebrow">Contact</span>
              <span className="contact-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="contact-heading">Let&apos;s Connect</h2>

            <p className="contact-subtitle">
              Whether it&apos;s a role, collaboration, or simply a conversation,
              I&apos;d be happy to connect.
            </p>

            <div className="contact-meta-row">
              <span className="contact-location-chip">
                <MapPin size={13} aria-hidden="true" />
                West Jakarta, Indonesia
              </span>
            </div>

            <div className="contact-scroll-prompt" aria-hidden="true">
              <span className="contact-scroll-label">Scroll to connect</span>
              <span className="contact-scroll-track">
                <span className="contact-scroll-drop" />
              </span>
              <ChevronDown className="contact-scroll-chevron" size={16} />
            </div>
          </header>

          <div className={`contact-stage ${isOpen ? "is-open" : ""}`} ref={stageRef}>
            <div className="contact-envelope-column" ref={envelopeRef}>
              <div
                className={`contact-envelope ${isOpen ? "is-open" : ""}`}
              >
                <div className="contact-envelope-glow" aria-hidden="true" />
                <span className="contact-envelope-edge" aria-hidden="true" />

                <span
                  className="contact-envelope-spark contact-envelope-spark-one"
                  aria-hidden="true"
                />
                <span
                  className="contact-envelope-spark contact-envelope-spark-two"
                  aria-hidden="true"
                />
                <span
                  className="contact-envelope-spark contact-envelope-spark-three"
                  aria-hidden="true"
                />
                <span
                  className="contact-envelope-spark contact-envelope-spark-four"
                  aria-hidden="true"
                />

                <div className="contact-letter" aria-hidden={!isOpen}>
                  <div className="contact-letter-topline">
                    <span className="contact-letter-status">
                      <Sparkles size={13} aria-hidden="true" />
                      Open to connect
                    </span>

                    <span className="contact-letter-code">KV / CONTACT</span>
                  </div>

                  <div className="contact-grid">
                    {CONTACT_ITEMS.map((item) => {
                      const Icon = item.icon;

                      const content = (
                        <>
                          <span className="contact-item-icon" aria-hidden="true">
                            <Icon size={20} strokeWidth={1.9} />
                          </span>

                          <span className="contact-item-copy">
                            <span className="contact-item-label">
                              {item.label}
                            </span>
                            <span className="contact-item-value">
                              {item.value}
                            </span>
                          </span>

                          {item.href && (
                            <ExternalLink
                              className="contact-item-arrow"
                              size={15}
                              aria-hidden="true"
                            />
                          )}
                        </>
                      );

                      if (!item.href) {
                        return (
                          <div
                            className="contact-item is-static"
                            key={item.id}
                          >
                            {content}
                          </div>
                        );
                      }

                      return (
                        <a
                          className="contact-item"
                          key={item.id}
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={
                            item.external
                              ? "noreferrer noopener"
                              : undefined
                          }
                        >
                          {content}
                        </a>
                      );
                    })}
                  </div>

                  <div className="contact-letter-footer">
                    <span className="contact-letter-footer-line" />
                    <span>Thanks for stopping by.</span>
                  </div>
                </div>

                <div className="contact-envelope-back" aria-hidden="true" />

                <div
                  className="contact-envelope-flap"
                  aria-hidden="true"
                />

                <div
                  className="contact-envelope-pocket"
                  aria-hidden="true"
                />

                <button
                  type="button"
                  className="contact-envelope-seal"
                  onClick={() => setIsOpen((current) => !current)}
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen ? "Close contact message" : "Open contact message"
                  }
                >
                  <span className="contact-envelope-seal-core">
                    <Mail size={18} aria-hidden="true" />
                  </span>

                  <span className="contact-envelope-seal-label">
                    {isOpen ? "Close" : "Open Me!"}
                  </span>

                  <ChevronDown
                    size={15}
                    className="contact-envelope-seal-chevron"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <p className="contact-envelope-hint">
                {isOpen
                  ? "Choose a contact channel above."
                  : "Open the envelope to reveal my contact details."}
              </p>
            </div>

            <div className="contact-mascot-panel" ref={mascotRef} aria-hidden="true">
              <span className="contact-mascot-ground-shadow" />

              <div className="contact-mascot-float">
                <span className="contact-mascot-aura" />
                <span className="contact-mascot-orbit contact-mascot-orbit-one" />
                <span className="contact-mascot-orbit contact-mascot-orbit-two" />
                <span className="contact-mascot-orbit contact-mascot-orbit-three" />

                <span className="contact-paper-plane contact-paper-plane-one">
                  <Send size={18} />
                </span>
                <span className="contact-paper-plane contact-paper-plane-two">
                  <Send size={15} />
                </span>
                <span className="contact-paper-plane contact-paper-plane-three">
                  <Send size={13} />
                </span>

                <span className="contact-mascot-spark contact-mascot-spark-one" />
                <span className="contact-mascot-spark contact-mascot-spark-two" />
                <span className="contact-mascot-spark contact-mascot-spark-three" />
                <span className="contact-mascot-spark contact-mascot-spark-four" />

                <span className="contact-social-bubble contact-social-email">
                  <Mail size={21} />
                </span>
                <span className="contact-social-bubble contact-social-linkedin">
                  <FaLinkedin size={20} />
                </span>
                <span className="contact-social-bubble contact-social-instagram">
                  <FaInstagram size={20} />
                </span>
                <span className="contact-social-bubble contact-social-github">
                  <FaGithub size={20} />
                </span>

                <img
                  id="contact-bear-flight-target"
                  src={BearStanding}
                  alt=""
                  className="contact-mascot-image"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </section>
  );
}