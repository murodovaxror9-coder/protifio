import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Ko'nikmalar" title="Texnologiyalar bilan ishlash darajam">
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.name} delay={(i % 6) * 0.05}>
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-ink">{s.name}</span>
                <span className="font-mono text-xs text-muted">{s.level}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
