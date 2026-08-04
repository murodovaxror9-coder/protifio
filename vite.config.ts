import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import type { Plugin } from "vite";
import { datalist } from "framer-motion/client" ;

function telegramDevApi(env: Record<string, string>): Plugin {
  return {
    name: "telegram-send-dev-middleware",
    configureServer(server) {
      server.middlewares.use("/api/send-telegram", (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end("Method not allowed");
          return;
        }

        let raw = "";
        req.on("data", (chunk) => (raw += chunk));
        req.on("end", async () => {
          try {
            const { name, email, phone, subject, message } = JSON.parse(raw || "{}");

            if (!name || !email || !subject || !message) {
              res.statusCode = 400;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: "Majburiy maydonlar to'ldirilmagan" }));
              return;
            }

            const token = env.TELEGRAM_BOT_TOKEN;
            const chatId = env.TELEGRAM_CHAT_ID;

            if (!token || !chatId) {
              console.error("TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID .env da topilmadi");
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: "Server sozlanmagan" }));
              return;
            }

            const escapeMd = (str: string) =>
              String(str).replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");

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

            const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: chatId, text, parse_mode: "MarkdownV2" }),
            });

            const data = await tgRes.json();

            if (!data.ok) {
              console.error("Telegram API xatosi:", data);
              res.statusCode = 502;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ ok: false, error: "Telegramga yuborilmadi" }));
              return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: true }));
          } catch (err) {
            console.error("Dev API xatosi:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, error: "Kutilmagan xato" }));
          }
        });
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), telegramDevApi(env)],
  };
});