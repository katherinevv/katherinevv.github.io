import aabCover from "../../../assets/images/Projects/AAB.png";

const astraVms = {
  "id": "astra-vms",
  "title": "Astra Vendor Management System (VMS)",
  "context": "Professional",
  "modalContext": "Professional Project · Internship",
  "timeline": "Mar 2025 – Feb 2026",
  "featured": true,
  "categories": [
    "Professional",
    "Web",
    "API & Backend"
  ],
  "oneLiner": "Enhancing internal vendor and operational workflows through system development, automation, and performance optimization.",
  "tags": [
    "Web Development",
    "Enterprise System",
    "Backend"
  ],
  "tech": [
    "Laravel",
    "SQL",
    "JavaScript",
    "Scheduler"
  ],
  "cover": {
    "type": "image",
    "src": aabCover,
    "alt": "Astra Vendor Management System (VMS)"
  },
  "shortIntroduction": "An internal enterprise system supporting vendor-related operational workflows at PT Asuransi Astra Buana.",
  "overview": "During my internship, I contributed to the continuous development and enhancement of Astra-VMS across multiple workflows, including Purchase Order, Vendor Maintenance, Outsourcing, Slip Order, reporting, attachments, approval processes, and automated email services.",
  "challenge": "The system required continuous enhancements to accommodate evolving internal business requirements while maintaining application performance, reliability, and compatibility with existing workflows. Some tasks also involved production issues and performance bottlenecks, including slow Purchase Order filtering and email delivery limitations.",
  "role": "Full-Stack Developer · VMS / Internal Team",
  "roleDescription": "Within the VMS/Internal team, I worked across frontend and backend enhancements, database changes, business-rule implementation, debugging, testing, and release support for an internal enterprise system.",
  "myContributions": [
    "Enhanced Purchase Order workflows, including invoice status, item information, attachments, filtering, reporting, and Excel export.",
    "Developed enhancements for Vendor Maintenance, Outsourcing, and Slip Order workflows.",
    "Implemented business-rule and database changes based on internal requirements.",
    "Optimized Purchase Order filtering and related database queries.",
    "Contributed to automated email workflows, schedulers, and worker-based processing.",
    "Investigated and resolved application and production issues.",
    "Supported QC, UAT, migration, and production release activities."
  ],
  "teamContributions": [],
  "deepDive": [
    {
      "heading": "Key Features & Enhancements",
      "groups": [
        {
          "heading": "Purchase Order",
          "items": [
            "Investigated and resolved Edit/View PO issues.",
            "Optimized Slip Order data population.",
            "Added attachment support for Submit PO to Approver.",
            "Enhanced PO display, search, and filtering.",
            "Implemented Invoice Status and Item Name enhancements.",
            "Enhanced List of PO reporting and Excel export."
          ]
        },
        {
          "heading": "Vendor Maintenance",
          "items": [
            "Added Exclude PPN field support.",
            "Implemented Email Alert enhancements.",
            "Improved vendor filtering and related workflows."
          ]
        },
        {
          "heading": "Outsourcing",
          "items": [
            "Enhanced Personal Information functionality.",
            "Implemented mandatory Probation Status requirements.",
            "Added hard-delete handling for attachments.",
            "Performed supporting database changes."
          ]
        },
        {
          "heading": "Slip Order",
          "items": [
            "Added Helpdesk Number functionality.",
            "Enhanced search and filtering.",
            "Implemented supporting database fields and scripts."
          ]
        },
        {
          "heading": "Other Workflows",
          "items": [
            "Enhanced Probation Result Email workflows.",
            "Implemented Login Popup enhancements.",
            "Supported Digital Signature enhancements.",
            "Improved attachment validation.",
            "Added certain users as User Approvers.",
            "Worked on SendToFinance.",
            "Enhanced PO Email and Vacancy Mail workflows."
          ]
        },
        {
          "heading": "Production Reliability & Performance",
          "items": [
            "Investigated Purchase Order filtering performance issues.",
            "Optimized Purchase Order filtering response time from approximately 8 seconds to 1.5–3 seconds.",
            "Supported handling of SMTP / Email Limit Exceeded production issues.",
            "Contributed to queue and worker-based email processing to improve delivery reliability."
          ]
        }
      ]
    }
  ],
  "collaboration": "Worked within the VMS/Internal team and coordinated cross-functionally with Business Analysts, Product Owners, QC, Dev Lead, and related stakeholders. Collaboration covered requirement clarification, daily Scrum and sprint activities, internal testing, QC/UAT follow-up, migration preparation, and production release support.",
  "process": [],
  "impactSummary": "Improved system performance and reliability while delivering enhancements across multiple internal vendor and operational workflows.",
  "impactMetrics": [
    { "label": "PO Filtering Speed", "before": "~8 sec", "after": "~1.5–3 sec" },
    { "label": "Email Delivery", "before": "Frequent SMTP limit failures", "after": "Stable via queue/worker processing" }
  ],
  "impactItems": [
    "Cut PO filtering time up to 5x and stabilized email delivery across six enhanced workflows.",
    "Shipped enhancements across 6 core workflows in one release cycle.",
    "Cleared QC/UAT and released to production with zero rollback.",
    "Reduced recurring production incidents through targeted fixes."
  ],
  "techStack": [
    {
      category: "Backend & Web",
      items: [
        "Laravel",
        "PHP",
        "HTML",
        "Bootstrap",
        "JavaScript",
      ],
    },
    {
      category: "Database",
      items: [
        "MySQL",
        "DBeaver",
      ],
    },
    {
      category: "Email & Automation",
      items: [
        "Email / SMTP",
        "Scheduler / Worker",
      ],
    },
    {
      category: "Design & Interface",
      items: [
        "Figma",
      ],
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
        "Waterfall",
      ],
    },
  ],
  "assets": [],
  "links": [],
  "confidentialityNote": "This is an internal company system. Application screenshots, source code, and proprietary implementation details are not publicly displayed."
};

export default astraVms;
