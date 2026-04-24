import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export const SoroBlog = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://app.trysoro.com/api/embed/07804d90-9cab-4971-b047-4f28ca7e483f"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/07804d90-9cab-4971-b047-4f28ca7e483f";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="blog"
      className="relative py-24 md:py-[100px] bg-[image:var(--gradient-warm)] overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-primary/80 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
            {t("blog_eyebrow")}
          </p>
          <h2 className="mt-4 font-display font-bold text-foreground text-3xl md:text-5xl tracking-tight">
            {t("blog_title")}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            {t("blog_desc")}
          </p>
        </div>

        <div
          className="mt-12 md:mt-16 reveal glass-warm rounded-[24px] shadow-soft p-6 md:p-10"
          data-delay="100"
        >
          <div id="soro-blog" />
        </div>
      </div>
    </section>
  );
};
