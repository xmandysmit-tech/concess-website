"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
];

const inputStyle: React.CSSProperties = {
  background: "transparent",
  borderBottom: "1px solid var(--color-linen-400)",
  borderTop: "none",
  borderLeft: "none",
  borderRight: "none",
  borderRadius: 0,
  padding: "10px 0",
  fontSize: "0.85rem",
  color: "var(--color-dark-900)",
  fontFamily: "var(--font-sans)",
  width: "100%",
  outline: "none",
};

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ naam: "", email: "", nummer: "", bedrijf: "", bericht: "" });

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setLoading(false);
    setSent(true);
  }

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20">

        {/* Page title */}
        <div className="mb-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-3" style={{ fontFamily: "var(--font-sans)" }}>Contact</span>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: "1.05", color: "var(--color-dark-900)" }}>
            Neem<br /><span className="italic text-taupe-400">contact op.</span>
          </h1>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — polaroid collage */}
          <div className="relative w-full" style={{ height: 460 }}>
            {[
              { src: "/images/Vrouwmibo-concess-1024x756.jpg",  alt: "Vrouwmibo",   rotate: -14, left: 20,  top: 30,  z: 1 },
              { src: "/images/EnzoKnol_Concess.png",            alt: "Enzo Knol",   rotate: 9,   left: 210, top: 10,  z: 2 },
              { src: "/images/De-bennies-concess.jpg",          alt: "De Bennies",  rotate: -7,  left: 130, top: 160, z: 3 },
              { src: "/images/Vrouwmishow_Concess.png",         alt: "Vrouwmishow", rotate: 13,  left: 300, top: 120, z: 4 },
              { src: "/images/Bennies-x-Air-up.png",            alt: "Air Up",      rotate: -4,  left: 60,  top: 270, z: 5 },
              { src: "/images/Vrouwmibo-x-Subway.png",          alt: "Subway",      rotate: 11,  left: 250, top: 270, z: 6 },
            ].map((p) => (
              <div
                key={p.src}
                className="absolute bg-white"
                style={{
                  width: 160,
                  padding: "8px 8px 28px 8px",
                  left: p.left,
                  top: p.top,
                  transform: `rotate(${p.rotate}deg)`,
                  zIndex: p.z,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.08)",
                }}
              >
                <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
                  <Image src={p.src} alt={p.alt} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>

          {/* Right — info + form */}
          <div className="flex flex-col justify-between h-full" style={{ minHeight: "500px" }}>

            {/* Email */}
            <div className="mb-10">
              <p className="text-taupe-500 text-xs mb-1" style={{ fontFamily: "var(--font-sans)" }}>
                Contact informatie: <a href="mailto:info@concess.nl" className="text-dark-900 hover:text-taupe-600 transition-colors">info@concess.nl</a>
              </p>
            </div>

            {/* Form or confirmation */}
            {sent ? (
              <div className="py-16">
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "2.5rem", lineHeight: "1.1", color: "var(--color-dark-900)" }}>
                  Bericht<br /><span className="italic text-taupe-400">verstuurd.</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-taupe-500 block mb-1" style={{ fontFamily: "var(--font-sans)" }}>Naam *</label>
                    <input type="text" placeholder="Jouw naam" required value={form.naam} onChange={(e) => set("naam", e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-dark-900)")} onBlur={(e) => (e.target.style.borderBottomColor = "var(--color-linen-400)")} />
                  </div>
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-taupe-500 block mb-1" style={{ fontFamily: "var(--font-sans)" }}>E-mail *</label>
                    <input type="email" placeholder="E-mail" required value={form.email} onChange={(e) => set("email", e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-dark-900)")} onBlur={(e) => (e.target.style.borderBottomColor = "var(--color-linen-400)")} />
                  </div>
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-taupe-500 block mb-1" style={{ fontFamily: "var(--font-sans)" }}>Nummer *</label>
                    <input type="tel" placeholder="Nummer" required value={form.nummer} onChange={(e) => set("nummer", e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-dark-900)")} onBlur={(e) => (e.target.style.borderBottomColor = "var(--color-linen-400)")} />
                  </div>
                  <div>
                    <label className="text-[9px] tracking-widest uppercase text-taupe-500 block mb-1" style={{ fontFamily: "var(--font-sans)" }}>Bedrijf</label>
                    <input type="text" placeholder="Optioneel" value={form.bedrijf} onChange={(e) => set("bedrijf", e.target.value)} style={inputStyle} onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-dark-900)")} onBlur={(e) => (e.target.style.borderBottomColor = "var(--color-linen-400)")} />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] tracking-widest uppercase text-taupe-500 block mb-1" style={{ fontFamily: "var(--font-sans)" }}>Bericht *</label>
                  <textarea rows={3} placeholder="Bericht" required value={form.bericht} onChange={(e) => set("bericht", e.target.value)} style={{ ...inputStyle, resize: "none" }} onFocus={(e) => (e.target.style.borderBottomColor = "var(--color-dark-900)")} onBlur={(e) => (e.target.style.borderBottomColor = "var(--color-linen-400)")} />
                </div>

                {/* Bottom row: socials + button */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-3">
                    {socials.map((s) => (
                      <a key={s.name} href={s.href} title={s.name} className="text-taupe-500 hover:text-dark-900 transition-colors">
                        {s.icon}
                      </a>
                    ))}
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 text-xs tracking-widest uppercase transition-all hover:opacity-80 disabled:opacity-60"
                    style={{ background: "var(--color-dark-900)", color: "white", fontFamily: "var(--font-sans)", borderRadius: "2px" }}
                  >
                    {loading ? "Versturen..." : "Verstuur bericht →"}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      </div>
      <CTAFooter />
    </main>
  );
}
