export interface Skill {
  name: string;
  level: number; // 0-100
  group: "Core" | "Framework" | "Styling" | "Tooling";
}

export const skills: Skill[] = [
  { name: "HTML5", level: 95, group: "Core" },
  { name: "CSS3", level: 92, group: "Core" },
  { name: "JavaScript", level: 90, group: "Core" },
  { name: "TypeScript", level: 78, group: "Core" },
  { name: "React.js", level: 90, group: "Framework" },
  { name: "Next.js", level: 70, group: "Framework" },
  { name: "React Router", level: 88, group: "Framework" },
  { name: "Zustand", level: 72, group: "Framework" },
  { name: "Tailwind CSS", level: 93, group: "Styling" },
  { name: "Framer Motion", level: 75, group: "Styling" },
  { name: "REST API / Axios", level: 88, group: "Tooling" },
  { name: "Git & GitHub", level: 85, group: "Tooling" },
];
