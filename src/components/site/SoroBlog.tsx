import { useEffect } from "react";

export const SoroBlog = () => {
  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://app.trysoro.com/api/embed/07804d90-9cab-4971-b047-4f28ca7e483f"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src = "https://app.trysoro.com/api/embed/07804d90-9cab-4971-b047-4f28ca7e483f";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="blog" className="py-24 md:py-[100px] bg-background">
      <div className="container mx-auto">
        <div id="soro-blog" />
      </div>
    </section>
  );
};
