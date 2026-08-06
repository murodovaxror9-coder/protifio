# Axror Murodov — Portfolio

Frontend Developer & AI Builder uchun premium, dark/light mode portfolio sayti.

## Texnologiyalar
- React 19 + TypeScript + Vite
- Tailwind CSS 3 (CSS-variable asosidagi dark/light tema)
- Framer Motion (animatsiyalar, parallax, 3D tilt)
- Zustand (+ persist) — til, tema, forma holati
- Recharts (statistika grafiklari)
- Lucide React (ikonalar)
- GitHub REST API (jonli repo va statistika)
- Vercel Serverless Function (`api/send-telegram.js`) — contact forma → Telegram bot

## PRO Feature'lar
1. **Case Study** — har bir loyiha uchun Muammo / Yechim / Natija modal oyna
2. **SEO + Social Preview** — meta teglar, Open Graph, Twitter Card, `og-image.png`
3. **Performance** — `React.lazy` bilan below-the-fold bo'limlar, Vite `manualChunks` orqali vendor splitting
4. **Multi-language** — UZ 🇺🇿 / EN 🇬🇧, Navbar'dagi tugma orqali, tanlov saqlanadi
5. **Real Contact System** — forma to'g'ridan-to'g'ri Telegram botga xabar yuboradi
6. **Strong CTA** — "Hire Me Now 🚀" va "Let's build your project"
7. **Interactive UI** — custom cursor, scroll progress bar, parallax hero, 3D hover tilt (project kartalar)
8. **Project Filter System** — kategoriya (React / UI / Fullstack) + qidiruv
9. **GitHub Integration** — GitHub API orqali repolar, yulduzlar, til
10. **Real Stats** — GitHub public repos/followers + oylik loyihalar grafigi
11. **Theme Switch** — Dark/Light, standart Dark
12. **Code Quality** — bo'lim/hook/i18n/data alohida papkalarda, qayta ishlatiladigan komponentlar

## Ishga tushirish
```bash
npm install
npm run dev
```
`/api/send-telegram` faqat Vercel'da (yoki `vercel dev` bilan lokalda) ishlaydi.

## Build
```bash
npm run build
npm run preview
```

## Tuzilma
```
api/
  send-telegram.js      # Contact formani Telegram botga yuboruvchi serverless funksiya
public/
  og-image.png            # Social preview rasmi (1200x630)
src/
  components/              # Bo'limlar (Hero, About, Skills, Services, Projects, ...)
  components/ui/            # Qayta ishlatiladigan kichik komponentlar (Modal, Cursor, ScrollProgress...)
  data/                      # Statik kontent (uz/en variantlari bilan)
  hooks/                     # useGithub, useTilt
  i18n/                      # Tarjimalar va useT() hook
  store/                     # Zustand store'lar (UI holat + persist qilingan preferences)
```

## O'zgartirish kerak bo'lgan joylar
- `src/data/*.ts` — matn, loyihalar, xizmatlar, narxlar, case study'lar (uz/en)
- `src/i18n/translations.ts` — interfeys matnlari (uz/en)
- `tailwind.config.js` — rang palitrasi (`violet`, `cyan`, `amber`)
- `src/index.css` — dark/light tema o'zgaruvchilari (`:root` va `html.light`)
- `index.html` — SEO meta, Open Graph, Twitter Card
- `src/components/GithubProjects.tsx` va `src/components/Stats.tsx` — `GITHUB_USERNAME` o'zgaruvchisi

## Telegram bot sozlash (contact forma)
Bot tokeni **hech qachon** frontend kodida saqlanmaydi — u faqat serverda
(`api/send-telegram.js` ichida `process.env` orqali) ishlatiladi.

1. Loyihani Vercel'ga ulang (`vercel.com/new` → GitHub repo tanlang).
2. Vercel loyihasi → **Settings → Environment Variables** bo'limiga qo'shing:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Botni Telegram'da toping va **/start** bosing (bot foydalanuvchiga birinchi yozolmaydi).
4. Qayta deploy qiling.

Lokalda sinash: `.env` yarating (`.env.example`dan nusxa) va `npx vercel dev` ishlating.

> ⚠️ Ushbu suhbatda ulashilgan bot tokeni maxfiy emas deb hisoblanishi kerak —
> ishlab chiqarishga chiqishdan oldin @BotFather'da `/revoke` orqali yangi token oling.

## Deploy
Vercel'ga tayyor — repo'ni ulang, `api/` papkasi avtomatik serverless function
sifatida deploy bo'ladi. Build buyrug'i (`npm run build`) `tsc`ni `node` orqali
chaqiradi — Windows/Vercel'da uchraydigan "Permission denied" muammosining oldini
oladi.
