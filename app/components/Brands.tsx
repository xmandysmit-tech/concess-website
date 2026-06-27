import Image from "next/image";

const brands = [
  { name: "L'Oréal Paris", logo: null },
  { name: "Garmin", logo: "/logos/garmin.svg" },
  { name: "Berg", logo: null },
  { name: "Air Up", logo: null },
  { name: "Revolut", logo: "/logos/revolut.svg" },
  { name: "Emma", logo: null },
  { name: "BookBeat", logo: null },
  { name: "Bud Holland", logo: null },
  { name: "Subway", logo: null },
  { name: "Legends of Gaming", logo: null },
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500" style={{ fontFamily: "var(--font-sans)" }}>
          Merken waarmee we werkten
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {doubled.map((brand, i) => (
            <div key={i} className="flex items-center flex-shrink-0 px-10">
              {brand.logo ? (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={28}
                  style={{ objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.35, height: "28px", width: "auto", maxWidth: "80px" }}
                />
              ) : (
                <span
                  className="text-linen-300/30 text-xs tracking-widest uppercase"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {brand.name}
                </span>
              )}
              <span className="text-taupe-600 text-xs ml-10">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
