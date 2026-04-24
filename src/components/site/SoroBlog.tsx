import { useSoroEmbed } from "@/hooks/useSoroEmbed";

export const SoroBlog = () => {
  useSoroEmbed();

  return (
    <section id="blog" className="py-24 md:py-[100px] bg-background">
      <div className="container mx-auto">
        <div id="soro-blog" />
      </div>
    </section>
  );
};
