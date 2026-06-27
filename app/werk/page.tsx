"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import HorizontalScroll from "../components/HorizontalScroll";

const filters = ["Alles", "Partnerships", "Video", "Fotografie", "Events", "Design"];

const BASE = "https://concess.nl/wp-content/uploads";

const featured = [
  { brand: "L'Oréal Paris", creator: "Myron Koops", views: "18M+", type: "Partnerships", gradient: "from-stone-700 to-stone-950", img: `${BASE}/2024/01/Vrouwmishow_Concess.png` },
  { brand: "Revolut", creator: "Enzo Knol", views: "15M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950", img: `${BASE}/2024/01/EnzoKnol_Concess.png` },
  { brand: "Berg", creator: "Enzo Knol", views: "12M+", type: "Video", gradient: "from-stone-600 to-stone-900", img: `${BASE}/2024/01/402-AutoMotive-x-Enzo-Knol-1.png` },
  { brand: "Garmin", creator: "Myron", views: "10M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-950", img: `${BASE}/2023/04/De-bennies-concess.jpg` },
  { brand: "Air Up", creator: "De Bennies", views: "8M+", type: "Partnerships", gradient: "from-zinc-600 to-zinc-900", img: `${BASE}/2024/01/Bennies-x-Air-up.png` },
];

const all = [
  { brand: "L'Oréal Paris", creator: "Myron Koops", views: "18M+", type: "Partnerships", gradient: "from-stone-800 to-stone-950", img: `${BASE}/2024/01/Vrouwmishow_Concess.png` },
  { brand: "Revolut", creator: "Enzo Knol", views: "15M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-900", img: `${BASE}/2024/01/EnzoKnol_Concess.png` },
  { brand: "Berg", creator: "Enzo Knol", views: "12M+", type: "Video", gradient: "from-stone-700 to-stone-900", img: `${BASE}/2024/01/402-AutoMotive-x-Enzo-Knol-1.png` },
  { brand: "Garmin", creator: "Myron", views: "10M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-900", img: `${BASE}/2023/04/De-bennies-concess.jpg` },
  { brand: "Air Up", creator: "De Bennies", views: "8M+", type: "Partnerships", gradient: "from-zinc-800 to-zinc-950", img: `${BASE}/2024/01/Bennies-x-Air-up.png` },
  { brand: "BookBeat", creator: "Enzo Knol", views: "6M+", type: "Partnerships", gradient: "from-stone-600 to-stone-900", img: `${BASE}/2024/01/Bookbeattest-1.png` },
  { brand: "Emma", creator: "De Bennies", views: "5M+", type: "Video", gradient: "from-neutral-800 to-neutral-950", img: `${BASE}/2024/01/Snuggstest-1.png` },
  { brand: "Bud Holland", creator: "Myron", views: "4M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950", img: `${BASE}/2024/01/Verraderstest-1.png` },
  { brand: "Subway Festival", creator: "Concess", views: "", type: "Events", gradient: "from-stone-700 to-stone-950", img: `${BASE}/2024/01/Vrouwmibo-x-Subway.png` },
  { brand: "Legends of Gaming", creator: "Enzo Knol", views: "3M+", type: "Events", gradient: "from-neutral-700 to-zinc-900", img: `${BASE}/2024/01/LOGtest-1.png` },
  { brand: "Vrouwmibo", creator: "Concess", views: "", type: "Fotografie", gradient: "from-stone-600 to-stone-950", img: `${BASE}/2023/05/Vrouwmibo-concess-1024x756.jpg` },
  { brand: "402 Automotive", creator: "Concess", views: "", type: "Fotografie", gradient: "from-zinc-700 to-zinc-900", img: `${BASE}/2024/01/402-AutoMotive-x-Enzo-Knol-1.png` },
  { brand: "StukTV", creator: "Concess", views: "", type: "Fotografie", gradient: "from-neutral-600 to-neutral-900", img: `${BASE}/2023/05/Thumbnail-StukTV.jpg` },
  { brand: "Tantoe Muzikaal", creator: "Concess", views: "", type: "Video", gradient: "from-stone-700 to-stone-900", img: `${BASE}/2023/05/Tantoe-Muzikaal-thumbnail-concess.jpg` },
  { brand: "De Bennies Podcast", creator: "De Bennies", views: "2M+", type: "Video", gradient: "from-zinc-800 to-zinc-950", img: `${BASE}/2023/04/De-bennies-concess.jpg` },
];

export default function WerkPage() {
  const [active, setActive] = useState("Alles");
  const filtered = active === "Alles" ? all : all.filter((p) => p.type === active);

  return (
    <main>
      <Navbar forceDark />

      {/* Header */}
      <section className="pt-36 pb-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3">Selected Work</span>
            <h1
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(3.5rem, 7vw, 7rem)",
                lineHeight: "0.93",
                color: "var(--color-dark-900)",
              }}
            >
              Ons<br /><span className="italic">werk</span>
            </h1>
          </div>
          <p className="hidden md:block text-taupe-500 text-sm max-w-xs leading-relaxed pb-2">
            Een selectie van brand partnerships, video producties, events en meer.
          </p>
        </div>
      </section>

      {/* Featured horizontal slider */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500">Featured</span>
        </div>
        <HorizontalScroll slides={featured} />
      </section>

      {/* All work */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
        {/* Filters */}
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="text-xs tracking-wider uppercase px-5 py-2.5 rounded-full border transition-all duration-300"
                style={
                  active === f
                    ? { background: "var(--color-dark-900)", color: "var(--color-linen-200)", borderColor: "var(--color-dark-900)" }
                    : { background: "transparent", color: "var(--color-taupe-500)", borderColor: "var(--color-linen-300)" }
                }
              >
                {f}
              </button>
            ))}
          </div>
          <span className="text-[10px] tracking-widest uppercase text-taupe-400">{filtered.length} projecten</span>
        </div>

        {/* Compact grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filtered.map((p, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              style={{ aspectRatio: "3/4" }}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                {p.img
                  ? <img src={p.img} alt="" className="w-full h-full object-cover" />
                  : <div className={`w-full h-full bg-gradient-to-br ${p.gradient}`} />
                }
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Type badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[9px] tracking-widest uppercase text-white/50 border border-white/15 px-2 py-0.5 rounded-full">
                  {p.type}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4">
                {p.views && (
                  <p className="text-white/40 text-[10px] tracking-wider uppercase mb-1">{p.views}</p>
                )}
                <p
                  className="text-white text-sm leading-tight"
                  style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                >
                  {p.brand}
                </p>
                <p className="text-white/50 text-xs mt-0.5">× {p.creator}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/30 flex items-center justify-center">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
