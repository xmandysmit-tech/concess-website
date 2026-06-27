"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import { projects } from "../data/content";

const studioProjects = projects.filter((p) =>
  ["Video", "Fotografie", "Events", "Design"].includes(p.type)
);

const filters = ["Alles", ...Array.from(new Set(studioProjects.map((p) => p.type)))];

export default function StudioPage() {
  const [activeFilter, setActiveFilter] = useState("Alles");

  const shown = activeFilter === "Alles"
    ? studioProjects
    : studioProjects.filter((p) => p.type === activeFilter);

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Header */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-36 pb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}>
              Concess <span className="italic" style={{ color: "var(--color-taupe-300)" }}>studio</span>
            </h1>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Naast onze management en partnership tak heeft Concess een creative studio. Van video tot event, wij leveren verschillende creatieve diensten.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header + filters */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3">Studio</span>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 3rem)", lineHeight: "1", color: "var(--color-dark-900)" }}>
                Producties waar we<br /><span className="italic">trots op zijn</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-[10px] tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-200"
                  style={{
                    background: activeFilter === f ? "var(--color-dark-900)" : "transparent",
                    color: activeFilter === f ? "var(--color-linen-200)" : "var(--color-taupe-500)",
                    borderColor: activeFilter === f ? "var(--color-dark-900)" : "var(--color-linen-300)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid — 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {shown.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-xl group"
                style={{ aspectRatio: "4/3" }}
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.brand}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                )}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-[8px] tracking-widest uppercase text-white/40 block mb-0.5">{p.type}</span>
                  <h3 className="text-white text-sm" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{p.brand}</h3>
                  {p.creator && <p className="text-white/35 text-[10px] mt-0.5">{p.creator}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
