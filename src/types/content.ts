// Shared type definitions for the content/data layer.
// Every file in /data implements one of these — components should only
// ever import the shape, never redefine fields inline.

export interface ProfileInfo {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  linkedin: string;
  location: string;
  summary: string;
  openTo: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
}

export interface ResearchItem {
  title: string;
  venue: string;
  date?: string;
  award?: string;
  bullets: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface LeadershipItem {
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
}

export interface ProjectItem {
  title: string;
  category: string;
  /** "Concept proposal" | "Completed" | "In progress" — be honest about status */
  status: string;
  description: string;
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface GalleryItem {
  title: string;
  category: string;
  imageUrl: string;
  date?: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}
