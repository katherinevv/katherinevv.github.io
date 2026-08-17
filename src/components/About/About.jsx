import "./About.css";
import { GraduationCap, Briefcase, Sparkles } from "lucide-react";

import BINUS from "../../assets/images/Logo/logo-BINUS.png";
import AAB from "../../assets/images/Logo/logo-AAB.png";
import Bear from "../../assets/images/Mascot/bear-waving.png";

export default function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <p className="about-eyebrow">About Me</p>

                <div className="about-grid">
                    {/* LEFT — narrative */}
                    <div className="about-left">
                        <h2 className="about-heading">
                            From Writing Code to Understanding Business
                        </h2>

                        <p className="about-text">
                            I graduated in Computer Science from Bina Nusantara
                            University, with hands-on experience building backend
                            systems and internal digital solutions during my
                            internship at Asuransi Astra.
                        </p>

                        <p className="about-text">
                            Along the way, I became more drawn to understanding
                            business needs, improving processes, and leading
                            projects with real impact — beyond just writing code.
                        </p>

                        <p className="about-text">
                            Today, I'm pursuing opportunities in Business Analysis, Project Management,
                            and Technology Consulting, where I can bridge business needs with technology
                            to deliver meaningful digital solutions.
                        </p>
                    </div>

                    {/* RIGHT — glass cards, side by side, height matches left text block */}
                    <div className="about-right">
                        <div className="about-card">
                            <div className="about-card-content">
                                <div className="about-card-icon">
                                    <GraduationCap size={22} />
                                </div>
                                <p className="about-card-title">Education</p>
                                <div className="about-card-lines">
                                    <p className="about-card-line strong">Bachelor of Computer Science</p>
                                    <p className="about-card-line">BINUS University</p>
                                    <p className="about-card-line">GPA 3.78 / 4.00</p>
                                </div>
                            </div>

                            <div className="about-card-watermark-glow"></div>
                            <img src={BINUS} alt="" className="about-card-watermark binus" />
                        </div>

                        <div className="about-card">
                            <div className="about-card-content">
                                <div className="about-card-icon">
                                    <Briefcase size={22} />
                                </div>
                                <p className="about-card-title">Latest Experience</p>
                                <div className="about-card-lines">
                                    <p className="about-card-line strong">1 Year Internship</p>
                                    <p className="about-card-line">Application Developer</p>
                                    <p className="about-card-line">PT Asuransi Astra Buana</p>
                                </div>
                            </div>

                            <div className="about-card-watermark-glow"></div>
                            <img src={AAB} alt="" className="about-card-watermark astra" />
                        </div>

                        <div className="about-card about-card--roles">
                            <div className="about-card-content">
                                <div className="about-card-icon">
                                    <Sparkles size={22} />
                                </div>
                                <p className="about-card-title">Beyond Academics</p>
                                <div className="about-highlight-list">
                                    <div className="about-highlight-item">
                                        <span className="about-highlight-emoji">👥</span>
                                        <div className="about-highlight-text">
                                            <p className="about-highlight-main">Project Leader</p>
                                            <p className="about-highlight-sub">Software Engineering Project</p>
                                        </div>
                                    </div>

                                    <div className="about-highlight-item">
                                        <span className="about-highlight-emoji">🏆</span>
                                        <div className="about-highlight-text">
                                            <p className="about-highlight-main">IEEE ICITDA 2024</p>
                                            <p className="about-highlight-sub">Conference Author</p>
                                        </div>
                                    </div>

                                    <div className="about-highlight-item">
                                        <span className="about-highlight-emoji">💻</span>
                                        <div className="about-highlight-text">
                                            <p className="about-highlight-main">Back-End Developer</p>
                                            <p className="about-highlight-sub">BNCC</p>
                                        </div>
                                    </div>

                                    <div className="about-highlight-item">
                                        <span className="about-highlight-emoji">🎨</span>
                                        <div className="about-highlight-text">
                                            <p className="about-highlight-main">Creative Division</p>
                                            <p className="about-highlight-sub">Data Science Club</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-card-inner-clip">
                                <div className="about-card-watermark-glow"></div>
                                <div className="about-card-shine"></div>
                            </div>
                            <img src={Bear} alt="Kuroko mascot" className="about-bear" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
