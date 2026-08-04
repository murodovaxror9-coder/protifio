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

const PIE_COLORS = ["#7C6FFF", "#22E6C5", "#FFB454", "#4B4F63"];

export default function Stats() {
  return (
    <Section id="stats" eyebrow="Statistika" title="Raqamlarda ish faoliyatim">
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {overviewStats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
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
            <h3 className="mb-4 text-sm font-medium text-muted">Oylik topshirilgan loyihalar</h3>
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
                    background: "#12141C",
                    border: "1px solid #232636",
                    borderRadius: 12,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#F5F6FA" }}
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
            <h3 className="mb-4 text-sm font-medium text-muted">Texnologiya taqsimoti</h3>
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
                    background: "#12141C",
                    border: "1px solid #232636",
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
