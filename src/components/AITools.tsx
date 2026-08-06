import Section from "./ui/Section";
import { aiTools } from "../data/aitools";
import { useT } from "../i18n/useT";

export default function AITools() {
  const { t, lang } = useT();
  const loop = [...aiTools, ...aiTools];
  return (
    <Section
      id="ai-tools"
      eyebrow={t.aitools.eyebrow}
      title={t.aitools.title}
      description={t.aitools.description}
    >
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent" />
        <div className="flex w-max gap-4 animate-marquee">
          {loop.map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="card flex w-52 shrink-0 flex-col gap-1 px-5 py-4">
              <span className="font-mono text-sm text-cyan">{tool.name}</span>
              <span className="text-xs text-muted">{lang === "uz" ? tool.use : tool.useEn}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
