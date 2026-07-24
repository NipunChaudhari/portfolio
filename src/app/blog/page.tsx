import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write-ups on AI research, LLM engineering, and project deep-dives.",
};

// Coming-soon placeholder. Once real posts exist, this becomes an index
// page (e.g. reading from a data/posts.ts or MDX files) — no structural
// change needed elsewhere, since Blog.tsx on the home page already links here.
export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 pt-24 text-center">
      <p className="font-body text-sm uppercase tracking-[0.2em] text-cyan">Blog</p>
      <h1 className="mt-2 font-display text-3xl font-medium sm:text-4xl">Coming soon</h1>
      <p className="mt-4 max-w-md font-body text-sm text-muted">
        Long-form posts on AI research, LLM engineering, and project deep-dives are on the way.
      </p>
      <Link href="/#blog" className="mt-6 font-body text-sm text-cyan hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
