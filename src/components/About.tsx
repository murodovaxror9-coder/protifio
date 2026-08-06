import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { Code2, Rocket, Users } from "lucide-react";
import { useT } from "../i18n/useT";

export default function About() {
  const { t, lang } = useT();

  const points = [
    {
      icon: Code2,
      title: lang === "uz" ? "Toza kod" : "Clean code",
      text:
        lang === "uz"
          ? "Component-based arxitektura va qayta ishlatiladigan kod bilan ishlayman."
          : "I work with a component-based architecture and reusable code.",
    },
    {
      icon: Rocket,
      title: lang === "uz" ? "Tez natija" : "Fast results",
      text:
        lang === "uz"
          ? "AI vositalaridan unumli foydalanib, loyihalarni qisqa muddatda topshiraman."
          : "By using AI tools efficiently, I deliver projects in a short timeframe.",
    },
    {
      icon: Users,
      title: lang === "uz" ? "Mijoz bilan aloqa" : "Client communication",
      text:
        lang === "uz"
          ? "Har bir bosqichda tushunarli va ochiq muloqotni muhim deb bilaman."
          : "I value clear, open communication at every stage of the project.",
    },
  ];

  return (
    <Section id="about" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
        <Reveal>
          <p className="text-muted leading-relaxed">{t.about.p1}</p>
          <p className="mt-4 text-muted leading-relaxed">{t.about.p2}</p>
        </Reveal>

        <div className="grid gap-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-cyan/20 text-cyan">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-ink">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
