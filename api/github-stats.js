// Vercel Serverless Function — GET /api/github-stats
// GitHub API'ga to'g'ridan-to'g'ri brauzerdan emas, shu yerdan so'rov yuboriladi
// va natija keshlanadi — shuning uchun barcha tashrif buyuruvchilar uchun
// GitHub'ning soatiga-60-so'rov limitiga urilib qolmaydi.

const USERNAME = "murodovaxror9-coder";

export default async function handler(req, res) {
  // CDN darajasida 10 daqiqa kesh, undan keyin 1 soat "eskirgan holda xizmat ko'rsatish"
  res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=3600");

  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "murodov-portfolio",
    ...(process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {}),
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=12`, { headers }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error(`GitHub API: user=${userRes.status} repos=${reposRes.status}`);
    }

    const user = await userRes.json();
    const repos = (await reposRes.json()).filter((r) => !r.fork);

    return res.status(200).json({
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
    });
  } catch (err) {
    console.error("github-stats error:", err);
    return res.status(502).json({ error: "GitHub ma'lumotlarini yuklab bo'lmadi" });
  }
}
