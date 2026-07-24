export interface NavItem {
  label: string;
  href: string;
}

// Single source of truth for site navigation — used by both the Navbar
// and the CommandPalette so the two never drift out of sync.
// Sections not built yet still get an anchor id reserved for them so
// these links become live as each milestone adds the section.
export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Resume", href: "#resume" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
