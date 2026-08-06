export type ProjectCategory = "React" | "UI" | "Fullstack";

export interface CaseStudy {
  problem: string;
  solution: string;
  result: string;
}

export interface Project {
  title: string;
  description: string;
  descriptionEn: string;
  category: ProjectCategory;
  tags: string[];
  github: string;
  live?: string;
  gradient: string;
  caseStudy: { uz: CaseStudy; en: CaseStudy };
}

export const projects: Project[] = [
  {
    title: "ShopVibe",
    description: "Swiper.js va Tailwind bilan qurilgan zamonaviy e-commerce SPA.",
    descriptionEn: "A modern e-commerce SPA built with Swiper.js and Tailwind.",
    category: "React",
    tags: ["React", "Tailwind", "Swiper.js"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-violet/30 to-cyan/10",
    caseStudy: {
      uz: {
        problem: "Mijoz mobil qurilmalarda sekin ishlaydigan eski katalog saytiga ega edi, konversiya past edi.",
        solution: "Komponent asosida qayta quruldi, tasvirlar optimallashtirildi, Swiper.js orqali silliq mahsulot slayderi qo'shildi.",
        result: "Sahifa yuklanish tezligi sezilarli oshdi, mobil foydalanuvchilar sonining ulushi ortdi.",
      },
      en: {
        problem: "The client had a slow legacy catalog site on mobile with low conversion.",
        solution: "Rebuilt with a component architecture, optimized images, and added a smooth product slider with Swiper.js.",
        result: "Page load speed improved significantly, and the share of mobile visitors increased.",
      },
    },
  },
  {
    title: "SmartHub",
    description: "REST Countries API asosida qurilgan davlatlarni o'rganish platformasi.",
    descriptionEn: "A country explorer platform built on the REST Countries API.",
    category: "React",
    tags: ["React", "Axios", "REST API"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-cyan/25 to-amber/10",
    caseStudy: {
      uz: {
        problem: "Xalqaro ma'lumotlarni qidirish va filtrlash uchun tez, tushunarli interfeys kerak edi.",
        solution: "Axios orqali REST Countries API bilan integratsiya, real vaqtda qidiruv va mintaqa bo'yicha filtr qo'shildi.",
        result: "Foydalanuvchilar soniyalar ichida 250+ davlat orasidan kerakligini topa oladi.",
      },
      en: {
        problem: "Needed a fast, intuitive interface for searching and filtering international data.",
        solution: "Integrated the REST Countries API via Axios, added real-time search and region filters.",
        result: "Users can now find what they need among 250+ countries within seconds.",
      },
    },
  },
  {
    title: "Gentlemen's Cut",
    description: "Sartaroshxona uchun premium landing page dizayni va animatsiyalar.",
    descriptionEn: "A premium landing page and animations for a barbershop.",
    category: "UI",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-amber/20 to-violet/15",
    caseStudy: {
      uz: {
        problem: "Yangi ochilgan sartaroshxonaning onlayn ko'rinishi yo'q edi, mijozlar band qila olmasdi.",
        solution: "Premium, erkak auditoriyasiga mos dizayn va animatsiyalar bilan bir sahifali sayt yaratildi.",
        result: "Ochilishning birinchi haftasidayoq onlayn so'rovlar soni oshdi.",
      },
      en: {
        problem: "A newly opened barbershop had no online presence and clients couldn't book easily.",
        solution: "Designed a premium single-page site with animations tailored to a male audience.",
        result: "Online inquiries increased within the very first week of launch.",
      },
    },
  },
  {
    title: "KaloTracker",
    description: "Kunlik kaloriya va ovqatlanishni kuzatish uchun vanilla JS ilova.",
    descriptionEn: "A vanilla JS app for tracking daily calories and meals.",
    category: "UI",
    tags: ["JavaScript", "LocalStorage", "CSS"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-violet/25 to-amber/10",
    caseStudy: {
      uz: {
        problem: "Freymvorksiz, faqat vanilla JS bilan holatni boshqarish murakkab edi.",
        solution: "LocalStorage asosida oddiy, ammo barqaror holat boshqaruvi va toza UI qurildi.",
        result: "Kod bazasi kichik va tez, hech qanday tashqi kutubxonasiz to'liq ishlaydi.",
      },
      en: {
        problem: "Managing state without a framework, using only vanilla JS, was challenging.",
        solution: "Built simple but reliable state management on LocalStorage with a clean UI.",
        result: "A small, fast codebase that works fully without any external library.",
      },
    },
  },
  {
    title: "Telegram Video Downloader",
    description: "yt-dlp asosida video yuklab olish uchun Node.js Telegram bot.",
    descriptionEn: "A Node.js Telegram bot for downloading videos, built on yt-dlp.",
    category: "Fullstack",
    tags: ["Node.js", "Telegram API", "yt-dlp"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-cyan/20 to-violet/15",
    caseStudy: {
      uz: {
        problem: "Foydalanuvchilar turli platformalardan video yuklash uchun bir nechta ilova ishlatishga majbur edi.",
        solution: "yt-dlp asosida Node.js Telegram bot yaratildi — link yuborilsa, video avtomatik yuklab beriladi.",
        result: "Bitta bot orqali bir nechta platformadan video yuklash imkoniyati yaratildi.",
      },
      en: {
        problem: "Users had to juggle multiple apps to download videos from different platforms.",
        solution: "Built a Node.js Telegram bot on top of yt-dlp — send a link, get the video automatically.",
        result: "A single bot now handles video downloads from multiple platforms.",
      },
    },
  },
  {
    title: "AI Chat Widget",
    description: "Anthropic API bilan integratsiya qilingan suhbat komponenti.",
    descriptionEn: "A chat component integrated with the Anthropic API.",
    category: "Fullstack",
    tags: ["React", "Anthropic API", "TypeScript"],
    github: "https://github.com/murodovaxror9-coder",
    gradient: "from-amber/15 to-cyan/15",
    caseStudy: {
      uz: {
        problem: "Saytga AI yordamchisini xavfsiz (API kalitni frontendda ochmasdan) qo'shish kerak edi.",
        solution: "Backend proksi orqali Anthropic API bilan integratsiya, TypeScript bilan xavfsiz komponent qurildi.",
        result: "Foydalanuvchilar saytdan chiqmasdan tezkor AI yordam ola oladi.",
      },
      en: {
        problem: "Needed to add an AI assistant to the site securely, without exposing the API key on the frontend.",
        solution: "Integrated the Anthropic API through a backend proxy, built a type-safe component with TypeScript.",
        result: "Users can now get instant AI help without leaving the site.",
      },
    },
  },
];
