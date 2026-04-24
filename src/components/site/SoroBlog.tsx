import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { getArticles, type TrysoroArticle } from "@/lib/trysoro";

const BLOG_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/CB7rW9WWHhYCSIWkBTL8F09IjxS2/social-images/social-1776787238325-social_share_.webp";

const SEO = {
  en: {
    title: "Smile Sanctuary Blog | Costa Rica Dental Tourism Insights",
    description:
      "Patient stories, expert dental guidance, and Costa Rica travel tips. Plan a smile transformation paired with luxury recovery in paradise.",
  },
  es: {
    title: "Blog Smile Sanctuary | Turismo Dental en Costa Rica",
    description:
      "Historias de pacientes, guía dental experta y consejos de viaje en Costa Rica. Planifica tu transformación con recuperación de lujo en el paraíso.",
  },
} as const;

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
  el.dataset.blogSeo = "true";
};

export const SoroBlog = () => {
  const { t, lang } = useLanguage();
  const [articles, setArticles] = useState<TrysoroArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    getArticles()
      .then((list) => {
        if (cancelled) return;
        setArticles(list);
        setLoading(false);
      })
      .catch(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  // Inject blog-section SEO when scrolled into view
  useEffect(() => {
    const seo = SEO[lang as "en" | "es"] ?? SEO.en;
    const blogUrl = `${window.location.origin}/#blog`;

    const apply = () => {
      upsertMeta('meta[property="og:title"][data-blog-seo="true"]', "property", "og:title", seo.title);
      upsertMeta(
        'meta[property="og:description"][data-blog-seo="true"]',
        "property",
        "og:description",
        seo.description
      );
      upsertMeta('meta[property="og:type"][data-blog-seo="true"]', "property", "og:type", "blog");
      upsertMeta('meta[property="og:url"][data-blog-seo="true"]', "property", "og:url", blogUrl);
      upsertMeta('meta[property="og:image"][data-blog-seo="true"]', "property", "og:image", BLOG_OG_IMAGE);
    };

    const section = document.getElementById("blog");
    if (window.location.hash === "#blog") apply();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) apply();
        });
      },
      { threshold: [0.4] }
    );
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
      document.head.querySelectorAll('[data-blog-seo="true"]').forEach((el) => el.remove());
    };
  }, [lang]);

  return (
    <section
      id="blog"
      className="relative py-24 md:py-[100px] bg-[image:var(--gradient-warm)] overflow-hidden"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-primary/80 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
            {t("blog_eyebrow")}
          </p>
          <h2
            id="blog-heading"
            className="mt-4 font-display font-bold text-foreground text-3xl md:text-5xl tracking-tight"
          >
            {t("blog_title")}
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{t("blog_desc")}</p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {loading &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="glass-warm rounded-[24px] shadow-soft overflow-hidden animate-pulse"
              >
                <div className="aspect-[16/10] bg-muted" />
                <div className="p-6 space-y-3">
                  <div className="h-5 w-3/4 bg-muted rounded" />
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-5/6 bg-muted rounded" />
                </div>
              </div>
            ))}

          {!loading &&
            articles.map((a, idx) => (
              <Link
                key={a.id}
                to={`/blog/${a.slug}`}
                className="reveal group glass-warm rounded-[24px] shadow-soft overflow-hidden card-float flex flex-col"
                data-delay={String(idx * 80)}
              >
                {a.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className="text-primary/70 font-semibold tracking-[0.18em] text-[0.7rem] uppercase">
                    {a.date}
                  </p>
                  <h3 className="mt-3 font-display font-bold text-foreground text-xl md:text-2xl tracking-tight leading-snug">
                    {a.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide">
                    {lang === "es" ? "Leer artículo" : "Read article"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};
