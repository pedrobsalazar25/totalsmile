import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const JOTFORM_ID = "261137304515045";

const Consultation = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = "Free Dental Consultation — Total Smile";
    const desc =
      "Request your free dental consultation and personalized quote with Total Smile in Maturín, Venezuela.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    // Load JotForm embed handler script once
    const SRC = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    const existing = document.querySelector(
      `script[src="${SRC}"]`,
    ) as HTMLScriptElement | null;

    const init = () => {
      const w = window as unknown as {
        jotformEmbedHandler?: (selector: string, base: string) => void;
      };
      if (typeof w.jotformEmbedHandler === "function") {
        w.jotformEmbedHandler(
          `iframe[id='JotFormIFrame-${JOTFORM_ID}']`,
          "https://form.jotform.com/",
        );
      }
    };

    if (existing) {
      init();
    } else {
      const s = document.createElement("script");
      s.src = SRC;
      s.async = true;
      s.onload = init;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero header */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-[image:var(--gradient-ocean)] overflow-hidden">
        <div className="container mx-auto relative z-10 text-center">
          <p className="text-white/90 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            {t("consult_eyebrow")}
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-5xl tracking-tight">
            {t("consult_title")}
          </h1>
          <p className="mt-5 text-white/95 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("consult_desc")}
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card rounded-[24px] shadow-soft border border-border p-4 md:p-8">
            <iframe
              id={`JotFormIFrame-${JOTFORM_ID}`}
              title="Dental Consultation Request Form"
              onLoad={() => window.parent.scrollTo(0, 0)}
              allow="geolocation; microphone; camera; fullscreen; payment"
              src={`https://form.jotform.com/${JOTFORM_ID}`}
              frameBorder={0}
              scrolling="no"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: "720px",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Consultation;
