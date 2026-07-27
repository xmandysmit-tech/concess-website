import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://concess.nl"),
  verification: {
    google: "iAMKNUzJoRffpMdkS63Gs2mWtpaFcyg_72ktLP4mW7c",
  },
  title: {
    default: "Concess | Social Agency & Influencer Management Nederland",
    template: "%s | Concess",
  },
  description:
    "Concess is een toonaangevend social agency en productiehuis in Nederland. Management van Enzo Knol, Myron Koops en De Bennies. Wij verbinden merken met creators voor campagnes die mensen onthouden.",
  keywords: [
    "social agency Nederland",
    "influencer agency Nederland",
    "influencer marketing bureau",
    "creator management Nederland",
    "Enzo Knol manager",
    "Enzo Knol management",
    "management Enzo Knol",
    "Myron Koops manager",
    "Myron Koops management",
    "management Myron Koops",
    "De Bennies management",
    "De Bennies manager",
    "Vrouwmibo",
    "influencer campagne Nederland",
    "brand partnership creator",
    "productiehuis Nederland",
    "Concess",
    "Concess.nl",
  ],
  authors: [{ name: "Concess", url: "https://concess.nl" }],
  creator: "Concess",
  publisher: "Concess",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://concess.nl",
    siteName: "Concess",
    title: "Concess | Social Agency & Influencer Management Nederland",
    description:
      "Social agency en productiehuis. Management van Enzo Knol, Myron Koops en De Bennies. Strategische samenwerkingen tussen merken en creators.",
    images: [
      {
        url: "/images/creators/enzo_banner.png",
        width: 1200,
        height: 630,
        alt: "Concess Social Agency Nederland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Concess | Social Agency & Influencer Management",
    description:
      "Social agency en productiehuis. Management van Enzo Knol, Myron Koops en De Bennies.",
    images: ["/images/creators/enzo_banner.png"],
  },
  alternates: {
    canonical: "https://concess.nl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#F4F3F1",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Concess",
  url: "https://concess.nl",
  logo: "https://concess.nl/icon.png",
  description:
    "Concess is een social agency en productiehuis in Nederland. Wij verzorgen het management van Enzo Knol, Myron Koops en De Bennies en creëren strategische samenwerkingen tussen merken en creators.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NL",
  },
  sameAs: [],
  knowsAbout: [
    "Influencer Marketing",
    "Social Media Management",
    "Brand Partnerships",
    "Content Productie",
    "Creator Management",
  ],
  employee: [
    {
      "@type": "Person",
      name: "Enzo Knol",
      jobTitle: "Content Creator",
      sameAs: "https://www.youtube.com/@EnzoKnol",
    },
    {
      "@type": "Person",
      name: "Myron Koops",
      jobTitle: "Lifestyle & Sport Content Creator",
      sameAs: "https://www.instagram.com/MyronKoops/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain-overlay">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
