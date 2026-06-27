"use client";
import { useEffect, useRef, useState } from "react";

const words = ["Campagnes", "die", "mensen", "onthouden."];

export default function AnimatedHero() {
  const [visible, setVisible] = useState<boolean[]>(words.map(() => false));
  const [subVisible, setSubVisible] = useState(false);
  const [btnsVisible, setBtnsVisible] = useState(false);

  useEffect(() => {
    words.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, 200 + i * 120);
    });
    setTimeout(() => setSubVisible(true), 900);
    setTimeout(() => setBtnsVisible(true), 1100);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <img
          src="/images/EnzoKnol_Concess.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{ objectPosition: "center top" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #262626 0%, rgba(38,38,38,0.6) 50%, rgba(38,38,38,0.3) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(38,38,38,0.85) 0%, transparent 60%)" }} />
      </div>

      {/* Label */}
      <div
        className="absolute top-32 left-8 md:left-12 transition-all duration-700"
        style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? "translateY(0)" : "translateY(8px)" }}
      >
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-300 opacity-60">
          Creative Partnerships
        </span>
      </div>

      {/* Main headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
        <div className="max-w-4xl">
          <h1
            className="text-white mb-6 flex flex-wrap gap-x-5"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(3.2rem, 7vw, 7.5rem)",
              lineHeight: "0.95",
            }}
          >
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-700"
                style={{
                  opacity: visible[i] ? 1 : 0,
                  transform: visible[i] ? "translateY(0)" : "translateY(32px)",
                  fontStyle: word === "mensen" ? "italic" : "normal",
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          <p
            className="text-linen-300/60 text-sm md:text-base leading-relaxed mb-10 max-w-md transition-all duration-700"
            style={{ opacity: subVisible ? 1 : 0, transform: subVisible ? "translateY(0)" : "translateY(16px)" }}
          >
            Wij creëren strategische samenwerkingen tussen merken en creators
            die impact maken en resultaten opleveren.
          </p>

          <div
            className="flex items-center gap-4 transition-all duration-700"
            style={{ opacity: btnsVisible ? 1 : 0, transform: btnsVisible ? "translateY(0)" : "translateY(16px)" }}
          >
            <a
              href="#werk"
              className="inline-flex items-center gap-3 bg-linen-200 text-dark-900 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:bg-white"
            >
              Bekijk ons werk <span className="text-base">→</span>
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 border border-linen-300/30 text-linen-200 px-6 py-3.5 rounded-full text-xs tracking-widest uppercase transition-all duration-300 hover:border-linen-300/70"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-8 md:left-12 flex items-center gap-3 text-linen-300/30 transition-all duration-700"
        style={{ opacity: btnsVisible ? 1 : 0 }}
      >
        <div className="w-5 h-8 border border-linen-300/20 rounded-full flex justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-linen-300/40 rounded-full animate-bounce" />
        </div>
        <span className="text-[10px] tracking-widest2 uppercase">Scroll</span>
      </div>

      {/* Corner stats */}
      <div
        className="absolute bottom-8 right-8 md:right-12 hidden md:flex gap-8 transition-all duration-700"
        style={{ opacity: btnsVisible ? 1 : 0 }}
      >
        {[["150M+", "Views"], ["85+", "Campagnes"], ["3", "Creators"]].map(([v, l]) => (
          <div key={l} className="text-right">
            <p
              style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              className="text-white text-xl opacity-80"
            >
              {v}
            </p>
            <p className="text-[9px] tracking-widest uppercase text-linen-300/30">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
