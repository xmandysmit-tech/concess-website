import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio | Productiehuis voor Video, Fotografie & Events",
  description:
    "Concess Studio: productiehuis voor video-productie, fotografie, podcast-productie en events. Achter projecten als De Bennies Podcast, Vrouwmibo, Vrouwmishow en meer.",
  keywords: [
    "productiehuis Nederland",
    "video productie bureau Nederland",
    "podcast productie Nederland",
    "De Bennies podcast",
    "Vrouwmibo podcast",
    "Vrouwmishow",
    "event productie Nederland",
    "fotografie bureau influencer",
    "content productie social media",
  ],
  alternates: { canonical: "https://concess.nl/studio" },
  openGraph: {
    title: "Studio | Productiehuis voor Video, Fotografie & Events",
    description:
      "Concess Studio produceert video's, podcasts, fotoshoots en events. Van De Bennies tot Vrouwmibo.",
    url: "https://concess.nl/studio",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
