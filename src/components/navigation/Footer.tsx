import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-[#005CFF]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Col 1: Wordmark & Core Manifesto */}
          <div className="md:col-span-6 space-y-6">
            <div className="relative w-48 md:w-64 h-14 md:h-20">
              <Image
                src="/assets/brand/wordmark.png"
                alt="ACEUP Official Wordmark"
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-zinc-400 text-sm md:text-base max-w-md leading-relaxed">
              NOT A RUG BRAND. FLOOR ART.
              <br />
              Statement pieces designed for bedrooms, gaming setups, and creative rooms that refuse to look ordinary.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>STUDIO & DESIGN: NEW DELHI, INDIA</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              EXPLORE ARCHIVE
            </h4>
            <ul className="space-y-2.5 text-sm font-mono text-zinc-400">
              <li>
                <Link href="/floor-art" className="hover:text-white transition-colors">
                  Floor Art Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Brand Manifesto
                </Link>
              </li>
              <li>
                <Link href="/craft" className="hover:text-white transition-colors">
                  Material & Craft (1500 GSM)
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Studio Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Directives & Legal */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
              DIRECTIVES & POLICIES
            </h4>
            <ul className="space-y-2.5 text-sm font-mono text-zinc-400">
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Free India Delivery
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Collector Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://instagram.com/aceup.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Instagram @aceup.store</span>
                  <span className="text-xs text-[#00A8FF]">↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} ACEUP (aceup.store). ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 tracking-widest uppercase text-[11px] text-zinc-400">
            <span>NOT A RUG BRAND.</span>
            <span className="text-[#005CFF] font-bold">FLOOR ART.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
