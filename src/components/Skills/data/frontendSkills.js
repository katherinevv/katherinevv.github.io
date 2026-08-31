import { SiAndroidstudio, SiHtml5, SiJavascript } from "react-icons/si";
import { FaBootstrap, FaCss3Alt } from "react-icons/fa";
import XMLLogo from "../../../assets/icons/Skills/XML.png";

export const frontendCategory = {
  id: "frontend",
  label: "Front-End & Mobile",
  eyebrow: "INTERFACES & MOBILE",
  description:
    "Technologies used to build responsive web interfaces and Android application experiences.",
  innerCount: 3,
  skills: [
    {
      id: "javascript",
      name: "JavaScript",
      icon: SiJavascript,
      brandColor: "#F7DF1E",
      context: "Front-End Development",
      experience: "Professional & Project Experience",
      description:
        "Used to build interactive web interfaces and support client-side application behavior.",
      related: ["HTML", "CSS", "Bootstrap", "React"],
      note: "Applied in this portfolio",
    },
    {
      id: "html",
      name: "HTML",
      icon: SiHtml5,
      brandColor: "#E34F26",
      context: "Web Interface Structure",
      experience: "Professional & Project Experience",
      description:
        "Used to structure responsive web interfaces and application views across professional and academic projects.",
      related: ["CSS", "JavaScript", "Bootstrap"],
      note: "Applied in this portfolio",
    },
    {
      id: "css",
      name: "CSS",
      icon: FaCss3Alt,
      brandColor: "#1572B6",
      context: "Interface Styling",
      experience: "Professional & Project Experience",
      description:
        "Used to create responsive layouts, reusable styling, animations, and polished interaction states.",
      related: ["HTML", "JavaScript", "Figma"],
      note: "Applied extensively in this portfolio",
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      icon: FaBootstrap,
      brandColor: "#7952B3",
      context: "Front-End Framework",
      experience: "Professional Experience",
      description:
        "Used to accelerate responsive interface development and maintain consistent UI components in web applications.",
      related: ["HTML", "CSS", "JavaScript", "Laravel"],
    },
    {
      id: "xml",
      name: "XML",
      iconSrc: XMLLogo,
      brandColor: "#E34F26",
      context: "Android Interface Development",
      experience: "Project Experience",
      description:
        "Used to implement responsive Android application layouts and user-facing mobile interfaces.",
      related: ["Java", "Android Studio", "Firebase"],
    },
    {
      id: "androidstudio",
      name: "Android Studio",
      icon: SiAndroidstudio,
      brandColor: "#3DDC84",
      context: "Mobile Development",
      experience: "Project Experience",
      description:
        "Used to develop, run, and test Android applications built with Java and XML-based interfaces.",
      related: ["Java", "XML", "Firebase"],
    },
  ],
};
