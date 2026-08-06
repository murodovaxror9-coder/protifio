import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Send, Sparkles, Rocket } from "lucide-react";
import { useRef } from "react";
import TypedRoles from "./TypedRoles";
import { GithubIcon } from "./ui/BrandIcons";
import { aiTools } from "../data/aitools";
import { useT } from "../i18n/useT";

export default function Hero() {
  const { t } = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const yBlob1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yBlob2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:auto,40px_40px,40px_40px]" />
      <motion.div
        style={{ y: yBlob1 }}
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/25 blur-3xl animate-blob"
      />
      <motion.div
        style={{ y: yBlob2 }}
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan/20 blur-3xl animate-blob [animation-delay:4s]"
      />

      <div className="container-x relative">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-4 py-1.5 text-xs text-muted"
            >
              <Sparkles size={14} className="text-amber" />
              {t.hero.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
            >
              {t.hero.greeting}{" "}
              <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">
                Axror Murodov
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 text-xl md:text-2xl text-ink/90"
            >
              <TypedRoles />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 max-w-lg text-muted leading-relaxed"
            >
              {t.hero.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                <Rocket size={16} /> {t.hero.ctaPrimary}
              </a>
              <a href="#projects" className="btn-ghost">
                {t.hero.ctaSecondary} <ArrowDown size={16} className="-rotate-90" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 flex items-center gap-4 text-muted"
            >
              <a
                href="https://github.com/murodovaxror9-coder"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://t.me/Murodov_777"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-ink"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mx-auto flex h-72 w-72 items-center justify-center md:h-80 md:w-80"
          >
            <div className="absolute inset-0 rounded-full border border-line/70" />
            <div className="absolute inset-6 rounded-full border border-line/50" />
            <div className="absolute inset-0 animate-[spin_22s_linear_infinite] [animation-direction:reverse]">
              {aiTools.slice(0, 6).map((tool, i) => {
                const angle = (i / 6) * 2 * Math.PI;
                const r = 140;
                const x = Math.cos(angle) * r;
                const y = Math.sin(angle) * r;
                return (
                  <span
                    key={tool.name}
                    style={{ transform: `translate(${x}px, ${y}px)` }}
                    className="absolute left-1/2 top-1/2 -ml-[38px] -mt-[13px] w-[76px] rounded-full border border-line bg-surface/90 px-2.5 py-1.5 text-center text-[10px] font-mono text-muted"
                  >
                    {tool.name}
                  </span>
                );
              })}
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet to-cyan shadow-glow">
              <span className="font-display text-4xl font-bold text-base">AM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
