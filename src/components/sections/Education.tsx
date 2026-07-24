import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Education</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Academic timeline</h2>

        <div className="relative mt-12 space-y-10 border-l border-surface-border pl-8">
          {education.map((item) => (
            <div key={item.degree} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-gradient" />
              <p className="font-body text-xs uppercase tracking-wide text-cyan">
                {item.duration}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium">{item.degree}</h3>
              <p className="mt-1 font-body text-sm text-muted">{item.institution}</p>
              {item.status && (
                <p className="mt-3 inline-block rounded-full border border-surface-border px-3 py-1 font-body text-xs text-foreground/80">
                  {item.status}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
