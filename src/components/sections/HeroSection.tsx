"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { StarCanvas } from "@/components/three/StarCanvas";

export function HeroSection() {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-12 overflow-hidden bg-[#050505]">
      {/* Background Volumetric Blue Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#005CFF]/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-[#00A8FF]/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Bold Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Brand Micro-Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-pulse" />
              <span className="text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase text-zinc-300">
                LIMITED RUN // DROP 01 LIVE
              </span>
            </div>

            {/* Oversized Brand Statement */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tighter leading-[0.92] text-white">
              NOT A RUG BRAND.
              <br />
              <span className="text-chrome">FLOOR ART.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-light">
              Statement pieces built for rooms that refuse to look ordinary. 
              1500 GSM high-density floor canvases for bedrooms, gaming setups, and aesthetic spaces.
            </p>

            {/* Micro Specs Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="text-[#00A8FF]">★</span>
                <span>3 × 5 FT FORMAT</span>
              </div>
              <span className="text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00A8FF]">★</span>
                <span>1500 GSM DENSITY</span>
              </div>
              <span className="text-zinc-700">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[#00A8FF]">★</span>
                <span>VULCANIZED GRIP</span>
              </div>
            </div>

            {/* Informational Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/floor-art"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase hover:opacity-95 hover:shadow-[0_0_30px_rgba(0,92,255,0.4)] transition-all flex items-center gap-2 group"
              >
                <span>EXPLORE FLOOR ART</span>
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-mono text-xs tracking-widest uppercase transition-all"
              >
                DISCOVER ACEUP
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Artwork & 3D Interactive Element */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Interactive 3D Shooting Star Element */}
            <div className="relative w-full aspect-square max-w-[460px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                <StarCanvas size={380} interactive={true} />
              </div>

              {/* Floating Featured Product Preview Badge */}
              <div className="absolute -bottom-4 right-2 md:right-6 z-20 p-4 rounded-xl bg-[#0B0B0D]/90 backdrop-blur-xl border border-white/10 shadow-2xl max-w-[240px]">
                <div className="text-[10px] font-mono text-[#00A8FF] uppercase tracking-wider mb-1">
                  FEATURED WORK
                </div>
                <div className="text-sm font-bold font-heading text-white mb-2">
                  LOS SANTOS MAP RUG
                </div>
                <Link
                  href="/floor-art/los-santos"
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-300 hover:text-white uppercase tracking-wider"
                >
                  <span>VIEW DETAILS</span>
                  <ArrowRight size={12} className="text-[#00A8FF]" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between text-xs font-mono text-zinc-500 pt-8 border-t border-white/5">
        <div className="flex items-center gap-2">
          <Sparkles size={13} className="text-[#00A8FF]" />
          <span>INDIAN FLOOR ART LABEL // NEW DELHI</span>
        </div>
        <a
          href="#manifesto"
          className="hidden sm:flex items-center gap-2 hover:text-zinc-300 transition-colors uppercase tracking-widest text-[10px]"
        >
          <span>SCROLL TO ENTER</span>
          <ArrowDown size={12} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
