
const brands = [
  { name: "L'Oréal", logo: "/logos/Loreal.png" },
  { name: "Garmin", logo: "/logos/Garmin.png" },
  { name: "Air Up", logo: "/logos/air_up.png" },
  { name: "Revolut", logo: "/logos/Revolut.png" },
  { name: "Emma Sleep", logo: "/logos/Emma_sleep.png" },
  { name: "Netflix", logo: "/logos/Netflix.png" },
  { name: "Spotify", logo: "/logos/Spotify.png" },
  { name: "Google", logo: "/logos/Google.png" },
  { name: "YouTube", logo: "/logos/YouTube.png" },
  { name: "Xbox", logo: "/logos/Xbox.png" },
  { name: "Ministerie van Financiën", logo: "/logos/Ministerie_van_Financien.png" },
  { name: "Armani", logo: "/logos/Armani.png" },
  { name: "Dyson", logo: "/logos/Dyson.png" },
  { name: "HelloFresh", logo: "/logos/HelloFresh.png" },
  { name: "Jumbo", logo: "/logos/Jumbo.png" },
  { name: "Shoeby", logo: "/logos/Shoeby.png" },
  { name: "Nord VPN", logo: "/logos/Nord_VPN.png" },
  { name: "Garnier", logo: "/logos/Garnier.png" },
  { name: "Nivea", logo: "/logos/nivea.png" },
  { name: "RTL", logo: "/logos/RTL.png" },
  { name: "Talpa", logo: "/logos/Talpa_Network.png" },
  { name: "Universal", logo: "/logos/Universal.png" },
  { name: "EA Sports", logo: "/logos/EA_sports.png" },
  { name: "Aldi", logo: "/logos/Aldi.png" },
  { name: "Podimo", logo: "/logos/Podimo.png" },
  { name: "Parfumado", logo: "/logos/Parfumado.png" },
  { name: "Upfront", logo: "/logos/Upfront.png" },
  { name: "Chromebook", logo: "/logos/Chromebook.png" },
  { name: "LRP", logo: "/logos/LRP.png" },
  { name: "Kinderpostzegels", logo: "/logos/Kinderpostzegels.png" },
];

export default function Brands() {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-16 bg-dark-900 border-t border-dark-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500" style={{ fontFamily: "var(--font-sans)" }}>
          Brands we&apos;ve worked with
        </span>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {doubled.map((brand, i) => (
            <div key={i} className="flex items-center flex-shrink-0 px-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logo}
                alt={brand.name}
                style={{
                  objectFit: "contain",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.3,
                  height: "28px",
                  width: "90px",
                  flexShrink: 0,
                }}
              />
              <span className="text-taupe-600 text-xs ml-8">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
