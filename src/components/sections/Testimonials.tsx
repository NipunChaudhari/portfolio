import { MessagesSquare } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">
          Testimonials
        </p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">What people say</h2>

        {testimonials.length === 0 ? (
          <div className="glass mt-12 flex flex-col items-center gap-3 p-14 text-center">
            <MessagesSquare size={28} className="text-muted" />
            <p className="font-body text-sm text-muted">
              No testimonials added yet. Share quotes from mentors, professors, or
              collaborators — with their OK to publish — and they&apos;ll appear here.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
