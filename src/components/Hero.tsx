import { motion } from "framer-motion";
import { ArrowDown, Send, Sparkles } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import TypedRoles from "./TypedRoles";
import { aiTools } from "../data/aitools";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      {/* mesh + grid background */}
      <div className="pointer-events-none absolute inset-0 bg-hero-mesh" />
      <div className="pointer-events-none absolute inset-0 bg-grid-fade [background-size:auto,40px_40px,40px_40px]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet/25 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-cyan/20 blur-3xl animate-blob [animation-delay:4s]" />

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
              Mijozlar bilan ishlashga tayyorman
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl"
            >
              Salom, men <span className="bg-gradient-to-r from-violet to-cyan bg-clip-text text-transparent">Axror Murodov</span>
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
              React va sun'iy intellekt vositalarini birlashtirib, tez, chiroyli va
              natijaga yo'naltirilgan web mahsulotlar quraman. G'oyadan production'gacha
              — barcha bosqichda yoningizdaman.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="btn-primary">
                Hire Me <ArrowDown size={16} className="-rotate-90" />
              </a>
              <a
                href="https://github.com/murodovaxror9-coder"
                target="_blank"
                rel="noreferrer"
                className="btn-ghost"
              >
                <GithubIcon size={16} /> GitHub
              </a>
              <a href="https://t.me/Murodov_777" target="_blank" rel="noreferrer" className="btn-ghost">
                <Send size={16} /> Telegram
              </a>
            </motion.div>
          </div>

          {/* orbiting AI badge */}
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
