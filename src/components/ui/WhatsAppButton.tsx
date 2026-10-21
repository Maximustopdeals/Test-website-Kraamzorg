"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export default function WhatsAppButton() {
  if (!siteConfig.whatsapp) return null;

  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-8 left-6 z-50 flex items-center gap-3 bg-alabaster/95 backdrop-blur-sm border border-charcoal/8 px-4 py-3 rounded-full shadow-[0_4px_24px_rgba(26,26,26,0.06)] hover:shadow-[0_8px_32px_rgba(26,26,26,0.1)] transition-shadow duration-500 group"
      aria-label="Private Concierge via WhatsApp"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-sage" />
      <span className="text-[0.65rem] font-sans tracking-[0.14em] uppercase text-muted group-hover:text-charcoal transition-colors duration-400">
        Private Concierge
      </span>
    </motion.a>
  );
}
