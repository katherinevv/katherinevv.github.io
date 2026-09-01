import aabCover from "../../../assets/images/Projects/AAB.png";

const gardaMedika = {
  "id": "garda-medika",
  "title": "Garda Medika Digital Services",
  "context": "Professional",
  "modalContext": "Professional Project · Internship",
  "timeline": "Aug 2025 – Feb 2026",
  "featured": true,
  "categories": [
    "Professional",
    "API & Backend"
  ],
  "oneLiner": "Supporting digital healthcare services through backend APIs, database integration, and end-to-end testing.",
  "tags": [
    "API & Backend",
    "Digital Health"
  ],
  "tech": [
    "REST API",
    "SQL",
    "Stored Procedure",
    "Postman"
  ],
  "cover": {
    "type": "image",
    "src": aabCover,
    "alt": "Garda Medika Digital Services"
  },
  "shortIntroduction": "Digital healthcare services within the Garda Medika / Medcare ecosystem supported through backend APIs, database integration, and testing.",
  "overview": "I contributed to backend services within the Garda Medika / Medcare ecosystem, supporting healthcare features and integrations that connect Medcare services with the myGarda mobile experience. My work covered Express Discharge, Guarantee Letter flows, E-Appointment, E-Consultation, notification services, and related account and transaction flows.",
  "challenge": "The ecosystem involved multiple interconnected APIs, database procedures, frontend integrations, and healthcare service flows that needed to remain aligned with business requirements and pass internal testing.",
  "role": "Backend Developer · Digital 2",
  "roleDescription": "Within Digital 2, I focused on backend APIs, database and stored-procedure changes, integration troubleshooting, and structured testing for interconnected Garda Medika / Medcare service flows.",
  "myContributions": [
    "Enhanced Express Discharge and Guarantee Letter-related services.",
    "Developed and adjusted APIs such as GetDetailGL, GetTimeline, and related services.",
    "Developed database and stored-procedure changes supporting E-Appointment and Push Notification workflows.",
    "Supported frontend/backend integration.",
    "Investigated and resolved E-Consultation Non-Member issues.",
    "Supported migration and rollback activities.",
    "Performed internal testing and retesting across E-Appointment, Wellness, and E-Consultation flows.",
    "Supported QC throughout integration and validation."
  ],
  "teamContributions": [],
  "deepDive": [
    {
      "heading": "Services & APIs I Worked On",
      "groups": [
        {
          "heading": "Express Discharge & Guarantee Letter",
          "items": [
            "Enhanced Express Discharge functionality.",
            "Worked on GetDetailGL.",
            "Developed/adjusted GetTimeline.",
            "Worked on GetEConsultationLiveChatStatusIos.",
            "Adjusted diagnosis-related data types.",
            "Worked with the MappingTreatmentRoom table.",
            "Supported UI/backend integration and QC activities."
          ]
        },
        {
          "heading": "E-Appointment",
          "items": [
            "Worked on the Riwayat EApp stored procedure.",
            "Developed/adjusted GetListEAppTransaction.",
            "Worked on GetUserAddress.",
            "Adjusted API responses based on integration requirements.",
            "Supported transaction-history functionality.",
            "Supported migration and rollback activities."
          ]
        },
        {
          "heading": "Push Notification",
          "items": [
            "Worked on PushNotif GL stored procedures.",
            "Implemented/adjusted notification-related logic.",
            "Supported notification integration with related healthcare flows."
          ]
        },
        {
          "heading": "E-Consultation Non-Member",
          "items": [
            "Investigated issues in the Non-Member flow.",
            "Performed supporting data queries.",
            "Updated ValidateAuthKeyNonMember.",
            "Supported QC testing until the identified issue was resolved."
          ]
        },
        {
          heading: "myGarda × Medcare Integration",
          items: [
            "Supported integration between myGarda and Medcare services.",
            "Tested Unlink Account and Terminate Member flows.",
            "Investigated and fixed PIN and registration-related issues.",
            "Supported validation of integrated Medcare features before use."
          ]
        },
        {
          "heading": "Timeline GL",
          "items": [
            "Worked on GetTimeline.",
            "Developed/adjusted GetClaimStatusGL.",
            "Worked on GetListMemberNo.",
            "Performed supporting repository and database adjustments."
          ]
        },
        {
          "heading": "Testing & Integration",
          "items": [
            "Supported internal testing and retesting for E-Appointment.",
            "Supported testing for E-Consultation, including Payment Gateway and History-related flows.",
            "Participated in Wellness testing.",
            "Coordinated frontend/backend integration and QC validation.",
            "E-Appointment internal testing/retesting reached the documented 100% completion state."
          ]
        }
      ]
    }
  ],
  "collaboration": "Worked within Digital 2 with Business Analysts, Product Owners, QC, Dev Lead, frontend/UI developers, and other cross-functional team members. Coordination covered API and UI alignment, requirement clarification, internal testing and retesting, QC validation, migration/rollback preparation, and staging or production readiness.",
  "process": [],
  "impactSummary": "Supported stable healthcare-service integrations by developing backend changes, resolving flow issues, and validating interconnected APIs through structured testing.",
  "impactMetrics": [
    { "label": "E-Appointment Testing", "before": "In progress", "after": "100% completion" }
  ],
  "impactItems": [
    "E-Appointment testing reached full completion.",
    "Resolved the E-Consultation Non-Member and live E-Consultation blocker.",
    "Integrated Express Discharge and Guarantee Letter APIs end-to-end with the frontend.",
    "Worked across 5+ interconnected services spanning discharge, GL, appointments, and notifications."
  ],
  "techStack": [
    {
      category: "Backend & API",
      items: ["ASP.NET", "C#", "REST API"],
    },
    {
      category: "Database",
      items: [
        "SQL Server",
        "PostgreSQL",
        "Stored Procedures",
        "DBeaver",
      ],
    },
    {
      category: "Testing & Integration",
      items: [
        "Postman",
        "ReactJS",
        "Migration / Rollback",
      ],
    },
    {
      category: "Design & Interface",
      items: ["Figma"],
    },
    {
      category: "Development Tools",
      items: [
        "Git",
        "Bitbucket",
        "Jira",
      ],
    },
    {
      category: "Development Methodology",
      items: [
        "Agile / Scrum",
      ],
    },
  ],
  "assets": [],
  "links": [],
  "confidentialityNote": "This work involved internal company systems. Application screenshots, source code, and proprietary healthcare-service implementation details are not publicly displayed."
};

export default gardaMedika;
