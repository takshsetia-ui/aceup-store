import React from "react";
import Link from "next/link";
import { FAQ_ITEMS } from "@/data/faq";
import { FaqClient } from "./FaqClient";
import { JsonLd, createFaqSchema, createBreadcrumbSchema } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | ACEUP Floor Art",
  description:
    "Direct factual answers about ACEUP floor art: dimensions, 1500 GSM textile specs, dye sublimation print fidelity, India shipping, and maintenance.",
};

export default function FaqPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd data={createFaqSchema(FAQ_ITEMS)} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "FAQ", url: "https://aceup.store/faq" },
        ])}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // KNOWLEDGE BASE & DIRECTIVES
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Everything you need to know about ACEUP statement floor art, hardware specs, drop mechanics, and India shipping.
          </p>
        </div>

        {/* Interactive Accordion */}
        <FaqClient />

        {/* Support Directives */}
        <div className="mt-20 p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 text-center space-y-3">
          <div className="text-xs font-mono text-[#00A8FF] tracking-widest uppercase">
            HAVE AN UNANSWERED QUESTION?
          </div>
          <p className="text-zinc-400 text-sm font-light">
            Our studio team is available for custom room sizing advice, interior collabs, and collector support.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs font-mono tracking-wider uppercase hover:bg-zinc-200 transition-colors"
            >
              CONTACT THE STUDIO →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
