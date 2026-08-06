import { AnimatePresence, motion } from "framer-motion";
import { X, AlertTriangle, Lightbulb, TrendingUp } from "lucide-react";
import { useT } from "../../i18n/useT";
import type { Project } from "../../data/projects";

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  const { t, lang } = useT();

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="card relative max-h-[85vh] w-full max-w-xl overflow-y-auto p-7 md:p-8"
          >
            <button
              onClick={onClose}
              aria-label={t.projects.close}
              className="absolute right-5 top-5 rounded-full border border-line p-2 text-muted hover:text-ink"
            >
              <X size={16} />
            </button>

            <span className="eyebrow">{t.projects.caseStudy}</span>
            <h3 className="mt-2 text-2xl font-semibold text-ink">{project.title}</h3>
            <p className="mt-2 text-sm text-muted">
              {lang === "uz" ? project.description : project.descriptionEn}
            </p>

            <div className="mt-6 space-y-5">
              <CaseRow
                icon={AlertTriangle}
                label={t.projects.problem}
                text={project.caseStudy[lang].problem}
                color="text-amber"
              />
              <CaseRow
                icon={Lightbulb}
                label={t.projects.solution}
                text={project.caseStudy[lang].solution}
                color="text-violet-soft"
              />
              <CaseRow
                icon={TrendingUp}
                label={t.projects.result}
                text={project.caseStudy[lang].result}
                color="text-cyan"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] font-mono text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseRow({
  icon: Icon,
  label,
  text,
  color,
}: {
  icon: typeof AlertTriangle;
  label: string;
  text: string;
  color: string;
}) {
  return (
    <div className="flex gap-3">
      <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface2 ${color}`}>
        <Icon size={16} />
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{label}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink">{text}</p>
      </div>
    </div>
  );
}
