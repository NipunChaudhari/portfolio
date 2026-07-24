"use client";

import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { navItems } from "@/lib/nav-items";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const filtered = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center bg-black/60 pt-[15vh]"
      onClick={onClose}
    >
      <div
        className="glass mx-4 w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-surface-border px-4 py-3">
          <Search size={16} className="text-muted" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search sections…"
            className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-muted focus:outline-none"
          />
          <kbd className="rounded border border-surface-border px-1.5 py-0.5 font-body text-[10px] text-muted">
            Esc
          </kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center font-body text-sm text-muted">
              No sections match &ldquo;{query}&rdquo;
            </li>
          )}
          {filtered.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between rounded-lg px-3 py-2 font-body text-sm text-foreground/90 transition-colors hover:bg-white/5"
              >
                {item.label}
                <ArrowRight size={14} className="text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
