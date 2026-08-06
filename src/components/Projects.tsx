import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowUpRight, FileText } from "lucide-react";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import CaseStudyModal from "./ui/CaseStudyModal";
import { GithubIcon } from "./ui/BrandIcons";
import { useTilt } from "../hooks/useTilt";
import { useT } from "../i18n/useT";
import { projects, type Project, type ProjectCategory } from "../data/projects";

const categories: ProjectCategory[] = ["React", "UI", "Fullstack"];

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, lang } = useT();
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(6);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="card group flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-violet/50"
    >
      <div className={`h-32 bg-gradient-to-br ${project.gradient} relative`}>
        <div className="absolute inset-0 bg-grid-fade opacity-40 [background-size:auto,24px_24px,24px_24px]" />
        <span className="absolute left-4 top-4 rounded-full border border-line bg-base/60 px-2.5 py-1 text-[10px] font-mono text-muted">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-medium text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">
          {lang === "uz" ? project.description : project.descriptionEn}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-[11px] font-mono text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan transition-transform hover:translate-x-0.5"
          >
            <FileText size={13} /> {t.projects.caseStudy}
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-ink"
          >
            <GithubIcon size={13} />
            <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useT();
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === "all" || p.category === category;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <Section
      id="projects"
      eyebrow={t.projects.eyebrow}
      title={t.projects.title}
      description={t.projects.description}
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
              category === "all" ? "border-cyan bg-cyan/10 text-cyan" : "border-line text-muted hover:text-ink"
            }`}
          >
            {t.projects.all}
          </button>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                category === c ? "border-cyan bg-cyan/10 text-cyan" : "border-line text-muted hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-56">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.projects.search}
            className="w-full rounded-full border border-line bg-surface2 py-2 pl-9 pr-4 text-sm text-ink placeholder:text-muted focus:border-cyan focus:outline-none"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-sm text-muted">{t.projects.noResults}</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <ProjectCard project={p} onOpen={() => setActive(p)} />
            </Reveal>
          ))}
        </div>
      )}

      <CaseStudyModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}
