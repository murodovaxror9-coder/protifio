export interface AITool {
  name: string;
  use: string;
  useEn: string;
}

export const aiTools: AITool[] = [
  { name: "Claude", use: "Kod yozish va arxitektura", useEn: "Coding & architecture" },
  { name: "ChatGPT", use: "G'oyalar va matn", useEn: "Ideas & copywriting" },
  { name: "Gemini", use: "Tadqiqot va tahlil", useEn: "Research & analysis" },
  { name: "DeepSeek", use: "Kod optimizatsiyasi", useEn: "Code optimization" },
  { name: "Grok", use: "Tezkor javoblar", useEn: "Quick answers" },
  { name: "GitHub Copilot", use: "Kod tugallash", useEn: "Code completion" },
  { name: "Kimi", use: "Hujjatlar bilan ishlash", useEn: "Working with documents" },
  { name: "Lovable", use: "Tezkor prototiplash", useEn: "Rapid prototyping" },
];
