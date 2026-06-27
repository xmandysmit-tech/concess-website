export default function CaseStudyPreview() {
  return (
    <section className="py-24 bg-linen-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-500 block mb-10">
          Case Study
        </span>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <div>
            <h2
              className="text-dark-900 leading-tight mb-4"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
              }}
            >
              L&apos;Oréal Paris
              <br />
              × Myron Koops
            </h2>
            <p className="text-taupe-500 text-sm leading-relaxed mb-6 max-w-sm">
              Een strategische samenwerking gericht op authenticiteit, bereik
              en merkversterking onder jonge mannen.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Strategie", "Concept", "Executie", "Creator Match", "Resultaat"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] tracking-wider uppercase border border-linen-300 text-taupe-500 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="/werk/loreal-myron"
              className="inline-flex items-center gap-3 text-xs tracking-widest uppercase text-dark-900 border-b border-dark-700 pb-1 hover:opacity-60 transition-opacity"
            >
              Bekijk case study <span>→</span>
            </a>
          </div>

          {/* Image placeholder */}
          <div className="relative rounded-2xl overflow-hidden min-h-[360px] bg-gradient-to-br from-stone-700 to-stone-950 flex items-end p-8">
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 100%)" }} />
            <div className="relative z-10">
              <p className="text-taupe-300 text-xs tracking-wider uppercase mb-1">
                18M+ views
              </p>
              <p
                className="text-white text-2xl"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                L&apos;Oréal × Myron
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
