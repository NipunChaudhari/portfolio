import { Briefcase } from "lucide-react";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Experience</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Where I&apos;ve worked</h2>

        <div className="mt-12 space-y-6">
          {experience.map((item) => (
            <div key={`${item.role}-${item.organization}`} className="glass p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-border bg-white/5">
                    <Briefcase size={18} className="text-cyan" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium">{item.role}</h3>
                    <p className="font-body text-sm text-muted">{item.organization}</p>
                  </div>
                </div>
                <span className="font-body text-xs uppercase tracking-wide text-cyan">
                  {item.duration}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {item.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2 font-body text-sm text-foreground/75"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
