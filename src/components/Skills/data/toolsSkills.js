import { SiAsana, SiJira, SiPostman, SiTrello } from "react-icons/si";
import { FaBitbucket, FaGitAlt, FaGithub, FaNodeJs, FaNpm } from "react-icons/fa";
import VSCodeLogo from "../../../assets/icons/Skills/VSCode.png";
import VisualStudioLogo from "../../../assets/icons/Skills/Visual-Studio.png";
import XAMPPLogo from "../../../assets/icons/Skills/XAMPP.png";
import MicrosoftOfficeLogo from "../../../assets/icons/Skills/Microsoft-Office.png";
import SwaggerLogo from "../../../assets/icons/Skills/Swagger.png";

export const toolsCategory = {
  id: "tools",
  label: "Tools & Delivery",
  eyebrow: "BUILD & COLLABORATE",
  description:
    "Development, version-control, API-testing, delivery, and local-environment tools used across project work.",
  innerCount: 5,
  skills: [
    {
      id: "git",
      name: "Git",
      icon: FaGitAlt,
      brandColor: "#F05032",
      context: "Version Control",
      experience: "Professional & Project Experience",
      description:
        "Used for version control, change tracking, branching, and collaborative software development.",
      related: ["GitHub", "Bitbucket", "Team Collaboration"],
    },
    {
      id: "github",
      name: "GitHub",
      icon: FaGithub,
      brandColor: "#181717",
      context: "Code Collaboration",
      experience: "Project Experience",
      description:
        "Used to host and manage project repositories and support collaborative development workflows.",
      related: ["Git", "Version Control", "Repositories"],
      note: "Used in this portfolio's version-control",
    },
    {
      id: "bitbucket",
      name: "Bitbucket",
      icon: FaBitbucket,
      brandColor: "#0052CC",
      context: "Code Collaboration",
      experience: "Professional Experience",
      description:
        "Used for source-code collaboration and repository management within professional development workflows.",
      related: ["Git", "Jira", "Version Control"],
    },
    {
      id: "nodejs",
      name: "Node.js",
      icon: FaNodeJs,
      brandColor: "#339933",
      context: "Development Runtime & Tooling",
      experience: "Professional & Project Experience",
      description:
        "Used as part of frontend build and package tooling in Laravel projects, and as the development runtime behind this React + Vite portfolio.",
      related: ["npm", "Laravel", "Vite", "React"],
      note: "Used in this portfolio's development environment",
    },
    {
      id: "npm",
      name: "npm",
      icon: FaNpm,
      brandColor: "#CB3837",
      context: "Package Management",
      experience: "Professional & Project Experience",
      description:
        "Used to install and manage frontend dependencies and development tooling across Laravel and React + Vite projects.",
      related: ["Node.js", "Laravel", "Vite", "React"],
      note: "Used to manage this portfolio's dependencies",
    },
    {
      id: "postman",
      name: "Postman",
      icon: SiPostman,
      brandColor: "#FF6C37",
      context: "API Testing",
      experience: "Professional Experience",
      description:
        "Used to validate REST API behavior, inspect requests and responses, and support integration testing.",
      related: ["REST API", "Swagger", ".NET", "Testing"],
    },
    {
      id: "swagger",
      name: "Swagger",
      iconSrc: SwaggerLogo,
      brandColor: "#85EA2D",
      context: "API Documentation",
      experience: "Professional Experience",
      description:
        "Used to maintain and validate API documentation and ensure supported API versions remained accessible during modernization work.",
      related: ["REST API", ".NET", "Postman", "API Testing"],
    },
    {
      id: "jira",
      name: "Jira",
      icon: SiJira,
      brandColor: "#0052CC",
      context: "Agile Delivery",
      experience: "Professional Experience",
      description:
        "Used to track development work, manage tasks, and collaborate within Agile delivery workflows.",
      related: ["Agile / Scrum", "Delivery", "Team Collaboration"],
    },
    {
      id: "trello",
      name: "Trello",
      icon: SiTrello,
      brandColor: "#0052CC",
      context: "Project Tracking",
      experience: "Project Experience",
      description:
        "Used to organize tasks, responsibilities, and implementation progress across project teams.",
      related: ["Project Planning", "Teamwork", "Delivery"],
    },
    {
      id: "asana",
      name: "Asana",
      icon: SiAsana,
      brandColor: "#F06A6A",
      context: "Work Management",
      experience: "Project Experience",
      description:
        "Used to structure tasks and coordinate project activities across collaborative work.",
      related: ["Planning", "Coordination", "Delivery"],
    },
    {
      id: "vscode",
      name: "VS Code",
      iconSrc: VSCodeLogo,
      brandColor: "#007ACC",
      context: "Code Editor",
      experience: "Project Experience",
      description:
        "Used as a development environment for web projects and day-to-day source-code editing.",
      related: ["GitHub", "JavaScript", "HTML", "CSS"],
      note: "Used to manage this portfolio's",
    },
    {
      id: "visualstudio",
      name: "Visual Studio",
      iconSrc: VisualStudioLogo,
      brandColor: "#5C2D91",
      context: "Development Environment",
      experience: "Professional & Project Experience",
      description:
        "Used for C# and ASP.NET development, debugging, and application implementation in the Microsoft ecosystem.",
      related: ["C#", ".NET", "ASP.NET", "SQL"],
    },
    {
      id: "xampp",
      name: "XAMPP",
      iconSrc: XAMPPLogo,
      brandColor: "#FB7A24",
      context: "Local Development",
      experience: "Project Experience",
      description:
        "Used to run local PHP and database environments during web application development.",
      related: ["PHP", "MySQL", "phpMyAdmin", "Laravel"],
    },
    {
      id: "office",
      name: "Microsoft Office",
      iconSrc: MicrosoftOfficeLogo,
      brandColor: "#D83B01",
      context: "Productivity & Documentation",
      experience: "Professional & Academic Use",
      description:
        "Used across professional and academic work for documentation, data handling, reporting, presentations, and day-to-day project collaboration.",
      related: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
  ],
};
