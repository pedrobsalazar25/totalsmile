import recoveryBg from "@/assets/recovery-bg.jpeg";
import { Utensils, Stethoscope, Waves } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Recovery = () => {
  const { t } = useLanguage();
  const features: { icon: typeof Utensils; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: Utensils, titleKey: "rec_f1_title", descKey: "rec_f1_desc" },
    { icon: Stethoscope, titleKey: "rec_f2_title", descKey: "rec_f2_desc" },
    { icon: Waves, titleKey: "rec_f3_title", descKey: "rec_f3_desc" },
  ];

  return (
    <section id="recovery" className="relative py-24 md:py-[100px] overflow-hidden">
      <img src={recoveryBg} alt="Oceanfront recovery suite at sunset" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/80" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white reveal">
          <p className="text-accent font-semibold tracking-[0.2em] text-xs uppercase mb-3">{t("rec_eyebrow")}</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">{t("rec_title")}</h2>
          <p className="mt-5 text-white/90 text-lg leading-relaxed">{t("rec_desc")}</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.titleKey}
              className="reveal glass-warm rounded-[20px] p-7 card-float"
              data-delay={i * 100}
            >
              <div className="h-12 w-12 rounded-xl bg-coral/15 text-coral flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-primary text-xl">{t(f.titleKey)}</h3>
              <p className="mt-2 text-foreground/80 leading-relaxed">{t(f.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
