import React from "react";
import Image from "next/image";

export function BrandStatementSection() {
  return (
    <section className="relative py-32 md:py-48 bg-[#050505] border-t border-white/10 overflow-hidden text-center">
      {/* Dynamic ambient chrome/blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-80 bg-[#005CFF]/15 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Isolated Shooting Star Symbol */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto">
          <Image
            src="/assets/brand/star.png"
            alt="ACEUP Star"
            fill
            sizes="80px"
            className="object-contain drop-shadow-[0_0_30px_rgba(0,92,255,0.5)]"
          />
        </div>

        {/* Oversized Fullscreen Typographic Punch */}
        <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter text-white leading-[0.95]">
          YOUR ROOM SAYS SOMETHING.
          <br />
          <span className="text-chrome">MAKE THE FLOOR PART OF IT.</span>
        </div>

        {/* Closing Wordmark & Brand Line */}
        <div className="pt-6">
          <div className="text-xl sm:text-2xl md:text-3xl font-heading font-extrabold text-[#00A8FF] tracking-widest uppercase">
            ACEUP.
          </div>
          <div className="text-xs md:text-sm font-mono tracking-[0.25em] text-zinc-500 uppercase mt-2">
            NOT A RUG BRAND. FLOOR ART.
          </div>
        </div>
      </div>
    </section>
  );
}
