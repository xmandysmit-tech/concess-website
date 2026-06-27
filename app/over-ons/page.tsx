import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";

const values = [
  { num: "01", title: "Authenticiteit boven bereik", desc: "Wij kiezen altijd voor de juiste match boven de grootste naam. Een geloofwaardige samenwerking levert meer op dan een grote maar ongeloofwaardige." },
  { num: "02", title: "Long-term denken", desc: "Wij bouwen geen campagnes — wij bouwen relaties. Tussen creators en merken, maar ook tussen ons en onze partners." },
  { num: "03", title: "Kwaliteit in alles", desc: "Van de eerste brainstorm tot het eindrapport. Wij leveren geen goed genoeg — wij leveren het beste wat mogelijk is." },
  { num: "04", title: "Resultaten tellen", desc: "Mooie content is leuk. Maar het gaat om impact. Wij meten alles en optimaliseren continu." },
];

const numbers = [
  { value: "50+", label: "Brand deals" },
  { value: "150M+", label: "Totale views" },
  { value: "3", label: "Exclusieve creators" },
  { value: "10+", label: "Jaar ervaring" },
];

const services = ["Creator Management", "Brand Partnerships", "Video & Productie", "Fotografie", "Event Organisatie", "AR Filters", "Graphic Design", "Marketing & Social", "Web Design"];

export default function OverOnsPage() {
  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Full-screen hero */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "radial-gradient(ellipse at 70% 30%, #5C5450 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, #4D403A 0%, transparent 40%)" }}
        />
        {/* Background word */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none select-none leading-none"
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "40vw", color: "white", opacity: 0.025 }}
        >
          C
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-0 w-full">
          <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-6">Over ons</span>
          <h1
            style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(4rem, 9vw, 10rem)", lineHeight: "0.88", color: "white" }}
          >
            Wij zijn<br /><span className="italic" style={{ color: "var(--color-taupe-300)" }}>Concess.</span>
          </h1>
        </div>

        {/* Numbers bar */}
        <div className="relative z-10 mt-20 border-t border-dark-700 grid grid-cols-2 md:grid-cols-4">
          {numbers.map((n, i) => (
            <div key={n.label} className={`py-8 px-8 ${i < 3 ? "border-r border-dark-700" : ""}`}>
              <p style={{ fontFamily: "'DM Serif Display', Georgia, serif" }} className="text-white text-4xl">{n.value}</p>
              <p className="text-[10px] tracking-widest uppercase text-taupe-500 mt-2">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-6">Ons verhaal</span>
            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
              className="text-dark-900 leading-tight"
            >
              Niet de meeste<br /><span className="italic">campagnes — de beste.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-4 pt-1">
            <p className="text-dark-700 text-base leading-relaxed">
              Concess begon met één simpele overtuiging: de beste campagnes zijn niet de luidste, maar de meest authentieke. Wij verbinden merken aan creators die écht passen — en zorgen dat die samenwerking voelt als echte content, niet als advertentie.
            </p>
            <p className="text-taupe-500 text-sm leading-relaxed">
              Vanuit Nederland werken wij samen met de grootste creators van het land. Van exclusief creator management tot full-service brand partnerships en studio productie — wij zijn de verbindende schakel tussen talent en merken die willen groeien.
            </p>
            <p className="text-taupe-500 text-sm leading-relaxed">
              Geen tussenpersonen. Geen overhead. Gewoon mensen die geloven in wat ze maken.
            </p>
          </div>
        </div>
      </section>

      {/* Services ticker — dark section */}
      <section className="py-16 bg-dark-900 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span
                className="text-linen-300/40 text-sm tracking-widest uppercase px-8 hover:text-linen-200 transition-colors"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem" }}
              >
                {s}
              </span>
              <span className="text-taupe-600 mx-2">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-14">Waar we in geloven</span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-linen-300">
          {values.map((v) => (
            <div key={v.title} className="bg-linen-200 p-8 md:p-10 group hover:bg-linen-100 transition-colors duration-300">
              <span className="text-[10px] tracking-widest uppercase text-taupe-400 block mb-4">{v.num}</span>
              <h3
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
                className="text-dark-900 text-2xl mb-4 group-hover:translate-x-1 transition-transform duration-300"
              >
                {v.title}
              </h3>
              <p className="text-taupe-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
