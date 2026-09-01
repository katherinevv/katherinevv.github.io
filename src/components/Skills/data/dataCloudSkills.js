import { Database } from "lucide-react";
import { SiDbeaver, SiFirebase, SiMysql, SiPostgresql } from "react-icons/si";
import SQLServerLogo from "../../../assets/icons/skills/SQL-Server.png";
import PhpMyAdminLogo from "../../../assets/icons/Skills/PhpMyAdmin.png";

export const dataCloudCategory = {
  id: "data",
  label: "Data & Cloud",
  eyebrow: "DATA LAYER",
  description:
    "Databases, cloud services, and data tools used to query, manage, and validate application data.",
  innerCount: 3,
  skills: [
    {
      id: "sql",
      name: "SQL",
      icon: Database,
      brandColor: "#336791",
      context: "Data Querying",
      experience: "Professional & Project Experience",
      description:
        "Used for querying, validating, transforming, and troubleshooting application data across relational databases.",
      related: ["SQL Server", "PostgreSQL", "MySQL", "Stored Procedures"],
    },
    {
      id: "mysql",
      name: "MySQL",
      icon: SiMysql,
      brandColor: "#4479A1",
      context: "Relational Database",
      experience: "Professional Experience",
      description:
        "Used as a relational database for Laravel-based internal application development and maintenance.",
      related: ["SQL", "Laravel", "DBeaver", "phpMyAdmin"],
    },
    {
      id: "sqlserver",
      name: "SQL Server",
      iconSrc: SQLServerLogo,
      brandColor: "#CC2927",
      context: "Relational Database",
      experience: "Professional Experience",
      description:
        "Used for backend API development, data access, stored procedures, troubleshooting, and integration support.",
      related: ["SQL", ".NET", "C#", "Stored Procedures"],
    },
    {
      id: "postgres",
      name: "PostgreSQL",
      icon: SiPostgresql,
      brandColor: "#4169E1",
      context: "Relational Database",
      experience: "Professional Experience",
      description:
        "Used in backend application and API work for querying, validating, and managing application data.",
      related: ["SQL", ".NET", "DBeaver"],
    },
    {
      id: "firebase",
      name: "Firebase",
      icon: SiFirebase,
      brandColor: "#FFCA28",
      context: "Cloud Backend Platform",
      experience: "Project Experience",
      description:
        "Used across mobile projects for authentication, Cloud Firestore, hosting, analytics, and application data services.",
      related: [
        "Cloud Firestore",
        "Firebase Auth",
        "Firebase Hosting",
        "Firebase Analytics",
      ],
    },
    {
      id: "dbeaver",
      name: "DBeaver",
      icon: SiDbeaver,
      brandColor: "#382923",
      context: "Database Tooling",
      experience: "Professional Experience",
      description:
        "Used to inspect, query, validate, and troubleshoot data across multiple database systems.",
      related: ["SQL", "PostgreSQL", "MySQL", "SQL Server"],
    },
    {
      id: "phpmyadmin",
      name: "phpMyAdmin",
      iconSrc: PhpMyAdminLogo,
      brandColor: "#6C78AF",
      context: "Database Administration",
      experience: "Project Experience",
      description:
        "Used for local database administration and data management in PHP-based web development projects.",
      related: ["PHP", "MySQL", "XAMPP"],
    },
  ],
};

