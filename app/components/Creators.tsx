"use client";
import { useState } from "react";

const creators = [
  {
    name: "Enzo Knol",
    followers: "34M+ volgers",
    platforms: ["YouTube", "Instagram", "TikTok"],
    gradient: "from-stone-700 to-stone-950",
  },
  {
    name: "Myron Koops",
    followers: "3M+ volgers",
    platforms: ["Instagram", "YouTube"],
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    name: "De Bennies",
    followers: "2M+ volgers",
    platforms: ["YouTube", "Instagram"],
    gradient: "from-neutral-700 to-neutral-900",
  },
];

export default function Creators() {
  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] tracking-widest2 uppercase text-taupe-500">
            Creators
          </span>
          <a
            href="/creators"
            className="flex items-center gap-2 text-xs tracking-wider uppercase text-linen-400 hover:text-linen-200 transition-colors"
          >
            Meer over ons team <span className="text-base">→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creators.map((c) => (
            <CreatorCard key={c.name} creator={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CreatorCard({ creator }: { creator: (typeof creators)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-2xl cursor-pointer min-h-[320px] flex flex-col justify-end p-7 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${creator.gradient} transition-transform duration-700 ${
          hovered ? "scale-105" : "scale-100"
        }`}
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />

      <div className="relative z-10">
        <p
          className="text-white text-2xl font-serif mb-1"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
        >
          {creator.name}
        </p>
        <p className="text-taupe-400 text-xs tracking-wider uppercase">
          {creator.followers}
        </p>
        <div className="flex gap-2 mt-3">
          {creator.platforms.map((p) => (
            <span
              key={p}
              className="text-[10px] tracking-wider uppercase border border-linen-300/20 text-linen-300/60 px-2.5 py-1 rounded-full"
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`absolute right-5 bottom-5 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${
          hovered ? "bg-white/20 border-white/60" : ""
        }`}
      >
        <span className="text-white text-sm">→</span>
      </div>
    </div>
  );
}
