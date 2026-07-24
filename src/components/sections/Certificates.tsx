"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { certificates } from "@/data/certificates";
import { CertificateCard } from "@/components/shared/CertificateCard";
import { cn } from "@/lib/utils";

// Some issuer names are long ("MSME Technology Centre, Indo German Tool Room
// Aurangabad (...)") — fine in a card, too long for a filter pill. This
// shortens only the *label*; filtering still matches the full issuer string.
function shortLabel(issuer: string) {
  return issuer.split(",")[0].split("(")[0].trim();
}

export function Certificates() {
  const issuers = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.issuer)))],
    []
  );
  const [activeIssuer, setActiveIssuer] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = certificates.filter((c) => {
    const matchesIssuer = activeIssuer === "All" || c.issuer === activeIssuer;
    const q = query.trim().toLowerCase();
    const matchesQuery = q === "" || c.title.toLowerCase().includes(q);
    return matchesIssuer && matchesQuery;
  });

  return (
    <section id="certificates" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">
          Certificates
        </p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Credentials earned</h2>
        <p className="mt-3 max-w-2xl font-body text-sm text-muted">
          Every entry below is backed by a real certificate or completion letter.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {issuers.map((issuer) => (
              <button
                key={issuer}
                onClick={() => setActiveIssuer(issuer)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 font-body text-xs transition-colors",
                  activeIssuer === issuer
                    ? "border-transparent bg-accent-gradient text-white"
                    : "border-surface-border text-muted hover:text-foreground"
                )}
              >
                {issuer === "All" ? "All" : shortLabel(issuer)}
              </button>
            ))}
          </div>

          <div className="glass flex items-center gap-2 px-3 py-2 sm:w-64">
            <Search size={14} className="text-muted" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certificates…"
              className="w-full bg-transparent font-body text-sm text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} />
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center font-body text-sm text-muted">
              No certificates match your filters.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
