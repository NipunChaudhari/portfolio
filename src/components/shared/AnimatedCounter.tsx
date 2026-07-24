"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function AnimatedCounter({ value, label, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setCount(value);
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    let frame: number;
    function tick(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-medium text-gradient sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 font-body text-xs uppercase tracking-wide text-muted sm:text-sm">
        {label}
      </p>
    </div>
  );
}
