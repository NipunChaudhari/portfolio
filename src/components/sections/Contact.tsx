"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";

// Fill these in .env.local (see .env.local.example) once you create a free
// EmailJS account. Until then, `configured` is false and the form falls
// back to a mailto: link so it's never a dead end.
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const configured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!configured) return;
    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        { from_name: form.name, from_email: form.email, message: form.message },
        { publicKey: PUBLIC_KEY as string }
      );
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 font-body text-sm uppercase tracking-[0.2em] text-cyan">Contact</p>
        <h2 className="font-display text-3xl font-medium sm:text-4xl">Let&apos;s talk</h2>
        <p className="mt-3 max-w-xl font-body text-sm text-muted">
          Open to research collaborations, internships, and AI/ML roles.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-5">
          <div className="glass p-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-cyan" />
              <a
                href={`mailto:${profile.email}`}
                className="font-body text-sm text-foreground/90 hover:text-cyan"
              >
                {profile.email}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <MapPin size={16} className="text-cyan" />
              <span className="font-body text-sm text-foreground/90">{profile.location}</span>
            </div>
            <a
              href={`https://${profile.linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center gap-2 font-body text-sm text-muted hover:text-cyan"
            >
              <ExternalLink size={14} />
              LinkedIn
            </a>

            {!configured && (
              <p className="mt-6 font-body text-xs text-muted">
                This form sends directly via your email client for now — connect
                EmailJS (see .env.local.example) for one-click sending.
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="glass space-y-4 p-6 md:col-span-3">
            <div>
              <label className="mb-1.5 block font-body text-xs text-muted">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-lg border border-surface-border bg-white/5 px-3 py-2 font-body text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-body text-xs text-muted">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-lg border border-surface-border bg-white/5 px-3 py-2 font-body text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="mb-1.5 block font-body text-xs text-muted">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-lg border border-surface-border bg-white/5 px-3 py-2 font-body text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-cyan"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {configured ? (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-2.5 font-body text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03] disabled:opacity-60"
                >
                  <Send size={14} />
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>
              ) : (
                <a
                  href={`mailto:${profile.email}?subject=${encodeURIComponent(
                    `Portfolio contact from ${form.name || "..."}`
                  )}&body=${encodeURIComponent(form.message)}`}
                  className="flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-2.5 font-body text-sm font-medium text-white shadow-glass transition-transform hover:scale-[1.03]"
                >
                  <Send size={14} />
                  Email me directly
                </a>
              )}
              {status === "sent" && (
                <span className="font-body text-xs text-emerald-300">
                  Message sent — thank you!
                </span>
              )}
              {status === "error" && (
                <span className="font-body text-xs text-red-300">
                  Something went wrong — please use the email link instead.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
