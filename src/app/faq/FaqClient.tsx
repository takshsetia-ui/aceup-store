"use client";

import React, { useState } from "react";
import { Plus, Minus, Search } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export function FaqClient() {
  const [openId, setOpenId] = useState<string>("what-is-aceup");
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "ALL",
    "BRAND & CONCEPT",
    "SPECIFICATIONS & HARDWARE",
    "SHIPPING & SERVICE",
    "CARE & MAINTENANCE",
  ];

  const filteredItems = FAQ_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === "ALL" || item.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative max-w-md">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search questions (e.g. dimensions, 1500 GSM, cleaning)..."
          className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0b0b0d] border border-white/10 text-white text-sm focus:outline-none focus:border-[#005CFF] placeholder:text-zinc-600"
        />
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => {
          const active = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                active
                  ? "bg-[#005CFF] text-white font-bold"
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Accordion Container */}
      <div className="space-y-3">
        {filteredItems.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#0b0b0d] border-[#005CFF]/50 shadow-[0_0_25px_rgba(0,92,255,0.15)]"
                  : "bg-[#0b0b0d]/50 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#005CFF]"
              >
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#00A8FF] tracking-widest uppercase block">
                    {item.category}
                  </span>
                  <span className="text-base sm:text-lg font-bold font-heading text-white">
                    {item.question}
                  </span>
                </div>
                <div className="shrink-0 w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400">
                  {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                </div>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${item.id}`}
                  className="px-6 pb-6 pt-2 text-sm sm:text-base text-zinc-300 font-light leading-relaxed border-t border-white/5 space-y-3"
                >
                  <p>{item.answer}</p>
                  {item.quickSummary && (
                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs font-mono text-[#00A8FF]">
                      SUMMARY: {item.quickSummary}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
