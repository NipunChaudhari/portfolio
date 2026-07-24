import { skills } from "@/data/skills";
import { SkillRadarLazy } from "@/components/shared/SkillRadarLazy";

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Skills</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Technical toolkit</h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="glass p-6">
            <SkillRadarLazy />
          </div>

          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="font-display text-sm font-medium text-foreground/90">
                  {group.category}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-surface-border px-3 py-1 font-body text-xs text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
