const brands = [
  "L'Oréal Paris",
  "Garmin",
  "Berg",
  "Air Up",
  "Revolut",
  "Emma",
  "BookBeat",
  "Bud Holland",
  "Subway",
  "Legends of Gaming",
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-20 bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-500">
          Brands we&apos;ve worked with
        </span>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span
                className="text-linen-300/60 text-sm tracking-wider uppercase px-8 hover:text-linen-200 transition-colors cursor-default"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {brand}
              </span>
              <span className="text-taupe-600 text-xs">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
