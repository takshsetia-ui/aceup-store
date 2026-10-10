import React from "react";
import Image from "next/image";
import { Instagram } from "lucide-react";

export function SeenOnFloorSection() {
  const posts = [
    { image: "/assets/rooms/room-after.jpg", title: "Midnight Battlestation // Sector 44" },
    { image: "/assets/art/ace-croc-lifestyle.jpg", title: "Sneakerhead Corner // Mumbai" },
    { image: "/assets/art/los-santos.png", title: "Satellite Blueprint // Bangalore Setup" },
    { image: "/assets/art/ace-croc-macro.jpg", title: "Macro 1500 GSM Texture Study" },
  ];

  return (
    <section className="relative py-28 md:py-36 bg-[#0b0b0d] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF] mb-2">
              // COMMUNITY ARCHIVE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading tracking-tight text-white">
              SEEN ON THE FLOOR
            </h2>
            <p className="text-zinc-400 text-sm md:text-base font-light mt-2 max-w-md">
              Real setups, aesthetic bedrooms, and creative rooms captured in the wild.
            </p>
          </div>

          <a
            href="https://instagram.com/aceup.store"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white hover:text-[#00A8FF] transition-colors uppercase self-start md:self-end"
          >
            <Instagram size={15} />
            <span>@ACEUP.STORE</span>
          </a>
        </div>

        {/* Editorial Contact Sheet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden bg-black border border-white/10 aspect-square shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-mono text-[#00A8FF] tracking-wider uppercase">
                  COMMUNITY FIT
                </span>
                <span className="text-xs font-bold font-heading text-white">
                  {post.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
