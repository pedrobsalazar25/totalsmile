import { Link } from "react-router-dom";

interface Props {
  title: string;
  subheadline: string;
  image: string;
}

export const ServiceHero = ({ title, subheadline, image }: Props) => {
  return (
    <section className="relative min-h-[70svh] flex items-center overflow-hidden pt-20">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-primary/70" />

      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-3xl glass rounded-[24px] p-8 md:p-12 animate-fade-in">
          <p className="text-white/90 font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            The Smile Sanctuary
          </p>
          <h1 className="font-display font-bold text-white text-4xl md:text-6xl leading-[1.05] tracking-tight">
            {title}
          </h1>
          <p className="mt-6 text-white/95 text-lg md:text-xl leading-relaxed max-w-2xl">
            {subheadline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/#cta"
              className="rounded-xl bg-coral text-coral-foreground px-7 py-4 font-semibold shadow-coral hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
