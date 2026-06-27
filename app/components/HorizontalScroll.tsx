"use client";
import { useRef } from "react";

interface Slide {
  brand: string;
  creator: string;
  views?: string;
  type: string;
  gradient: string;
  img?: string;
}

export default function HorizontalScroll({ slides }: { slides: Slide[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "right" ? 480 : -480, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <div className="absolute right-6 md:right-12 -top-14 flex gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-linen-300 flex items-center justify-center text-dark-700 hover:bg-dark-900 hover:text-linen-200 hover:border-dark-900 transition-all duration-300"
        >
          ←
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-linen-300 flex items-center justify-center text-dark-700 hover:bg-dark-900 hover:text-linen-200 hover:border-dark-900 transition-all duration-300"
        >
          →
        </button>
      </div>

      {/* Slider */}
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group"
            style={{ width: "380px", height: "480px" }}
          >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              {s.img
                ? <img src={s.img} alt="" className="w-full h-full object-cover" />
                : <div className={`w-full h-full bg-gradient-to-br ${s.gradient}`} />
              }
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
            <div className="relative z-10 flex flex-col justify-between h-full p-7">
              <div className="flex items-start justify-between">
                <span className="text-[10px] tracking-widest uppercase text-taupe-400 border border-taupe-600/40 px-3 py-1 rounded-full">
                  {s.type}
                </span>
                <span className="text-white/30 text-[10px] tracking-widest">0{i + 1}</span>
              </div>
              <div>
                {s.views && (
                  <p className="text-white/40 text-xs tracking-wider uppercase mb-3">{s.views} views</p>
                )}
                <h3
                  className="text-white leading-tight group-hover:translate-x-1 transition-transform duration-300"
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  }}
                >
                  {s.brand}
                  <br />
                  <span className="opacity-60">× {s.creator}</span>
                </h3>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-white/40 text-xs tracking-wider uppercase">Bekijk project</span>
                  <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white/10 transition-all">
                    <span className="text-white text-sm">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
