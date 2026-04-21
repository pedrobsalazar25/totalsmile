import bg from "@/assets/concierge-bg.jpeg";
import { Car, Map, Route } from "lucide-react";

const features = [
  { icon: Car, title: "Private Airport Transfers", desc: "We meet you at the gate." },
  { icon: Map, title: "Custom Itineraries", desc: "Want to see a volcano or a cloud forest? We arrange tours that fit your recovery timeline." },
  { icon: Route, title: "Inter-Clinic Transport", desc: "Seamless travel between Alajuela, PZ, and the Coast." },
];

export const Concierge = () => {
  return (
    <section id="concierge" className="relative py-24 md:py-[100px] overflow-hidden bg-secondary">
      <img src={bg} alt="Luxury private transport in Costa Rica" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-transparent" />

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <p className="text-walnut font-semibold tracking-[0.2em] text-xs uppercase mb-3">Patient Concierge & Tours</p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight leading-tight">
            We Handle the Logistics. You Enjoy the View.
          </h2>
          <p className="mt-5 text-foreground/80 text-lg leading-relaxed max-w-xl">
            Navigating a foreign country during a medical procedure shouldn't be stressful. Our concierge team manages every detail.
          </p>
        </div>

        <div className="grid gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal glass-warm rounded-[20px] p-6 card-float flex gap-5 items-start"
              data-delay={i * 100}
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/20 text-walnut flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-primary text-lg">{f.title}</h3>
                <p className="mt-1 text-foreground/80 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
