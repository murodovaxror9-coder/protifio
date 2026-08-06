import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { monthlyProjects, skillDistribution, overviewStats } from "../data/stats";
import { useGithub } from "../hooks/useGithub";
import { useT } from "../i18n/useT";

const PIE_COLORS = ["#7C6FFF", "#22E6C5", "#FFB454", "#4B4F63"];
const GITHUB_USERNAME = "murodovaxror9-coder";

export default function Stats() {
  const { t } = useT();
  const { user } = useGithub(GITHUB_USERNAME);

  const cards = [
    ...overviewStats,
    ...(user
      ? [
          { label: t.stats.repos, value: String(user.public_repos) },
          { label: t.stats.followers, value: String(user.followers) },
        ]
      : []),
  ];

  return (
    <Section id="stats" eyebrow={t.stats.eyebrow} title={t.stats.title}>
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
        {cards.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06}>
            <div className="card p-5 text-center">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="card p-5">
            <h3 className="mb-4 text-sm font-medium text-muted">{t.stats.monthlyChart}</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={monthlyProjects}>
                <defs>
                  <linearGradient id="colorProj" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22E6C5" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#22E6C5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#8B90A3" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#8B90A3" fontSize={12} tickLine={false} axisLine={false} width={24} />
                <Tooltip
                  contentStyle={{
                    background: "rgb(var(--color-surface))",
                    border: "1px solid rgb(var(--color-line))",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "rgb(var(--color-ink))" }}
                />
                <Area
                  type="monotone"
                  dataKey="projects"
                  stroke="#22E6C5"
                  strokeWidth={2}
                  fill="url(#colorProj)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card flex flex-col p-5">
            <h3 className="mb-4 text-sm font-medium text-muted">{t.stats.techChart}</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={skillDistribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                >
                  {skillDistribution.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "rgb(var(--color-surface))",
                    border: "1px solid rgb(var(--color-line))",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              {skillDistribution.map((s, i) => (
                <span key={s.name} className="flex items-center gap-1.5 text-xs text-muted">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: PIE_COLORS[i % PIE_COLORS.length] }}
                  />
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
