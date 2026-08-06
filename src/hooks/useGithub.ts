import { useEffect, useState } from "react";

export interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
}

interface GithubData {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: boolean;
}

let cache: GithubData | null = null;

/**
 * GitHub ma'lumotlarini /api/github-stats (Vercel serverless + kesh) orqali oladi.
 * Brauzerdan to'g'ridan-to'g'ri GitHub API'ga so'rov yubormaydi — shuning uchun
 * ko'p tashrif buyuruvchida ham GitHub'ning soatiga-60-so'rov limitiga urilmaydi.
 */
export function useGithub(): GithubData {
  const [data, setData] = useState<GithubData>(cache ?? { user: null, repos: [], loading: true, error: false });

  useEffect(() => {
    if (cache) {
      setData(cache);
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) throw new Error("github-stats failed");
        const json = await res.json();
        const result: GithubData = { user: json.user, repos: json.repos, loading: false, error: false };
        cache = result;
        if (!cancelled) setData(result);
      } catch {
        const result: GithubData = { user: null, repos: [], loading: false, error: true };
        if (!cancelled) setData(result);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return data;
}
