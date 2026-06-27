"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import HorizontalScroll from "../components/HorizontalScroll";
import { creators } from "../data/content";

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

export default function CreatorsPage() {
  const [activeTab, setActiveTab] = useState<Record<string, string>>({});

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Hero header */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-32 pb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}
              >
                Concess <span className="italic" style={{ color: "var(--color-taupe-300)" }}>creators</span>
              </h1>
            </div>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Wij beheren een select gezelschap van creators op basis van talent, authenticiteit en bereik. Niet de meesten — de besten.
            </p>
          </div>
        </div>

      </section>

      {/* Sticky creator nav */}
      <div className="sticky top-16 z-40 border-b border-linen-300" style={{ backgroundColor: "rgba(244,243,241,0.97)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-1 py-2">
          {creators.map((c, i) => (
            <a
              key={c.name}
              href={`#${c.name.toLowerCase().replace(/\s/g, "-")}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-200 text-taupe-500 hover:bg-dark-900 hover:text-linen-200"
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

                  {/* Platform stats */}
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
