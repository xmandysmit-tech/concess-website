import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Ons | Concess Social Agency & Productiehuis",
  description:
    "Concess is een social agency en productiehuis opgericht door Mandy Smit. Wij zijn gespecialiseerd in creator management, influencer marketing en content productie in Nederland.",
  keywords: [
    "Concess over ons",
    "social agency Nederland",
    "Mandy Smit Concess",
    "influencer agency team",
    "creator management bureau",
    "influencer marketing Nederland",
  ],
  alternates: { canonical: "https://concess.nl/over-ons" },
  openGraph: {
    title: "Over Ons | Concess Social Agency",
    description:
      "Leer meer over Concess, het social agency en productiehuis achter Enzo Knol, Myron Koops en De Bennies.",
    url: "https://concess.nl/over-ons",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
