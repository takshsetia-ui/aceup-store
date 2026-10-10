"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Artwork } from "@/data/artwork";
import { InquiryModal } from "./InquiryModal";

interface ArtworkCardProps {
  artwork: Artwork;
  priority?: boolean;
}

export function ArtworkCard({ artwork, priority = false }: ArtworkCardProps) {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <>
      <div className="group relative flex flex-col rounded-2xl bg-[#0b0b0d] border border-white/10 hover:border-[#005CFF]/40 transition-all duration-500 overflow-hidden shadow-xl">
        {/* Media Container */}
        <Link
          href={`/floor-art/${artwork.slug}`}
          className="relative aspect-[4/3] w-full overflow-hidden bg-black/40 block"
        >
          <Image
            src={artwork.heroImage}
            alt={artwork.altText}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Status Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={`badge-chip ${
                artwork.status === "FEATURED DROP"
                  ? "badge-blue"
                  : artwork.status === "LIMITED EDITION"
                  ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                  : "bg-white/10 text-zinc-300 border-white/20"
              }`}
            >
              ★ {artwork.status}
            </span>
          </div>

          {/* Collection Tag */}
          <div className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-zinc-400">
            {artwork.collection}
          </div>
        </Link>

        {/* Content Details */}
        <div className="p-6 flex flex-col flex-grow justify-between">
          <div>
            {/* Micro specs */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 tracking-wider mb-2 uppercase">
              <span>{artwork.dimensions}</span>
              <span>•</span>
              <span className="text-[#00A8FF]">{artwork.gsm} GSM</span>
              <span>•</span>
              <span>ANTI-SKID</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight mb-2 group-hover:text-[#00A8FF] transition-colors">
              <Link href={`/floor-art/${artwork.slug}`}>{artwork.title}</Link>
            </h3>

            <p className="text-xs md:text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
              {artwork.subtitle}
            </p>
          </div>

          {/* Card Actions */}
          <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
            <Link
              href={`/floor-art/${artwork.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider text-white hover:text-[#00A8FF] transition-colors uppercase"
            >
              <span>VIEW ARTWORK</span>
              <ArrowUpRight size={14} />
            </Link>

            <button
              onClick={() => setIsInquiryOpen(true)}
              className="text-[11px] font-mono uppercase px-3 py-1.5 rounded-full border border-white/15 text-zinc-300 hover:text-white hover:border-[#005CFF] hover:bg-[#005CFF]/10 transition-all"
            >
              INQUIRE
            </button>
          </div>
        </div>
      </div>

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        pieceTitle={artwork.title}
      />
    </>
  );
}
