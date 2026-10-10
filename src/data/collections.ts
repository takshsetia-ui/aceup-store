export interface Collection {
  id: string;
  name: string;
  tagline: string;
  statement: string;
  featuredSlug: string;
  accentColor: string;
  artworkCount: number;
}

export const COLLECTIONS: Collection[] = [
  {
    id: "city-mode",
    name: "CITY MODE",
    tagline: "VIRTUAL ASPHALT & NEON CARTOGRAPHY",
    statement: "Translating late-night open-world urban exploration into high-contrast vector cartography for digital command centers.",
    featuredSlug: "los-santos",
    accentColor: "#00A8FF",
    artworkCount: 1,
  },
  {
    id: "nonchalant",
    name: "NONCHALANT",
    tagline: "UNAPOLOGETIC LUXURY STREETWEAR",
    statement: "Predator iconography and street aggression built for sneakerheads who treat the floor as an extension of their fit.",
    featuredSlug: "ace-croc",
    accentColor: "#005CFF",
    artworkCount: 1,
  },
  {
    id: "money-talks",
    name: "MONEY TALKS",
    tagline: "POP CURRENCY & INTERNET REBELLION",
    statement: "Subverting traditional bank notes into oversized floor currency with intricate guilloche line work and viral humor.",
    featuredSlug: "jiggle-currency",
    accentColor: "#A7ADB7",
    artworkCount: 1,
  },
  {
    id: "after-hours",
    name: "AFTER HOURS",
    tagline: "MIDNIGHT TYPOGRAPHY & MOOD",
    statement: "Quiet confidence rendered in deep monochromes. Built for low-light bedroom sanctuaries and late-night creators.",
    featuredSlug: "nonchalant",
    accentColor: "#D9DDE3",
    artworkCount: 1,
  },
];
