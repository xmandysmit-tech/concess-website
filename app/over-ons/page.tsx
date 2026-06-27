import Navbar from "../components/Navbar";
import CTAFooter from "../components/CTAFooter";

const services = ["Creator Management", "Brand Partnerships", "Video & Productie", "Fotografie", "Event Organisatie", "AR Filters", "Graphic Design", "Marketing & Social", "Web Design", "Podcasts"];

const socials = [
  { platform: "Instagram", handle: "@concess.nl", url: "https://www.instagram.com/concess.nl/", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg> },
  { platform: "TikTok", handle: "@concess.nl", url: "https://www.tiktok.com/@concess.nl", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 000 12.68 6.34 6.34 0 006.33-6.34V8.95a8.16 8.16 0 004.77 1.52V7.02a4.85 4.85 0 01-1-.33z"/></svg> },
  { platform: "LinkedIn", handle: "Concess", url: "https://www.linkedin.com/company/concess", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
  { platform: "Facebook", handle: "Concess", url: "https://www.facebook.com/concess", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
];

export default function OverOnsPage() {
  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Header — compact dark, matching other pages */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-36 pb-12">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}>
              Over <span className="italic" style={{ color: "var(--color-taupe-300)" }}>Concess</span>
            </h1>
            <p className="text-linen-300/40 text-sm leading-relaxed max-w-xs">
              Creatief gedreven content bureau sinds 2019. Van concept tot upload — en alles daartussen.
            </p>
          </div>
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
              Van concept tot impact —<br /><span className="italic">wij regelen de rest.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 pt-1">
            <p className="text-dark-700 text-sm leading-relaxed">
              Concess is een creatief gedreven content bureau dat zich sinds 2019 bezighoudt met het bedenken, ontwikkelen, produceren en realiseren van aansprekende content voor content creators, artiesten, merken en bedrijven. Van creatie tot de final upload tot volledig channelmanagement, marketingplan en contentplanning — we leveren een breed pakket aan services en diensten om de concepten op onderscheidende en aansprekende wijze aan de doelgroep uit te serveren. Daarnaast houden wij ons bezig met het opzetten van aansprekende partnerships tussen bedrijven en creators.
            </p>
            <p className="text-taupe-500 text-sm leading-relaxed">
              Het is onze passie om middels aansprekende concepten, content creators en artiesten, merken en bedrijven te helpen om hun content, following en engagement op authentieke, aansprekende wijze te laten groeien en impact te maken. We produceren de content voor alle soorten platformen en zijn in staat aanvullende tools aan te leveren als gifjes en AR Filters.
            </p>
            <p className="text-taupe-500 text-sm leading-relaxed">
              Content produceren we zowel in opdracht van onze klanten, maar we creëren en produceren ook vaak gezamenlijk voor merken met mediapartijen.
            </p>
          </div>
        </div>
      </section>

      {/* Services ticker */}
      <section className="py-16 bg-dark-900 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...services, ...services].map((s, i) => (
            <div key={i} className="flex items-center flex-shrink-0">
              <span
                className="text-linen-300/40 tracking-widest uppercase px-8 hover:text-linen-200 transition-colors"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem" }}
              >
                {s}
              </span>
              <span className="text-taupe-600 mx-2">·</span>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-4">Volg ons</span>
        <h2
          style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
          className="text-dark-900 leading-tight mb-12"
        >
          Blijf op de hoogte via<br /><span className="italic">onze socials</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-6 rounded-2xl border border-linen-300 hover:border-dark-900 hover:bg-dark-900 transition-all duration-300"
              style={{ aspectRatio: "1" }}
            >
              <div className="text-dark-700 group-hover:text-linen-200 transition-colors">
                {s.icon}
              </div>
              <div>
                <p className="text-[10px] tracking-widest uppercase text-taupe-400 group-hover:text-taupe-500 mb-1 transition-colors">{s.platform}</p>
                <p className="text-dark-900 group-hover:text-white text-sm transition-colors" style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>{s.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <CTAFooter />
    </main>
  );
}
