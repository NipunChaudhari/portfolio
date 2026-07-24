import { ImageOff } from "lucide-react";
import { gallery } from "@/data/gallery";

// Renders the real photo grid once data/gallery.ts has entries. Until you
// share hackathon/event photos, this shows an honest empty state instead
// of stock placeholder images — no invented visuals of your life.
export function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Gallery</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Moments &amp; milestones</h2>

        {gallery.length === 0 ? (
          <div className="glass mt-12 flex flex-col items-center gap-3 p-14 text-center">
            <ImageOff size={28} className="text-muted" />
            <p className="font-body text-sm text-muted">
              No photos added yet. Send hackathon, event, or college activity
              photos and they&apos;ll appear here.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {gallery.map((item) => (
              <figure key={item.title} className="glass overflow-hidden !rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element -- gallery
                    images come from arbitrary future URLs, not next/image's
                    configured remote patterns */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="p-4">
                  <p className="font-body text-sm text-foreground/90">{item.title}</p>
                  <p className="font-body text-xs text-muted">
                    {item.category}
                    {item.date ? ` · ${item.date}` : ""}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
