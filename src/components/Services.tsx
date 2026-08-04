import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { services } from "../data/services";
import { Bot, Briefcase, Layout, Check, ArrowUpRight } from "lucide-react";
import { FigmaIcon } from "./ui/BrandIcons";

const icons = { layout: Layout, briefcase: Briefcase, figma: FigmaIcon, bot: Bot };

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Xizmatlar"
      title="Loyihangiz uchun qanday yordam bera olaman"
      description="Byudjet va vazifangizga qarab mos xizmatni tanlang, tafsilotlarni birga muhokama qilamiz."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card group relative flex h-full flex-col p-6 transition-colors hover:border-violet/50">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
                    <Icon size={20} />
                  </div>
                  <span className="font-mono text-sm text-amber">{s.price}</span>
                </div>
                <h3 className="text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted">
                      <Check size={14} className="text-cyan" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-cyan transition-transform group-hover:translate-x-1"
                >
                  Buyurtma berish <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
