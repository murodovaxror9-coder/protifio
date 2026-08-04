import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Loyihalar"
      title="Amalga oshirilgan ishlar"
      description="So'nggi loyihalarimdan bir nechtasi — har biri turli texnologiya va vazifalarni qamrab oladi."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:border-violet/50"
            >
              <div className={`h-32 bg-gradient-to-br ${p.gradient} relative`}>
                <div className="absolute inset-0 bg-grid-fade opacity-40 [background-size:auto,24px_24px,24px_24px]" />
                <ArrowUpRight
                  size={18}
                  className="absolute right-4 top-4 text-ink/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-medium text-ink">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-line px-2.5 py-1 text-[11px] font-mono text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-muted">
                  <GithubIcon size={13} /> GitHub'da ko'rish
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
