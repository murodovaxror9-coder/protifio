import { create } from "zustand";

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
