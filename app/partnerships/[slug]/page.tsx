import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import CTAFooter from "../../components/CTAFooter";
import { partnershipCases } from "../../data/content";

export function generateStaticParams() {
  return partnershipCases.map((p) => ({ slug: p.slug }));
}

export default async function PartnershipPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = partnershipCases.find((p) => p.slug === slug);
  if (!project) notFound();

  const images = project.gallery.filter((g) => g.type === "image");

  return (
    <main style={{ background: "var(--color-linen-100)", minHeight: "100vh" }}>
      <Navbar forceDark />

      {/* Header */}
      <section style={{ background: "var(--color-dark-900)" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-12">
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors text-xs tracking-widest uppercase mb-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Partnerships
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] tracking-widest uppercase mb-3 block" style={{ color: "var(--color-taupe-500)" }}>
                {project.creator} · {project.year}
              </span>
              <h1
                style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: "1", color: "white" }}
              >
                {project.brand} <span className="italic" style={{ color: "var(--color-taupe-300)" }}>× {project.creator}</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.services.map((s) => (
                <span
                  key={s}
                  className="text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.4)" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cover — groot */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-10">
        <div className="w-full overflow-hidden rounded-2xl" style={{ maxHeight: "70vh" }}>
          <img
            src={project.cover}
            alt={project.brand}
            className="w-full object-cover"
            style={{ maxHeight: "70vh" }}
          />
        </div>
      </section>

      {/* Beschrijving */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-[10px] tracking-widest uppercase text-taupe-500 block mb-4">Over de campagne</span>
            <h2
              style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
              className="text-dark-900 leading-tight"
            >
              {project.brand}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-dark-700 text-sm leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Extra foto's als grid */}
      {images.length > 1 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
          <div className={`grid gap-3 ${images.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3"}`}>
            {images.slice(1).map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl" style={{ aspectRatio: "4/3" }}>
                <img
                  src={img.src}
                  alt={"alt" in img ? img.alt ?? project.brand : project.brand}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      <CTAFooter />
    </main>
  );
}
