import { BookOpen, Award } from "lucide-react";
import { research } from "@/data/research";

export function Research() {
  return (
    <section id="research" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Research</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Papers &amp; publications</h2>

        <div className="mt-12 space-y-6">
          {research.map((item) => (
            <div key={item.title} className="glass p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-surface-border bg-white/5">
                  <BookOpen size={18} className="text-cyan" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-body text-sm text-muted">{item.venue}</p>
                  {item.date && (
                    <p className="mt-0.5 font-body text-xs uppercase tracking-wide text-cyan">
                      {item.date}
                    </p>
                  )}
                </div>
              </div>

              {item.award && (
                <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-400/40 px-3 py-1 font-body text-xs text-amber-300">
                  <Award size={12} />
                  {item.award}
                </span>
              )}

              <ul className="mt-4 space-y-2">
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
