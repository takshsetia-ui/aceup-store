import React from "react";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Shipping & India Delivery Guide | ACEUP Floor Art",
  description:
    "Complimentary insured delivery across India. Learn about dispatch times (1–3 days), metro delivery (3–5 days), and package protection.",
};

export default function ShippingPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Shipping & Delivery", url: "https://aceup.store/shipping" },
        ])}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-14 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // LOGISTICS & DISPATCH
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
            SHIPPING & DELIVERY
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            100% complimentary standard insured shipping to all serviceable pin codes across India.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-2">
            <Truck className="text-[#00A8FF] mb-2" size={24} />
            <h2 className="text-lg font-bold font-heading text-white">100% FREE SHIPPING</h2>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              No hidden fees, weight surcharges, or extra handling costs anywhere in India.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-2">
            <Clock className="text-[#00A8FF] mb-2" size={24} />
            <h2 className="text-lg font-bold font-heading text-white">1–3 DAYS DISPATCH</h2>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Orders are packaged and dispatched with automated SMS & WhatsApp tracking links.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-2">
            <ShieldCheck className="text-[#00A8FF] mb-2" size={24} />
            <h2 className="text-lg font-bold font-heading text-white">INSURED PACKAGING</h2>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Rolled in heavy-gauge moisture-proof protective poly tubing to prevent edge damage.
            </p>
          </div>
        </div>

        {/* Detailed Timeline Table */}
        <div className="p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 mb-16 space-y-6">
          <h3 className="text-xl font-bold font-heading text-white">
            TRANSIT ESTIMATES BY REGION
          </h3>

          <div className="divide-y divide-white/5 text-sm font-mono">
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-white font-bold">Delhi NCR / Northern Hub</span>
              <span className="text-[#00A8FF]">2–3 Business Days</span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-white font-bold">Metro Cities (Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune)</span>
              <span className="text-[#00A8FF]">3–5 Business Days</span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-white font-bold">Tier-2 Cities & Rest of India</span>
              <span className="text-[#00A8FF]">4–7 Business Days</span>
            </div>
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-white font-bold">Northeast & Special Access Zones</span>
              <span className="text-[#00A8FF]">6–9 Business Days</span>
            </div>
          </div>
        </div>

        {/* Transit Care Directives */}
        <div className="space-y-6 mb-16 text-zinc-300 text-sm font-light leading-relaxed">
          <h3 className="text-xl font-bold font-heading text-white">
            UNBOXING & ROLL-OUT ADVISORY
          </h3>
          <p>
            Because ACEUP statement rugs feature high-density 1500 GSM construction, they are rolled compactly for transit protection. 
            Upon unboxing, unroll the rug on a flat surface. Any mild rolling waves will naturally flatten within 24 to 48 hours of normal room temperature exposure.
          </p>
          <p>
            In the rare event of damage in transit, reach out within 48 hours of receipt at <strong>support@aceup.store</strong> with photos of the courier packaging for immediate replacement dispatch.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/floor-art"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-zinc-200 transition-colors"
          >
            <span>EXPLORE FLOOR ART EDITIONS</span>
            <ArrowRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}
