"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export function Preloader() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Only run on client
    const hasLoaded = sessionStorage.getItem("aceup_preloaded");
    if (hasLoaded) {
      return;
    }

    setVisible(true);

    const timerFade = setTimeout(() => {
      setFading(true);
    }, 1100);

    const timerDismiss = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("aceup_preloaded", "true");
    }, 1500);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerDismiss);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-label="ACEUP Preloader"
      onClick={() => {
        setVisible(false);
        sessionStorage.setItem("aceup_preloaded", "true");
      }}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-400 cursor-pointer ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Glow behind star */}
        <div className="absolute w-44 h-44 rounded-full bg-[#005CFF]/20 blur-3xl pointer-events-none animate-pulse" />

        {/* ACEUP Shooting Star Symbol */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6 transform transition-transform duration-700 ease-out hover:scale-105">
          <Image
            src="/assets/brand/star.png"
            alt="ACEUP Star"
            fill
            priority
            sizes="(max-width: 768px) 112px, 128px"
            className="object-contain drop-shadow-[0_0_25px_rgba(0,92,255,0.45)]"
          />
          {/* Metallic light sheen sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full animate-[shimmer_1.2s_infinite] pointer-events-none mix-blend-overlay" />
        </div>

        {/* Minimal status indicator */}
        <div className="flex items-center gap-2 tracking-[0.25em] text-[10px] uppercase font-mono text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF] animate-ping" />
          <span>FLOOR ART ARCHIVE</span>
        </div>
      </div>
    </div>
  );
}
