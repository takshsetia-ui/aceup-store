import React from "react";
import type { Metadata } from "next";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | ACEUP Floor Art",
  description: "Official privacy protocols and collector data handling directives for ACEUP (aceup.store).",
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Privacy Policy", url: "https://aceup.store/privacy" },
        ])}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // LEGAL DIRECTIVE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black font-heading text-white">
            PRIVACY POLICY
          </h1>
          <div className="text-xs font-mono text-zinc-500">
            EFFECTIVE DATE: OCTOBER 2026 // COMPLIANT WITH INDIAN DPDP ACT & IT ACT
          </div>
        </div>

        <div className="p-8 md:p-12 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-8 text-zinc-300 text-sm md:text-base font-light leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">1. INTRODUCTION</h2>
            <p>
              ACEUP (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the digital platform <strong>aceup.store</strong>. This policy defines our protocols regarding the collection, handling, and protection of information when you interact with our informational floor-art archive, join our Drop Club, or submit collector inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">2. INFORMATION WE COLLECT</h2>
            <p>
              As an informational platform, we do not process payment credentials or store financial data. We collect only information voluntarily provided:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li><strong>Contact Inquiries:</strong> Name, email address, phone/WhatsApp number, and intended room type.</li>
              <li><strong>Drop Club Subscribers:</strong> Email address for priority release notifications.</li>
              <li><strong>Technical Telemetry:</strong> Anonymized browser headers, device dimensions, and referrer data to optimize WebGL and responsive rendering.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">3. USE OF INFORMATION</h2>
            <p>
              Information gathered is strictly utilized to:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-zinc-400">
              <li>Transmit drop notices and private release links to registered collectors.</li>
              <li>Respond directly to collector inquiries, interior collaborations, and room sizing questions.</li>
              <li>Maintain platform integrity and monitor performance across devices.</li>
            </ul>
            <p>We do not sell, rent, or monetize your contact details with external advertising brokers.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">4. COOKIES & LOCAL STORAGE</h2>
            <p>
              We utilize minimal client-side <code>sessionStorage</code> exclusively to remember whether the preloader animation has already played during your current browsing session, avoiding redundant interruptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-white">5. CONTACT THE DATA OFFICER</h2>
            <p>
              For data access, correction, or deletion requests, contact our privacy officer at <strong>support@aceup.store</strong>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
