import alajuela from "@/assets/alajuela.jpeg";
import pz from "@/assets/perez-zeledon.jpeg";
import coco from "@/assets/playas-coco.jpeg";
import { Plane, Mountain, Sun } from "lucide-react";

const locations = [
  {
    icon: Plane,
    title: "Alajuela: The Gateway",
    img: alajuela,
    desc:
      "Located just minutes from Juan Santamaría International Airport (SJO), our Alajuela clinic is designed for convenience. Perfect for your arrival consultation, final fittings, or quick cosmetic enhancements before you head home.",
  },
  {
    icon: Mountain,
    title: "Pérez Zeledón: Mountain Wellness",
    img: pz,
    desc:
      "Nestled in the lush, green heart of the Southern Zone, our Pérez Zeledón office offers a tranquil setting for those who prefer the cool mountain air and authentic Costa Rican culture. It's the ideal spot for restorative work in a peaceful, stress-free environment.",
  },
  {
    icon: Sun,
    title: "Playas del Coco: The Flagship & Recovery Center",
    img: coco,
    desc:
      "Our premier surgical suite and Exclusive Recovery Center are located in the sun-drenched Guanacaste region. Here, we perform our most advanced procedures, followed by world-class aftercare in our private recovery facility.",
  },
];

export const Locations = () => {
  return (
    <section id="locations" className="py-24 md:py-[100px] bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 reveal">
          <p className="text-aqua font-semibold tracking-[0.2em] text-xs uppercase mb-3">Our Locations</p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl tracking-tight">
            Three Sanctuaries. One Promise.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From the gateway airport to mountain calm to Pacific shores — your care follows you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((loc, i) => (
            <article
              key={loc.title}
              className="reveal card-float bg-card rounded-2xl overflow-hidden border border-border"
              data-delay={i * 100}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={loc.img} alt={loc.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute top-4 left-4 h-11 w-11 rounded-full bg-coral text-coral-foreground flex items-center justify-center shadow-soft">
                  <loc.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display font-bold text-primary text-xl leading-snug">{loc.title}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">{loc.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
