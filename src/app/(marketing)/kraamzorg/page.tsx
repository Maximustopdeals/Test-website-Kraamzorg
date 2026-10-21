import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Boutique Kraamzorg",
  description:
    "Hyper-gepersonaliseerde kraamzorg met absolute discretie. Eén toegewijde professional, volledige aandacht voor moeder en kind.",
  alternates: { canonical: "/kraamzorg" },
};

const pillars = [
  {
    title: "Eén vast gezicht",
    text: "Geen wisselende kraamverzorgers. U bouwt een band op met één professional die uw gezin kent.",
  },
  {
    title: "Volledige discretie",
    text: "Privacy is geen bijzaak. Alles gebeurt in vertrouwen, op uw voorwaarden.",
  },
  {
    title: "Zorg op maat",
    text: "Van medische aandacht tot huishoudelijke rust — afgestemd op wat u écht nodig heeft.",
  },
];

export default function KraamzorgPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-20 lg:pb-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Ons aanbod
            </p>
            <h1 className="font-serif text-[clamp(2.75rem,5.5vw,4.5rem)] font-light tracking-[-0.03em] text-charcoal leading-[1.05]">
              Boutique
              <br />
              <em className="italic">kraamzorg</em>
            </h1>
            <p className="mt-8 text-muted text-lg max-w-lg font-light leading-relaxed">
              Hyper-gepersonaliseerde zorg in de eerste dagen thuis. Sereniteit,
              expertise en absolute toewijding — zonder haast, zonder standaardpakket.
            </p>
            <div className="mt-12">
              <Button href="/contact" variant="primary" size="lg">
                Private intake
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <div
        className="h-1.5 w-full bg-gradient-to-r from-oatmeal via-sage-soft/50 to-oatmeal-deep"
        aria-hidden
      />

      <section className="py-28 lg:py-36 bg-alabaster">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Wat u mag verwachten
            </p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3rem)] font-light tracking-[-0.025em] text-charcoal mb-16 lg:mb-20 max-w-xl">
              Zorg die voelt als
              <br />
              <em className="italic">een warme omarming</em>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="border-t border-sage/25 pt-8">
                  <span className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-sage">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl lg:text-2xl font-light text-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-muted leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 lg:py-36 bg-oatmeal">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal">
              Klaar voor een
              <br />
              <em className="italic">privé-gesprek?</em>
            </h2>
            <p className="mt-6 text-muted font-light leading-relaxed">
              Vraag een discreet intake-gesprek aan. Wij reageren binnen 24 uur.
            </p>
            <div className="mt-12">
              <Button href="/contact" variant="primary" size="lg">
                Vraag private consult aan
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
