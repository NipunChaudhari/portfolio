"use client";

import { useEffect, useState } from "react";

// Brief branded loading screen. Purely presentational — no data fetching
// depends on it, so it degrades gracefully (skipped entirely) if JS is slow
// to hydrate, and it respects prefers-reduced-motion via globals.css.
export function LoadingScreen() {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setProgress(100));
    const exitTimer = setTimeout(() => setPhase("exiting"), 900);
    const doneTimer = setTimeout(() => setPhase("done"), 1300);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-background transition-opacity duration-300 ${
        phase === "exiting" ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display text-2xl tracking-widest text-gradient">NC</span>
      <div className="h-[2px] w-40 overflow-hidden rounded-full bg-surface-border">
        <div
          className="h-full bg-accent-gradient transition-[width] duration-[900ms] ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
