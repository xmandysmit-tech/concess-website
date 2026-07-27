import type { Metadata } from "next";
import AnimatedHero from "./components/AnimatedHero";
import SelectedWork from "./components/SelectedWork";
import Creators from "./components/Creators";
import Brands from "./components/Brands";
import Studio from "./components/Studio";
import CTAFooter from "./components/CTAFooter";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "Concess | Social Agency & Influencer Management Nederland",
  description:
    "Concess is een social agency en productiehuis in Nederland. Management van Enzo Knol, Myron Koops en De Bennies. Wij creëren campagnes die mensen onthouden.",
  alternates: { canonical: "https://concess.nl" },
};

export default function Home() {
  return (
    <main>
      
      <AnimatedHero />
      <ScrollReveal><SelectedWork /></ScrollReveal>
      <ScrollReveal delay={100}><Creators /></ScrollReveal>
      <Brands />
      <ScrollReveal delay={50}><Studio /></ScrollReveal>
      <CTAFooter />
    </main>
  );
}
