import { useLanguage } from "@/i18n/LanguageContext";
import { Languages } from "lucide-react";

export const LanguageToggle = ({ scrolled }: { scrolled: boolean }) => {
  const { lang, toggle, t } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={t("lang_toggle_aria")}
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
        scrolled
          ? "border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
          : "border-white/60 text-white hover:bg-white hover:text-primary"
      }`}
    >
      <Languages className="h-3.5 w-3.5" />
      {lang === "en" ? "ES" : "EN"}
    </button>
  );
};
