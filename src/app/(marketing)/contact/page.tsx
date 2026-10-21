import type { Metadata } from "next";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "@/components/ui/ContactForm";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Private Intake",
  description:
    "Vraag een discreet private consult aan bij Aura Boutique Kraamzorg. Wij reageren binnen 24 uur.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 lg:pt-44 pb-16 lg:pb-20 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeIn>
            <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-sage mb-6">
              Contact
            </p>
            <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-light tracking-[-0.03em] text-charcoal leading-[1.05]">
              Private
              <br />
              <em className="italic">intake</em>
            </h1>
            <p className="mt-6 text-muted max-w-md font-light leading-relaxed">
              Deel uw wensen in alle discretie. Wij nemen binnen 24 uur persoonlijk
              contact op.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-alabaster">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <FadeIn>
                <p className="text-[0.65rem] font-medium tracking-[0.16em] uppercase text-subtle mb-4">
                  Direct
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-charcoal font-light hover:opacity-70 transition-opacity"
                >
                  {siteConfig.email}
                </a>
              </FadeIn>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <FadeIn delay={0.1}>
                <ContactForm />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
