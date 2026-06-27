"use client";
import { useEffect, useState } from "react";

const words = ["Campagnes", "die", "mensen", "onthouden."];

const polaroids = [
  { src: "/images/402-AutoMotive-x-Enzo-Knol-1.png", label: "Enzo × AutoMotive", rot: -7,  top: "4%",  left: "46%" },
  { src: "/images/Myron_banner.png",                  label: "Myron Koops",        rot:  4,  top: "2%",  left: "60%" },
  { src: "/images/Bennies-x-Air-up.png",              label: "De Bennies × Air Up",rot: -3,  top: "8%",  left: "73%" },
  { src: "/images/enzo_banner.png",                   label: "Enzo Knol",          rot:  8,  top: "38%", left: "50%" },
  { src: "/images/Vrouwmibo-x-Subway.png",            label: "Vrouwmibo × Subway", rot: -5,  top: "42%", left: "65%" },
  { src: "/images/De-bennies-concess.jpg",            label: "De Bennies",         rot:  6,  top: "36%", left: "78%" },
  { src: "/images/Vrouwmishow_Concess.png",           label: "Vrouwmishow",        rot: -9,  top: "66%", left: "55%" },
  { src: "/images/Bookbeattest-1.png",                label: "BookBeat",           rot:  3,  top: "62%", left: "72%" },
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
    setTimeout(() => setPolaroidsVisible(true), 300);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] flex flex-col justify-end overflow-hidden">
      {/* Dark background */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Polaroids */}
      <div className="absolute inset-0 overflow-hidden">
        {polaroids.map((p, i) => (
          <div
            key={i}
            className="absolute transition-all duration-700"
            style={{
              top: p.top,
              left: p.left,
              transform: `rotate(${p.rot}deg) translateY(${polaroidsVisible ? 0 : 40}px)`,
              opacity: polaroidsVisible ? 1 : 0,
              transitionDelay: `${i * 80}ms`,
              width: "160px",
              background: "#f5f0e8",
              padding: "8px 8px 28px 8px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
              zIndex: i,
            }}
          >
            <div style={{ width: "100%", height: "120px", overflow: "hidden", background: "#2a2724" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={p.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9, pointerEvents: "none" }}
              />
            </div>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "8px", color: "#6e6259", textAlign: "center", marginTop: "6px", letterSpacing: "0.04em" }}>
              {p.label}
            </p>
          </div>
        ))}
      </div>

      {/* Gradients over polaroids */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, rgba(30,28,26,0.95) 0%, rgba(30,28,26,0.7) 40%, rgba(30,28,26,0.1) 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(30,28,26,1) 0%, rgba(30,28,26,0.4) 30%, transparent 60%)" }} />

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
