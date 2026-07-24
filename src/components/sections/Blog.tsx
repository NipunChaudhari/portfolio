import Link from "next/link";

export function Blog() {
  return (
    <section id="blog" className="px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Blog</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Writing, soon</h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-sm text-muted">
          A space for write-ups on research, projects, and things learned along the way.
          Nothing published yet — check back soon.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-surface-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-white/5"
        >
          Visit the blog
        </Link>
      </div>
    </section>
  );
}
