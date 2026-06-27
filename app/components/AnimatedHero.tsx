"use client";
import { useEffect, useState } from "react";

const words = ["Campagnes", "die", "mensen", "onthouden."];

const polaroids = [
  { src: "/images/402-AutoMotive-x-Enzo-Knol-1.png",   rot: -8,  top: "-2%",  left: "-2%" },
  { src: "/images/Vrouwmishow_Concess.png",             rot:  5,  top: "-4%",  left: "14%" },
  { src: "/images/Bennies-x-Air-up.png",               rot: -3,  top: "-3%",  left: "30%" },
  { src: "/images/Myron_banner.png",                    rot:  7,  top: "-5%",  left: "47%" },
  { src: "/images/Vrouwmibo-x-Subway.png",             rot: -6,  top: "-2%",  left: "63%" },
  { src: "/images/De-bennies-concess.jpg",             rot:  4,  top: "-4%",  left: "79%" },
  { src: "/images/enzo_banner.png",                    rot:  9,  top: "38%",  left: "-3%" },
  { src: "/images/Bookbeattest-1.png",                 rot: -5,  top: "36%",  left: "13%" },
  { src: "/images/Snuggstest-1.png",                   rot:  3,  top: "40%",  left: "29%" },
  { src: "/images/EnzoKnol_Concess.png",               rot: -7,  top: "35%",  left: "46%" },
  { src: "/images/Vrouwmibo-concess-1024x756.jpg",     rot:  6,  top: "38%",  left: "63%" },
  { src: "/images/LOGtest-1.png",                      rot: -4,  top: "36%",  left: "80%" },
];

export default function AnimatedHero() {
  const [visible, setVisible] = useState<boolean[]>(words.map(() => false));
  const [btnsVisible, setBtnsVisible] = useState(false);
  const [polaroidsVisible, setPolaroidsVisible] = useState(false);

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
    setTimeout(() => setBtnsVisible(true), 1100);
    setTimeout(() => setPolaroidsVisible(true), 100);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Polaroid collage background */}
      <div className="absolute inset-0 overflow-hidden">
        {polaroids.map((p, i) => (
          <div
            key={i}
            className="absolute transition-all duration-1000"
            style={{
              top: p.top,
              left: p.left,
              transform: `rotate(${p.rot}deg) translateY(${polaroidsVisible ? 0 : 30}px)`,
              opacity: polaroidsVisible ? 1 : 0,
              transitionDelay: `${i * 60}ms`,
              width: "220px",
              background: "#f2ede6",
              padding: "9px 9px 32px 9px",
              boxShadow: "0 12px 32px rgba(0,0,0,0.5), 0 3px 8px rgba(0,0,0,0.3)",
              zIndex: i % 3,
            }}
          >
            <div style={{ width: "100%", height: "165px", overflow: "hidden", background: "#2a2724" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark overlay — zIndex 10 to sit above all polaroids (max zIndex 2) */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(20,18,16,0.82)", zIndex: 10 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent 30%, rgba(20,18,16,0.95) 75%, rgba(20,18,16,1) 100%)", zIndex: 10 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(20,18,16,0.75) 0%, transparent 55%)", zIndex: 10 }} />

      {/* Main headline */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
        <div className="max-w-2xl">
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
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
