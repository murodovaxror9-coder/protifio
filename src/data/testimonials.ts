export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Jasur Rahimov",
    role: "Startup Founder",
    text: "Axror juda tez va sifatli ishladi 🔥. Muddatidan oldin topshirdi va kod juda toza edi.",
    rating: 5,
  },
  {
    name: "Malika Yusupova",
    role: "Til markazi rahbari",
    text: "Design juda chiroyli chiqdi, tavsiya qilaman! Barcha talablarimni tushunib, hatto yaxshilab berdi.",
    rating: 5,
  },
  {
    name: "Sardor Aliyev",
    role: "E-commerce loyihasi",
    text: "Professional developer, yana ishlayman! Muloqot va javob berish tezligi ham a'lo darajada.",
    rating: 5,
  },
];
