import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "Aura Boutique Kraamzorg | Exclusieve Zorg voor Moeder & Kind",
  },
  description:
    "Ervaar een serene en hyper-gepersonaliseerde transitie naar het moederschap. Private kraamzorg met absolute toewijding en privacy.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* Cinematic hero — quiet, full-viewport */}
      <section className="relative min-h-[100svh] flex items-end bg-cream">
        {/* Soft atmospheric field — replace with cinematic photo later */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-cream via-oatmeal to-sage-soft/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, #1A1A1A 0.6px, transparent 0.6px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden
        />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-6 lg:px-12 pb-24 lg:pb-32 pt-32">
          <FadeIn>
            <p className="text-[0.65rem] font-medium tracking-[0.28em] uppercase text-muted mb-8">
              Boutique kraamzorg
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h1 className="font-serif text-[clamp(3rem,7vw,5.5rem)] font-light leading-[0.98] tracking-[-0.03em] text-charcoal max-w-[14ch]">
              Sereniteit
              <br />
              in de <em className="italic font-light">eerste dagen</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-8 text-muted text-lg max-w-md leading-relaxed font-light">
              Hyper-gepersonaliseerde kraamzorg. Een private transitie naar het
              moederschap — met rust, discretie en absolute toewijding.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="/contact" variant="primary" size="lg">
                Private consult aanvragen
              </Button>
              <Button href="/kraamzorg" variant="text">
                Ontdek ons aanbod
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Editorial intro */}
      <section className="py-28 lg:py-40 bg-alabaster">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
                  De belofte
                </p>
                <h2 className="font-serif text-[clamp(2rem,3.5vw,3.25rem)] font-light tracking-[-0.025em] text-charcoal leading-[1.1]">
                  Zorg die
                  <br />
                  <em className="italic">niet hoort</em>
                </h2>
              </FadeIn>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <FadeIn delay={0.12}>
                <p className="text-muted text-lg leading-[1.85] font-light">
                  Aura is geen standaard kraamzorg. Het is een concierge-ervaring:
                  één toegewijde professional, volledige aandacht, en een
                  omgeving waarin u zich veilig en gezien voelt — van de eerste
                  intake tot de laatste dag.
                </p>
                <p className="mt-6 text-muted leading-[1.85] font-light">
                  Geen wachtlijsten-druk. Geen wisselende gezichten. Alleen
                  rust, expertise en discretie.
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Quiet CTA */}
      <section className="py-28 lg:py-36 bg-cream">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <FadeIn>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] font-light tracking-[-0.025em] text-charcoal">
              Klaar voor een
              <br />
              <em className="italic">privé-gesprek?</em>
            </h2>
            <p className="mt-6 text-muted leading-relaxed font-light">
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
