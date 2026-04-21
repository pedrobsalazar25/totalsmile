import heroBg from "@/assets/hero-bg.jpeg";
import { ShieldCheck, Sparkles, Plane } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt="Costa Rica coastline at sunset"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/60" />

      <div className="container mx-auto relative z-10 py-32">
        <div className="max-w-[460px] glass rounded-[24px] p-5 md:p-7 animate-fade-in">
          <p className="text-white/90 font-semibold tracking-[0.18em] text-[10px] md:text-xs uppercase mb-2">
            Costa Rica Dental Excellence
          </p>
          <h1 className="font-display font-bold text-white text-2xl md:text-4xl leading-[1.1] tracking-tight">
            Your Journey to a Perfect Smile Starts in Paradise
          </h1>
          <p className="mt-3 text-white/95 text-sm md:text-base leading-relaxed">
            Why choose between affordable dental care and a luxury vacation? At The Smile Sanctuary,
            we combine elite dental expertise with the breathtaking beauty of Costa Rica.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="rounded-xl bg-coral text-coral-foreground px-5 py-2.5 text-sm font-semibold shadow-coral hover:scale-[1.02] active:scale-[0.98] transition-transform animate-pulse-soft"
            >
              Get My Free Quote
            </a>
            <a
              href="#locations"
              className="rounded-xl border-2 border-white/80 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View Our Gallery
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 max-w-3xl">
          {[
            { icon: Sparkles, label: "Save up to 70%" },
            { icon: ShieldCheck, label: "Board-certified specialists" },
            { icon: Plane, label: "Concierge included" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-pill rounded-full px-5 py-2.5 flex items-center gap-2 text-white text-sm font-semibold"
            >
              <Icon className="h-4 w-4 text-accent" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
