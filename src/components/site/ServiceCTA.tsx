import wave from "@/assets/cta-wave.jpeg";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const ServiceCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 md:py-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-ocean)]" />
      <img
        src={wave}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light"
        loading="lazy"
      />
      <div className="container mx-auto relative z-10">
        <div
          className="max-w-3xl mx-auto reveal glass rounded-[24px] p-10 md:p-14 text-center"
          style={{ background: "hsl(0 0% 100% / 0.18)" }}
        >
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight">
            {t("svc_cta_title")}
          </h2>
          <p className="mt-5 text-white/95 text-lg leading-relaxed">
            {t("svc_cta_desc")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link
              to="/#cta"
              className="rounded-xl bg-coral text-coral-foreground px-8 py-4 font-semibold text-lg shadow-coral hover:scale-[1.02] active:scale-[0.98] transition-transform animate-pulse-soft"
            >
              {t("svc_cta_primary")}
            </Link>
            <Link
              to="/#cta"
              className="rounded-xl border-2 border-white/80 text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              {t("svc_cta_secondary")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
