"use client";
import { useEffect, useState } from "react";

const words = ["Campagnes", "die", "mensen", "onthouden."];

type Polaroid = { src: string; rot: number; top: string; left: string; mobileHidden?: boolean };

const polaroids: Polaroid[] = [
  // Rij 1 — zichtbaar op mobile + desktop
  { src: "/images/studio/De-bennies-concess.jpg",                        rot: -8,  top: "-5%",  left: "-2%" },
  { src: "/images/studio/Vrouwmishow_Concess.png",                       rot:  5,  top: "-7%",  left: "14%" },
  { src: "/images/Partnerships/de-bennies/air-up/cover.png",             rot: -3,  top: "-6%",  left: "30%" },
  { src: "/images/creators/Myron_banner.png",                            rot:  7,  top: "-7%",  left: "47%" },
  { src: "/images/Partnerships/vrouwmibo/Vrouwmibo x Subway.png",        rot: -5,  top: "-5%",  left: "63%" },
  { src: "/images/Partnerships/Enzo/402-AutoMotive-x-Enzo-Knol-1.png",  rot:  4,  top: "-6%",  left: "80%" },
  // Rij 2 — zichtbaar op mobile + desktop
  { src: "/images/creators/enzo_banner.png",                             rot:  9,  top: "17%",  left: "-3%" },
  { src: "/images/Partnerships/Myron/Myron-x-Bookbeat.png",             rot: -5,  top: "15%",  left: "13%" },
  { src: "/images/Partnerships/Myron/Snuggs-x-Myron.png",               rot:  3,  top: "18%",  left: "29%" },
  { src: "/images/studio/Vrouwmibo-concess-1024x756.jpg",                rot: -7,  top: "14%",  left: "46%" },
  { src: "/images/Partnerships/Noel-x-Milka.gif",                        rot:  6,  top: "17%",  left: "63%" },
  { src: "/images/Partnerships/Enzo/LOG-x-Enzo.png",                    rot: -4,  top: "15%",  left: "80%" },
  // Rij 3 — zichtbaar op mobile + desktop
  { src: "/images/Partnerships/Chahid-x-Verraders.png",                  rot: -6,  top: "37%",  left: "-2%" },
  { src: "/images/Partnerships/Myron/Myron-x-Robijn-1.gif",             rot:  4,  top: "35%",  left: "14%" },
  { src: "/images/studio/Tantoe-Muzikaal-thumbnail-concess.jpg",         rot: -2,  top: "38%",  left: "30%" },
  { src: "/images/Partnerships/Xbox-x-Chahid.gif",                       rot:  8,  top: "35%",  left: "47%" },
  { src: "/images/studio/Thumbnail-StukTV.jpg",                          rot: -5,  top: "37%",  left: "63%" },
  { src: "/images/Partnerships/Enzo/Bristol-x-Enzo-Knol.gif",           rot:  3,  top: "36%",  left: "80%" },
  // Rij 4 — alleen desktop
  { src: "/images/Partnerships/Shoeby-x-Dylan.png",                      rot: -9,  top: "57%",  left: "-2%",  mobileHidden: true },
  { src: "/images/Partnerships/vrouwmibo/zusje x vrouwmibo.jpg",         rot:  6,  top: "55%",  left: "14%",  mobileHidden: true },
  { src: "/images/Partnerships/Revolut-x-Chhaid.png",                    rot: -3,  top: "58%",  left: "30%",  mobileHidden: true },
  { src: "/images/Partnerships/Emma-Sleep-x-Chahid.png",                 rot:  7,  top: "55%",  left: "47%",  mobileHidden: true },
  { src: "/images/Partnerships/VanReusel x Dylan Haegens.png",           rot: -5,  top: "57%",  left: "63%",  mobileHidden: true },
  { src: "/images/Partnerships/Jachtseizoen-Chahid-Charrak-1.png",       rot:  4,  top: "56%",  left: "80%",  mobileHidden: true },
  // Rij 5 — alleen desktop
  { src: "/images/Partnerships/vrouwmibo/EOTB x Vrouwmibo.png",          rot: -7,  top: "77%",  left: "-2%",  mobileHidden: true },
  { src: "/images/Partnerships/Pokemon x Dylan Haegens.jpg",             rot:  5,  top: "75%",  left: "14%",  mobileHidden: true },
  { src: "/images/Partnerships/Body-Fit-x-Nesim.gif",                    rot: -2,  top: "78%",  left: "30%",  mobileHidden: true },
  { src: "/images/Partnerships/Loreal-x-Randy.png",                      rot:  9,  top: "75%",  left: "47%",  mobileHidden: true },
  { src: "/images/Partnerships/Veilig op Weg x Dylan Haegens.png",       rot: -4,  top: "77%",  left: "63%",  mobileHidden: true },
  { src: "/images/Partnerships/Enzo/Enzo-x-Active-pixel.png",            rot:  3,  top: "76%",  left: "80%",  mobileHidden: true },
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
    <section className="relative h-[75vh] md:h-screen min-h-[560px] flex flex-col justify-end overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-dark-900" />

      {/* Polaroid collage background */}
      <div className="absolute inset-0 overflow-hidden">
        {polaroids.map((p, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-1000${p.mobileHidden ? " hidden md:block" : ""}`}
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
            className="text-white mb-6 flex flex-wrap gap-x-3"
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(2.4rem, 7vw, 7.5rem)",
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
