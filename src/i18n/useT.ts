import { t } from "./translations";
import { usePreferencesStore } from "../store/useStore";

export function useT() {
  const lang = usePreferencesStore((s) => s.lang);
  return { t: t[lang], lang };
}
