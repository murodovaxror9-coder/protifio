export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live?: string;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: "ShopVibe",
    description: "Swiper.js va Tailwind bilan qurilgan zamonaviy e-commerce SPA.",
    tags: ["React", "Tailwind", "Swiper.js"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-violet/30 to-cyan/10",
  },
  {
    title: "SmartHub",
    description: "REST Countries API asosida qurilgan davlatlarni o'rganish platformasi.",
    tags: ["React", "Axios", "REST API"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-cyan/25 to-amber/10",
  },
  {
    title: "Gentlemen's Cut",
    description: "Sartaroshxona uchun premium landing page dizayni va animatsiyalar.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-amber/20 to-violet/15",
  },
  {
    title: "KaloTracker",
    description: "Kunlik kaloriya va ovqatlanishni kuzatish uchun vanilla JS ilova.",
    tags: ["JavaScript", "LocalStorage", "CSS"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-violet/25 to-amber/10",
  },
  {
    title: "Telegram Video Downloader",
    description: "yt-dlp asosida video yuklab olish uchun Node.js Telegram bot.",
    tags: ["Node.js", "Telegram API", "yt-dlp"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-cyan/20 to-violet/15",
  },
  {
    title: "AI Chat Widget",
    description: "Anthropic API bilan integratsiya qilingan suhbat komponenti.",
    tags: ["React", "Anthropic API", "TypeScript"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-amber/15 to-cyan/15",
  },
];
