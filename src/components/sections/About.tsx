import { profile } from "@/data/profile";
import { research } from "@/data/research";
import { experience } from "@/data/experience";
import { certificates } from "@/data/certificates";
import { leadership } from "@/data/leadership";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

// Counter values are computed from the actual data arrays (.length), never
// hand-typed — so this section can't silently drift out of sync with
// data/*.ts as new entries get added in later milestones.
export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">About</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">The story so far</h2>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <div className="glass p-8 md:col-span-3">
            <p className="font-body text-base leading-relaxed text-foreground/80">
              {profile.summary}
            </p>
            <p className="mt-4 font-body text-sm text-muted">Open to: {profile.openTo}</p>
          </div>

          <div className="glass grid grid-cols-2 gap-8 p-8 md:col-span-2">
            <AnimatedCounter value={research.length} label="Research Papers" />
            <AnimatedCounter value={experience.length} label="Internships" />
            <AnimatedCounter value={certificates.length} label="Certifications" />
            <AnimatedCounter value={leadership.length} label="Leadership Roles" />
          </div>
        </div>
      </div>
    </section>
  );
}
