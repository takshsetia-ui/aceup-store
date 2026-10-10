import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative w-20 h-20 mb-6">
        <Image
          src="/assets/brand/star.png"
          alt="ACEUP Star"
          fill
          sizes="80px"
          className="object-contain drop-shadow-[0_0_25px_rgba(0,92,255,0.4)]"
        />
      </div>

      <div className="badge-chip badge-blue mb-4">
        ERROR // 404
      </div>

      <h1 className="text-5xl sm:text-7xl font-black font-heading text-white mb-4">
        FLOOR IS EMPTY.
      </h1>

      <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto font-light mb-8">
        The coordinate you are looking for has been archived or does not exist.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs font-mono tracking-widest uppercase hover:bg-zinc-200 transition-colors"
      >
        <ArrowLeft size={14} />
        <span>RETURN TO HOMEPAGE</span>
      </Link>
    </div>
  );
}
