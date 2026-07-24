import { profile } from "@/data/profile";
import { navItems } from "@/lib/nav-items";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-medium text-gradient">NC</p>
          <p className="mt-1 font-body text-xs text-muted">
            © {year} {profile.name}. Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/blog"
            className="font-body text-xs text-muted transition-colors hover:text-foreground"
          >
            Blog
          </a>
        </nav>
      </div>
    </footer>
  );
}
