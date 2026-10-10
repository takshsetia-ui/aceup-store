"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  pieceTitle?: string;
}

export function InquiryModal({ isOpen, onClose, pieceTitle }: InquiryModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState("Gaming Setup");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          roomType,
          pieceTitle: pieceTitle || "General Collection Inquiry",
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#0b0b0d] border border-white/10 p-6 md:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#005CFF]/20 border border-[#00A8FF]/40 text-[#00A8FF] flex items-center justify-center mx-auto">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-2xl font-bold font-heading text-white">
              INQUIRY RECORDED
            </h3>
            <p className="text-zinc-400 text-sm max-w-sm mx-auto">
              Our studio coordinator will contact you via WhatsApp / email with drop availability, high-res spec sheets, and styling recommendations.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="badge-chip badge-blue mb-2">COLLECTOR DIRECT</span>
              <h3 id="inquiry-title" className="text-xl md:text-2xl font-bold font-heading text-white tracking-tight">
                {pieceTitle ? `INQUIRE: ${pieceTitle}` : "COLLECTOR INQUIRY"}
              </h3>
              <p className="text-zinc-400 text-xs md:text-sm mt-1">
                ACEUP produces limited-edition floor art. Submit your details to receive private release details or request custom installation sizing.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Arjun Sharma"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF]"
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
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  WhatsApp / Phone (For drop updates)
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF] focus:ring-1 focus:ring-[#005CFF]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                  Intended Space / Setup
                </label>
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF]"
                >
                  <option value="Gaming Battlestation">Gaming Battlestation</option>
                  <option value="Aesthetic Bedroom">Aesthetic Bedroom</option>
                  <option value="Hostel / Dorm Room">Hostel / Dorm Room</option>
                  <option value="Creative Studio / Office">Creative Studio / Office</option>
                  <option value="Apartment Living Room">Apartment Living Room</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-[#005CFF] to-[#00A8FF] text-white font-bold text-xs tracking-widest uppercase hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>RECORDING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <ArrowRight size={14} />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-zinc-500 font-mono mt-3">
                <ShieldCheck size={12} className="text-[#00A8FF]" />
                <span>INFORMATIONAL ONLY // NO PAYMENT REQUIRED // ZERO SPAM</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
