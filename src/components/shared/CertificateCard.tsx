import { BadgeCheck, ExternalLink } from "lucide-react";
import { CertificateItem } from "@/types/content";

export function CertificateCard({ cert }: { cert: CertificateItem }) {
  return (
    <div className="glass flex h-full flex-col gap-3 p-6">
      <div className="flex items-start gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-surface-border bg-white/5">
          <BadgeCheck size={16} className="text-cyan" />
        </span>
        <div>
          <h3 className="font-display text-base font-medium leading-snug">{cert.title}</h3>
          <p className="mt-1 font-body text-xs text-muted">{cert.issuer}</p>
        </div>
      </div>

      <p className="font-body text-xs uppercase tracking-wide text-cyan">{cert.date}</p>

      {cert.credentialId && (
        <p className="font-body text-[11px] text-muted">Credential: {cert.credentialId}</p>
      )}

      {cert.verificationUrl && (
        <a
          href={cert.verificationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-auto flex w-fit items-center gap-1.5 rounded-full border border-surface-border px-3 py-1.5 font-body text-xs text-muted transition-colors hover:text-foreground"
        >
          <ExternalLink size={12} />
          Verify credential
        </a>
      )}
    </div>
  );
}
