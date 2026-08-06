import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { testimonials } from "../data/testimonials";
import { useUIStore } from "../store/useStore";
import { useT } from "../i18n/useT";

export default function Testimonials() {
  const { t, lang } = useT();
  const active = useUIStore((s) => s.activeTestimonial);
  const setActive = useUIStore((s) => s.setActiveTestimonial);
  const next = useUIStore((s) => s.nextTestimonial);

  useEffect(() => {
    const timer = setInterval(() => next(testimonials.length), 5000);
    return () => clearInterval(timer);
  }, [next]);

  const item = testimonials[active];

  return (
    <Section id="testimonials" eyebrow={t.testimonials.eyebrow} title={t.testimonials.title}>
      <Reveal>
        <div className="card relative mx-auto max-w-2xl overflow-hidden p-8 md:p-10">
          <Quote className="absolute -top-2 right-6 text-line" size={64} />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex gap-1 text-amber">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="relative mt-4 text-lg leading-relaxed text-ink">
                {lang === "uz" ? item.text : item.textEn}
              </p>
              <div className="mt-6">
                <p className="font-medium text-ink">{item.name}</p>
                <p className="text-sm text-muted">{lang === "uz" ? item.role : item.roleEn}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-6 bg-cyan" : "w-1.5 bg-line"
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border border-line p-2 text-muted hover:text-ink"
                aria-label="Prev"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => next(testimonials.length)}
                className="rounded-full border border-line p-2 text-muted hover:text-ink"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
