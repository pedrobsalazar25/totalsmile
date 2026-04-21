import bg from "@/assets/concierge-bg.jpeg";
import { Car, Map, Route } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Concierge = () => {
  const { t } = useLanguage();
  const features: { icon: typeof Car; titleKey: TranslationKey; descKey: TranslationKey }[] = [
    { icon: Car, titleKey: "con_f1_title", descKey: "con_f1_desc" },
    { icon: Map, titleKey: "con_f2_title", descKey: "con_f2_desc" },
    { icon: Route, titleKey: "con_f3_title", descKey: "con_f3_desc" },
  ];

  return (
    <section id="concierge" className="relative py-24 md:py-[100px] overflow-hidden bg-secondary">
      <img src={bg} alt="Luxury private transport in Costa Rica" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-transparent" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-walnut font-semibold tracking-[0.2em] text-xs uppercase mb-3">{t("con_eyebrow")}</p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight leading-tight">
            {t("con_title")}
          </h2>
          <p className="mt-5 text-foreground/80 text-lg leading-relaxed max-w-xl">{t("con_desc")}</p>
        </div>

        <div className="grid gap-5">
          {features.map((f, i) => (
            <div
              key={f.titleKey}
              className="reveal glass-warm rounded-[20px] p-6 card-float flex gap-5 items-start"
              data-delay={i * 100}
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/20 text-walnut flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary text-lg">{t(f.titleKey)}</h3>
                <p className="mt-1 text-foreground/80 leading-relaxed">{t(f.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
