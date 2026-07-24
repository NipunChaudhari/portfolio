import { ProjectItem } from "@/types/content";
import { cn } from "@/lib/utils";

// Status colors are intentionally distinct — a "Concept proposal" should
// never visually read the same as a "Completed" shipped project.
const statusStyles: Record<string, string> = {
  "Concept proposal": "border-amber-400/40 text-amber-300",
  Completed: "border-emerald-400/40 text-emerald-300",
  "In progress": "border-cyan/40 text-cyan",
};

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="glass flex h-full flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-medium">{project.title}</h3>
        <span
          className={cn(
            "shrink-0 rounded-full border px-2.5 py-1 font-body text-[10px] uppercase tracking-wide",
            statusStyles[project.status] ?? "border-surface-border text-muted"
          )}
        >
          {project.status}
        </span>
      </div>

      <span className="w-fit rounded-full border border-surface-border px-3 py-1 font-body text-xs text-muted">
        {project.category}
      </span>

      <p className="font-body text-sm leading-relaxed text-foreground/75">
        {project.description}
      </p>

      <ul className="mt-auto space-y-1.5 pt-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 font-body text-xs text-muted">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}
