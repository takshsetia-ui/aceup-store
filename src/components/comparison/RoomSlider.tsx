"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface RoomSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function RoomSlider({
  beforeImage = "/assets/rooms/room-before.jpg",
  afterImage = "/assets/rooms/room-after.jpg",
  beforeLabel = "BEFORE // BARE FLOOR",
  afterLabel = "AFTER // ACEUP STATEMENT",
}: RoomSliderProps) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-8">
      <div
        ref={containerRef}
        role="slider"
        aria-label="Room Transformation Before and After Slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#005CFF]"
      >
        {/* Before Image (Base background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={beforeImage}
            alt="Room before ACEUP floor art placement"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/75 backdrop-blur-md rounded border border-white/10 text-[11px] font-mono tracking-widest text-zinc-400">
            {beforeLabel}
          </div>
        </div>

        {/* After Image (Clipped overlay) */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <Image
            src={afterImage}
            alt="Room after ACEUP floor art placement"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
            priority
          />
          <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#005CFF]/90 backdrop-blur-md rounded border border-[#00A8FF]/40 text-[11px] font-mono tracking-widest text-white font-bold shadow-lg">
            {afterLabel}
          </div>
        </div>

        {/* Center Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-white via-[#00A8FF] to-white pointer-events-none shadow-[0_0_12px_rgba(0,168,255,0.8)]"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Circular Grab Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#00A8FF] shadow-[0_0_20px_rgba(0,92,255,0.7)] flex items-center justify-center text-white text-xs font-mono">
            <span className="flex items-center gap-0.5 tracking-tighter font-bold">
              ‹›
            </span>
          </div>
        </div>
      </div>

      {/* Helper caption */}
      <div className="flex items-center justify-between mt-3 text-xs text-zinc-500 font-mono">
        <span>DRAG TO REVEAL TRANSFORMATION</span>
        <span>KEYBOARD [←] / [→] SUPPORTED</span>
      </div>
    </div>
  );
}
