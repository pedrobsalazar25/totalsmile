import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/services";
import { useLanguage } from "@/i18n/LanguageContext";

export const ServicesCarousel = () => {
  const { t, lang } = useLanguage();
  const autoplay = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true, stopOnFocusIn: false })
  );

  return (
    <section id="services" className="py-24 md:py-[100px] bg-secondary">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14 reveal">
          <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            {t("nav_services")}
          </p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
            {lang === "es" ? "Nuestros Procedimientos" : "Our Procedures"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {lang === "es"
              ? "Atención dental especializada, desde estética hasta cirugía compleja, todo bajo un mismo techo."
              : "Specialty dental care, from cosmetic to complex surgery, all under one roof."}
          </p>
        </div>

        <div className="reveal px-4 md:px-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[autoplay.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((s) => {
                const content = s.i18n[lang];
                return (
                  <CarouselItem
                    key={s.slug}
                    className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link
                      to={`/services/${s.slug}`}
                      className="group block h-full rounded-2xl overflow-hidden bg-background card-float shadow-soft"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={s.image}
                          alt={content.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent" />
                        <h3 className="absolute bottom-4 left-5 right-5 font-display font-bold text-white text-xl drop-shadow">
                          {content.title}
                        </h3>
                      </div>
                      <div className="p-5">
                        <p className="text-muted-foreground text-sm line-clamp-3">
                          {content.subheadline}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-coral transition-colors">
                          {t("svc_learn_more")}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 lg:-left-10 bg-background text-primary border-border" />
            <CarouselNext className="hidden md:flex -right-6 lg:-right-10 bg-background text-primary border-border" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
