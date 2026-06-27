"use client";
import { useState } from "react";

const works = [
  {
    id: 1,
    brand: "L'Oréal Paris",
    creator: "Myron Koops",
    views: "18M+ views",
    size: "large",
    gradient: "from-stone-800 to-stone-950",
    accent: "#C9B99A",
    img: "/images/Vrouwmishow_Concess.png",
  },
  {
    id: 2,
    brand: "Berg",
    creator: "Enzo Knol",
    views: "12M+ views",
    size: "small",
    gradient: "from-zinc-700 to-zinc-900",
    accent: "#9E8B72",
    img: "/images/402-AutoMotive-x-Enzo-Knol-1.png",
  },
  {
    id: 3,
    brand: "Air Up",
    creator: "De Bennies",
    views: "8M+ views",
    size: "small",
    gradient: "from-neutral-700 to-neutral-900",
    accent: "#B8A488",
    img: "/images/Bennies-x-Air-up.png",
  },
  {
    id: 4,
    brand: "Revolut",
    creator: "Enzo Knol",
    views: "15M+ views",
    size: "small",
    gradient: "from-stone-700 to-stone-900",
    accent: "#9E8B72",
    img: "/images/EnzoKnol_Concess.png",
  },
  {
    id: 5,
    brand: "Garmin",
    creator: "Myron",
    views: "10M+ views",
    size: "small",
    gradient: "from-zinc-800 to-zinc-950",
    accent: "#C9B99A",
    img: "/images/De-bennies-concess.jpg",
  },
];

function WorkCard({
  work,
  large = false,
}: {
  work: (typeof works)[0];
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${
        large ? "row-span-2" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          filter: hovered ? "brightness(1.1)" : "brightness(0.9)",
        }}
      >
        {work.img ? (
          <img src={work.img} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${work.gradient}`} />
        )}
      </div>
      {/* Shimmer on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `linear-gradient(105deg, transparent 40%, ${work.accent}15 50%, transparent 60%)`,
        }}
      />
      {/* Placeholder image hint */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center">
        <span className="text-white text-[10px] tracking-widest uppercase">
          Foto / Video
        </span>
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />

      {/* Content */}
      <div
        className={`relative z-10 flex flex-col justify-end h-full ${
          large ? "min-h-[480px] p-8" : "min-h-[230px] p-5"
        }`}
      >
        <div>
          <p
            className={`font-serif text-white leading-tight ${
              large ? "text-3xl md:text-4xl" : "text-xl"
            }`}
            style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
          >
            {work.brand}
            <br />
            <span className="opacity-80">× {work.creator}</span>
          </p>
          <p className="text-xs tracking-wider uppercase mt-2 opacity-60 text-white">
            {work.views}
          </p>
        </div>

        {/* Arrow */}
        <div
          className={`absolute right-5 bottom-5 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
            hovered ? "bg-white/20 border-white/60" : ""
          }`}
        >
          <span className="text-white text-sm">→</span>
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="werk" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-500">
          Selected Work
        </span>
        <a
          href="/werk"
          className="flex items-center gap-2 text-xs tracking-wider uppercase text-dark-700 hover:text-dark-900 transition-colors"
        >
          Bekijk alle werk <span className="text-base">→</span>
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-3 md:h-[500px]">
        <WorkCard work={works[0]} large />
        {works.slice(1).map((w) => (
          <WorkCard key={w.id} work={w} />
        ))}
      </div>
    </section>
  );
}
