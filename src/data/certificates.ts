export interface Certificate {
  id: string;
  title: string;
  titleEn: string;
  issuer: string;
  date: string;
  description: string;
  descriptionEn: string;
  /** Real certificate/verification link — replace with your own when ready */
  href?: string;
}

export const certificates: Certificate[] = [
  {
    id: "mars-it-frontend",
    title: "Frontend Development kursi",
    titleEn: "Frontend Development course",
    issuer: "Mars IT School",
    date: "2025",
    description:
      "HTML, CSS, JavaScript va React asosida zamonaviy veb-interfeyslar qurish bo'yicha to'liq kurs. Amaliy loyihalar orqali production darajasidagi kod yozishni o'rgandim.",
    descriptionEn:
      "A full course on building modern web interfaces with HTML, CSS, JavaScript and React. Learned to write production-level code through hands-on projects.",
    href: "https://marsitschool.uz",
  },
];
