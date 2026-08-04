# Axror Murodov — Portfolio

Frontend Developer & AI Builder uchun premium, dark-mode portfolio sayti.

## Texnologiyalar
- React 19 + TypeScript + Vite
- Tailwind CSS 3
- Framer Motion (animatsiyalar)
- Zustand (state — testimonial slider, contact form holati)
- Recharts (statistika grafiklari)
- Lucide React (ikonalar)
- Vercel Serverless Function (`api/send-telegram.js`) — contact forma xabarlarini Telegram botga yuboradi

## Ishga tushirish
```bash
npm install
npm run dev
```
`/api/send-telegram` faqat Vercel'da (yoki `vercel dev` bilan lokalda) ishlaydi —
oddiy `npm run dev` bilan faqat frontend ko'rinadi, forma yuborilmaydi.

## Build
```bash
npm run build
npm run preview
```

## Tuzilma
```
api/
  send-telegram.js   # Contact formani Telegram botga yuboruvchi serverless funksiya
src/
  components/         # Barcha bo'limlar (Hero, About, Skills, Services, ...)
  components/ui/       # Qayta ishlatiladigan kichik komponentlar
  data/                 # Statik kontent (skills, services, projects, testimonials, ...)
  store/                # Zustand store
```

## O'zgartirish kerak bo'lgan joylar
- `src/data/*.ts` — matn, loyihalar, xizmatlar, narxlar
- `tailwind.config.js` — rang palitrasi (`violet`, `cyan`, `amber`)

## Telegram bot sozlash (contact forma)
Bot tokeni **hech qachon** frontend kodida saqlanmaydi — u faqat serverda
(`api/send-telegram.js` ichida `process.env` orqali) ishlatiladi, shuning
uchun sayt manbasini ko'rgan hech kim tokenni topa olmaydi.

1. Loyihani Vercel'ga ulang (`vercel.com/new` → GitHub repo tanlang).
2. Vercel loyihasi → **Settings → Environment Variables** bo'limiga qo'shing:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
3. Qayta deploy qiling — forma endi botga xabar yuboradi.

Lokalda sinash uchun: `.env` fayl yarating (`.env.example`dan nusxa oling)
va `npx vercel dev` buyrug'ini ishlating (oddiy `vite dev` `/api` papkasini
ishga tushirmaydi).

> ⚠️ **Muhim:** ushbu suhbatda ulashilgan bot tokeni endi maxfiy emas deb
> hisoblanishi kerak. Ishlab chiqarishga chiqishdan oldin @BotFather'da
> `/revoke` orqali yangi token oling va uni faqat Vercel Environment
> Variables'ga kiriting — hech qachon kodga yoki Git'ga yozmang.

## Deploy
Vercel'ga tayyor — repo'ni ulang, preset avtomatik aniqlanadi (`api/`
papkasi ham serverless function sifatida avtomatik deploy bo'ladi).
Netlify ishlatmoqchi bo'lsangiz, `api/send-telegram.js`ni Netlify
Functions formatiga moslashtirish kerak bo'ladi.
