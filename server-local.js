// Lightweight local API server to handle /api/send-telegram without extra deps
// - Loads .env (simple parser) if present
// - Listens on port 5174 and accepts POST /api/send-telegram
// - Uses global fetch (Node 18+) to call Telegram API

import fs from "fs";
import http from "http";

const PORT = process.env.PORT || 5174;

// Simple .env loader (no dependency)
try {
  const envPath = new URL('./.env', import.meta.url);
  const raw = fs.readFileSync(envPath, 'utf8');
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    let val = trimmed.slice(eq + 1).trim();
    // remove surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!process.env[key]) process.env[key] = val;
  });
} catch (e) {
  // no .env — ignore
}

function escapeMd(str) {
  return String(str).replace(/[_*\[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (url.pathname === '/api/send-telegram') {
    if (req.method !== 'POST') {
      res.writeHead(405, { 'Allow': 'POST', 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
      return;
    }

    // collect body
    let body = '';
    for await (const chunk of req) body += chunk;
    try {
      let json;
      try {
        json = JSON.parse(body || '{}');
      } catch (parseErr) {
        console.error('Invalid JSON body received:', body);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: "Noto'g'ri JSON body" }));
        return;
      }
      const { name, email, phone, subject, message } = json ?? {};
      if (!name || !email || !subject || !message) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: "Majburiy maydonlar to'ldirilmagan" }));
        return;
      }

      const token = process.env.TELEGRAM_BOT_TOKEN;
      const chatId = process.env.TELEGRAM_CHAT_ID;
      if (!token || !chatId) {
        console.error('TELEGRAM_BOT_TOKEN yoki TELEGRAM_CHAT_ID sozlanmagan');
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Server sozlanmagan' }));
        return;
      }

      const text = [
        '📩 *Yangi xabar — portfolio sayti*',
        '',
        `*Ism:* ${escapeMd(name)}`,
        `*Email:* ${escapeMd(email)}`,
        phone ? `*Raqam:* ${escapeMd(phone)}` : null,
        `*Mavzu:* ${escapeMd(subject)}`,
        '',
        `*Xabar:*\n${escapeMd(message)}`,
      ].filter(Boolean).join('\n');

      const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'MarkdownV2' }),
      });

      const data = await tgRes.json();
      if (!data.ok) {
        console.error('Telegram API xatosi:', data);
        res.writeHead(502, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: 'Telegramga yuborilmadi' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: true }));
    } catch (err) {
      console.error('Yuborishda xato:', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Kutilmagan xato' }));
    }

    return;
  }

  // Handle GET /api/github-stats
  if (url.pathname === '/api/github-stats') {
    if (req.method !== 'GET') {
      res.writeHead(405, { 'Allow': 'GET', 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'Method not allowed' }));
      return;
    }

    // prepare headers
    const headers = {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'murodov-portfolio',
      ...(process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}),
    };

    try {
      // fetch user and repos
      const USERNAME = 'murodovaxror9-coder';
      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
        fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`, { headers }),
      ]);

      if (!userRes.ok || !reposRes.ok) {
        throw new Error(`GitHub API: user=${userRes.status} repos=${reposRes.status}`);
      }

      const user = await userRes.json();
      const repos = (await reposRes.json()).filter((r) => !r.fork);

      res.setHeader('Cache-Control', 'public, s-maxage=600, stale-while-revalidate=3600');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        user: {
          public_repos: user.public_repos,
          followers: user.followers,
          following: user.following,
          created_at: user.created_at,
        },
        repos: repos.map((r) => ({
          id: r.id,
          name: r.name,
          html_url: r.html_url,
          description: r.description,
          stargazers_count: r.stargazers_count,
          language: r.language,
        })),
      }));
    } catch (err) {
      console.error('github-stats error:', err);
      res.writeHead(502, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'GitHub ma\'lumotlarini yuklab bo\'lmadi' }));
    }

    return;
  }

  // default 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ ok: false, error: 'Not found' }));
});

server.listen(PORT, () => {
  console.log(`Local API server listening on http://localhost:${PORT}`);
  console.log('Handles POST /api/send-telegram and GET /api/github-stats');
});