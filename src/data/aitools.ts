export interface AITool {
  name: string;
  use: string;
}

export const aiTools: AITool[] = [
  { name: "Claude", use: "Kod yozish va arxitektura" },
  { name: "ChatGPT", use: "G'oyalar va matn" },
  { name: "Gemini", use: "Tadqiqot va tahlil" },
  { name: "DeepSeek", use: "Kod optimizatsiyasi" },
  { name: "Grok", use: "Tezkor javoblar" },
  { name: "GitHub Copilot", use: "Kod tugallash" },
  { name: "Kimi", use: "Hujjatlar bilan ishlash" },
  { name: "Lovable", use: "Tezkor prototiplash" },
];
