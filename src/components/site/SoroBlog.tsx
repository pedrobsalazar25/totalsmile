import { useSoroEmbed } from "@/hooks/useSoroEmbed";
import { useLanguage } from "@/i18n/LanguageContext";

export const SoroBlog = () => {
  useSoroEmbed();
  const { t } = useLanguage();

  return (
    <section id="blog" className="py-24 md:py-[100px] bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-primary font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            {t("blog_eyebrow")}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-primary">
            {t("blog_title")}
          </h2>
          <p className="mt-5 text-foreground/75 text-lg leading-relaxed">
            {t("blog_desc")}
          </p>
        </div>

        <div className="mt-12 reveal">
          <div id="soro-blog" className="soro-embed" />
        </div>
      </div>
    </section>
  );
};
