export interface BlogPost {
  id: string;
  date: string;
  tag: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  content: string;
  contentEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "ai-frontend-workflow",
    date: "2026",
    tag: "AI",
    title: "AI vositalar bilan frontend ishlab chiqishni tezlashtirish",
    titleEn: "Speeding up frontend development with AI tools",
    excerpt:
      "Claude va Copilot kabi vositalarni kundalik ish jarayoniga qanday qo'shib, kod yozish tezligini oshirish mumkin.",
    excerptEn:
      "How I fold tools like Claude and Copilot into my daily workflow to write code faster without losing quality.",
    content:
      "AI vositalari kodni mendan olib qo'ymaydi — ular takrorlanuvchi qismlarni tezlashtiradi. Komponent skeletini yozib, undan keyin dizayn tafsilotlari va edge case'larni o'zim to'ldiraman. Bu yondashuv nafaqat vaqtni tejaydi, balki kodni ko'rib chiqish jarayonini ham osonlashtiradi, chunki har bir qatorni tushunib qabul qilaman.",
    contentEn:
      "AI tools don't replace my judgment — they speed up the repetitive parts. I sketch a component's skeleton, then fill in design details and edge cases myself. This approach saves time and keeps review easy, since I understand and accept every line before it ships.",
  },
  {
    id: "clean-react-structure",
    date: "2026",
    tag: "React",
    title: "Kichik loyihalarda toza React tuzilmasi",
    titleEn: "Keeping a clean React structure on small projects",
    excerpt:
      "Komponent, hook va data qatlamlarini ajratish nafaqat katta loyihalarda foydali — kichik saytlarda ham tejamkorlik beradi.",
    excerptEn:
      "Separating components, hooks, and data isn't only useful for big apps — it pays off on small sites too.",
    content:
      "Har bir loyihada data/, hooks/, components/ui/ papkalarini alohida saqlayman. Bu tuzilma keyinchalik yangi bo'lim qo'shishni yoki mavjudini tahrirlashni ancha osonlashtiradi, chunki qayerga qo'l tekkizish kerakligi darhol ma'lum bo'ladi.",
    contentEn:
      "On every project I keep data/, hooks/, and components/ui/ as separate folders. This structure makes it much easier to add a new section or edit an existing one later, since it's immediately clear where to touch.",
  },
  {
    id: "client-communication",
    date: "2026",
    tag: "Freelance",
    title: "Mijoz bilan ishlashda ishonchni qanday qozonaman",
    titleEn: "How I build trust when working with clients",
    excerpt:
      "Aniq muddat, oraliq demo va tez javob berish — bularning barchasi mijoz ishonchini oshiradi.",
    excerptEn:
      "Clear deadlines, intermediate demos, and fast responses all build client trust.",
    content:
      "Loyiha boshida aniq muddat va bosqichlarni belgilab olaman, so'ng har bir bosqich yakunida qisqa demo yuboraman. Bu mijozga jarayonni ko'rish imkonini beradi va oxirida kutilmagan o'zgarishlar sonini kamaytiradi.",
    contentEn:
      "At the start of a project I agree on a clear timeline and milestones, then send a short demo at the end of each stage. This lets the client see progress along the way and cuts down on surprises at the end.",
  },
];
