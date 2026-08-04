// Vercel Serverless Function — POST /api/send-telegram
// Bot tokenni FRONTENDGA hech qachon chiqarmaydi, faqat serverda ishlatadi.
// Token va chat_id Vercel loyihasi sozlamalarida "Environment Variables"
// bo'limida saqlanadi: TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID.

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body ?? {};

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: "Majburiy maydonlar to'ldirilmagan" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan");
    return res.status(500).json({ ok: false, error: "Server sozlanmagan" });
  }

  const text = [
    "📩 *Yangi xabar — portfolio sayti*",
    "",
    `*Ism:* ${escapeMd(name)}`,
    `*Email:* ${escapeMd(email)}`,
    phone ? `*Raqam:* ${escapeMd(phone)}` : null,
    `*Mavzu:* ${escapeMd(subject)}`,
    "",
    `*Xabar:*\n${escapeMd(message)}`,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "MarkdownV2",
      }),
    });

    const data = await tgRes.json();

    if (!data.ok) {
      console.error("Telegram API xatosi:", data);
      return res.status(502).json({ ok: false, error: "Telegramga yuborilmadi" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Yuborishda xato:", err);
    return res.status(500).json({ ok: false, error: "Kutilmagan xato" });
  }
}

// Telegram MarkdownV2 uchun maxsus belgilarni escape qiladi
function escapeMd(str) {
  return String(str).replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}
