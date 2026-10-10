import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = constructMetadata({
  title: "Perfect Gaming Room Setup Ideas 2024 | ACEUP",
  description: "Learn how to build a premium gaming room setup. Ditch the cheap RGB for high-end statement rugs, dark minimal aesthetics, and streetwear floor art.",
  canonicalUrl: "https://aceup.store/journal/gaming-room-setup",
});

export default function GamingRoomSetupPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/journal" className="inline-flex items-center text-sm uppercase tracking-wider text-muted hover:text-ace-blue mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <header className="mb-16">
          <p className="text-ace-blue uppercase tracking-widest text-sm font-bold mb-4">Setup Guide</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[1.1]">
            The Anatomy of a Perfect Gaming Room Setup
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            For years, the "gaming room aesthetic" was defined by cheap LED strip lights and generic black furniture. In 2024, the culture has shifted toward premium, curated spaces.
          </p>
        </header>

        <section className="mt-12 space-y-8 text-muted">
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">1. The Floor is the 5th Wall</h2>
          <p>
            Most setups ignore the floor. A premium gaming setup requires grounding. Instead of a generic gray carpet, adding a statement rug anchors your desk and chair. This is where <strong>Gen-Z floor art</strong> comes into play. ACEUP's Los Santos rug, for example, instantly adds a cultural touchstone without feeling like a cheap merch item.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">2. Controlled Lighting Over Rainbow RGB</h2>
          <p>
            Minimalism is key. Instead of blasting your entire room with rainbow RGB, use targeted ambient lighting. A dark, minimal room with a single electric blue accent creates a cinematic feel. Match your screen bias lighting to the dominant colors of your floor art.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">3. Acoustic Treatment that Looks Good</h2>
          <p>
            Rugs aren't just visual. A high-density 1500 GSM digital print rug absorbs sound reflections from hardwood floors. This drastically improves your microphone audio quality while streaming or in Discord calls. It's functional acoustics disguised as streetwear art.
          </p>

          <div className="bg-white/5 border border-white/10 p-8 my-12 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Upgrade Your Space</h3>
            <p className="mb-6">Ready to ditch the boring setup? Explore our curated collection of statement floor art designed specifically for aesthetic rooms.</p>
            <Link href="/floor-art" className="inline-block bg-white text-black px-8 py-4 uppercase font-bold tracking-wider hover:bg-ace-blue hover:text-white transition-colors">
              Shop Gaming Room Rugs
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
