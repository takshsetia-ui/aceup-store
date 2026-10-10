import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Preloader } from "@/components/motion/Preloader";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { JsonLd, createOrganizationSchema, createWebsiteSchema } from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "ACEUP | Not A Rug Brand. Floor Art.",
    template: "%s | ACEUP Floor Art",
  },
  description:
    "ACEUP is an Indian Gen-Z floor-art brand creating statement rugs for bedrooms, gaming setups, apartments, and creative spaces. 1500 GSM digital print floor art.",
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: "https://aceup.store",
  },
  openGraph: {
    title: "ACEUP | Not A Rug Brand. Floor Art.",
    description: "Statement pieces built for rooms that refuse to look ordinary.",
    url: SITE_CONFIG.url,
    siteName: "ACEUP",
    images: [
      {
        url: "/assets/brand/wordmark-black-bg.png",
        width: 1200,
        height: 630,
        alt: "ACEUP Floor Art",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ACEUP | Not A Rug Brand. Floor Art.",
    description: "Statement pieces built for rooms that refuse to look ordinary.",
    images: ["/assets/brand/wordmark-black-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd data={createOrganizationSchema()} />
        <JsonLd data={createWebsiteSchema()} />
      </head>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#005CFF] selection:text-white font-sans">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#005CFF] focus:text-white focus:rounded focus:outline-none font-mono text-xs"
        >
          Skip to main content
        </a>

        <Preloader />
        <SmoothScroll>
          <Header />
          <main id="main-content" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
