import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { getArticleBySlug, type TrysoroArticle } from "@/lib/trysoro";
import { useLanguage } from "@/i18n/LanguageContext";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const [state, setState] = useState<{
    loading: boolean;
    article: TrysoroArticle | null;
    html: string;
    notFound: boolean;
  }>({ loading: true, article: null, html: "", notFound: false });

  useEffect(() => {
    let cancelled = false;
    if (!slug) return;
    setState((s) => ({ ...s, loading: true }));
    getArticleBySlug(slug).then((res) => {
      if (cancelled) return;
      if (!res) {
        setState({ loading: false, article: null, html: "", notFound: true });
      } else {
        setState({ loading: false, article: res.article, html: res.html, notFound: false });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // SEO per post
  useEffect(() => {
    if (!state.article) return;
    const a = state.article;
    const url = `${window.location.origin}/blog/${a.slug}`;
    document.title = `${a.title} | The Smile Sanctuary`;

    const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      el.dataset.postSeo = "true";
    };

    upsertMeta('meta[name="description"][data-post-seo="true"]', "name", "description", a.excerpt);
    upsertMeta('meta[property="og:title"][data-post-seo="true"]', "property", "og:title", a.title);
    upsertMeta('meta[property="og:description"][data-post-seo="true"]', "property", "og:description", a.excerpt);
    upsertMeta('meta[property="og:type"][data-post-seo="true"]', "property", "og:type", "article");
    upsertMeta('meta[property="og:url"][data-post-seo="true"]', "property", "og:url", url);
    if (a.image) upsertMeta('meta[property="og:image"][data-post-seo="true"]', "property", "og:image", a.image);
    upsertMeta('meta[name="twitter:card"][data-post-seo="true"]', "name", "twitter:card", "summary_large_image");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"][data-post-seo="true"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.dataset.postSeo = "true";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.dataset.postSeo = "true";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: a.title,
      description: a.excerpt,
      datePublished: a.isoDate,
      image: a.image || undefined,
      url,
      publisher: {
        "@type": "Organization",
        name: "The Smile Sanctuary",
        url: window.location.origin,
      },
    });
    document.head.appendChild(ld);

    return () => {
      document.head.querySelectorAll('[data-post-seo="true"]').forEach((el) => el.remove());
    };
  }, [state.article]);

  const backLabel = lang === "es" ? "Volver al blog" : "Back to blog";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 pt-28 md:pt-32 pb-24 bg-[image:var(--gradient-warm)]">
        <article className="container mx-auto max-w-3xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-primary/80 hover:text-primary font-semibold tracking-[0.15em] text-xs uppercase transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {backLabel}
          </Link>

          {state.loading && (
            <div className="mt-10 glass-warm rounded-[24px] shadow-soft p-8 md:p-12 animate-pulse">
              <div className="h-8 w-2/3 bg-muted rounded mb-4" />
              <div className="h-4 w-full bg-muted rounded mb-2" />
              <div className="h-4 w-5/6 bg-muted rounded" />
            </div>
          )}

          {state.notFound && (
            <div className="mt-10 glass-warm rounded-[24px] shadow-soft p-10 text-center">
              <h1 className="font-display font-bold text-3xl text-foreground">
                {lang === "es" ? "Artículo no encontrado" : "Article not found"}
              </h1>
              <p className="mt-4 text-muted-foreground">
                {lang === "es"
                  ? "No pudimos encontrar este artículo."
                  : "We couldn't find this article."}
              </p>
            </div>
          )}

          {state.article && (
            <>
              <header className="mt-8 text-center">
                <p className="text-primary/80 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
                  {state.article.date}
                </p>
                <h1 className="mt-4 font-display font-bold text-foreground text-3xl md:text-5xl tracking-tight leading-[1.1]">
                  {state.article.title}
                </h1>
                <p className="mt-5 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  {state.article.excerpt}
                </p>
              </header>

              {state.article.image && (
                <div className="mt-10 rounded-[24px] overflow-hidden shadow-lift">
                  <img
                    src={state.article.image}
                    alt={state.article.title}
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                </div>
              )}

              <div className="mt-10 md:mt-14 glass-warm rounded-[24px] shadow-soft p-6 md:p-12">
                <div
                  className="prose-blog"
                  // Content comes from the Trysoro API (trusted publishing platform)
                  dangerouslySetInnerHTML={{ __html: state.html }}
                />
              </div>
            </>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
