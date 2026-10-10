"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Maximize2, Shield, Sparkles } from "lucide-react";
import type { Artwork } from "@/data/artwork";
import { ARTWORKS } from "@/data/artwork";
import { ArtworkCard } from "@/components/artwork/ArtworkCard";
import { InquiryModal } from "@/components/artwork/InquiryModal";

interface ArtworkDetailClientProps {
  artwork: Artwork;
}

export function ArtworkDetailClient({ artwork }: ArtworkDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState(artwork.heroImage);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  const relatedArtworks = ARTWORKS.filter((item) => item.slug !== artwork.slug).slice(0, 2);

  return (
    <div className="pt-28 md:pt-36 pb-28 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/floor-art"
            className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft size={14} />
            <span>BACK TO ALL FLOOR ART</span>
          </Link>
        </div>

        {/* Main Artwork Grid: Media + Concept Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
          
          {/* Left Column: Visual Presentation & Gallery */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Stage Image */}
            <div
              onClick={() => setZoomOpen(true)}
              className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-black/60 border border-white/15 shadow-2xl cursor-zoom-in group"
            >
              <Image
                src={selectedImage}
                alt={artwork.altText}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>

              <div className="absolute bottom-4 left-4 z-10 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono tracking-widest text-zinc-300">
                CLICK TO EXPAND HIGH-RES
              </div>
            </div>

            {/* Gallery Thumbnails */}
            {artwork.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {artwork.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-24 h-20 rounded-lg overflow-hidden border transition-all shrink-0 ${
                      selectedImage === img
                        ? "border-[#005CFF] ring-2 ring-[#005CFF]/30 scale-105"
                        : "border-white/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${artwork.title} view ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Video Showcase if present */}
            {artwork.video && (
              <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-4">
                <div className="text-[11px] font-mono text-[#00A8FF] uppercase tracking-widest">
                  CINEMATIC ROOM IN SITU
                </div>
                <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                  <video
                    src={artwork.video}
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Editorial Story & Specifications */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Status & Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="badge-chip badge-blue">
                  ★ {artwork.status}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase">
                  {artwork.editionDetails}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading tracking-tight text-white">
                {artwork.title}
              </h1>

              <div className="text-sm font-mono text-[#00A8FF] tracking-wider uppercase font-semibold">
                COLLECTION: {artwork.collection}
              </div>

              <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
                {artwork.description}
              </p>
            </div>

            {/* Concept Origin */}
            <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
                CONCEPT & DESIGN INTENT
              </h3>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                {artwork.concept}
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-500">
                VISUAL MOOD: {artwork.visualMood}
              </div>
            </div>

            {/* Hardware Specification Matrix */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                HARDWARE SPECIFICATIONS
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-zinc-500 block text-[10px]">DIMENSIONS</span>
                  <span className="text-white font-bold">{artwork.dimensions}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-zinc-500 block text-[10px]">TEXTILE DENSITY</span>
                  <span className="text-[#00A8FF] font-bold">{artwork.gsm} GSM</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 col-span-2">
                  <span className="text-zinc-500 block text-[10px]">SURFACE WEAVE</span>
                  <span className="text-white">{artwork.surface}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5 col-span-2">
                  <span className="text-zinc-500 block text-[10px]">BACKING & GRIP</span>
                  <span className="text-white">{artwork.backing}</span>
                </div>
              </div>
            </div>

            {/* Room Placement Recommendation */}
            <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] text-xs space-y-1">
              <span className="font-mono text-zinc-500 uppercase tracking-wider block">
                RECOMMENDED ROOM PLACEMENT:
              </span>
              <p className="text-zinc-300 font-light">
                {artwork.roomRecommendation}
              </p>
            </div>

            {/* Collector Action - Inquire */}
            <div className="pt-4 space-y-3">
              <button
                onClick={() => setInquiryOpen(true)}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase hover:opacity-95 shadow-[0_0_30px_rgba(0,92,255,0.35)] transition-all flex items-center justify-center gap-2"
              >
                <span>ASK ABOUT THIS PIECE</span>
                <ArrowUpRight size={15} />
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500">
                <Shield size={12} className="text-[#00A8FF]" />
                <span>INFORMATIONAL ONLY // INQUIRE DIRECTLY WITH THE STUDIO</span>
              </div>
            </div>

          </div>

        </div>

        {/* Related Works */}
        <div className="border-t border-white/10 pt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold font-heading text-white">
              MORE FLOOR ART EDITIONS
            </h2>
            <Link
              href="/floor-art"
              className="text-xs font-mono text-[#00A8FF] hover:text-white uppercase tracking-wider"
            >
              VIEW ALL EDITIONS →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArtworks.map((item) => (
              <ArtworkCard key={item.slug} artwork={item} />
            ))}
          </div>
        </div>

      </div>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        pieceTitle={artwork.title}
      />

      {/* Fullscreen Zoom Modal */}
      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setZoomOpen(false)}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out animate-fadeIn"
        >
          <div className="relative w-full max-w-5xl aspect-[4/3] max-h-[85vh]">
            <Image
              src={selectedImage}
              alt={artwork.altText}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
