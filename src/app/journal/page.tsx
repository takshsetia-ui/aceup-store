import { constructMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "ACEUP Journal | Floor Art & Aesthetic Room Decor Ideas",
  description: "Discover interior design inspiration, gaming room setup ideas, and streetwear-inspired room decor guides on the ACEUP Journal.",
  canonicalUrl: "https://aceup.store/journal",
});

const ARTICLES = [
  {
    slug: "gaming-room-setup",
    title: "The Anatomy of a Perfect Gaming Room Setup in 2024",
    excerpt: "How to level up your gaming setup from basic RGB lights to a premium, curated aesthetic using statement rugs and floor art.",
    date: "October 10, 2024",
    category: "Setup Guide",
  },
  {
    slug: "hypebeast-room-decor",
    title: "Streetwear for Your Floors: The Rise of Hypebeast Room Decor",
    excerpt: "Sneakers aren't the only flex anymore. How Gen-Z is transforming their bedrooms with collectible streetwear rugs and custom floor art.",
    date: "October 8, 2024",
    category: "Culture",
  }
];

export default function JournalIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-foreground">
          The <span className="text-ace-blue">Journal</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl leading-relaxed">
          Culture, interior design, and the intersection of streetwear and home decor. Thoughts on building spaces that refuse to look ordinary.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {ARTICLES.map((article) => (
          <Link 
            key={article.slug} 
            href={`/journal/${article.slug}`}
            className="group block border border-white/10 p-8 hover:border-ace-blue/50 transition-colors bg-white/[0.02]"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs uppercase tracking-widest text-ace-blue">{article.category}</span>
              <span className="text-xs text-muted">{article.date}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 group-hover:text-ace-blue transition-colors">
              {article.title}
            </h2>
            <p className="text-muted leading-relaxed mb-8 line-clamp-3">
              {article.excerpt}
            </p>
            <div className="flex items-center text-sm font-medium uppercase tracking-wider text-foreground group-hover:text-ace-blue transition-colors">
              Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
