"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const inputClass = "w-full border rounded-xl px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none";
const inputStyle = {
  background: "rgba(163,150,141,0.12)",
  borderColor: "rgba(163,150,141,0.25)",
  color: "white",
};
const inputFocusStyle = { borderColor: "var(--color-taupe-400)" };

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
              Merk, creator of gewoon een goed idee? Stuur ons een bericht en we reageren snel.
            </p>

            <div className="mt-12 space-y-6">
              <div>
                <p className="text-[10px] tracking-widest uppercase text-taupe-500 mb-2">Email</p>
                <a href="mailto:info@concess.nl" className="text-linen-200 hover:text-white transition-colors">info@concess.nl</a>
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-taupe-500 mb-2">Socials</p>
                <div className="flex gap-4 flex-wrap">
                  {["Instagram", "TikTok", "Facebook", "LinkedIn"].map((s) => (
                    <a key={s} href="#" className="text-linen-300/50 hover:text-linen-200 text-sm transition-colors">{s}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="rounded-2xl p-10 text-center" style={{ background: "rgba(163,150,141,0.12)", border: "1px solid rgba(163,150,141,0.2)" }}>
                <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-4xl mb-2">
                  Bericht<br /><span className="italic text-taupe-300">verstuurd.</span>
                </p>
                <p className="text-linen-300/50 text-sm mt-6 leading-relaxed">
                  We nemen binnen 2 werkdagen contact op.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { field: "naam",    label: "Naam",    type: "text",  placeholder: "Jouw naam",      required: true },
                  { field: "email",   label: "E-mail",  type: "email", placeholder: "jij@bedrijf.nl", required: true },
                  { field: "nummer",  label: "Nummer",  type: "tel",   placeholder: "+31 6 12345678", required: true },
                  { field: "bedrijf", label: "Bedrijf", type: "text",  placeholder: "Optioneel",       required: false },
                ].map((f) => (
                  <div key={f.field}>
                    <label className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-2">
                      {f.label}{!f.required && <span className="ml-2 opacity-40">optioneel</span>}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required={f.required}
                      value={form[f.field as keyof typeof form]}
                      onChange={(e) => set(f.field, e.target.value)}
                      className={inputClass}
                      style={inputStyle}
                      onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                      onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(163,150,141,0.25)" })}
                    />
                  </div>
                ))}

                <div>
                  <label className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-2">Bericht</label>
                  <textarea
                    rows={4}
                    placeholder="Wat kan Concess voor jou betekenen?"
                    required
                    value={form.bericht}
                    onChange={(e) => set("bericht", e.target.value)}
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                    onBlur={(e) => Object.assign(e.target.style, { borderColor: "rgba(163,150,141,0.25)" })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-linen-200 text-dark-900 py-4 rounded-full text-xs tracking-widest uppercase font-sans transition-all hover:bg-white disabled:opacity-60"
                >
                  {loading ? "Versturen..." : "Verstuur bericht →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
