import { Award, ExternalLink } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { certificates } from "../data/certificates";
import { useT } from "../i18n/useT";

export default function Certificates() {
  const { t, lang } = useT();

  return (
    <Section
      id="certificates"
      eyebrow={t.certificates.eyebrow}
      title={t.certificates.title}
      description={t.certificates.description}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 0.06}>
            <div className="card flex h-full flex-col p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber/20 to-violet/20 text-amber">
                  <Award size={18} />
                </span>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t.certificates.verify}
                    className="text-muted hover:text-ink"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
              <p className="mt-4 font-medium text-ink">{lang === "uz" ? cert.title : cert.titleEn}</p>
              <p className="mt-1 text-xs font-mono uppercase tracking-[0.15em] text-cyan">
                {cert.issuer} · {cert.date}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {lang === "uz" ? cert.description : cert.descriptionEn}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
