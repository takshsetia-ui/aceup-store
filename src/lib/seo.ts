import type { Metadata } from "next";

export const SITE_CONFIG = {
  name: "ACEUP",
  title: "ACEUP | Premium Statement Rugs & Floor Art India",
  description: "ACEUP is India's premium Gen-Z floor art brand, specializing in streetwear-inspired statement rugs for gaming setups, aesthetic bedrooms, and hype spaces. 1500 GSM digital print quality.",
  url: "https://aceup.store",
  ogImage: "https://aceup.store/assets/brand/wordmark-black-bg.png",
  twitterHandle: "@aceup_store",
  brandMotto: "NOT A RUG BRAND. FLOOR ART.",
};

export function constructMetadata({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  image = SITE_CONFIG.ogImage,
  canonicalUrl = SITE_CONFIG.url,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: SITE_CONFIG.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
