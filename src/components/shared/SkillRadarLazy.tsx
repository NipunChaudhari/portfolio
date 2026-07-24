"use client";

import dynamic from "next/dynamic";

// recharts noticeably grew the initial bundle (flagged back in Milestone 5).
// Loading it on demand, client-side only, keeps it out of the page's first
// JS payload — it loads in its own chunk right as the Skills section
// becomes relevant, instead of blocking initial page load.
export const SkillRadarLazy = dynamic(
  () => import("./SkillRadar").then((mod) => mod.SkillRadar),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-80 w-full animate-pulse items-center justify-center rounded-xl bg-white/5">
        <span className="font-body text-xs text-muted">Loading chart…</span>
      </div>
    ),
  }
);
