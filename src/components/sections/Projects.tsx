"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { cn } from "@/lib/utils";

export function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      q === "" || p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Projects</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Ideas in motion</h2>
        <p className="mt-3 max-w-2xl font-body text-sm text-muted">
          Concept proposals and works in progress — each card is labeled with its real status.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-body text-xs transition-colors",
                  activeCategory === cat
                    ? "border-transparent bg-accent-gradient text-white"
                    : "border-surface-border text-muted hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="glass flex items-center gap-2 px-3 py-2 sm:w-64">
            <Search size={14} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center font-body text-sm text-muted">
              No projects match your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
