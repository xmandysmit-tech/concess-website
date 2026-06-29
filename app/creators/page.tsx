"use client";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import { creators } from "../data/content";

const polaroids = [
  { src: "/images/402-AutoMotive-x-Enzo-Knol-1.png",  rot: -6,  top: "-5%",  left: "-2%" },
  { src: "/images/Vrouwmishow_Concess.png",            rot:  4,  top: "-6%",  left: "14%" },
  { src: "/images/Bennies-x-Air-up.png",              rot: -3,  top: "-4%",  left: "30%" },
  { src: "/images/creators/Myron_banner.png",                   rot:  6,  top: "-7%",  left: "47%" },
  { src: "/images/Vrouwmibo-x-Subway.png",            rot: -5,  top: "-5%",  left: "63%" },
  { src: "/images/De-bennies-concess.jpg",            rot:  3,  top: "-6%",  left: "79%" },
  { src: "/images/creators/enzo_banner.png",                   rot:  7,  top: "35%",  left: "-3%" },
  { src: "/images/Bookbeattest-1.png",                rot: -4,  top: "33%",  left: "13%" },
  { src: "/images/Snuggstest-1.png",                  rot:  2,  top: "37%",  left: "29%" },
  { src: "/images/EnzoKnol_Concess.png",              rot: -6,  top: "32%",  left: "46%" },
  { src: "/images/Vrouwmibo-concess-1024x756.jpg",    rot:  5,  top: "35%",  left: "63%" },
  { src: "/images/LOGtest-1.png",                     rot: -3,  top: "33%",  left: "80%" },
];

