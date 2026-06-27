"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const options = [
  { id: "partnership", label: "Brand Partnership", desc: "Ik wil samenwerken met een creator" },
  { id: "management", label: "Creator Management", desc: "Ik ben creator en zoek begeleiding" },
  { id: "studio", label: "Studio dienst", desc: "Video, foto, design, events of web" },
  { id: "anders", label: "Anders", desc: "Iets anders, vertel het ons" },
];

export default function ContactPage() {
  const [selected, setSelected] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main style={{ background: "var(--color-dark-900)", minHeight: "100vh" }}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-32">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-6">Contact</span>
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(3rem, 5vw, 5rem)", lineHeight: "0.95", color: "white" }}>
              Laten we<br /><span className="italic text-taupe-300">praten.</span>
            </h1>
            <p className="text-linen-300/60 mt-8 text-sm leading-relaxed max-w-sm">
              Of je nu een merk bent dat wil groeien, een creator die begeleiding zoekt,
              of gewoon een goed idee hebt — wij horen het graag.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-taupe-500 mb-2">Email</p>
                <a href="mailto:info@concess.nl" className="text-linen-200 hover:text-white transition-colors">info@concess.nl</a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-taupe-500 mb-2">Socials</p>
                <div className="flex gap-4">
                  {["Instagram", "LinkedIn", "YouTube"].map((s) => (
                    <a key={s} href="#" className="text-linen-300/50 hover:text-linen-200 text-sm transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="bg-dark-800 rounded-2xl p-10 text-center">
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-3xl mb-3">Bedankt!</p>
                <p className="text-linen-300/60 text-sm">We nemen binnen 2 werkdagen contact op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Type selector */}
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-taupe-500 mb-3">Waar gaat het over?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {options.map((o) => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setSelected(o.id)}
                        className="text-left p-4 rounded-xl border transition-all duration-200"
                        style={
                          selected === o.id
                            ? { borderColor: "var(--color-taupe-400)", background: "var(--color-dark-700)" }
                            : { borderColor: "var(--color-dark-700)", background: "transparent" }
                        }
                      >
                        <p className="text-white text-sm font-medium">{o.label}</p>
                        <p className="text-linen-300/40 text-[11px] mt-0.5">{o.desc}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fields */}
                {[
                  { name: "name", label: "Naam", type: "text", placeholder: "Jouw naam" },
                  { name: "email", label: "Email", type: "email", placeholder: "jij@bedrijf.nl" },
                  { name: "company", label: "Bedrijf / Kanaal", type: "text", placeholder: "Optioneel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-2">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.name !== "company"}
                      className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-linen-300/20 focus:outline-none focus:border-taupe-500 transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-2">Bericht</label>
                  <textarea
                    rows={4}
                    placeholder="Vertel ons meer..."
                    required
                    className="w-full bg-dark-800 border border-dark-700 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-linen-300/20 focus:outline-none focus:border-taupe-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-linen-200 text-dark-900 py-4 rounded-full text-xs tracking-widest uppercase font-sans transition-all hover:bg-white"
                >
                  Verstuur bericht →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
