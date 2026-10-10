import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield, Layers, RefreshCw, Sparkles, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Material & Craft // 1500 GSM Hardware | ACEUP Floor Art",
  description:
    "Engineering specifications behind ACEUP floor art: 1500 GSM textile density, dye-sublimation print fidelity, vulcanized rubber grip, and care protocols.",
};

export default function CraftPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Material & Craft", url: "https://aceup.store/craft" },
        ])}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // HARDWARE SPECIFICATIONS
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            LOOKS LIKE ART.
            <br />
            <span className="text-chrome">BUILT TO LIVE ON.</span>
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Every ACEUP statement rug is an industrial-grade textile object engineered for active rooms, desk chairs, and everyday foot traffic across Indian flooring.
          </p>
        </div>

        {/* Macro Texture Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-24">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
              <Image
                src="/assets/art/ace-croc-macro.jpg"
                alt="Macro close-up of ACEUP 1500 GSM crystal velvet textile"
                fill
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono tracking-widest text-zinc-300">
                1500 GSM // HIGH DENSITY MICRO-VELVET
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="badge-chip badge-blue">SURFACE WEAVE</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                CRYSTAL MICROFIBER SURFACE
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                We use an ultra-dense, low-pile crystal microfiber. This eliminates the coarse roughness of traditional wool or cheap polyester loop, providing a smooth surface that feels velvety under bare feet while allowing office and gaming chair wheels to glide effortlessly.
              </p>
            </div>

            <div className="space-y-2">
              <span className="badge-chip badge-blue">MOLECULAR INK</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                THERMAL DYE-SUBLIMATION
              </h2>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Standard screen printing places a thick layer of rubberized ink on top of fibers that eventually cracks and rubs away. Dye-sublimation turns solid dye into gas under intense heat, bonding color into the textile molecules. The graphics become part of the fabric itself.
              </p>
            </div>
          </div>
        </div>

        {/* Engineering Anatomy Breakdown */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#0b0b0d] border border-white/10 mb-24">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF] mb-4">
            // HARDWARE SPECIFICATION MATRIX
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase">PROPORTION</div>
              <div className="text-2xl font-bold font-heading text-white">3 × 5 FT</div>
              <p className="text-xs text-zinc-400 font-light">
                91 × 152 CM universal scale. Fits bedside and under desk setups.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase">WEIGHT & DENSITY</div>
              <div className="text-2xl font-bold font-heading text-[#00A8FF]">1500 GSM</div>
              <p className="text-xs text-zinc-400 font-light">
                Substantial mass (approx. 2.1 kg) prevents curling and bunching.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase">SUBSTRATE BACKING</div>
              <div className="text-2xl font-bold font-heading text-white">TPR GRIP</div>
              <p className="text-xs text-zinc-400 font-light">
                High-friction vulcanized rubber dots hold firm on marble, tiles, and wood.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-white/[0.03] border border-white/5 space-y-2">
              <div className="text-xs font-mono text-zinc-500 uppercase">BORDER STITCHING</div>
              <div className="text-2xl font-bold font-heading text-white">REINFORCED</div>
              <p className="text-xs text-zinc-400 font-light">
                Double-stitched bound edges prevent fraying under foot traffic.
              </p>
            </div>
          </div>
        </div>

        {/* Cleaning & Maintenance Directives */}
        <div className="mb-24 space-y-8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF] mb-2">
              // LONGEVITY & PRESERVATION
            </div>
            <h2 className="text-3xl font-black font-heading text-white">
              CARE & MAINTENANCE PROTOCOLS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">
                01
              </div>
              <h3 className="text-lg font-bold font-heading text-white">ROUTINE DUSTING</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Vacuum once or twice weekly with a standard suction or soft-brush vacuum nozzle. For quick cleaning, simply shake the rug outdoors to dislodge surface dust.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">
                02
              </div>
              <h3 className="text-lg font-bold font-heading text-white">ACCIDENTAL SPILLS</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Do not rub aggressive stains. Blot immediately with a clean, dry microfiber cloth. Spot clean gently using cold water and mild liquid detergent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-3">
              <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center font-mono text-xs font-bold">
                03
              </div>
              <h3 className="text-lg font-bold font-heading text-white">WHAT TO AVOID</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">
                Do not machine-tumble dry, iron directly, dry clean, or use chlorine bleach. Lay flat to air dry in shaded indoor environments.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/floor-art"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors"
          >
            <span>VIEW THE FLOOR ART RELEASES</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