function PlatformIcon({ platform }: { platform: string }) {
  const p = platform.toLowerCase();
  const cls = "text-white/40 shrink-0";
  if (p.includes("youtube")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>;
  if (p.includes("instagram")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>;
  if (p.includes("tiktok")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 000 12.68 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/></svg>;
  if (p.includes("snapchat")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.5 2 6 4.5 6 8v.5c-.5.1-1.5.4-2 .9-.3.3-.2.7.1.9.8.5 1.9.5 2.5.4-.1.5-.4 1.5-1.2 2.3C4.6 13.8 3 14 2 14.3c-.3.1-.5.4-.3.7.5 1 1.9 1.4 3.5 1.6.1.3.2.8-.1 1.3-.1.2 0 .4.2.5.6.3 1.5.5 2.7.5 1 0 2.1-.4 3-.4s2 .4 3 .4c1.2 0 2.1-.2 2.7-.5.2-.1.3-.3.2-.5-.3-.5-.2-1-.1-1.3 1.6-.2 3-.6 3.5-1.6.2-.3 0-.6-.3-.7-1-.3-2.6-.5-3.4-1.3-.8-.8-1.1-1.8-1.2-2.3.6.1 1.7.1 2.5-.4.3-.2.4-.6.1-.9-.5-.5-1.5-.8-2-.9V8C18 4.5 15.5 2 12 2z"/></svg>;
  if (p.includes("spotify")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 14.4c-.2.3-.6.4-.9.2-2.5-1.5-5.6-1.9-9.3-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4-.9 7.5-.5 10.3 1.2.3.2.4.6.2.9zm1.2-2.7c-.2.4-.7.5-1.1.3-2.8-1.7-7.1-2.2-10.5-1.2-.4.1-.9-.1-1-.5-.1-.4.1-.9.5-1 3.8-1.1 8.5-.6 11.8 1.4.4.2.5.7.3 1zm.1-2.8C14.4 9 8.9 8.8 5.7 9.8c-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.7-1.1 9.8-1 13.6 1.4.5.3.6.9.3 1.4-.3.5-.9.6-1.1.1z"/></svg>;
  if (p.includes("podimo")) return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 3a7 7 0 110 14A7 7 0 0112 5zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2a2 2 0 110 4 2 2 0 010-4z"/></svg>;
  return <svg className={cls} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/></svg>;
}

const creatorPortraits: Record<string, string> = {
  "Enzo Knol": "/images/creators/enzo_knol.jpg",
  "Myron Koops": "/images/creators/myron_koops.jpg",
  "De Bennies": "/images/creators/de_bennies.jpg",
};

export default function CreatorsPage() {
  const [activeCreator, setActiveCreator] = useState(creators[0].name);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers = creators.map((c) => {
      const el = sectionRefs.current[c.name];
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCreator(c.name); },
        { rootMargin: "-40% 0px -40% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Hero header */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-28 pb-4">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}>
              Concess <span className="italic" style={{ color: "var(--color-taupe-300)" }}>creators</span>
            </h1>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Wij verzorgen het exclusieve management van een select aantal content creators. Van strategie en partnerships tot dagelijkse begeleiding.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky creator nav */}
      <div className="sticky top-16 z-40" style={{ background: "var(--color-dark-900)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-2 pt-3 pb-6">
          {creators.map((c) => {
            const isActive = activeCreator === c.name;
            return (
              <a
                key={c.name}
                href={`#${c.name.toLowerCase().replace(/\s/g, "-")}`}
                className="flex items-center gap-3 px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  background: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                  border: `1px solid ${isActive ? "rgba(255,255,255,0.15)" : "transparent"}`,
                }}
              >
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0" style={{ border: `1.5px solid ${isActive ? c.accentColor : "rgba(255,255,255,0.15)"}` }}>
                  <img src={creatorPortraits[c.name]} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <span className="text-[11px] tracking-widest uppercase transition-colors" style={{ color: isActive ? "white" : "rgba(255,255,255,0.4)" }}>
                  {c.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Creator sections */}
      <div>
        {creators.map((c) => (
          <section
            key={c.name}
            id={c.name.toLowerCase().replace(/\s/g, "-")}
            ref={(el) => { sectionRefs.current[c.name] = el; }}
            style={{ scrollMarginTop: "116px" }}
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
                    <h2 className="text-white mb-2" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", lineHeight: "0.95" }}>
                      {c.name}
                    </h2>
                    <p className="text-white/50 text-sm">{c.title}</p>
                    <div className="flex gap-2 mt-4">
                      {c.platforms.map((p) => (
                        <span key={p} className="text-[10px] tracking-wider uppercase border border-white/20 text-white/60 px-2.5 py-1 rounded-full">{p}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    {c.platformStats.map((s) => (
                      <a
                        key={s.platform}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-8 border border-white/10 rounded-xl px-4 py-2.5 hover:border-white/30 hover:bg-white/5 transition-all"
                      >
                        <span className="flex items-center gap-2.5">
                          <PlatformIcon platform={s.platform} />
                          <span className="text-[10px] tracking-widest uppercase text-white/50">{s.platform}</span>
                        </span>
                        <span className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-sans)" }}>{s.followers}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="bg-linen-100 border-b border-linen-300">
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <p className="text-dark-700 text-sm leading-relaxed">{c.bio}</p>
              </div>
            </div>

            {/* Recent partnerships grid */}
            <div className="py-10 max-w-7xl mx-auto px-6 md:px-12">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] tracking-widest uppercase text-taupe-500">Recente partnerships</span>
                <a href="/partnerships" className="text-[10px] tracking-widest uppercase text-dark-700 hover:text-dark-900 transition-colors">
                  Bekijk alle partnerships →
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {c.work.slice(0, 3).map((w, i) => {
                  const inner = (
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${w.gradient}`} style={{ aspectRatio: "4/3" }}>
                      {w.img && <img src={w.img} alt={w.brand} className="absolute inset-0 w-full h-full object-cover" />}
                      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)" }} />
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                        <div>
                          <span className="text-[9px] tracking-widest uppercase text-white/50 block mb-1">{w.type}</span>
                          <h3 className="text-white text-lg" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{w.brand}</h3>
                        </div>
                        {w.slug && (
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1.5px solid rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.08)" }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                  return w.slug
                    ? <a key={i} href={`/partnerships/${w.slug}`}>{inner}</a>
                    : <div key={i}>{inner}</div>;
                })}
              </div>
            </div>
          </section>
        ))}
      </div>

      <CTAFooter />
    </main>
  );
}
