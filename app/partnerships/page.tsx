"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import PartnershipTile from "../components/PartnershipTile";
import { projects, partnershipCases } from "../data/content";

const extraProjects = projects.filter((p) => p.type === "Partnerships");

const brandLogos = [
  { name: "L'Oréal", logo: "/logos/Loreal.png" },
  { name: "Garmin", logo: "/logos/Garmin.png" },
  { name: "Air Up", logo: "/logos/air_up.png" },
  { name: "Revolut", logo: "/logos/Revolut.png" },
  { name: "Emma Sleep", logo: "/logos/Emma_sleep.png" },
  { name: "Netflix", logo: "/logos/Netflix.png" },
  { name: "Spotify", logo: "/logos/Spotify.png" },
  { name: "Google", logo: "/logos/Google.png" },
  { name: "YouTube", logo: "/logos/YouTube.png" },
  { name: "Xbox", logo: "/logos/Xbox.png" },
  { name: "Armani", logo: "/logos/Armani_beauty.png" },
  { name: "Dyson", logo: "/logos/Dyson.png" },
  { name: "HelloFresh", logo: "/logos/HelloFresh.png" },
  { name: "Jumbo", logo: "/logos/Jumbo.png" },
  { name: "Shoeby", logo: "/logos/Shoeby.png" },
  { name: "Nord VPN", logo: "/logos/Nord_VPN.png" },
  { name: "Garnier", logo: "/logos/Garnier.png" },
  { name: "Nivea", logo: "/logos/nivea.png" },
  { name: "RTL", logo: "/logos/RTL.png" },
  { name: "Talpa", logo: "/logos/Talpa_Network.png" },
  { name: "Universal", logo: "/logos/Universal.png" },
  { name: "EA Sports", logo: "/logos/EA_sports.png" },
  { name: "Aldi", logo: "/logos/Aldi.png" },
  { name: "Podimo", logo: "/logos/Podimo.png" },
  { name: "Parfumado", logo: "/logos/Parfumado.png" },
  { name: "Upfront", logo: "/logos/Upfront.png" },
  { name: "Chromebook", logo: "/logos/Chromebook.png" },
  { name: "LRP", logo: "/logos/LRP.png" },
  { name: "Kinderpostzegels", logo: "/logos/Kinderpostzegels.png" },
];

const doubled = [...brandLogos, ...brandLogos];
const PAGE_SIZE = 9;

export default function PartnershipsPage() {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = extraProjects.slice(0, visible);
  const hasMore = visible < extraProjects.length;

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-24 md:pt-36 pb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}>
              Concess <span className="italic" style={{ color: "var(--color-taupe-300)" }}>partnerships</span>
            </h1>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Wij ondersteunen merken en creators bij het opzetten van samenwerkingen die organisch bij elkaar passen. Zo ontstaat content die ook echt authentiek is.
            </p>
          </div>
        </div>
      </section>

      {/* Grid — cases bovenaan (klikbaar), dan reguliere projecten */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-10">Partnerships</span>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 items-start">
          {/* Klikbare cases met optionele hover video */}
          {partnershipCases.map((p) => (
            <PartnershipTile key={p.slug} p={p} />
          ))}

          {/* Reguliere projecten */}
          {shown.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: "3/4" }}
            >
              {p.img
                ? <img src={p.img} alt={p.brand} className="absolute inset-0 w-full h-full object-cover" />
                : <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
              }
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, transparent 75%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="text-[9px] tracking-widest uppercase text-white/60 block mb-0.5" style={{ fontWeight: 600 }}>{p.creator}</span>
                <h3 className="text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.2 }}>{p.brand}</h3>
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-3 border border-linen-300 text-dark-700 px-8 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all hover:border-dark-900 hover:text-dark-900"
            >
              Meer laden
            </button>
          </div>
        )}
      </section>

      {/* Brands marquee */}
      <section className="py-16 border-t border-linen-300" style={{ background: "var(--color-linen-100)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500">Brands we&apos;ve worked with</span>
        </div>
        <div className="overflow-hidden" style={{ WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)" }}>
          <div className="flex animate-marquee items-center" style={{ width: "max-content" }}>
            {doubled.map((brand, i) => (
              <div key={i} className="flex items-center flex-shrink-0 px-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ objectFit: "contain", filter: "brightness(0)", opacity: 0.2, height: "28px", width: "90px", flexShrink: 0 }}
                />
                <span className="text-taupe-400 text-xs ml-8">·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
