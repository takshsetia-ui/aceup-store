import React from "react";
import Image from "next/image";
import { Check, Shield, Sparkles, Move } from "lucide-react";

export function MaterialSection() {
  const specs = [
    {
      title: "1500 GSM DENSITY",
      desc: "Substantial, heavy textile foundation that lays dead flat without curling at the corners.",
    },
    {
      title: "DYE-SUBLIMATION",
      desc: "High-heat ink molecular bonding. Graphics will never crack, peel, or fade under foot traffic.",
    },
    {
      title: "ANTI-SKID VULCANIZED GRIP",
      desc: "High-friction rubberized dot backing anchors securely to ceramic tiles, marble, and laminate.",
    },
    {
      title: "CHAIR-GLIDE WEAVE",
      desc: "Dense low-pile crystal microfiber allows gaming and office caster wheels to roll smoothly.",
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // HARDWARE INTEGRITY
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white leading-tight">
            LOOKS LIKE ART.
            <br />
            <span className="text-chrome">BUILT TO LIVE ON.</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light">
            No compromises on hardware. Engineered specifically for active Indian bedrooms, gaming setups, and student spaces.
          </p>
        </div>

        {/* Media & Specs Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Macro Weave Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-2xl">
              <Image
                src="/assets/art/ace-croc-macro.jpg"
                alt="ACEUP 1500 GSM macro textile weave and print detail"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md rounded border border-white/10 text-[10px] font-mono tracking-widest text-zinc-300">
                MACRO TEXTILE ZOOM // 1500 GSM
              </div>
            </div>
          </div>

          {/* Right Column: Hardware Matrix */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-[#0b0b0d] border border-white/10 hover:border-[#005CFF]/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#005CFF]/15 text-[#00A8FF] flex items-center justify-center mb-3">
                    <Check size={16} />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-white mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Universal Dimension Callout */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-[#005CFF]/10 to-transparent border border-[#005CFF]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-[10px] font-mono text-[#00A8FF] uppercase tracking-widest">
                  UNIVERSAL SCALE
                </div>
                <div className="text-xl font-bold font-heading text-white">
                  3 × 5 FT (91 × 152 CM)
                </div>
                <div className="text-xs text-zinc-400">
                  Standardized footprint fits beside beds and under gaming desks.
                </div>
              </div>
              <div className="shrink-0 px-4 py-2 rounded-full border border-white/20 bg-white/5 text-[11px] font-mono text-zinc-300 uppercase tracking-wider text-center">
                PROPORTIONED PERFECTLY
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
