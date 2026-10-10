"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, Eye, Home } from "lucide-react";

export function ImmersiveMomentSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "FLOATING ARTWORK",
      desc: "Pure graphic silhouette isolated on black negative space. Designed with vector precision.",
      image: "/assets/art/los-santos.png",
      badge: "STEP 01 // PLANAR GEOMETRY",
      icon: Layers,
    },
    {
      step: "02",
      title: "PERSPECTIVE SHIFT",
      desc: "Rotated in three-dimensional room space to test angle, proportion, and line-of-sight.",
      image: "/assets/art/ace-croc-flatlay.jpg",
      badge: "STEP 02 // 3D PERSPECTIVE",
      icon: Eye,
    },
    {
      step: "03",
      title: "1500 GSM MACRO WEAVE",
      desc: "Dense crystal micro-velvet fibers absorb ambient light and lock dye molecules deep inside.",
      image: "/assets/art/ace-croc-macro.jpg",
      badge: "STEP 03 // TEXTILE HARDWARE",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "ROOM INTEGRATION",
      desc: "Anchored directly beneath dual-monitor setups and aesthetic bedroom battlestations.",
      image: "/assets/rooms/room-after.jpg",
      badge: "STEP 04 // ROOM FIT",
      icon: Home,
    },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#005CFF]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // IMMERSIVE VISUAL MOMENT
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            YOUR FLOOR IS PART OF THE FIT.
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light">
            Follow the journey from isolated digital vector artwork to dense, tactile 1500 GSM room architecture.
          </p>
        </div>

        {/* Interactive Step Switcher & Media Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Step Selector */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((item, idx) => {
              const active = activeStep === idx;
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    active
                      ? "bg-[#0b0b0d] border-[#005CFF] shadow-[0_0_30px_rgba(0,92,255,0.2)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold tracking-widest ${
                        active ? "text-[#00A8FF]" : "text-zinc-500"
                      }`}
                    >
                      {item.badge}
                    </span>
                    <Icon
                      size={16}
                      className={active ? "text-[#00A8FF]" : "text-zinc-600"}
                    />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Stage Media Display */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl">
              <Image
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-all duration-700 ease-out"
              />

              {/* Dynamic Overlay Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#050505]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono text-[#00A8FF] uppercase tracking-widest">
                    ACTIVE EXPLORATION
                  </div>
                  <div className="text-sm font-bold font-heading text-white">
                    {steps[activeStep].title}
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-zinc-400">
                  {steps[activeStep].step} / 04
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Step 5 Finale Punch */}
        <div className="mt-16 text-center">
          <div className="inline-block py-3 px-8 rounded-full bg-gradient-to-r from-white/10 via-[#005CFF]/20 to-white/10 border border-[#00A8FF]/30 text-xs md:text-sm font-mono tracking-widest uppercase text-white font-bold">
            STEP 05 // STATEMENT REALIZED: YOUR FLOOR IS PART OF THE FIT.
          </div>
        </div>

      </div>
    </section>
  );
}
