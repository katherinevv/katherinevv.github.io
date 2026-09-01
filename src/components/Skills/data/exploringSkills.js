import { SiReact, SiSap, SiVite } from "react-icons/si";
import PowerBiLogo from "../../../assets/icons/skills/Power-BI.png";

export const exploringCategory = {
  id: "exploring",
  label: "Currently Exploring",
  eyebrow: "WHAT'S NEXT",
  description:
    "Technologies I am actively learning, testing, or applying to broaden my product and business-technology toolkit.",
  innerCount: 2,
  exploring: true,
  skills: [
    {
      id: "react",
      name: "React",
      icon: SiReact,
      brandColor: "#61DAFB",
      context: "Front-End Development",
      experience: "Currently Exploring",
      description:
        "Exploring component-based frontend development with React and JavaScript through hands-on implementation in this portfolio.",
      related: ["JavaScript", "Vite", "CSS", "Node.js"],
      note: "Applied in this portfolio",
    },
    {
      id: "vite",
      name: "Vite",
      icon: SiVite,
      brandColor: "#646CFF",
      context: "Front-End Tooling",
      experience: "Currently Exploring",
      description:
        "Exploring modern frontend tooling, fast development workflows, and production builds alongside React.",
      related: ["React", "JavaScript", "Node.js", "npm"],
      note: "Applied in this portfolio",
    },
    {
      id: "sap",
      name: "SAP",
      icon: SiSap,
      brandColor: "#0FAAFF",
      context: "Enterprise Systems",
      experience: "Currently Exploring",
      description:
        "Exploring enterprise systems and how ERP platforms connect technology with end-to-end business processes.",
      related: ["ERP", "Business Process", "Enterprise Systems"],
    },
    {
      id: "powerbi",
      name: "Power BI",
      iconSrc: PowerBiLogo,
      brandColor: "#F2C811",
      context: "Business Intelligence",
      experience: "Currently Exploring",
      description:
        "Exploring dashboarding, data visualization, and business intelligence reporting for decision support.",
      related: ["Data Visualization", "Dashboarding", "Analytics"],
    },
  ],
};
