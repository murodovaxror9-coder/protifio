/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surface2: "rgb(var(--color-surface2) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        violet: {
          DEFAULT: "#7C6FFF",
          soft: "#a49bff",
        },
        cyan: {
          DEFAULT: "#22E6C5",
          soft: "#7CF3DE",
        },
        amber: {
          DEFAULT: "#FFB454",
        },
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, rgb(var(--color-base)) 85%), linear-gradient(90deg, rgba(124,111,255,.10) 1px, transparent 1px), linear-gradient(rgba(124,111,255,.10) 1px, transparent 1px)",
        "hero-mesh":
          "radial-gradient(circle at 15% 20%, rgba(124,111,255,.35), transparent 40%), radial-gradient(circle at 85% 15%, rgba(34,230,197,.25), transparent 40%), radial-gradient(circle at 50% 90%, rgba(255,180,84,.12), transparent 45%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124,111,255,.25)",
        "glow-cyan": "0 0 40px rgba(34,230,197,.2)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-40px) scale(1.08)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blob: "blob 14s ease-in-out infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
