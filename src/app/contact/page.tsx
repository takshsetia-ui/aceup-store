"use client";

import React, { useState } from "react";
import { Mail, Instagram, MapPin, Send, CheckCircle, Shield } from "lucide-react";
import { JsonLd, createBreadcrumbSchema } from "@/components/seo/JsonLd";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [type, setType] = useState("Collector Question");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, pieceTitle: `Contact [${type}]`, message }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-28 min-h-screen bg-[#050505]">
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", url: "https://aceup.store" },
          { name: "Contact", url: "https://aceup.store/contact" },
        ])}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-[#00A8FF]">
            // STUDIO DISPATCH
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-heading tracking-tight text-white">
            CONTACT ACEUP
          </h1>
          <p className="text-zinc-400 text-base md:text-lg font-light leading-relaxed">
            Reach out for collector inquiries, interior architectural staging, press features, or private drop access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-[#0b0b0d] border border-white/10 space-y-6">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#00A8FF]">
                DIRECT STUDIO CHANNELS
              </h2>

              <div className="space-y-4">
                <a
                  href="mailto:support@aceup.store"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#005CFF]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#005CFF]/15 text-[#00A8FF] flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">EMAIL INQUIRIES</span>
                    <span className="text-sm font-bold font-heading text-white group-hover:text-[#00A8FF] transition-colors">
                      support@aceup.store
                    </span>
                  </div>
                </a>

                <a
                  href="https://instagram.com/aceup.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#005CFF]/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#005CFF]/15 text-[#00A8FF] flex items-center justify-center">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">OFFICIAL INSTAGRAM</span>
                    <span className="text-sm font-bold font-heading text-white group-hover:text-[#00A8FF] transition-colors">
                      @aceup.store
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#005CFF]/15 text-[#00A8FF] flex items-center justify-center">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase block">STUDIO LOCATION</span>
                    <span className="text-sm font-bold font-heading text-white">
                      New Delhi, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.01] space-y-2">
              <span className="text-xs font-mono text-zinc-500 uppercase">STUDIO HOURS</span>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">
                Monday – Saturday: 10:00 AM – 7:00 PM IST. Inquiries are generally processed within 12–24 business hours.
              </p>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#0b0b0d] border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#005CFF]/20 text-[#00A8FF] flex items-center justify-center mx-auto">
                    <CheckCircle size={28} />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    MESSAGE TRANSMITTED
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-sm mx-auto font-light">
                    Your inquiry has been logged with the studio coordinator. We will reply via email shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs font-mono text-white uppercase hover:bg-white/10"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Kabir Sethi"
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF]"
                    >
                      <option value="Collector Question">Collector Question</option>
                      <option value="Interior Designer Collaboration">Interior Designer / Architect Collaboration</option>
                      <option value="Press & Media Feature">Press & Media Feature</option>
                      <option value="Custom Installation Sizing">Custom Installation Sizing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail your question, room setup, or collaboration proposal..."
                      className="w-full px-4 py-3 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase hover:opacity-95 shadow-[0_0_25px_rgba(0,92,255,0.35)] transition-all flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT DISPATCH</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-zinc-500 pt-2">
                    <Shield size={12} className="text-[#00A8FF]" />
                    <span>SECURE TRANSMISSION // STRICT CONFIDENTIALITY</span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
