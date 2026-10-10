"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { InquiryModal } from "@/components/artwork/InquiryModal";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "FLOOR ART", href: "/floor-art" },
    { label: "OUR STORY", href: "/about" },
    { label: "MATERIALS & CRAFT", href: "/craft" },
    { label: "FAQ", href: "/faq" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity - Official Wordmark alone as specified in brand usage rules */}
          <Link
            href="/"
            className="relative flex items-center group focus:outline-none focus:ring-2 focus:ring-[#005CFF] rounded-lg"
            aria-label="ACEUP Homepage"
          >
            <div className="relative w-28 md:w-36 h-8 md:h-10 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/brand/wordmark.png"
                alt="ACEUP"
                fill
                priority
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs font-mono tracking-widest uppercase transition-colors py-1 group ${
                    active ? "text-[#00A8FF] font-bold" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#005CFF] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setInquiryOpen(true)}
              className="px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-[#005CFF]/15 hover:border-[#005CFF] text-[11px] font-mono tracking-widest text-white transition-all uppercase flex items-center gap-1.5 shadow-sm"
            >
              <span>JOIN DROP LIST</span>
              <ArrowUpRight size={13} className="text-[#00A8FF]" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-[#005CFF] rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-12 px-6 md:hidden animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="space-y-6">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-4">
              // ACEUP DIRECTORY
            </div>
            <nav className="flex flex-col space-y-5" aria-label="Mobile Links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold font-heading tracking-tight transition-colors ${
                    pathname === link.href ? "text-[#00A8FF]" : "text-white hover:text-zinc-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setInquiryOpen(true);
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase"
            >
              JOIN DROP LIST
            </button>

            <div className="text-center">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                NOT A RUG BRAND. FLOOR ART.
              </span>
            </div>
          </div>
        </div>
      )}

      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        pieceTitle="ACEUP Drop List Priority Access"
      />
    </>
  );
}
