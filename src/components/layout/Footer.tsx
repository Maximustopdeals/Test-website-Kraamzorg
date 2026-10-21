import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/8 bg-cream pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16">
          <div className="md:col-span-5 space-y-5">
            <span className="font-serif text-2xl font-light tracking-[0.06em] text-charcoal">
              {siteConfig.shortName}
            </span>
            <p className="text-sm text-muted max-w-sm leading-relaxed font-light">
              Toegewijd aan een serene, veilige en ongeëvenaarde kraamtijd —
              met absolute discretie en toewijding.
            </p>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[0.65rem] uppercase tracking-[0.16em] text-subtle font-medium">
              Navigatie
            </h4>
            <ul className="space-y-2.5 text-sm text-muted font-light">
              <li>
                <Link href="/" className="hover:text-charcoal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/kraamzorg"
                  className="hover:text-charcoal transition-colors"
                >
                  Boutique kraamzorg
                </Link>
              </li>
              <li>
                <Link
                  href="/over-mij"
                  className="hover:text-charcoal transition-colors"
                >
                  Over mij
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews"
                  className="hover:text-charcoal transition-colors"
                >
                  Cliënt-ervaringen
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-charcoal transition-colors"
                >
                  Private intake
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[0.65rem] uppercase tracking-[0.16em] text-subtle font-medium">
              Contact & privacy
            </h4>
            <p className="text-sm text-muted leading-relaxed font-light">
              Beschikbaar in heel Nederland.
              <br />
              Volledige discretie gewaarborgd.
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-block text-sm text-charcoal font-medium tracking-wide hover:opacity-70 transition-opacity"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="border-t border-charcoal/8 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-[0.7rem] text-subtle tracking-wider">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-muted transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
