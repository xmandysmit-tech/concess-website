"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import HorizontalScroll from "../components/HorizontalScroll";

const creators = [
  {
    name: "Enzo Knol",
    handle: "@enzoknol",
    title: "Nederland's grootste YouTuber",
    followers: "34M+",
    bio: "Enzo bereikt dagelijks miljoenen kijkers met authentieke lifestyle content. Van gaming tot family — zijn publiek vertrouwt hem volledig, en dat vertaalt zich in campagneresultaten die voor zich spreken.",
    platforms: ["YouTube", "Instagram", "TikTok"],
    stats: [
      { label: "Volgers", value: "34M+" },
      { label: "Gem. views", value: "2M+" },
      { label: "Campagnes", value: "50+" },
      { label: "Eng. rate", value: "6.4%" },
    ],
    gradient: "from-stone-700 via-stone-800 to-stone-950",
    accentColor: "#C9B99A",
    img: "/images/EnzoKnol_Concess.png",
    work: [
      { brand: "L'Oréal Paris", creator: "Enzo Knol", views: "18M+", type: "Partnerships", gradient: "from-stone-800 to-stone-950" },
      { brand: "Revolut", creator: "Enzo Knol", views: "15M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950" },
      { brand: "Berg", creator: "Enzo Knol", views: "12M+", type: "Video", gradient: "from-stone-600 to-stone-900" },
      { brand: "BookBeat", creator: "Enzo Knol", views: "6M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-950" },
    ],
  },
  {
    name: "Myron Koops",
    handle: "@myronkoops",
    title: "Visueel storyteller & lifestyle creator",
    followers: "3M+",
    bio: "Myron combineert lifestyle, mode en travel in een strak visueel verhaal. Zijn content voelt als editorial fotografie — merken die met hem werken stijgen direct in perceptie bij zijn publiek.",
    platforms: ["Instagram", "YouTube", "TikTok"],
    stats: [
      { label: "Volgers", value: "3M+" },
      { label: "Eng. rate", value: "8.2%" },
      { label: "Campagnes", value: "20+" },
      { label: "Bereik", value: "5M+/mo" },
    ],
    gradient: "from-zinc-600 via-zinc-800 to-zinc-950",
    accentColor: "#B8A488",
    img: "/images/Dylan-Haegens-Shoeby-1.png",
    work: [
      { brand: "L'Oréal Paris", creator: "Myron Koops", views: "18M+", type: "Partnerships", gradient: "from-stone-700 to-stone-950" },
      { brand: "Garmin", creator: "Myron", views: "10M+", type: "Partnerships", gradient: "from-neutral-700 to-neutral-900" },
      { brand: "Bud Holland", creator: "Myron", views: "4M+", type: "Partnerships", gradient: "from-zinc-700 to-zinc-950" },
    ],
  },
  {
    name: "De Bennies",
    handle: "@debennies",
    title: "Het energiekste duo van NL",
    followers: "2M+",
    bio: "Brett en Joey, beter bekend als De Bennies, zijn het meest herkenbare duo op Nederlands YouTube. Hun loyale fanbase volgt ze op elk platform — en deelt alles wat ze aanraken.",
    platforms: ["YouTube", "Instagram", "TikTok"],
    stats: [
      { label: "Volgers", value: "2M+" },
      { label: "Gem. views", value: "800K+" },
      { label: "Campagnes", value: "15+" },
      { label: "Shares/video", value: "25K+" },
    ],
    gradient: "from-neutral-600 via-neutral-800 to-neutral-950",
    accentColor: "#9E8B72",
    img: "/images/De-bennies-concess.jpg",
    work: [
      { brand: "Air Up", creator: "De Bennies", views: "8M+", type: "Partnerships", gradient: "from-zinc-600 to-zinc-900" },
      { brand: "Emma", creator: "De Bennies", views: "5M+", type: "Video", gradient: "from-neutral-800 to-neutral-950" },
      { brand: "De Bennies Podcast", creator: "De Bennies", views: "2M+", type: "Video", gradient: "from-zinc-800 to-zinc-950" },
    ],
  },
];

