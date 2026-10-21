import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "over mij",
  alternates: { canonical: "/over-mij" },
};

export default function Page() {
  return (
    <section className="pt-36 lg:pt-44 pb-28 lg:pb-36 bg-alabaster">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
            Aura
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light tracking-[-0.03em] text-charcoal capitalize">
            over mij
          </h1>
          <p className="mt-6 text-muted max-w-lg font-light leading-relaxed">
            Deze pagina wordt verder uitgewerkt met de redactionele content van
            Aura Boutique Kraamzorg.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="outline">
              Private intake
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
