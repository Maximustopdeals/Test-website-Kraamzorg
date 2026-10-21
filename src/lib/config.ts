/**
 * Aura Boutique Kraamzorg — central site configuration.
 * Fill integration IDs once received.
 */

export const siteConfig = {
  name: "Aura Boutique Kraamzorg",
  shortName: "Aura",
  domain: "https://auraboutiquekraamzorg.nl",
  description:
    "Serene, hyper-gepersonaliseerde kraamzorg. Private concierge-zorg voor moeder en kind — met absolute discretie en toewijding.",
  email: "concierge@auraboutique.nl",
  whatsapp: "https://wa.me/31600000000", // vervang met echt nummer
  phone: "", // optioneel
  address: {
    locality: "Amsterdam",
    region: "Noord-Holland",
    country: "NL",
  },
  areaServed: ["Amsterdam", "Nederland"],
  socials: {
    instagram: "", // optioneel
  },
  // Integrations — leave empty until received
  formspreeFormId: "",
  googleTagManagerId: "",
  googleAnalyticsId: "",
  googleSiteVerification: "",
} as const;

export const formspreeEndpoint = siteConfig.formspreeFormId
  ? `https://formspree.io/f/${siteConfig.formspreeFormId}`
  : "";
