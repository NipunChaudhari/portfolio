import { ProjectItem } from "../types/content";

// NOTE: The two entries below come from documents titled "Future Project
// Concepts for Tata Technologies InnoVent" that were in your uploads. They
// read as ideation/concept-pitch documents (no certificate or resume line
// confirms a hackathon result, team, or your specific role), so they're
// marked "Concept proposal" rather than a win or completed project.
// TODO(Nipun): confirm — was this a team hackathon submission? Did you
// place/win? Should this be merged with SenseBin/fever-detection research
// instead of shown separately? Update status once confirmed.
export const projects: ProjectItem[] = [
  {
    title: "NeuroFactory — Autonomous Manufacturing Intelligence Network",
    category: "AI / Manufacturing",
    status: "Concept proposal",
    description:
      "Concept for an AI operating system for future factories, where machines, robots, production lines, and business systems coordinate through intelligent agents rather than siloed dashboards.",
    highlights: [
      "Multi-agent AI architecture for factory-wide coordination",
      "Targets production, maintenance, quality, and energy optimization in one system",
      "Proposed for Tata Technologies InnoVent",
    ],
  },
  {
    title: "Industrial Cognitive Twin",
    category: "AI / Manufacturing",
    status: "Concept proposal",
    description:
      "Concept for a Digital Twin that reasons and explains, rather than just mirrors sensor data — combining engineering knowledge and operational context to generate explainable recommendations.",
    highlights: [
      "Explainable AI and causal reasoning over traditional digital twins",
      "Proposed for Tata Technologies InnoVent",
    ],
  },
  {
    title: "Vehicle Cognitive Intelligence Platform",
    category: "AI / Automotive",
    status: "Concept proposal",
    description:
      "Concept for a cognitive AI layer for software-defined vehicles, reasoning across driver behavior, battery health, road and weather conditions to recommend optimized actions.",
    highlights: [
      "Cross-domain reasoning (driver, vehicle, environment)",
      "Proposed for Tata Technologies InnoVent",
    ],
  },
];
