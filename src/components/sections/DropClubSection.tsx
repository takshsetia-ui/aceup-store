"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

export function DropClubSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#050505] border-t border-white/10 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <span className="badge-chip badge-blue">
          PRIORITY DISPATCH
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-heading tracking-tight text-white">
          GET ON THE LIST.
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
          Drops. Rooms. New floor art. No spam.
          <br />
          Subscribers receive 24-hour advance access before drops are made public.
        </p>

        {submitted ? (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto space-y-2 animate-fadeIn">
            <div className="w-10 h-10 rounded-full bg-[#005CFF]/20 text-[#00A8FF] flex items-center justify-center mx-auto mb-2">
              <CheckCircle size={20} />
            </div>
            <div className="text-lg font-bold font-heading text-white">
              YOU'RE ON THE LIST.
            </div>
            <p className="text-xs text-zinc-400 font-mono">
              We'll send private dispatch notices when new floor art releases drop.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-5 pr-32 py-4 rounded-full bg-white/[0.04] border border-white/15 text-white text-sm focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF] placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-wider uppercase hover:opacity-95 transition-opacity flex items-center gap-1.5"
              >
                {loading ? "SAVING..." : "JOIN"}
                {!loading && <ArrowRight size={13} />}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-500">
              <Shield size={12} className="text-[#00A8FF]" />
              <span>ZERO SPAM // UNSUBSCRIBE ANYTIME // STRICT PRIVACY</span>
            </div>
          </form>
        )}

      </div>
    </section>
  );
}
