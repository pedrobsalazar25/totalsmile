import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { services } from "@/data/services";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const onHome = location.pathname === "/";

  // Force solid background on inner pages so text is always readable.
  const solid = scrolled || !onHome;

  const sectionLink = (hash: string) => (onHome ? hash : `/${hash}`);

  const links = [
    { label: t("nav_locations"), href: sectionLink("#locations") },
    { label: t("nav_recovery"), href: sectionLink("#recovery") },
    { label: t("nav_concierge"), href: sectionLink("#concierge") },
    { label: t("nav_contact"), href: sectionLink("#cta") },
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
        solid ? "bg-background/90 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="The Smile Sanctuary logo" className="h-11 w-11 rounded-full bg-white p-1 shadow-soft" />
          <span className={`font-display font-bold text-lg leading-tight ${solid ? "text-primary" : "text-white drop-shadow"}`}>
            The Smile Sanctuary
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <Link
            to="/"
            className={`text-sm font-semibold transition-colors duration-200 ${
              solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
            }`}
          >
            {t("nav_home")}
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {t("nav_services")}
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-72">
                <div className="bg-background rounded-2xl border border-border shadow-lift overflow-hidden animate-fade-in">
                  <ul className="py-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="block px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary hover:text-primary transition-colors"
                        >
                          {s.i18n[lang].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                solid ? "text-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}

          <LanguageToggle scrolled={solid} />
          <a
            href={sectionLink("#cta")}
            className="rounded-xl bg-coral text-coral-foreground px-5 py-2.5 text-sm font-semibold shadow-coral hover:scale-[1.02] transition-transform"
          >
            {t("cta_quote")}
          </a>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <LanguageToggle scrolled={solid} />
          <button
            className={`p-2 rounded-lg ${solid ? "text-primary" : "text-white"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border shadow-soft max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto py-4 flex flex-col gap-1">
            <Link to="/" onClick={() => setOpen(false)} className="py-2 text-foreground font-semibold">
              {t("nav_home")}
            </Link>

            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center justify-between py-2 text-foreground font-semibold w-full"
            >
              <span>{t("nav_services")}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <ul className="pl-4 border-l border-border ml-1 mb-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/services/${s.slug}`}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm text-foreground/80 hover:text-primary"
                    >
                      {s.i18n[lang].title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

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
              href={sectionLink("#cta")}
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
