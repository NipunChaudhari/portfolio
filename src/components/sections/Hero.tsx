"use client";

import { useEffect, useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import { NeuralBackground } from "./NeuralBackground";

// Roles are drawn from Nipun's verified experience/research (LLM internship,
// ML internship, IoT research paper, two published papers) — not invented.
const roles = ["AI Engineer", "GenAI Developer", "ML Engineer", "IoT Developer", "AI Researcher"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const typingSpeed = deleting ? 40 : 80;
    const pauseAtFullWord = 1400;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseAtFullWord);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
      return;
    }
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, typingSpeed);
    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words]);

  return text;
}

// Displayed in common first-name-first order for readability. The official
// record (data/profile.ts) keeps the resume's surname-first order — this is
// a presentation-only choice; flag if you'd rather show the legal order.
const displayName = "Nipun Chaudhari";

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
    >
      <NeuralBackground />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Gradient-ring monogram placeholder — swap for a real <Image> once a profile photo is provided */}
        <div className="mb-6 rounded-full bg-accent-gradient p-[2px]">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-background">
            <span className="font-display text-2xl text-gradient">NC</span>
          </div>
        </div>

        <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-cyan">
          {profile.location}
        </p>

        <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl md:text-6xl">
          {displayName}
        </h1>

        <p className="mt-4 h-8 font-body text-lg text-muted sm:text-xl">
          {typed}
          <span className="ml-0.5 animate-pulse text-cyan">|</span>
        </p>

        <p className="mt-6 max-w-xl font-body text-sm leading-relaxed text-foreground/70 sm:text-base">
          {profile.summary}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="rounded-full bg-accent-gradient px-6 py-3 font-body text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03]"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="rounded-full border border-surface-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Contact Me
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-surface-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Hire Me
          </a>
        </div>

        <div className="mt-8 flex items-center gap-5">
          <a
            href={`https://${profile.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan"
            aria-label="LinkedIn"
          >
            <ExternalLink size={16} />
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-cyan"
            aria-label="Email"
          >
            <Mail size={16} />
            Email
          </a>
          {/* GitHub link intentionally omitted — none provided yet, see PROJECT MEMORY */}
        </div>
      </div>
    </section>
  );
}
