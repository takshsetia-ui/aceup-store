"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ARTWORKS } from "@/data/artwork";
import { ArtworkCard } from "@/components/artwork/ArtworkCard";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export default function FloorArtPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "GAMING SETUP",
    "STREETWEAR & CULTURE",
    "CULTURE & POP",
    "MINIMAL & MODERN",
  ];

  const filteredArtworks =
    selectedCategory === "ALL"
      ? ARTWORKS
      : ARTWORKS.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Floor Art Catalog", url: "https://aceup.store/floor-art" },
        ])}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // COLLECTIBLE ARCHIVE
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
            FLOOR ART RELEASES
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Every piece is designed as collectible visual art for the floor. High-density 1500 GSM textile construction with vulcanized anti-skid backing.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2.5 pb-8 mb-12 border-b border-white/10">
          {categories.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                  active
                    ? "bg-[#005CFF] text-white font-bold shadow-[0_0_20px_rgba(0,92,255,0.4)]"
                    : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid of Artworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>

        {/* Informational Guidance Callout */}
        <div className="mt-20 p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono text-[#00A8FF] tracking-widest uppercase">
            INFORMATIONAL ARCHIVE // DROP MODEL
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white">
            INTERESTED IN A SPECIFIC EDITION?
          </h3>
          <p className="text-zinc-400 text-sm font-light">
            ACEUP does not operate an ordinary shopping cart. Pieces drop in limited runs. 
            Click into any artwork to read its design story and submit a collector inquiry.
          </p>
        </div>

      </div>
    </div>
  );
}
