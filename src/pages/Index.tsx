import { useReveal } from "@/hooks/useReveal";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Locations } from "@/components/site/Locations";
import { Recovery } from "@/components/site/Recovery";
import { Concierge } from "@/components/site/Concierge";
import { CTASection } from "@/components/site/CTASection";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "The Smile Sanctuary — Costa Rica Dental Excellence";
    const desc = "Elite dental care in Costa Rica paired with luxury recovery, concierge transport, and tropical paradise. Free virtual quote in 24 hours.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <QuoteForm />
      <Locations />
      <Recovery />
      <Concierge />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
