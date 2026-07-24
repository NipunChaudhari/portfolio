import { Download, FileText } from "lucide-react";
import { profile } from "@/data/profile";

// Points at /public/resume.pdf — an ATS-friendly PDF generated directly from
// the same data/*.ts content used across the rest of the site, so it can
// never drift out of sync with what the page displays.
export function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Resume</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Full resume</h2>
        <p className="mt-3 max-w-2xl font-body text-sm text-muted">
          An ATS-friendly PDF built from the same verified data used throughout this site.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 font-body text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03]"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-white/5"
          >
            <FileText size={16} />
            Open in new tab
          </a>
        </div>

        <div className="glass mt-10 overflow-hidden p-2">
          <iframe
            src="/resume.pdf"
            title={`${profile.name} resume preview`}
            className="h-[640px] w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
