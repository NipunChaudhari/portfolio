import { ExperienceItem } from "../types/content";

// Sources: resume (INTERNSHIP EXPERIENCE) cross-checked against
// Ethara AI internship completion letter and Edzu Edtech internship certificate.
export const experience: ExperienceItem[] = [
  {
    role: "Post-LLM Trainee Intern",
    organization: "ethara.ai",
    duration: "Feb 2026 – May 2026",
    bullets: [
      "Working on LLM deployment, prompt engineering, and post-training workflows including fine-tuning and RLHF.",
      "Assisting in integrating language models into production-grade AI application pipelines.",
      "Contributed to data preparation and evaluation tasks in AI and data projects supporting LLM post-training workflows (per internship completion letter, Ethara AI).",
    ],
  },
  {
    role: "Artificial Intelligence and Machine Learning Intern",
    organization: "Edzu Edtech Pvt. Ltd.",
    duration: "Jul 2024 - Aug 2024",
    bullets: [
      "Built and tested machine learning models on real-world datasets, covering data preprocessing, training, and evaluation.",
      "Gained hands-on exposure to supervised learning workflows under industry mentorship.",
    ],
  },
];
