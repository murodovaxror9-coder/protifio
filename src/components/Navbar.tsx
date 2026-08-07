import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useT } from "../i18n/useT";
import { usePreferencesStore } from "../store/useStore";

export default function Navbar() {
  const { t } = useT();
  const lang = usePreferencesStore((s) => s.lang);
  const toggleLang = usePreferencesStore((s) => s.toggleLang);
  const theme = usePreferencesStore((s) => s.theme);
  const toggleTheme = usePreferencesStore((s) => s.toggleTheme);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#services", label: t.nav.services },
    { href: "#projects", label: t.nav.projects },
    { href: "#github", label: t.nav.github },
    { href: "#certificates", label: t.nav.certificates },
    { href: "#blog", label: t.nav.blog },
    { href: "#stats", label: t.nav.stats },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-cyan text-sm text-base font-bold">
            AM
          </span>
          <span className="hidden sm:inline">Axror Murodov</span>
        </a>

        <ul className="hidden lg:flex items-center gap-6 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted hover:text-ink"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-mono text-muted hover:text-ink"
          >
            <Languages size={14} />
            {lang.toUpperCase()}
          </button>
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-xs">
            {t.nav.hire}
          </a>
        </div>

        <button className="md:hidden text-ink" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-line bg-base"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm text-muted hover:bg-surface hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <div className="mt-2 flex items-center gap-2 px-3">
                <button
                  onClick={toggleTheme}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted"
                >
                  {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                </button>
                <button
                  onClick={toggleLang}
                  className="flex h-9 items-center gap-1.5 rounded-full border border-line px-3 text-xs font-mono text-muted"
                >
                  <Languages size={14} /> {lang.toUpperCase()}
                </button>
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 justify-center"
              >
                {t.nav.hire}
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
