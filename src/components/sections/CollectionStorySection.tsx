import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COLLECTIONS } from "@/data/collections";

export function CollectionStorySection() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0b0b0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF] mb-2">
            // EDITORIAL ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white mb-4">
            COLLECTION STORIES
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            Curated visual worlds translated into statement floor art. Designed like magazine spreads rather than ordinary product categories.
          </p>
        </div>

        {/* Editorial Spreads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIONS.map((col, idx) => (
            <div
              key={col.id}
              className="relative p-8 md:p-10 rounded-2xl bg-[#0f0f12] border border-white/10 hover:border-[#005CFF]/40 transition-all duration-500 flex flex-col justify-between group overflow-hidden"
            >
              {/* Subtle accent corner glow */}
              <div
                className="absolute top-0 right-0 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
                style={{ backgroundColor: col.accentColor }}
              />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-500">
                    CAPSULE // 0{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest px-2.5 py-0.5 rounded-full border border-white/10 bg-white/5 text-zinc-300">
                    {col.artworkCount} PIECE
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight group-hover:text-[#00A8FF] transition-colors">
                  {col.name}
                </h3>

                <div className="text-xs font-mono text-[#00A8FF] tracking-wider uppercase font-semibold">
                  {col.tagline}
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {col.statement}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between relative z-10">
                <Link
                  href={`/floor-art/${col.featuredSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-white hover:text-[#00A8FF] transition-colors uppercase"
                >
                  <span>VIEW CAPSULE WORK</span>
                  <ArrowUpRight size={14} />
                </Link>

                <span className="text-[10px] font-mono text-zinc-600 uppercase">
                  LIMITED DROP
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
