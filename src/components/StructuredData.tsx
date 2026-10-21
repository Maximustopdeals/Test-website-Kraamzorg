import { siteConfig } from "@/lib/config";

export default function StructuredData() {
  const business = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "@id": `${siteConfig.domain}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.domain,
    email: siteConfig.email,
    priceRange: "€€€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    medicalSpecialty: "MaternityCare",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.domain}/#website`,
    url: siteConfig.domain,
    name: siteConfig.name,
    publisher: { "@id": `${siteConfig.domain}/#organization` },
    inLanguage: "nl-NL",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
