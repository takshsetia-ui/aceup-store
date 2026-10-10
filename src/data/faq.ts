export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "BRAND & CONCEPT" | "SPECIFICATIONS & HARDWARE" | "SHIPPING & SERVICE" | "CARE & MAINTENANCE";
  quickSummary?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "what-is-aceup",
    category: "BRAND & CONCEPT",
    question: "WHAT IS ACEUP?",
    answer: "ACEUP is an Indian Gen-Z floor-art brand founded on a single premise: 'Not a rug brand. Floor art.' We create collectible, graphic statement rugs engineered specifically for modern bedrooms, gaming setups, hostels, creative studios, and young apartments.",
    quickSummary: "ACEUP is an Indian floor-art brand creating statement rugs for gaming setups and youth culture spaces.",
  },
  {
    id: "what-is-floor-art",
    category: "BRAND & CONCEPT",
    question: "WHAT IS 'FLOOR ART' AND HOW IS IT DIFFERENT FROM A RUG?",
    answer: "Traditional rugs are treated as neutral, forgotten floor covers designed to blend in. ACEUP treats the floor as prime visual real estate—an open gallery canvas. Our pieces combine streetwear graphics, gaming iconography, and editorial typography with high-density textile printing. They are collectible art editions you step on.",
    quickSummary: "Floor art treats the floor as a statement gallery canvas rather than background furniture.",
  },
  {
    id: "dimensions",
    category: "SPECIFICATIONS & HARDWARE",
    question: "WHAT ARE THE EXACT DIMENSIONS OF ACEUP PIECES?",
    answer: "All current ACEUP statement rugs are engineered in our universal 3 FT × 5 FT format (approximately 91 cm × 152 cm). This footprint is proportioned to sit beside standard platform beds, directly beneath dual-monitor gaming battlestations, or centered in hostel and studio spaces without overcrowding.",
    quickSummary: "3 × 5 FT (91 × 152 CM) universal proportion.",
  },
  {
    id: "materials-gsm",
    category: "SPECIFICATIONS & HARDWARE",
    question: "WHAT MATERIALS ARE USED AND WHAT DOES 1500 GSM MEAN?",
    answer: "Every ACEUP piece features a dense 1500 GSM (grams per square meter) textile construction. The upper contact surface is woven from low-pile crystal microfiber that delivers razor-sharp print clarity and velvety foot feel, while maintaining low friction so ergonomic and gaming chair caster wheels roll smoothly without catching.",
    quickSummary: "1500 GSM low-pile crystal microfiber textile engineered for comfort and chair rollability.",
  },
  {
    id: "anti-skid",
    category: "SPECIFICATIONS & HARDWARE",
    question: "DOES THE RUG HAVE AN ANTI-SKID BACKING?",
    answer: "Yes, 100%. The bottom face is vulcanized with a high-friction anti-skid rubberized dot grip pattern. It anchors firmly to smooth Indian flooring surfaces—including vitrified ceramic tiles, polished marble, hardwood, and engineered laminate—without requiring separate underlays.",
    quickSummary: "Yes, vulcanized anti-skid rubber dot grip anchors to tiles, marble, and hardwood.",
  },
  {
    id: "print-durability",
    category: "SPECIFICATIONS & HARDWARE",
    question: "HOW ARE THE GRAPHICS PRINTED? WILL THE COLORS FADE OR PEEL?",
    answer: "We utilize industrial high-definition digital dye-sublimation. Unlike cheap screen-printed surface coats that crack, peel, or flake off after foot traffic, our dye molecules are thermally bonded deep into the individual textile fibers. Colors stay saturated, vivid, and deep over years of active room living.",
    quickSummary: "Thermal dye-sublimation heat-bonds ink into fibers so graphics won't crack or peel.",
  },
  {
    id: "cleaning-maintenance",
    category: "CARE & MAINTENANCE",
    question: "HOW DO I CLEAN AND MAINTAIN MY ACEUP RUG?",
    answer: "Maintenance is straightforward: 1) Vacuum regularly with standard suction or brush nozzles. 2) For light dust, shake out outdoors. 3) For liquid spills, blot immediately with a clean dry microfiber towel, then spot clean with cold water and mild detergent. 4) Do not machine-tumble dry or use aggressive bleach. Designed strictly for indoor living.",
    quickSummary: "Vacuum regularly; spot clean spills with cold water and mild detergent. Do not bleach.",
  },
  {
    id: "shipping-india",
    category: "SHIPPING & SERVICE",
    question: "IS SHIPPING FREE ACROSS INDIA?",
    answer: "Yes. ACEUP provides 100% complimentary standard insured shipping to all serviceable pin codes across India. No hidden handling charges or weight surcharges are applied at any stage.",
    quickSummary: "100% Free insured delivery across all serviceable pin codes in India.",
  },
  {
    id: "delivery-timelines",
    category: "SHIPPING & SERVICE",
    question: "WHAT ARE THE ESTIMATED DISPATCH AND DELIVERY TIMELINES?",
    answer: "Orders are prepared and dispatched from our fulfillment hub within 1 to 3 business days. Delivery to Metro cities (Delhi NCR, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune) takes 3 to 5 business days. Tier-2 and non-metro destinations typically arrive within 4 to 7 business days with automated SMS and WhatsApp tracking.",
    quickSummary: "1–3 days dispatch. 3–5 days to Metros, 4–7 days to rest of India.",
  },
  {
    id: "restocks",
    category: "BRAND & CONCEPT",
    question: "WILL A SOLD-OUT DROP EVER RESTOCK?",
    answer: "Our core drop philosophy is strictly limited editions. Once a specific artwork edition reaches its allocated cap, it enters the Vault Archive. While we occasionally explore remix editions or anniversary runs, restocks are never guaranteed. We recommend joining the Drop Club to be notified first.",
    quickSummary: "Strictly limited drops. Once an edition sells out, it enters the Vault Archive.",
  },
];
