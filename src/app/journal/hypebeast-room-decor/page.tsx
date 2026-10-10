import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = constructMetadata({
  title: "Hypebeast Room Decor & Streetwear Home Accessories | ACEUP",
  description: "Transform your bedroom with hypebeast room decor. Discover how streetwear culture is taking over interior design with custom tufted floor art.",
  canonicalUrl: "https://aceup.store/journal/hypebeast-room-decor",
});

export default function HypebeastDecorPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-4xl mx-auto">
      <Link href="/journal" className="inline-flex items-center text-sm uppercase tracking-wider text-muted hover:text-ace-blue mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
      </Link>
      
      <article className="prose prose-invert prose-lg max-w-none">
        <header className="mb-16">
          <p className="text-ace-blue uppercase tracking-widest text-sm font-bold mb-4">Culture</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8 leading-[1.1]">
            Streetwear for Your Floors: The Rise of Hypebeast Room Decor
          </h1>
          <p className="text-xl text-muted leading-relaxed">
            Your sneakers say a lot about you. But what does your room say? The evolution of streetwear has moved from the closet to the living room.
          </p>
        </header>

        <section className="mt-12 space-y-8 text-muted">
          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">The Shift from Apparel to Lifestyle</h2>
          <p>
            Brands like Supreme, BAPE, and newer Indian labels like Bluorng have proven that streetwear is a lifestyle, not just clothing. As Gen-Z spends more time curating their personal spaces, <strong>hypebeast room decor</strong> has become the ultimate flex. It's no longer just about what you wear outside; it's about the aesthetic you live in.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">Why Floor Art is the Centerpiece</h2>
          <p>
            Posters and wall art are standard. But a statement rug—or <em>Floor Art</em>—completely shifts the gravity of a room. A custom graphic rug acts as a massive canvas that ties your sneaker display, your PC setup, and your furniture together. ACEUP was born from this exact need: premium, culturally relevant designs built for the floor.
          </p>

          <h2 className="text-3xl font-bold text-foreground mt-12 mb-6 tracking-tight">How to Style Statement Rugs</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong>The Sneaker Zone:</strong> Place a smaller statement piece (like the Jiggle Currency rug) directly beneath your transparent sneaker boxes.</li>
            <li><strong>The Centerpiece:</strong> Use a large graphic rug in the center of a minimal room to create immediate contrast.</li>
            <li><strong>Wall Mounting:</strong> Yes, it's floor art, but high-quality pieces are frequently hung like tapestries in streetwear-inspired apartments.</li>
          </ul>

          <div className="bg-white/5 border border-white/10 p-8 my-12 rounded-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Curate Your Space</h3>
            <p className="mb-6">Explore the ACEUP collection and bring streetwear culture to your interior design.</p>
            <Link href="/floor-art" className="inline-block bg-white text-black px-8 py-4 uppercase font-bold tracking-wider hover:bg-ace-blue hover:text-white transition-colors">
              Explore The Collection
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
