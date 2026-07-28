import "./Hero.css";
import useNavbarHeight from "../../hooks/useNavbarHeight";

import Profile from "../../assets/images/profile-3.png";
import Bear from "../../assets/images/Mascot/bear-floating.png";
import Resume from "../../assets/files/Katherine_Vanessa_Resume.pdf";

import { ArrowRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Hero() {
    useNavbarHeight();

    return (
        <section id="top" className="hero">
            <div className="hero-mesh-bg" aria-hidden="true"></div>

            <div className="hero-container">
                {/* LEFT */}
                <div className="hero-left">
                    <div className="hero-badge-row">
                        <div className="hero-badge"> ✦ OPEN TO OPPORTUNITIES ✦ </div>
                        <img src={Bear} alt="Kuroko mascot" className="hero-bear" />
                    </div>

                    <h2 className="hero-tagline"> BRIDGING BUSINESS AND TECHNOLOGY </h2>

                    <p className="hello"> Hello, I'm </p>

                    <h1 className="hero-name"> Katherine Vanessa </h1>

                    {/* Profile for Mobile View */}
                    <div className="hero-photo-mobile">
                        <div className="hero-glow"></div>
                        <div className="hero-glow-ambient"></div>
                        <div className="hero-photo-wrapper">
                            <img src={Profile} alt="Profile" className="hero-profile" />
                        </div>
                    </div>

                    <p className="hero-role"> 
                        Computer Science Graduate 
                    </p>

                    <p className="hero-description">
                        App developer turned business-tech bridge builder, driven by cross-functional collaboration and process improvement.
                    </p>

                    <div className="hero-tags">
                        <span> Software Development </span>
                        <span> Digital Transformation </span>
                        <span> Business Process Improvement </span>
                    </div>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn-primary"> View Projects <ArrowRight size={18} /> </a>
                        <a href={Resume} download className="btn-secondary"> Download Resume <Download size={18} /> </a>
                    </div>

                    <div className="hero-social">
                        <a
                            href="https://www.linkedin.com/in/katherine-vanessa"
                            target="_blank"
                            rel="noopener noreferrer"> <FaLinkedin size={22} />
                        </a>

                        <a
                            href="https://github.com/katherinevv"
                            target="_blank"
                            rel="noopener noreferrer"> <FaGithub size={22} />
                        </a>

                        <a href="mailto:katherine.vanessa12.4.2005@gmail.com?subject=Let's%20Connect&body=Hi%20Katherine%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.">
                            <Mail size={20} />
                        </a>

                        <a
                            href="https://www.instagram.com/katherinevanessa_?igsh=bGp4YmhjZ2Y5cjhn&utm_source=qr"
                            target="_blank"
                            rel="noopener noreferrer"> <FaInstagram size={22} />
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="hero-right">
                    <div className="hero-glow"></div>

                    <div className="hero-photo-wrapper">
                        <img src={Profile} alt="Profile" className="hero-profile" />
                    </div>
                </div>
            </div>

        </section>
    );
}