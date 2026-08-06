import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "../i18n/translations";

interface UIState {
  activeTestimonial: number;
  setActiveTestimonial: (i: number) => void;
  nextTestimonial: (max: number) => void;
  contactSubmitted: boolean;
  setContactSubmitted: (v: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeTestimonial: 0,
  setActiveTestimonial: (i) => set({ activeTestimonial: i }),
  nextTestimonial: (max) =>
    set((state) => ({ activeTestimonial: (state.activeTestimonial + 1) % max })),
  contactSubmitted: false,
  setContactSubmitted: (v) => set({ contactSubmitted: v }),
}));

interface PreferencesState {
  lang: Lang;
  toggleLang: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      lang: "uz",
      toggleLang: () => set((state) => ({ lang: state.lang === "uz" ? "en" : "uz" })),
      theme: "dark",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    { name: "portfolio-preferences" }
  )
);
