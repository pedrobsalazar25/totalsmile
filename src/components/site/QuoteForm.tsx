import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const QuoteForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Quote request received",
        description: "We'll be in touch within 24 hours with your personalized plan.",
      });
    }, 600);
  };

  return (
    <section id="quote" className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center reveal">
          <p className="text-primary/70 font-semibold tracking-[0.2em] text-xs uppercase mb-3">
            Free Virtual Consultation
          </p>
          <h2 className="font-display font-bold text-primary text-3xl md:text-5xl leading-tight">
            Request Your Personalized Quote
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Share a few details and we'll send a transparent, no-obligation plan within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-background rounded-2xl shadow-soft border border-border p-6 md:p-10 grid gap-5 reveal"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-foreground">Full name</label>
              <input
                id="name"
                name="name"
                required
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-foreground">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="treatment" className="text-sm font-semibold text-foreground">Treatment of interest</label>
              <select
                id="treatment"
                name="treatment"
                className="rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                defaultValue=""
              >
                <option value="" disabled>Select an option</option>
                <option>Implants</option>
                <option>Veneers</option>
                <option>Full-mouth restoration</option>
                <option>Crowns &amp; bridges</option>
                <option>Cosmetic / other</option>
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-semibold text-foreground">Tell us about your goals</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="justify-self-start rounded-xl bg-coral text-coral-foreground px-7 py-4 font-semibold shadow-coral hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-70"
          >
            {submitting ? "Sending..." : "Send My Quote Request"}
          </button>
        </form>
      </div>
    </section>
  );
};
