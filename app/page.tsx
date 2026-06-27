import Navbar from "./components/Navbar";
import AnimatedHero from "./components/AnimatedHero";
import SelectedWork from "./components/SelectedWork";
import Creators from "./components/Creators";
import Brands from "./components/Brands";
import Studio from "./components/Studio";
import CTAFooter from "./components/CTAFooter";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <AnimatedHero />
      <ScrollReveal><SelectedWork /></ScrollReveal>
      <ScrollReveal delay={100}><Creators /></ScrollReveal>
      <Brands />
      <ScrollReveal delay={50}><Studio /></ScrollReveal>
      <CTAFooter />
    </main>
  );
}
