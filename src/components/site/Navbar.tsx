import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { label: t("nav_locations"), href: "#locations" },
    { label: t("nav_recovery"), href: "#recovery" },
    { label: t("nav_concierge"), href: "#concierge" },
    { label: t("nav_contact"), href: "#cta" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="The Smile Sanctuary logo" className="h-11 w-11 rounded-full bg-white p-1 shadow-soft" />
          <span className={`font-display font-bold text-lg leading-tight ${scrolled ? "text-primary" : "text-white drop-shadow"}`}>
            The Smile Sanctuary
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                scrolled ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <LanguageToggle scrolled={scrolled} />
          <a
            href="#cta"
            className="rounded-xl bg-coral text-coral-foreground px-5 py-2.5 text-sm font-semibold shadow-coral hover:scale-[1.02] transition-transform"
          >
            {t("cta_quote")}
          </a>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle scrolled={scrolled} />
          <button
            className={`p-2 rounded-lg ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-soft">
          <div className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground font-semibold"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-coral text-coral-foreground px-5 py-3 text-center font-semibold shadow-coral"
            >
              {t("cta_quote")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
