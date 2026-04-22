import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { CheckCircle2, Sparkles, ShieldCheck, Stethoscope, Award, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ServiceHero } from "@/components/site/ServiceHero";
import { ServiceCTA } from "@/components/site/ServiceCTA";
import { useReveal } from "@/hooks/useReveal";
import { getService, services } from "@/data/services";

const benefitIcons = [Sparkles, ShieldCheck, Stethoscope, Award];

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  useReveal();
  const service = slug ? getService(slug) : undefined;

  useEffect(() => {
    if (!service) return;
    document.title = `${service.title} — The Smile Sanctuary Costa Rica`;
    const desc = service.subheadline.slice(0, 155);
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    window.scrollTo(0, 0);
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const related = service.related
    .map((s) => services.find((x) => x.slug === s))
    .filter(Boolean) as typeof services;

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServiceHero title={service.title} subheadline={service.subheadline} image={service.image} />

      {/* What is */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto reveal">
            <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Overview</p>
            <h2 className="font-display font-bold text-primary text-3xl md:text-4xl tracking-tight">
              {service.whatTitle}
            </h2>
            <div className="mt-6 space-y-5 text-foreground/85 text-lg leading-relaxed">
              {service.whatParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-24 bg-[hsl(var(--warm-sand))]">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Why Choose Us</p>
            <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
              Key Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length];
              return (
                <article
                  key={b.title}
                  className="reveal card-float bg-card rounded-2xl p-7 border border-border"
                  data-delay={i * 100}
                >
                  <div className="h-12 w-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-primary text-lg leading-snug">{b.title}</h3>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{b.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Subsections (e.g. All-on-X) */}
      {service.subsections && (
        <section className="py-20 md:py-24 bg-background">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-14 reveal">
              <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Implant Options</p>
              <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
                Full-Arch Solutions
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Choose the implant configuration that fits your bone structure and lifestyle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {service.subsections.map((sub, i) => (
                <article
                  key={sub.title}
                  className="reveal card-float bg-card rounded-2xl p-8 border border-border"
                  data-delay={i * 100}
                >
                  <h3 className="font-display font-bold text-primary text-2xl">{sub.title}</h3>
                  <p className="mt-4 text-foreground/80 leading-relaxed">{sub.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Candidates */}
      <section className="py-20 md:py-24 bg-[hsl(var(--warm-sand))]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto reveal">
            <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Eligibility</p>
            <h2 className="font-display font-bold text-primary text-3xl md:text-4xl tracking-tight">
              Who Is a Candidate?
            </h2>
            <ul className="mt-8 space-y-4">
              {service.candidates.map((c) => (
                <li key={c} className="flex items-start gap-3 text-foreground/85 text-lg leading-relaxed">
                  <CheckCircle2 className="h-6 w-6 text-aqua shrink-0 mt-1" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">What to Expect</p>
            <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
              The Procedure Process
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Consultation", desc: "Free virtual consultation and treatment plan within 24 hours." },
              { step: "02", title: "Procedure", desc: "Performed by board-certified specialists in our state-of-the-art clinics." },
              { step: "03", title: "Recovery", desc: "Heal in luxury at our Playa del Coco Recovery Center with concierge support." },
            ].map((s, i) => (
              <article
                key={s.step}
                className="reveal card-float bg-card rounded-2xl p-8 border border-border"
                data-delay={i * 100}
              >
                <p className="font-display font-bold text-coral text-3xl">{s.step}</p>
                <h3 className="mt-3 font-display font-bold text-primary text-xl">{s.title}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA />

      {/* Related */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-14 reveal">
            <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Explore More</p>
            <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
              Related Procedures
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((r, i) => (
              <Link
                key={r.slug}
                to={`/services/${r.slug}`}
                className="reveal card-float bg-card rounded-2xl overflow-hidden border border-border group"
                data-delay={i * 100}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={r.image}
                    alt={r.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-primary text-xl">{r.title}</h3>
                  <p className="mt-2 text-foreground/75 leading-relaxed line-clamp-2">{r.subheadline}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-aqua font-semibold">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicePage;
