import { SiDotnet, SiLaravel, SiPhp, SiPython } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import CSharpLogo from "../../../assets/icons/Skills/C-Sharp.png";

export const backendCategory = {
  id: "backend",
  label: "Back-End",
  eyebrow: "SERVER-SIDE SYSTEMS",
  description:
    "Languages and frameworks used to build application logic, services, and backend integrations.",
  innerCount: 3,
  skills: [
    {
      id: "csharp",
      name: "C#",
      iconSrc: CSharpLogo,
      brandColor: "#68217A",
      context: "Back-End Development",
      experience: "Professional Experience",
      description:
        "Used to build and maintain backend APIs, internal applications, and system integrations in .NET-based environments.",
      related: [".NET", "ASP.NET", "REST API", "SQL Server"],
    },
    {
      id: "dotnet",
      name: ".NET",
      icon: SiDotnet,
      brandColor: "#512BD4",
      context: "Back-End Platform",
      experience: "Professional Experience",
      description:
        "Used for backend service development, API implementation, framework modernization, and application integration.",
      related: ["C#", "ASP.NET", ".NET Core 3.1", ".NET 8"],
    },
    {
      id: "php",
      name: "PHP",
      icon: SiPhp,
      brandColor: "#777BB4",
      context: "Web Development",
      experience: "Professional & Project Experience",
      description:
        "Used for backend and full-stack web development, particularly in Laravel-based applications.",
      related: ["Laravel", "MySQL", "XAMPP", "phpMyAdmin"],
    },
    {
      id: "laravel",
      name: "Laravel",
      icon: SiLaravel,
      brandColor: "#FF2D20",
      context: "Web Application Framework",
      experience: "Professional & Project Experience",
      description:
        "Used to build and enhance database-driven web applications, business workflows, scheduled jobs, and email automation.",
      related: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    },
    {
      id: "java",
      name: "Java",
      icon: FaJava,
      brandColor: "#E76F00",
      context: "Application Development",
      experience: "Academic & Project Experience",
      description:
        "Used in application development projects, including Android-based mobile application implementation.",
      related: ["Android Studio", "XML", "Firebase"],
    },
    {
      id: "python",
      name: "Python",
      icon: SiPython,
      brandColor: "#3776AB",
      context: "Machine Learning & Data",
      experience: "Research Experience",
      description:
        "Used in machine learning and data-analysis workflows for research, experimentation, model training, and evaluation.",
      related: ["Machine Learning", "Data Analysis", "Research"],
    },
  ],
};
