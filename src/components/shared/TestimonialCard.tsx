import { Quote } from "lucide-react";
import { TestimonialItem } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  const initials = testimonial.name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="glass flex h-full flex-col gap-4 p-6">
      <Quote size={20} className="text-cyan" />
      <p className="font-body text-sm leading-relaxed text-foreground/85">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-2">
        {testimonial.avatarUrl ? (
          // Avatars come from arbitrary future URLs, not next/image's remote patterns
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={testimonial.avatarUrl}
            alt={testimonial.name}
            className="h-9 w-9 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-white/5 font-body text-xs text-muted">
            {initials}
          </span>
        )}
        <div>
          <p className="font-body text-sm text-foreground/90">{testimonial.name}</p>
          <p className="font-body text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
