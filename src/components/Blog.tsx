import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X, Calendar } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { blogPosts, type BlogPost } from "../data/blog";
import { useT } from "../i18n/useT";

export default function Blog() {
  const { t, lang } = useT();
  const [active, setActive] = useState<BlogPost | null>(null);

  return (
    <Section id="blog" eyebrow={t.blog.eyebrow} title={t.blog.title} description={t.blog.description}>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.map((post, i) => (
          <Reveal key={post.id} delay={(i % 3) * 0.06}>
            <button
              onClick={() => setActive(post)}
              className="card flex h-full w-full flex-col p-5 text-left transition-colors hover:border-violet/50"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-line px-2.5 py-1 text-[11px] font-mono text-cyan">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted">
                  <Calendar size={12} /> {post.date}
                </span>
              </div>
              <p className="mt-4 font-medium leading-snug text-ink">
                {lang === "uz" ? post.title : post.titleEn}
              </p>
              <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
                {lang === "uz" ? post.excerpt : post.excerptEn}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-cyan">
                {t.blog.readMore} <ArrowRight size={13} />
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
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
                onClick={() => setActive(null)}
                aria-label={t.projects.close}
                className="absolute right-5 top-5 rounded-full border border-line p-2 text-muted hover:text-ink"
              >
                <X size={16} />
              </button>
              <span className="eyebrow">{active.tag} · {active.date}</span>
              <h3 className="mt-2 text-2xl font-semibold text-ink">
                {lang === "uz" ? active.title : active.titleEn}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {lang === "uz" ? active.content : active.contentEn}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
