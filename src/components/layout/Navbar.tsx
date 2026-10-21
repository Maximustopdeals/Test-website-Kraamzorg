"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config";

const links = [
  { href: "/", label: "Home" },
  { href: "/kraamzorg", label: "Kraamzorg" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/reviews", label: "Ervaringen" },
  { href: "/contact", label: "Private intake" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-alabaster/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(26,26,26,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          <Link
            href="/"
            className="font-serif text-xl lg:text-2xl font-light tracking-[0.08em] text-charcoal"
          >
            {siteConfig.shortName}
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Hoofdmenu"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3.5 py-2 text-[0.8rem] tracking-[0.04em] transition-colors duration-400 ${
                  pathname === l.href
                    ? "text-charcoal border border-sage/40"
                    : "text-muted hover:text-charcoal border border-transparent"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden p-2 -mr-2 text-charcoal"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-charcoal/5 bg-alabaster"
          >
            <nav className="px-6 py-6 space-y-1" aria-label="Mobiel menu">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block py-2.5 text-[0.95rem] text-charcoal font-light"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
