export interface Service {
  title: string;
  titleEn: string;
  price: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  icon: "layout" | "briefcase" | "figma" | "bot";
}

export const services: Service[] = [
  {
    title: "Landing Page",
    titleEn: "Landing Page",
    price: "$50 – $150",
    description: "Konversiyaga yo'naltirilgan, tez yuklanadigan bir sahifali sayt.",
    descriptionEn: "A conversion-focused, fast-loading single-page site.",
    features: ["Responsive dizayn", "SEO asoslari", "3 kungacha yetkazib berish"],
    featuresEn: ["Responsive design", "SEO fundamentals", "Delivery within 3 days"],
    icon: "layout",
  },
  {
    title: "Portfolio Sayt",
    titleEn: "Portfolio Website",
    price: "$80 – $200",
    description: "Shaxsiy brend va loyihalaringizni professional ko'rsatadigan sayt.",
    descriptionEn: "A site that showcases your personal brand and projects professionally.",
    features: ["Animatsiyalar", "Loyihalar galereyasi", "Aloqa formasi"],
    featuresEn: ["Animations", "Projects gallery", "Contact form"],
    icon: "briefcase",
  },
  {
    title: "UI Dizayn (Figma)",
    titleEn: "UI Design (Figma)",
    price: "$30 – $100",
    description: "Ishlab chiqarishga tayyor, komponentlashtirilgan interfeys dizayni.",
    descriptionEn: "Production-ready, component-based interface design.",
    features: ["Dizayn tizimi", "Mobil va desktop", "Dev-ready fayllar"],
    featuresEn: ["Design system", "Mobile & desktop", "Dev-ready files"],
    icon: "figma",
  },
  {
    title: "Telegram Bot + Frontend",
    titleEn: "Telegram Bot + Frontend",
    price: "$50 – $150",
    description: "Bot logikasi va unga bog'langan web interfeys birgalikda.",
    descriptionEn: "Bot logic together with a connected web interface.",
    features: ["Node.js bot", "Admin panel", "API integratsiya"],
    featuresEn: ["Node.js bot", "Admin panel", "API integration"],
    icon: "bot",
  },
];
