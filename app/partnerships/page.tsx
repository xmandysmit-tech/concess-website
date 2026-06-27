"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import { projects } from "../data/content";

const partnershipProjects = projects.filter((p) => p.type === "Partnerships");

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
  const shown = partnershipProjects.slice(0, visible);
  const hasMore = visible < partnershipProjects.length;

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

      {/* Partnerships collage */}
      <section className="py-12 md:py-20 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-10">Partnerships</span>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {shown.map((p, i) => {
            const tall = i % 5 === 0 || i % 5 === 3;
            return (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl break-inside-avoid bg-gradient-to-br ${p.gradient}`}
                style={{ aspectRatio: tall ? "3/4" : "4/3" }}
              >
                {p.img && (
                  <img
                    src={p.img}
                    alt={p.brand}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[9px] tracking-widest uppercase text-white/50 block mb-1">{p.creator}</span>
                  <h3 className="text-white text-xl" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{p.brand}</h3>
                  {p.views && <p className="text-white/40 text-xs mt-1">{p.views} views</p>}
                </div>
              </div>
            );
          })}
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

      {/* Brands marquee — light version */}
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
                  style={{
                    objectFit: "contain",
                    filter: "brightness(0)",
                    opacity: 0.2,
                    height: "28px",
                    width: "90px",
                    flexShrink: 0,
                  }}
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
