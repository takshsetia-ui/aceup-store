import React from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ACEUP",
    legalName: "ACEUP Floor Art",
    url: "https://aceup.store",
    logo: "https://aceup.store/assets/brand/wordmark.png",
    description: "Indian Gen-Z floor-art brand creating statement rugs for bedrooms, gaming setups, apartments, and aesthetic spaces.",
    foundingLocation: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Floor Art",
      "Statement Rugs",
      "Gaming Setup Aesthetics",
      "Textile Design",
      "Streetwear Decor",
    ],
    sameAs: [
      "https://instagram.com/aceup.store",
    ],
  };
}

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ACEUP",
    url: "https://aceup.store",
    description: "Not a rug brand. Floor art. Statement pieces built for rooms that refuse to look ordinary.",
    inLanguage: "en-IN",
  };
}

export function createArtworkSchema(artwork: {
  title: string;
  description: string;
  heroImage: string;
  dimensions: string;
  gsm: number;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    name: artwork.title,
    description: artwork.description,
    image: `https://aceup.store${artwork.heroImage}`,
    creator: {
      "@type": "Organization",
      name: "ACEUP",
    },
    artMedium: "1500 GSM Crystal Microfiber with Vulcanized Anti-Skid Rubber Backing",
    artform: "Floor Art Statement Textile",
    width: "91 cm",
    height: "152 cm",
    url: `https://aceup.store/floor-art/${artwork.slug}`,
  };
}

export function createFaqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
