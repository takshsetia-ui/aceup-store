import React from "react";
import { RoomSlider } from "@/components/comparison/RoomSlider";

export function RoomsSection() {
  const rooms = [
    { name: "GAMING SETUP", desc: "RGB battlestations, mechanical keyboards, dual monitors." },
    { name: "AESTHETIC BEDROOM", desc: "Platform beds, ambient lamps, bedside grounding." },
    { name: "HOSTEL & DORM ROOM", desc: "Transforms drab standard flooring into personal territory." },
    { name: "CREATIVE STUDIO", desc: "Music production desk, editing suite, podcast floor." },
    { name: "URBAN APARTMENT", desc: "Statement centerpiece for minimalist living rooms." },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#0b0b0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // SPACES & ENVIRONMENTS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
            WHERE ACEUP BELONGS
          </h2>
          <p className="text-zinc-400 text-sm md:text-base font-light">
            Designed for environments where standard decor falls flat. Drag the slider below to witness a real room transformation.
          </p>
        </div>

        {/* Room Types Micro Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-zinc-300 tracking-wider uppercase hover:border-[#005CFF]/40 transition-colors"
            >
              {room.name}
            </div>
          ))}
        </div>

        {/* Interactive Before & After Slider */}
        <RoomSlider
          beforeImage="/assets/rooms/room-before.jpg"
          afterImage="/assets/rooms/room-after.jpg"
          beforeLabel="BEFORE // BARE BEDROOM"
          afterLabel="AFTER // ACEUP STATEMENT"
        />

        {/* Video Feature Highlight */}
        <div className="mt-20 rounded-2xl bg-[#050505] border border-white/10 p-6 md:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="badge-chip badge-blue">CINEMATIC CAPTURE</span>
              <h3 className="text-2xl md:text-3xl font-black font-heading text-white">
                IN SITU: GAMING SETUP
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed">
                Watch how the statement rug anchors an illuminated PC gaming command center. 
                The low-pile 1500 GSM textile provides smooth wheel gliding and deep contrast under ambient RGB lighting.
              </p>
              <div className="text-xs font-mono text-zinc-500 pt-2">
                FOOTAGE: LIVE SETUP // NEW DELHI STUDIO
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-black">
                <video
                  src="/assets/video/gaming-setup.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
