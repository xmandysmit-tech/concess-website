import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creators | Enzo Knol, Myron Koops & De Bennies Management",
  description:
    "Concess beheert het management van Enzo Knol (7,9M+), Myron Koops (2,1M+) en De Bennies. Interesse in een samenwerking? Bekijk onze creators en neem contact op.",
  keywords: [
    "Enzo Knol manager",
    "Enzo Knol management",
    "management Enzo Knol",
    "Myron Koops manager",
    "Myron Koops management",
    "management Myron Koops",
    "De Bennies management",
    "De Bennies manager",
    "Nederlandse influencers management",
    "creator management bureau Nederland",
  ],
  alternates: { canonical: "https://concess.nl/creators" },
  openGraph: {
    title: "Creators | Enzo Knol, Myron Koops & De Bennies Management",
    description:
      "Concess beheert het management van Enzo Knol, Myron Koops en De Bennies. Samen meer dan 10 miljoen volgers.",
    url: "https://concess.nl/creators",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
