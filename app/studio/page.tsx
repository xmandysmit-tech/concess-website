"use client";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import { projects } from "../data/content";

const services = [
  { num: "01", title: "Video & Productie", desc: "Van concept tot upload.", gradient: "from-stone-800 to-stone-950", accent: "#C9B99A", img: "/images/studio/format_ontwikkeling.jpg", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" /></svg> },
  { num: "02", title: "Fotografie", desc: "Editorial & commercial.", gradient: "from-zinc-700 to-zinc-900", accent: "#B8A488", img: "/images/studio/fotografie.jpg", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" /><circle cx="12" cy="13" r="4" /></svg> },
  { num: "03", title: "Events", desc: "Activaties die bijblijven.", gradient: "from-neutral-700 to-neutral-900", accent: "#9E8B72", img: "/images/studio/events.png", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg> },
  { num: "04", title: "AR Filters", desc: "Instagram, Snap & TikTok.", gradient: "from-stone-700 to-stone-900", accent: "#C9B99A", img: "/images/studio/ar_filter.png", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg> },
  { num: "05", title: "Graphic Design", desc: "Branding, merch & assets.", gradient: "from-zinc-800 to-zinc-950", accent: "#B8A488", img: "/images/studio/graphic_design.png", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" /></svg> },
  { num: "06", title: "Marketing & Social", desc: "Strategie, groei & analytics.", gradient: "from-stone-600 to-stone-900", accent: "#9E8B72", img: "/images/studio/marketing.jpg", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg> },
  { num: "07", title: "Web Design", desc: "Sites die converteren.", gradient: "from-neutral-800 to-neutral-950", accent: "#C9B99A", img: "/images/studio/webdesign.jpg", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg> },
  { num: "08", title: "Podcasts", desc: "Audio & video productie.", gradient: "from-zinc-700 to-zinc-950", accent: "#B8A488", img: "/images/studio/podcasts.jpg", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-5 h-5"><path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" /><path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" /></svg> },
];

const studioProjects = projects.filter((p) =>
  ["Video", "Fotografie", "Events", "Design"].includes(p.type)
);

export default function StudioPage() {
  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Header */}
      <section className="pt-40 pb-10 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-4">Studio</span>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "0.95", color: "var(--color-dark-900)" }}>
          Wat we<br /><span className="italic">maken</span>
        </h1>
        <p className="text-taupe-500 mt-6 max-w-lg text-sm leading-relaxed">
          Naast onze management en partnership tak heeft Concess een volwaardige studio.
          Van video tot web — wij leveren het volledige creatieve pakket.
        </p>
      </section>

      {/* Services compact grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20 grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {services.map((s) => (
          <div
            key={s.num}
            className="relative overflow-hidden rounded-2xl"
            style={{ height: "170px" }}
          >
            {s.img ? (
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient}`} />
            )}
            <div className="absolute inset-0 bg-dark-900" style={{ opacity: 0.6 }} />
            <div className="relative z-10 h-full flex flex-col justify-between p-5">
              <div className="flex items-start justify-between">
                <div
                  className="p-2 rounded-xl border"
                  style={{ borderColor: `${s.accent}35`, color: s.accent, background: `${s.accent}10` }}
                >
                  {s.icon}
                </div>
                <span className="text-[9px] tracking-widest text-white/25">{s.num}</span>
              </div>
              <div>
                <h3 className="text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1rem" }}>{s.title}</h3>
                <p className="text-white/35 text-[11px] mt-1 tracking-wide">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio */}
      <section className="border-t border-linen-300 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3">Portfolio</span>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "1", color: "var(--color-dark-900)" }}>
                Werk dat<br /><span className="italic">voor zich spreekt</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {studioProjects.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl group"
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
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)" }} />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[9px] tracking-widest uppercase text-white/50 block mb-1">{p.type}</span>
                  <h3 className="text-white text-lg" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{p.brand}</h3>
                  {p.creator && <p className="text-white/40 text-xs mt-0.5">{p.creator}</p>}
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
