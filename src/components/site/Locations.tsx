import alajuela from "@/assets/alajuela.jpeg";
import pz from "@/assets/perez-zeledon.jpeg";
import coco from "@/assets/playas-coco.jpeg";
import { Plane, Mountain, Sun } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { TranslationKey } from "@/i18n/translations";

export const Locations = () => {
  const { t } = useLanguage();

  const locations: { icon: typeof Plane; titleKey: TranslationKey; descKey: TranslationKey; img: string }[] = [
    { icon: Plane, titleKey: "loc_alajuela_title", descKey: "loc_alajuela_desc", img: alajuela },
    { icon: Mountain, titleKey: "loc_pz_title", descKey: "loc_pz_desc", img: pz },
    { icon: Sun, titleKey: "loc_coco_title", descKey: "loc_coco_desc", img: coco },
  ];

  return (
    <section id="locations" className="py-24 md:py-[100px] bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">{t("loc_eyebrow")}</p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
            {t("loc_title")}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">{t("loc_desc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <article
              key={loc.titleKey}
              className="reveal card-float bg-card rounded-2xl overflow-hidden border border-border"
              data-delay={i * 100}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={loc.img} alt={t(loc.titleKey)} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-full bg-coral text-coral-foreground flex items-center justify-center shadow-soft">
                  <loc.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-primary text-xl leading-snug">{t(loc.titleKey)}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{t(loc.descKey)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
