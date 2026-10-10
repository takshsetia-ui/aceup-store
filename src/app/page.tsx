import { HeroSection } from "@/components/sections/HeroSection";
import { ManifestoSection } from "@/components/sections/ManifestoSection";
import { FeaturedArtSection } from "@/components/sections/FeaturedArtSection";
import { ImmersiveMomentSection } from "@/components/sections/ImmersiveMomentSection";
import { CollectionStorySection } from "@/components/sections/CollectionStorySection";
import { MaterialSection } from "@/components/sections/MaterialSection";
import { RoomsSection } from "@/components/sections/RoomsSection";
import { BrandStatementSection } from "@/components/sections/BrandStatementSection";
import { SeenOnFloorSection } from "@/components/sections/SeenOnFloorSection";
import { DropClubSection } from "@/components/sections/DropClubSection";

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
