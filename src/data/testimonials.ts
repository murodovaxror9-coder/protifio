export interface Testimonial {
  name: string;
  role: string;
  roleEn: string;
  text: string;
  textEn: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jasur Rahimov",
    role: "Startup Founder",
    roleEn: "Startup Founder",
    text: "Axror juda tez va sifatli ishladi 🔥. Muddatidan oldin topshirdi va kod juda toza edi.",
    textEn: "Axror worked fast and delivered great quality 🔥. He finished ahead of schedule and the code was very clean.",
    rating: 5,
  },
  {
    name: "Malika Yusupova",
    role: "Til markazi rahbari",
    roleEn: "Language center director",
    text: "Design juda chiroyli chiqdi, tavsiya qilaman! Barcha talablarimni tushunib, hatto yaxshilab berdi.",
    textEn: "The design turned out beautiful, highly recommend! He understood all my requirements and even improved on them.",
    rating: 5,
  },
  {
    name: "Sardor Aliyev",
    role: "E-commerce loyihasi",
    roleEn: "E-commerce project",
    text: "Professional developer, yana ishlayman! Muloqot va javob berish tezligi ham a'lo darajada.",
    textEn: "A professional developer — I'll work with him again! Communication and response speed were excellent too.",
    rating: 5,
  },
];
