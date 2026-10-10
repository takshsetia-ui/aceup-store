export interface Artwork {
  slug: string;
  title: string;
  subtitle: string;
  category: "GAMING SETUP" | "STREETWEAR & CULTURE" | "CULTURE & POP" | "MINIMAL & MODERN";
  collection: "CITY MODE" | "MONEY TALKS" | "NONCHALANT" | "AFTER HOURS";
  status: "FEATURED DROP" | "LIMITED EDITION" | "VAULT ARCHIVE" | "UPCOMING DROP";
  dimensions: string;
  gsm: number;
  surface: string;
  backing: string;
  weight: string;
  edge: string;
  heroImage: string;
  gallery: string[];
  video?: string;
  description: string;
  concept: string;
  visualMood: string;
  roomRecommendation: string;
  seoTitle: string;
  seoDescription: string;
  altText: string;
  editionDetails: string;
}

export const ARTWORKS: Artwork[] = [
  {
    slug: "los-santos",
    title: "LOS SANTOS MAP RUG",
    subtitle: "A sprawling aerial vector blueprint of the legendary open-world metropolis.",
    category: "GAMING SETUP",
    collection: "CITY MODE",
    status: "FEATURED DROP",
    dimensions: "3 × 5 FT (91 × 152 CM)",
    gsm: 1500,
    surface: "Dense crystal-fiber micro velvet with razor-sharp dye-sublimation print",
    backing: "Vulcanized anti-skid TPR rubber dot grip",
    weight: "Approx. 2.1 kg",
    edge: "Precision double-stitched reinforced border",
    heroImage: "/assets/art/los-santos.png",
    gallery: [
      "/assets/art/los-santos.png",
      "/assets/rooms/room-after.jpg",
      "/assets/rooms/room-before.jpg",
    ],
    video: "/assets/video/gaming-setup.mp4",
    description: "An ode to late-night heists, neon horizons, and virtual asphalt. The Los Santos Map Rug transforms the negative space under your desk into a satellite cartography statement piece.",
    concept: "Born from thousands of hours spent navigating the avenues of Vinewood and the ports of South LS. This isn't just room decor—it's an interactive cartographic anchor designed to ground RGB mechanical setups, dual-monitor desks, and streamer stations.",
    visualMood: "Electric Cyber // Satellite Grid // Late Night Asphalt",
    roomRecommendation: "Under dual-monitor gaming battlestations, beside platform beds, or in streaming studios.",
    seoTitle: "Los Santos Map Rug | Statement Floor Art by ACEUP",
    seoDescription: "Official ACEUP Los Santos Map Statement Rug. 3x5 ft, 1500 GSM high-density floor art designed for gaming setups and aesthetic rooms.",
    altText: "ACEUP Los Santos Map Statement Rug detailed satellite cartography artwork on black background",
    editionDetails: "Drop 01 // Universal 3x5 Ft Scale // Limited Serial Run",
  },
  {
    slug: "ace-croc",
    title: "ACE CROC STATEMENT RUG",
    subtitle: "Aggressive reptilian streetwear iconography rendered in electric chrome contours.",
    category: "STREETWEAR & CULTURE",
    collection: "NONCHALANT",
    status: "LIMITED EDITION",
    dimensions: "3 × 5 FT (91 × 152 CM)",
    gsm: 1500,
    surface: "Dense crystal-fiber micro velvet with deep dye-sublimation print",
    backing: "Vulcanized anti-skid TPR rubber dot grip",
    weight: "Approx. 2.1 kg",
    edge: "Precision double-stitched reinforced border",
    heroImage: "/assets/art/ace-croc-flatlay.jpg",
    gallery: [
      "/assets/art/ace-croc-flatlay.jpg",
      "/assets/art/ace-croc-lifestyle.jpg",
      "/assets/art/ace-croc-macro.jpg",
    ],
    description: "Streetwear's boldest predator. The ACE CROC statement rug commands immediate attention, blending luxury fashion graphics with tactile high-density floor art.",
    concept: "Inspired by luxury streetwear animalia and raw street attitude. Hand-digitized and engineered at 1500 GSM so every tooth and contour holds sharp clarity under direct light.",
    visualMood: "Rebellious Luxury // Heavyweight // High Contrast",
    roomRecommendation: "Sneaker display corners, hostel entryways, living spaces, and creative workspaces.",
    seoTitle: "ACE CROC Statement Rug | Luxury Streetwear Floor Art | ACEUP",
    seoDescription: "The ACE CROC statement rug by ACEUP. 1500 GSM textile floor art with vulcanized grip backing for sneakerheads and streetwear rooms.",
    altText: "ACEUP ACE CROC Statement Rug flatlay with bold reptilian graphic print and green highlights",
    editionDetails: "Drop 01 // Limited Studio Edition // Nonchalant Series",
  },
  {
    slug: "jiggle-currency",
    title: "MONEY DON'T JIGGLE RUG",
    subtitle: "A satirical pop-culture currency note rendered as high-density floor currency.",
    category: "CULTURE & POP",
    collection: "MONEY TALKS",
    status: "VAULT ARCHIVE",
    dimensions: "3 × 5 FT (91 × 152 CM)",
    gsm: 1500,
    surface: "Dense crystal-fiber micro velvet with intricate guilloche engraving details",
    backing: "Vulcanized anti-skid TPR rubber dot grip",
    weight: "Approx. 2.1 kg",
    edge: "Precision double-stitched reinforced border",
    heroImage: "/assets/art/ace-croc-lifestyle.jpg",
    gallery: [
      "/assets/art/ace-croc-lifestyle.jpg",
      "/assets/art/ace-croc-macro.jpg",
    ],
    description: "An irreverent internet anthem etched onto textile art. Inspired by the cadence of viral culture, micro-engraved currency lines, and hip-hop swagger.",
    concept: "Exploring how internet virality and monetary symbolism intersect. The piece reimagines bank notes as oversized floor tapestry for creative spaces.",
    visualMood: "Internet Irony // Bank Vault // Street Wit",
    roomRecommendation: "Content creator studios, podcast desks, bedside drip.",
    seoTitle: "My Money Don't Jiggle Statement Rug | ACEUP Floor Art",
    seoDescription: "Official ACEUP Money Don't Jiggle currency-style statement rug. Floor art for creative spaces, hostels, and aesthetic setups.",
    altText: "ACEUP Money Don't Jiggle currency statement rug detail in creative room setup",
    editionDetails: "Archive Drop // Vault Edition // Money Talks Capsule",
  },
  {
    slug: "nonchalant",
    title: "NONCHALANT GRAPHIC RUG",
    subtitle: "Typographic minimalism designed for rooms with quiet confidence.",
    category: "MINIMAL & MODERN",
    collection: "AFTER HOURS",
    status: "UPCOMING DROP",
    dimensions: "3 × 5 FT (91 × 152 CM)",
    gsm: 1500,
    surface: "Ultra-dense velvet surface with deep contrast monochrome pigmentation",
    backing: "Vulcanized anti-skid TPR rubber dot grip",
    weight: "Approx. 2.1 kg",
    edge: "Precision double-stitched reinforced border",
    heroImage: "/assets/rooms/room-after.jpg",
    gallery: [
      "/assets/rooms/room-after.jpg",
      "/assets/art/ace-croc-macro.jpg",
    ],
    description: "Unbothered. Effortless. The Nonchalant graphic rug delivers high-concept editorial typography for spaces that prioritize mood over clutter.",
    concept: "A study in negative space and psychological ease. Constructed with deep charcoal-black dyes and stark white typography that refuses to yell, yet commands the room.",
    visualMood: "Midnight Minimal // Quiet Confidence // Dark Room",
    roomRecommendation: "Low-light bedroom retreats, architectural apartments, music production nooks.",
    seoTitle: "Nonchalant Statement Rug | Minimal Floor Art by ACEUP",
    seoDescription: "The Nonchalant statement rug by ACEUP. Minimalist typographic floor art engineered for modern Gen-Z bedroom spaces.",
    altText: "ACEUP Nonchalant statement rug positioned in an ambient modern bedroom with mood lighting",
    editionDetails: "Drop 02 // Coming Soon // Priority Waitlist Open",
  },
];

export function getArtworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((item) => item.slug === slug);
}

export function getAllArtworkSlugs(): string[] {
  return ARTWORKS.map((item) => item.slug);
}
