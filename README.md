# ACEUP — FLOOR ART ARCHIVE (`aceup.store`)

> **"NOT A RUG BRAND. FLOOR ART."**
> Luxury streetwear × floor art × Gen-Z culture × digital design.

A complete, responsive, dynamic informational web platform for **ACEUP** (`aceup.store`), an Indian youth culture design label creating statement rugs for bedrooms, gaming setups, apartments, hostels, and aesthetic spaces.

---

## Brand Positioning & Identity Philosophy

- **Informational Scope**: Built strictly as an informational and editorial brand platform to create desire, educate collectors, and showcase limited-edition floor art. No checkout, shopping cart, or payment gatekeeping.
- **Brand Asset Integrity**:
  - **ACEUP Wordmark**: 3D chrome/metallic bevel with electric blue top surface and high-gloss reflections.
  - **ACEUP Shooting Star**: Chrome faceted 3D star with electric blue star core and blue light accents.
  - *Strict Rule*: The wordmark and shooting star are two distinct brand assets that are never merged into a single logo or distorted.
- **Color System**:
  - Deep Black: `#050505` (Primary), `#0B0B0D` (Secondary)
  - Electric Blue: `#005CFF`, Highlight: `#00A8FF`
  - Metallic Chrome: `#D9DDE3`, `#A7ADB7`, `#F4F6F8`
  - Typography: `#F5F5F5` (Primary), `#9C9CA3` (Secondary)

---

## Page Architecture

1. **Homepage (`/`)**: 12 curated storytelling sections:
   - Preloader (1.2s metallic chrome sweep, skippable, session-cached)
   - Hero ("NOT A RUG BRAND. FLOOR ART." with interactive 3D shooting star)
   - Brand Manifesto ("Your walls have posters. Your desk has RGB. Why is your floor blank?")
   - Featured Floor Art (Editorial modules for Los Santos, Ace Croc, etc.)
   - Immersive Product Moment (5-step interactive transformation from flat canvas to room architecture)
   - Collection Stories (City Mode, Nonchalant, Money Talks, After Hours)
   - Material & Quality (1500 GSM density, dye-sublimation fidelity, anti-skid rubber backing)
   - Rooms & Transformation (Interactive Before/After comparison slider + gaming setup video)
   - Brand Statement ("YOUR ROOM SAYS SOMETHING. MAKE THE FLOOR PART OF IT.")
   - Seen on the Floor (Community editorial contact sheet)
   - Drop Club ("GET ON THE LIST." priority dispatch email signup)
   - Footer (Oversized authentic wordmark and studio directives)
2. **Floor Art Catalog (`/floor-art`)**: Vibe and room category filtering.
3. **Artwork Detail Template (`/floor-art/[slug]`)**: Dynamic editorial presentation, high-res zoom, concept origins, 1500 GSM specs matrix, room recommendations, video preview, and direct collector inquiry modal.
4. **About / Manifesto (`/about`)**: The ACEUP origin story and cultural philosophy.
5. **Material & Craft (`/craft`)**: 1500 GSM textile science, dye-sublimation heat bonding, and care guide.
6. **Frequently Asked Questions (`/faq`)**: AEO-optimized answers for users and AI search engines with interactive accordions.
7. **Contact (`/contact`)**: Studio inquiry form, collaboration channels, and New Delhi location.
8. **Shipping & Delivery (`/shipping`)**: 100% complimentary delivery across India and timeline guide.
9. **Privacy Policy (`/privacy`)**: Indian DPDP and IT Act-compliant privacy directives.
10. **Terms of Service (`/terms`)**: Collector guidelines and intellectual property terms.
11. **Custom 404 (`/not-found`)**: "FLOOR IS EMPTY" editorial error state.
12. **SEO Engine (`/sitemap.xml`, `/robots.txt`)**: Dynamic XML sitemap and crawler policies.

---

## Tech Stack & Performance Architecture

- **Framework**: Next.js 15 (App Router, Static Site Generation + Server Actions)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom chrome gradients and dark surface tokens
- **3D / WebGL**: Three.js interactive metallic shooting-star canvas with mouse-reactive tilt and progressive enhancement fallback
- **Motion**: GSAP, ScrollTrigger, and Lenis smooth scrolling with reduced-motion support
- **Structured Data**: Schema.org JSON-LD (`Organization`, `WebSite`, `FAQPage`, `VisualArtwork`, `BreadcrumbList`)
- **Accessibility**: WCAG 2.1 AA compliant contrast, full keyboard navigation, skip links, and ARIA attributes

---

## Development & Build Instructions

```bash
# 1. Install dependencies
pnpm install

# 2. Run local development server
pnpm dev

# 3. Type check & build production bundle
pnpm build

# 4. Start production server
pnpm start
```
