import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Story // Brand Manifesto | ACEUP Floor Art",
  description:
    "Rooms have always been personal. The floor somehow got left behind. ACEUP exists to fix that. Read the ACEUP origin manifesto.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Our Story", url: "https://aceup.store/about" },
        ])}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Manifesto Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="relative w-16 h-16 mx-auto">
            <Image
              src="/assets/brand/star.png"
              alt="ACEUP Star"
              fill
              sizes="64px"
              className="object-contain drop-shadow-[0_0_25px_rgba(0,92,255,0.45)]"
            />
          </div>

          <div className="badge-chip badge-blue">
            THE ACEUP MANIFESTO
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-heading tracking-tight text-white leading-tight">
            NOT A RUG BRAND.
            <br />
            <span className="text-chrome">FLOOR ART.</span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Rooms have always been personal.
            The floor somehow got left behind.
            ACEUP exists to fix that.
          </p>
        </div>

        {/* Narrative Chapter 1: The Problem with Traditional Floors */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24">
          <div className="md:col-span-6 space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
              // CHAPTER 01
            </div>
            <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
              YOUR ROOM DESERVES BETTER.
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              Your walls have posters. Your desk has custom mechanical keyboards, dual monitors, and ambient light bars. Your closet has sneaker heat.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              Yet the single largest open surface in your entire room—<strong>the floor</strong>—was completely ignored, covered in faded, scratchy, vintage carpets that look like they belong in a 1990s living room.
            </p>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 font-heading text-sm font-bold text-[#00A8FF]">
              BHAI, FLOOR KO BHI DRIP CHAHIYE.
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
              <Image
                src="/assets/rooms/room-after.jpg"
                alt="Transformed modern bedroom with ACEUP floor art"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Narrative Chapter 2: The Philosophy of Floor Art */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0b0b0d] border border-white/10 mb-24 space-y-8">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // CHAPTER 02: THE DISCIPLINE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
            LUXURY STREETWEAR × DIGITAL CULTURE
          </h2>
          <p className="text-zinc-300 text-base md:text-lg font-light leading-relaxed">
            ACEUP does not produce mass-market household carpets. We operate like a streetwear design label releasing collectible drop capsules. Each edition begins as digital vector art, referencing open-world gaming, satirical currency, and modern subculture.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div>
              <div className="text-2xl font-black font-heading text-[#00A8FF] mb-1">
                1500 GSM
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Heavyweight textile density designed to lay dead flat.
              </div>
            </div>
            <div>
              <div className="text-2xl font-black font-heading text-[#00A8FF] mb-1">
                DYE-BONDED
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Sublimated ink molecularly fused into micro-fibers.
              </div>
            </div>
            <div>
              <div className="text-2xl font-black font-heading text-[#00A8FF] mb-1">
                ANTI-SKID
              </div>
              <div className="text-xs font-mono text-zinc-400">
                Vulcanized dot grip anchors to Indian ceramic and marble.
              </div>
            </div>
          </div>
        </div>

        {/* Closing Action */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
            THE ROOM STARTS FROM THE GROUND UP.
          </h3>
          <div>
            <Link
              href="/floor-art"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase hover:opacity-95 shadow-[0_0_30px_rgba(0,92,255,0.35)] transition-all"
            >
              <span>EXPLORE THE RELEASES</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
