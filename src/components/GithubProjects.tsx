import { Star, Loader2, TriangleAlert } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";
import Reveal from "./ui/Reveal";
import Section from "./ui/Section";
import { useGithub } from "../hooks/useGithub";
import { useT } from "../i18n/useT";

const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Python: "#3572A5",
};

export default function GithubProjects() {
  const { t } = useT();
  const { user, repos, loading, error } = useGithub();

  return (
    <Section id="github" eyebrow={t.github.eyebrow} title={t.github.title} description={t.github.description}>
      {user && (
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="card px-5 py-3">
            <p className="text-xl font-semibold text-ink">{user.public_repos}</p>
            <p className="text-xs text-muted">{t.github.repos}</p>
          </div>
          <div className="card px-5 py-3">
            <p className="text-xl font-semibold text-ink">{user.followers}</p>
            <p className="text-xs text-muted">{t.github.followers}</p>
          </div>
        </div>
      )}

      {loading && (
        <div className="flex items-center gap-2 py-10 text-sm text-muted">
          <Loader2 size={16} className="animate-spin" /> {t.github.loading}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 py-10 text-sm text-muted">
          <TriangleAlert size={16} className="text-amber" /> {t.github.error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo, i) => (
            <Reveal key={repo.id} delay={(i % 3) * 0.06}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="card flex h-full flex-col p-5 transition-colors hover:border-violet/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 text-ink">
                    <GithubIcon size={15} />
                    <span className="font-medium">{repo.name}</span>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <Star size={13} /> {repo.stargazers_count}
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
                  {repo.description || "—"}
                </p>
                {repo.language && (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: LANGUAGE_COLORS[repo.language] ?? "#8B90A3" }}
                    />
                    {repo.language}
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
