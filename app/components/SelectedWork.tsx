"use client";
import { useState } from "react";
import Link from "next/link";
import { homepageFeatured } from "../data/content";

function WorkCard({
  work,
  large = false,
}: {
  work: (typeof homepageFeatured)[0];
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const href = work.slug
    ? `/${work.type === "studio" ? "studio" : "partnerships"}/${work.slug}`
    : undefined;

  const inner = (
    <>
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          transform: hovered ? "scale(1.07)" : "scale(1)",
          filter: hovered ? "brightness(1.1)" : "brightness(0.9)",
        }}
      >
        {work.img ? (
          <img src={work.img} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${work.gradient}`} />
        )}
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
      <div className={`relative z-10 flex flex-col justify-end h-full ${large ? "min-h-[480px] p-8" : "min-h-[230px] p-5"}`}>
        <div style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}>
          <p className={`text-white m-0 font-bold ${large ? "text-3xl md:text-4xl" : "text-xl"}`} style={{ lineHeight: 1 }}>{work.brand}</p>
          <p className={`text-white opacity-70 italic m-0 font-bold ${large ? "text-3xl md:text-4xl" : "text-xl"}`} style={{ lineHeight: 1, marginTop: "0.05em" }}>{work.creator}</p>
        </div>
        {href && (
          <div className={`absolute right-5 bottom-5 w-8 h-8 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 ${hovered ? "bg-white/20 border-white/60" : ""}`}>
            <span className="text-white text-sm">→</span>
          </div>
        )}
      </div>
    </>
  );

  const cls = `relative overflow-hidden rounded-2xl group cursor-pointer ${large ? "row-span-2" : ""}`;

  return href ? (
    <Link
      href={href}
      className={cls}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </Link>
  ) : (
    <div
      className={cls}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {inner}
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section id="werk" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex items-center justify-between mb-10">
        <span className="text-[10px] tracking-widest2 uppercase text-taupe-500">
          Recente projecten
        </span>
        <a
          href="/partnerships"
          className="flex items-center gap-2 text-xs tracking-wider uppercase text-dark-700 hover:text-dark-900 transition-colors"
        >
          Bekijk alle partnerships <span className="text-base">→</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-3 md:h-[500px]">
        <WorkCard work={homepageFeatured[0]} large />
        {homepageFeatured.slice(1).map((w, i) => (
          <WorkCard key={i} work={w} />
        ))}
      </div>
    </section>
  );
}
