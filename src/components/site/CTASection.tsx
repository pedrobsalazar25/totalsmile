import wave from "@/assets/cta-wave.jpeg";

export const CTASection = () => {
  return (
    <section id="cta" className="relative py-24 md:py-[100px] overflow-hidden">
      <div className="absolute inset-0 bg-[image:var(--gradient-ocean)]" />
      <img src={wave} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-soft-light" loading="lazy" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto reveal glass rounded-[24px] p-10 md:p-14 text-center" style={{ background: "hsl(0 0% 100% / 0.18)" }}>
          <h2 className="font-display font-bold text-white text-3xl md:text-5xl tracking-tight">
            Ready for a Free Virtual Consultation?
          </h2>
          <p className="mt-5 text-white/95 text-lg leading-relaxed">
            Upload your X-rays or dental plan today and receive a transparent, no-obligation quote within 24 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="rounded-xl bg-coral text-coral-foreground px-8 py-4 font-semibold text-lg shadow-coral hover:scale-[1.02] active:scale-[0.98] transition-transform animate-pulse-soft"
            >
              Get My Free Quote
            </a>
            <a
              href="#locations"
              className="rounded-xl border-2 border-white/80 text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Our Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
