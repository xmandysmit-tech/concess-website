import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partnerships | Brand Samenwerkingen met Top Influencers",
  description:
    "Bekijk alle brand partnerships van Concess. Succesvolle campagnes met Enzo Knol, Myron Koops, De Bennies, Vrouwmibo en meer. Social agency voor influencer marketing in Nederland.",
  keywords: [
    "influencer campagnes Nederland",
    "brand partnership influencer",
    "influencer marketing campagne",
    "Enzo Knol samenwerking",
    "Myron Koops samenwerking",
    "De Bennies samenwerking",
    "Vrouwmibo samenwerking",
    "social agency campagnes",
    "creator campagnes Nederland",
  ],
  alternates: { canonical: "https://concess.nl/partnerships" },
  openGraph: {
    title: "Partnerships | Brand Samenwerkingen met Top Influencers",
    description:
      "Succesvolle influencer campagnes met Enzo Knol, Myron Koops, De Bennies en Vrouwmibo.",
    url: "https://concess.nl/partnerships",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