export default function CreatorsPage() {
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  return (
    <main>
      <Navbar forceDark />

      {/* Hero header */}
      <section className="relative pt-36 pb-0 overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 60%, #C9B99A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7D6D59 0%, transparent 50%)" }}
        />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pb-20">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-5">Creator Management</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <h1
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(3.5rem, 7vw, 7rem)", lineHeight: "0.93", color: "white" }}
            >
              Exclusief<br /><span className="italic" style={{ color: "var(--color-taupe-300)" }}>talent</span>
            </h1>
            <p className="text-linen-300/50 text-sm leading-relaxed max-w-sm pb-2">
              Wij beheren een select gezelschap van creators op basis van talent, authenticiteit en bereik.
              Niet de meesten — de besten.
            </p>
          </div>
        </div>

        {/* Stat bar */}
        <div className="border-t border-dark-700 grid grid-cols-3">
          {[
            { v: "39M+", l: "Gecombineerde volgers" },
            { v: "85+", l: "Brand deals" },
            { v: "150M+", l: "Totale views" },
          ].map((s) => (
            <div key={s.l} className="py-6 px-8 border-r border-dark-700 last:border-r-0">
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-3xl">{s.v}</p>
              <p className="text-[10px] tracking-widest uppercase text-taupe-500 mt-1">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sticky creator nav */}
      <div className="sticky top-16 z-40 border-b border-linen-300" style={{ backgroundColor: "rgba(242,237,228,0.97)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-1 py-2">
          {creators.map((c) => (
            <a
              key={c.name}
              href={`#${c.name.toLowerCase().replace(/\s/g, "-")}`}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 hover:bg-dark-900 hover:text-linen-200 text-taupe-500"
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: c.accentColor }}
              />
              {c.name}
            </a>
          ))}
        </div>
      </div>

      {/* Creator sections */}
      <div>
        {creators.map((c, idx) => (
          <section
            key={c.name}
            id={c.name.toLowerCase().replace(/\s/g, "-")}
            className={idx % 2 === 0 ? "py-0" : "py-0"}
          >
            {/* Visual hero per creator */}
            <div className={`relative overflow-hidden min-h-[500px] flex items-end bg-gradient-to-br ${c.gradient}`}>
              {c.img && (
                <img
                  src={c.img}
                  alt={c.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  style={{ objectPosition: "center top" }}
                />
              )}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)" }} />

              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full py-14">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-3" style={{ color: c.accentColor }}>{c.handle}</p>
                    <h2
                      className="text-white mb-2"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "0.95" }}
                    >
                      {c.name}
                    </h2>
                    <p className="text-white/50 text-sm">{c.title}</p>
                    <div className="flex gap-2 mt-4">
                      {c.platforms.map((p) => (
                        <span key={p} className="text-[10px] tracking-wider uppercase border border-white/20 text-white/60 px-2.5 py-1 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {c.stats.map((s) => (
                      <div key={s.label} className="text-center md:text-right">
                        <p
                          className="text-white text-2xl"
                          style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                        >
                          {s.value}
                        </p>
                        <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio + tabs */}
            <div className="bg-linen-100 border-b border-linen-300">
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <p className="text-dark-700 text-sm leading-relaxed">{c.bio}</p>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-3 bg-dark-900 text-linen-200 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all hover:bg-dark-700"
                    >
                      Samenwerken <span>→</span>
                    </a>
                    <a
                      href="/werk"
                      className="inline-flex items-center gap-3 border border-linen-300 text-dark-700 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all hover:border-dark-900"
                    >
                      Alle werk
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Work slider per creator */}
            <div className="py-10 max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-widest uppercase text-taupe-500">Campagnes</span>
              </div>
              <HorizontalScroll slides={c.work} />
            </div>
          </section>
        ))}
      </div>

      <CTAFooter />
    </main>
  );
}
