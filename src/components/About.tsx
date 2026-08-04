import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { Code2, Rocket, Users } from "lucide-react";

const points = [
  {
    icon: Code2,
    title: "Toza kod",
    text: "Component-based arxitektura va qayta ishlatiladigan kod bilan ishlayman.",
  },
  {
    icon: Rocket,
    title: "Tez natija",
    text: "AI vositalaridan unumli foydalanib, loyihalarni qisqa muddatda topshiraman.",
  },
  {
    icon: Users,
    title: "Mijoz bilan aloqa",
    text: "Har bir bosqichda tushunarli va ochiq muloqotni muhim deb bilaman.",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="Men haqimda"
      title="Frontend developer, kim g'oyalarni interfeysga aylantiradi"
    >
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:items-start">
        <Reveal>
          <p className="text-muted leading-relaxed">
            Men Toshkentda yashovchi frontend developerman. React ekotizimi va
            zamonaviy AI vositalari (Claude, ChatGPT, Copilot) yordamida
            mijozlar uchun tez, ishonchli va chiroyli interfeyslar yarataman.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Oddiy landing page'dan tortib to murakkab dashboard'largacha —
            har bir loyihaga puxta o'ylangan dizayn va toza kod bilan
            yondashaman. Maqsadim — mijozning biznesiga real qiymat
            qo'shadigan mahsulot yaratish.
          </p>
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
