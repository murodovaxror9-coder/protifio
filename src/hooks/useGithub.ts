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
  fork: boolean;
}

interface GithubData {
  user: GithubUser | null;
  repos: GithubRepo[];
  loading: boolean;
  error: boolean;
}

const cache = new Map<string, GithubData>();

export function useGithub(username: string): GithubData {
  const [data, setData] = useState<GithubData>(
    cache.get(username) ?? { user: null, repos: [], loading: true, error: false }
  );

  useEffect(() => {
    if (cache.has(username)) {
      setData(cache.get(username)!);
      return;
    }

    let cancelled = false;

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github api error");

        const user = (await userRes.json()) as GithubUser;
        const repos = ((await reposRes.json()) as GithubRepo[]).filter((r) => !r.fork);

        const result: GithubData = { user, repos, loading: false, error: false };
        cache.set(username, result);
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
  }, [username]);

  return data;
}
