import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

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

const upsertLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"][data-blog-seo="true"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.dataset.blogSeo = "true";
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const SoroBlog = () => {
  const { t, lang } = useLanguage();

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

  // Inject blog-specific SEO/OG tags when the user lands on or scrolls to #blog
  useEffect(() => {
    const seo = SEO[lang as "en" | "es"] ?? SEO.en;
    const blogUrl = `${window.location.origin}/#blog`;

    const apply = () => {
      document.title = seo.title;
      upsertMeta('meta[name="description"][data-blog-seo="true"]', "name", "description", seo.description);
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
      upsertMeta(
        'meta[property="og:locale"][data-blog-seo="true"]',
        "property",
        "og:locale",
        lang === "es" ? "es_CR" : "en_US"
      );
      upsertMeta(
        'meta[name="twitter:card"][data-blog-seo="true"]',
        "name",
        "twitter:card",
        "summary_large_image"
      );
      upsertMeta('meta[name="twitter:title"][data-blog-seo="true"]', "name", "twitter:title", seo.title);
      upsertMeta(
        'meta[name="twitter:description"][data-blog-seo="true"]',
        "name",
        "twitter:description",
        seo.description
      );
      upsertMeta('meta[name="twitter:image"][data-blog-seo="true"]', "name", "twitter:image", BLOG_OG_IMAGE);
      upsertLink("canonical", blogUrl);
    };

    // JSON-LD structured data for the Blog section
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.dataset.blogSeo = "true";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      name: seo.title,
      description: seo.description,
      url: blogUrl,
      inLanguage: lang === "es" ? "es" : "en",
      publisher: {
        "@type": "Organization",
        name: "The Smile Sanctuary",
        url: window.location.origin,
      },
      image: BLOG_OG_IMAGE,
    });
    document.head.appendChild(ld);

    // Apply only when blog is in view or hash matches
    const section = document.getElementById("blog");
    let active = window.location.hash === "#blog";
    if (active) apply();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
            active = true;
            apply();
          }
        });
      },
      { threshold: [0.4] }
    );
    if (section) observer.observe(section);

    return () => {
      observer.disconnect();
      document.head
        .querySelectorAll('[data-blog-seo="true"]')
        .forEach((el) => el.parentElement?.removeChild(el));
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
