import React from "react";
import Image from "next/image";

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative py-28 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#005CFF]/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* ACEUP Shooting Star Symbol used in isolation per brand rule */}
        <div className="relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-8">
          <Image
            src="/assets/brand/star.png"
            alt="ACEUP Star"
            fill
            sizes="64px"
            className="object-contain drop-shadow-[0_0_20px_rgba(0,92,255,0.4)]"
          />
        </div>

        {/* Lead Manifesto Copy */}
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-white leading-[1.15] mb-10">
          YOUR WALLS HAVE POSTERS.
          <br />
          YOUR DESK HAS RGB.
          <br />
          YOUR SNEAKERS SAY SOMETHING.
          <br />
          <span className="text-chrome">WHY SHOULD YOUR FLOOR BE BLANK?</span>
        </div>

        {/* Reveal & Core Philosophy */}
        <p className="text-base sm:text-xl md:text-2xl text-zinc-400 font-light max-w-3xl mx-auto leading-relaxed mb-10">
          Rooms have always been personal. The floor somehow got left behind in the 1990s with dull beige carpets and faded patterns. ACEUP turns the floor into an intentional extension of your room fit.
        </p>

        {/* Brand Stamp Pill */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md">
          <span className="text-[#00A8FF] text-sm">★</span>
          <span className="text-xs md:text-sm font-heading font-extrabold tracking-widest uppercase text-white">
            NOT A RUG BRAND. FLOOR ART.
          </span>
        </div>
      </div>
    </section>
  );
}
