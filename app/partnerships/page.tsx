import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";
import HorizontalScroll from "../components/HorizontalScroll";
import { featuredProjects, brands, stats } from "../data/content";

const cases = featuredProjects;

const steps = [
  { num: "01", title: "Briefing", desc: "Jij vertelt wat je merk wil bereiken. Wij luisteren, stellen vragen en denken mee over doelgroep, boodschap en timing." },
  { num: "02", title: "Creator Match", desc: "Op basis van jouw doelstellingen selecteren wij de creator(s) die het beste passen — op bereik, authenticiteit en relevantie." },
  { num: "03", title: "Concept & Strategie", desc: "Wij ontwikkelen een concept dat past bij zowel het merk als de creator — zodat het voelt als eerlijke content, niet als reclame." },
  { num: "04", title: "Productie", desc: "Van scripting en opnames tot editing en delivery. Wij regelen het volledige productieproces." },
  { num: "05", title: "Publicatie & Resultaat", desc: "Na goedkeuring gaat de content live. Wij monitoren de performance en leveren een volledig rapport." },
];

const numbers = [
  { value: stats.totalViews,     label: "Totale views" },
  { value: stats.totalDeals,     label: "Brand deals" },
  { value: stats.engagementRate, label: "Gem. engagement" },
  { value: stats.totalCreators,  label: "Exclusieve creators" },
];

export default function PartnershipsPage() {
  return (
    <main style={{ background: "var(--color-linen-100)" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 15% 85%, #5C5450 0%, transparent 40%), radial-gradient(circle at 85% 15%, #4D403A 0%, transparent 50%)",
          }}
        />
        {/* Big background text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "30vw", lineHeight: "1", color: "white", opacity: 0.02 }}
        >
          P
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-6">Partnerships</span>
          <h1
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(3.5rem, 8vw, 9rem)", lineHeight: "0.9", color: "white" }}
          >
            Jouw merk,
            <br />
            <span className="italic" style={{ color: "var(--color-taupe-300)" }}>hun publiek.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-10">
            <p className="text-linen-300/50 text-sm leading-relaxed max-w-sm">
              Wij verbinden merken aan de creators die écht impact maken. Geen one-size-fits-all campagnes — alleen strategische samenwerkingen die voelen als authentieke content.
            </p>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-3 bg-linen-200 text-dark-900 px-7 py-4 rounded-full text-xs tracking-widest uppercase transition-all hover:bg-white"
            >
              Plan een gesprek <span className="text-base">→</span>
            </a>
          </div>
        </div>

        {/* Numbers bar */}
        <div className="relative z-10 border-t border-dark-700 grid grid-cols-2 md:grid-cols-4">
          {numbers.map((n, i) => (
            <div key={n.label} className={`py-8 px-8 ${i < 3 ? "border-r border-dark-700" : ""}`}>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-3xl md:text-4xl">{n.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-taupe-500 mt-2">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases slider */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-2">Bewezen resultaten</span>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }} className="text-dark-900">
              Recent werk
            </h2>
          </div>
          <a href="/werk" className="hidden md:flex items-center gap-2 text-xs tracking-wider uppercase text-dark-700 hover:text-dark-900 transition-colors">
            Alles bekijken <span>→</span>
          </a>
        </div>
        <HorizontalScroll slides={cases} />
      </section>

      {/* Process */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-4">Hoe het werkt</span>
          <h2
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            className="text-linen-200 mb-14"
          >
            Van briefing<br /><span className="italic text-taupe-300">tot resultaat</span>
          </h2>
          <div className="divide-y divide-dark-700">
            {steps.map((s) => (
              <div key={s.num} className="py-8 flex gap-8 items-start group hover:pl-2 transition-all duration-300">
                <span className="text-[10px] text-taupe-600 w-8 shrink-0 mt-1">{s.num}</span>
                <div className="flex-1 md:flex md:gap-12">
                  <h3
                    style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                    className="text-linen-200 text-xl md:text-2xl w-44 shrink-0 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    {s.title}
                  </h3>
                  <p className="text-taupe-500 text-sm leading-relaxed mt-2 md:mt-0">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section className="py-20 bg-linen-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-10">Merken die ons vertrouwen</span>
          <div className="flex flex-wrap gap-3">
            {brands.map((b) => (
              <span
                key={b}
                className="text-sm tracking-wider uppercase text-taupe-600 border border-linen-300 px-5 py-3 rounded-full hover:border-dark-700 hover:text-dark-900 transition-all cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
