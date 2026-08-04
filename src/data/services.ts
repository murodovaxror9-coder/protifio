export interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: "layout" | "briefcase" | "figma" | "bot";
}

export const services: Service[] = [
  {
    title: "Landing Page",
    price: "$50 – $150",
    description: "Konversiyaga yo'naltirilgan, tez yuklanadigan bir sahifali sayt.",
    features: ["Responsive dizayn", "SEO asoslari", "3 kungacha yetkazib berish"],
    icon: "layout",
  },
  {
    title: "Portfolio Sayt",
    price: "$80 – $200",
    description: "Shaxsiy brend va loyihalaringizni professional ko'rsatadigan sayt.",
    features: ["Animatsiyalar", "Loyihalar galereyasi", "Aloqa formasi"],
    icon: "briefcase",
  },
  {
    title: "UI Dizayn (Figma)",
    price: "$30 – $100",
    description: "Ishlab chiqarishga tayyor, komponentlashtirilgan interfeys dizayni.",
    features: ["Dizayn tizimi", "Mobil va desktop", "Dev-ready fayllar"],
    icon: "figma",
  },
  {
    title: "Telegram Bot + Frontend",
    price: "$50 – $150",
    description: "Bot logikasi va unga bog'langan web interfeys birgalikda.",
    features: ["Node.js bot", "Admin panel", "API integratsiya"],
    icon: "bot",
  },
];
