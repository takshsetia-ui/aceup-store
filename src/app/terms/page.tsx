import React from "react";
import type { Metadata } from "next";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Collector Terms of Service | ACEUP Floor Art",
  description: "Official collector terms, intellectual property, and limited drop protocols for ACEUP.",
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Terms of Service", url: "https://aceup.store/terms" },
        ])}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // LEGAL DIRECTIVE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            TERMS OF SERVICE
          </h1>
          <div className="text-xs font-mono text-zinc-500">
            LAST REVISED: OCTOBER 2026 // JURISDICTION: NEW DELHI, INDIA
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-8 text-zinc-300 text-sm md:text-base font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">1. SCOPE OF PLATFORM</h2>
            <p>
              Welcome to <strong>aceup.store</strong>. ACEUP is an Indian floor-art brand creating statement rugs for modern rooms. This digital platform is currently operated as an informational catalog and design archive to educate users and showcase releases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">2. INTELLECTUAL PROPERTY RIGHTS</h2>
            <p>
              The ACEUP wordmark, shooting-star symbol, product vector artwork, textile patterns, editorial copy, photography, 3D assets, and digital design architecture are the exclusive intellectual property of ACEUP. No reproduction, modification, redistribution, or commercial duplication is permitted without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">3. LIMITED DROP CAPSULES</h2>
            <p>
              ACEUP floor art editions are released in strictly capped quantities. Inclusion of an artwork in our catalog does not guarantee active stock or future restocks. When an edition enters the Vault Archive, production of that serial variant ceases.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">4. INFORMATIONAL FIDELITY</h2>
            <p>
              We endeavor to display textile colors, dimensions, and macro textures with absolute fidelity. However, subtle variations may occur due to device display profiles, room lighting color temperatures (warm vs. cool white), and textile pile nap direction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">5. INQUIRIES & DISPATCHES</h2>
            <p>
              Inquiries submitted through our forms establish direct communication with our studio. All transactions and private collector allocations are finalized under mutually agreed terms conforming to Indian commercial regulations.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
