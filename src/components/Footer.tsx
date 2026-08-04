import { Mail, Send } from "lucide-react";
import { GithubIcon } from "./ui/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
        <div className="flex items-center gap-2 font-display text-sm text-ink">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan text-xs font-bold text-base">
            AM
          </span>
          murodov.dev
        </div>
        <p className="text-xs text-muted">© {new Date().getFullYear()} Axror Murodov. Barcha huquqlar himoyalangan.</p>
        <div className="flex items-center gap-3">
          <a href="https://github.com/murodovaxror9-coder" target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
            <GithubIcon size={18} />
          </a>
          <a href="mailto:axror6495@gmail.com" className="text-muted hover:text-ink">
            <Mail size={18} />
          </a>
          <a href="https://t.me/Murodov_777" target="_blank" rel="noreferrer" className="text-muted hover:text-ink">
            <Send size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
