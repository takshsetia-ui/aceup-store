import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ARTWORKS } from "@/data/artwork";
import { ArtworkCard } from "@/components/artwork/ArtworkCard";

export function FeaturedArtSection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0b0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF] mb-2">
              // CURRENT RELEASES & ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
              FEATURED FLOOR ART
            </h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-lg mt-2 font-light">
              Collectible statement editions engineered with 1500 GSM digital print textiles and vulcanized anti-skid grip.
            </p>
          </div>

          <Link
            href="/floor-art"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white hover:text-[#00A8FF] transition-colors uppercase self-start md:self-end"
          >
            <span>VIEW ALL EDITIONS ({ARTWORKS.length})</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Artwork Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {ARTWORKS.map((artwork, idx) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} priority={idx < 2} />
          ))}
        </div>

      </div>
    </section>
  );
}
