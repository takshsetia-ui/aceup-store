import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "ACEUP | Not A Rug Brand. Floor Art – Premium Statement Rugs",
  description: "ACEUP is India's Gen‑Z floor‑art brand, offering premium streetwear‑inspired rugs for gaming setups, aesthetic bedrooms, and creative spaces. 1500 GSM digital print, anti‑skid backing.",
  canonicalUrl: "https://aceup.store/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <FeaturedArtSection />
      <ImmersiveMomentSection />
      <CollectionStorySection />
      <MaterialSection />
      <RoomsSection />
      <BrandStatementSection />
      <SeenOnFloorSection />
      <DropClubSection />
    </>
  );
}
