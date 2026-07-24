import { Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";

export function Achievements() {
  return (
    <section id="achievements" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Achievements</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Wins &amp; recognitions</h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {achievements.map((item) => (
            <div key={item} className="glass flex items-start gap-3 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-white/5">
                <Trophy size={16} className="text-amber-300" />
              </span>
              <p className="font-body text-sm leading-relaxed text-foreground/85">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
