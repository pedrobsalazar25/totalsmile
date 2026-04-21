import recoveryBg from "@/assets/recovery-bg.jpeg";
import { Utensils, Stethoscope, Waves } from "lucide-react";

const features = [
  { icon: Utensils, title: "Specialized Post-Op Nutrition", desc: "Gourmet soft-food menus designed for dental healing." },
  { icon: Stethoscope, title: "Professional On-Site Support", desc: "Peace of mind knowing our team is available to monitor your progress." },
  { icon: Waves, title: "Total Relaxation", desc: "Recline in luxury while the Pacific breeze accelerates your well-being." },
];

export const Recovery = () => {
  return (
    <section id="recovery" className="relative py-24 md:py-[100px] overflow-hidden">
      <img src={recoveryBg} alt="Oceanfront recovery suite at sunset" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/55 to-primary/80" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white reveal">
          <p className="text-accent font-semibold tracking-[0.2em] text-xs uppercase mb-3">The Recovery Experience</p>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight">
            Heal Where the Ocean Meets the Shore
          </h2>
          <p className="mt-5 text-white/90 text-lg leading-relaxed">
            The most critical part of dental surgery is the recovery. Most clinics send you back to a standard
            hotel — we bring you home to our Playa del Coco Recovery Center.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal glass-warm rounded-[20px] p-7 card-float"
              data-delay={i * 100}
            >
              <div className="h-12 w-12 rounded-xl bg-coral/15 text-coral flex items-center justify-center">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-primary text-xl">{f.title}</h3>
              <p className="mt-2 text-foreground/80 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
