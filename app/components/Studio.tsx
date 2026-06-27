"use client";
import { useState } from "react";

const services = [
  {
    num: "01", title: "Video & Productie", desc: "Van concept tot upload.",
    gradient: "from-stone-800 to-stone-950", accent: "#C9B99A",
    img: "/images/studio/format_ontwikkeling.jpg",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg>,
  },
  {
    num: "02", title: "Fotografie", desc: "Social & events.",
    gradient: "from-zinc-700 to-zinc-900", accent: "#B8A488",
    img: "/images/studio/fotografie.jpg",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg>,
  },
  {
    num: "03", title: "Events", desc: "Activaties die bijblijven.",
    gradient: "from-neutral-700 to-neutral-900", accent: "#9E8B72",
    img: "/images/studio/events.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
  },
  {
    num: "04", title: "AR Filters", desc: "Instagram & TikTok.",
    gradient: "from-stone-700 to-stone-900", accent: "#C9B99A",
    img: "/images/studio/ar_filter.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
  },
  {
    num: "05", title: "Graphic Design", desc: "Branding, merch & assets.",
    gradient: "from-zinc-800 to-zinc-950", accent: "#B8A488",
    img: "/images/studio/graphic_design2.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg>,
  },
  {
    num: "06", title: "Marketing & Social", desc: "Strategie, groei & analytics.",
    gradient: "from-stone-600 to-stone-900", accent: "#9E8B72",
    img: "/images/studio/marketing2.jpg.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>,
  },
  {
    num: "07", title: "Web Design", desc: "Sites die converteren.",
    gradient: "from-neutral-800 to-neutral-950", accent: "#C9B99A",
    img: "/images/studio/webdesign3.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>,
  },
  {
    num: "08", title: "Podcasts", desc: "Audio & video productie.",
    gradient: "from-zinc-700 to-zinc-950", accent: "#B8A488",
    img: "/images/studio/podcasts2.jpg.png",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-6 h-6"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></svg>,
  },
];

export default function Studio() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="py-24 bg-linen-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3">Studio</span>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "var(--color-dark-900)", lineHeight: "1.1" }}>
              Wat wij bij <span className="italic">Concess Studio</span><br />doen
            </h2>
          </div>
          <a href="/studio" className="hidden md:flex items-center gap-2 text-xs tracking-wider uppercase text-dark-700 hover:text-dark-900 transition-colors">
            Bekijk alles <span className="text-base">→</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {services.map((s) => {
            const isHovered = hovered === s.num;
            const isDimmed = hovered !== null && !isHovered;
            return (
              <div
                key={s.num}
                className="relative overflow-hidden rounded-2xl group"
                style={{ height: "190px" }}
                onMouseEnter={() => setHovered(s.num)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Background image or gradient */}
                {s.img ? (
                  <img
                    src={s.img}
                    alt={s.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                    style={{ transform: isHovered ? "scale(1.07)" : "scale(1)" }}
                  />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} transition-all duration-500`} style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }} />
                )}
                {/* Dark overlay over image */}
                <div className="absolute inset-0 transition-opacity duration-300" style={{ background: "linear-gradient(to top, rgba(15,12,10,0.75) 0%, rgba(15,12,10,0.45) 100%)", opacity: isHovered ? 0.8 : 1 }} />
                {/* Dim overlay when another is hovered */}
                <div className="absolute inset-0 bg-dark-900 transition-opacity duration-300" style={{ opacity: isDimmed ? 0.3 : 0 }} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <div className="flex items-start justify-between">
                    <div
                      className="p-2 rounded-xl border transition-all duration-300"
                      style={{ borderColor: `${s.accent}35`, color: s.accent, background: `${s.accent}15` }}
                    >
                      {s.icon}
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-white transition-transform duration-300"
                      style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.05rem", transform: isHovered ? "translateY(-2px)" : "translateY(0)" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-white/50 text-[11px] mt-1 tracking-wide">{s.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
