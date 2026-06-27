import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";

const services = [
  {
    num: "01", title: "Video & Productie",
    desc: "Van concept tot upload — wij produceren content die opvalt en resultaten oplevert. We pakken het volledig op: scripting, opnames, editing en delivery.",
    deliverables: ["Concept & scripting", "Filming & regie", "Editing & kleurcorrectie", "Motion graphics", "Channel management"],
    gradient: "from-stone-800 to-stone-950",
  },
  {
    num: "02", title: "Fotografie",
    desc: "Editorial en commerciële fotografie voor creators, merken en campagnes. Strak, authentiek en altijd on-brand.",
    deliverables: ["Brand fotografie", "Creator portraits", "Product fotografie", "Event coverage", "Editorial shoots"],
    gradient: "from-zinc-700 to-zinc-900",
  },
  {
    num: "03", title: "Event Organisatie",
    desc: "Creator events, brand activaties en productlanceringen die mensen bijblijven. Wij regelen alles van concept tot uitvoering.",
    deliverables: ["Concept & planning", "Locatiescouting", "Productie & logistiek", "Creator coördinatie", "Aftermovie"],
    gradient: "from-neutral-700 to-neutral-900",
  },
  {
    num: "04", title: "AR Filters",
    desc: "Custom augmented reality filters voor Instagram, Snapchat en TikTok. Interactieve content die mensen delen.",
    deliverables: ["Instagram Filters", "Snapchat Lenses", "TikTok Effects", "Branded frames", "Gamified filters"],
    gradient: "from-stone-700 to-stone-900",
  },
  {
    num: "05", title: "Graphic Design",
    desc: "Visuele identiteiten, thumbnails, merch en campagne-assets. Design dat versterkt, niet verstoort.",
    deliverables: ["Brand identity", "Thumbnails & covers", "Merch design", "Campagne assets", "Social templates"],
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    num: "06", title: "Marketing & Social",
    desc: "Strategie, contentplanning en kanaalbeheer voor creators en merken. Wij zorgen voor consistente groei.",
    deliverables: ["Content strategie", "Kanaaloptimalisatie", "Analytics & reporting", "Community management", "Paid social"],
    gradient: "from-stone-600 to-stone-900",
  },
  {
    num: "07", title: "Web Design",
    desc: "Websites en landing pages die converteren — voor creators, merken en bedrijven. Modern, snel en op maat.",
    deliverables: ["Web design", "Development", "Creator websites", "Landing pages", "CRO optimalisatie"],
    gradient: "from-neutral-800 to-neutral-950",
  },
];

export default function StudioPage() {
  return (
    <main>
      <Navbar forceDark />

      {/* Header */}
      <section className="pt-40 pb-16 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-4">Studio</span>
        <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "0.95", color: "var(--color-dark-900)" }}>
          Wat we<br /><span className="italic">maken</span>
        </h1>
        <p className="text-taupe-500 mt-6 max-w-lg text-sm leading-relaxed">
          Naast onze management en partnership tak heeft Concess een volwaardige studio.
          Van video tot web — wij leveren het volledige creatieve pakket.
        </p>
      </section>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-32 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <div key={s.num} className="rounded-2xl overflow-hidden group cursor-pointer">
            {/* Visual header */}
            <div className={`relative bg-gradient-to-br ${s.gradient} p-8 min-h-[200px] flex flex-col justify-between`}>
              <div className="flex justify-between items-start">
                <span className="text-[10px] tracking-widest uppercase text-taupe-400">{s.num}</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
              <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-3xl group-hover:translate-x-1 transition-transform duration-300">
                {s.title}
              </h2>
            </div>
            {/* Content */}
            <div className="bg-linen-100 border border-linen-300 border-t-0 rounded-b-2xl p-8">
              <p className="text-taupe-500 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <span key={d} className="text-[10px] tracking-wider uppercase border border-linen-300 text-taupe-500 px-3 py-1.5 rounded-full">{d}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CTAFooter />
    </main>
  );
}
