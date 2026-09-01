import FigmaLogo from "../../../assets/icons/Skills/Figma.png";
import VisualParadigmLogo from "../../../assets/icons/Skills/Visual-Paradigm.png";
import DrawIOLogo from "../../../assets/icons/Skills/DrawIO.png";

export const designCategory = {
  id: "design",
  label: "Design & Modeling",
  eyebrow: "DESIGN & SYSTEM THINKING",
  description:
    "Tools used to translate requirements, interfaces, system structures, and processes into clear visual models.",
  innerCount: 2,
  skills: [
    {
      id: "figma",
      name: "Figma",
      iconSrc: FigmaLogo,
      brandColor: "#5f3cec",
      context: "UI/UX Design & Validation",
      experience: "Professional & Project Experience",
      description:
        "Used to design application interfaces in project work and to review UI/UX flows, validate screen behavior, and support application testing during professional development work.",
      related: ["UI/UX", "Prototyping", "User Flow", "UI Testing"],
    },
    {
      id: "visualparadigm",
      name: "Visual Paradigm",
      iconSrc: VisualParadigmLogo,
      brandColor: "#e85a22",
      context: "System Modeling",
      experience: "Academic & Project Experience",
      description:
        "Used to model systems, document process flows, and communicate software design through structured diagrams.",
      related: ["UML", "Process Modeling", "Documentation"],
    },
    {
      id: "drawio",
      name: "draw.io / diagrams.net",
      iconSrc: DrawIOLogo,
      brandColor: "#F08705",
      context: "Diagramming & Modeling",
      experience: "Academic & Project Experience",
      description:
        "Used through draw.io and the diagrams.net web editor to create flowcharts, system diagrams, architecture sketches, and process visualizations.",
      related: ["draw.io Desktop", "app.diagrams.net", "System Diagrams"],
    },
  ],
};
