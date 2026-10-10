import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getArtworkBySlug, getAllArtworkSlugs } from "@/data/artwork";
import { ArtworkDetailClient } from "./ArtworkDetailClient";
import { JsonLd, createArtworkSchema, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return getAllArtworkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    return {
      title: "Artwork Not Found | ACEUP",
    };
  }

  return {
    title: `${artwork.title} | ACEUP Floor Art`,
    description: artwork.seoDescription,
    openGraph: {
      title: artwork.seoTitle,
      description: artwork.seoDescription,
      images: [
        {
          url: artwork.heroImage,
          width: 1200,
          height: 900,
          alt: artwork.altText,
        },
      ],
    },
  };
}

export default async function ArtworkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = getArtworkBySlug(slug);

  if (!artwork) {
    notFound();
  }

  return (
    <>
      <JsonLd data={createArtworkSchema(artwork)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Floor Art Catalog", url: "https://aceup.store/floor-art" },
          { name: artwork.title, url: `https://aceup.store/floor-art/${artwork.slug}` },
        ])}
      />
      <ArtworkDetailClient artwork={artwork} />
    </>
  );
}
