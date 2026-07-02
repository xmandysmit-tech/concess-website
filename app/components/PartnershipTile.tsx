"use client";
import Link from "next/link";
import { PartnershipCase } from "../data/content";

export default function PartnershipTile({ p }: { p: PartnershipCase }) {
  const cls = "group relative overflow-hidden rounded-2xl";
  const style = { aspectRatio: "3/4", display: "block" };

  const inner = (
    <>
      <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
      <img
        src={p.cover}
        alt={p.brand}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 50%, transparent 75%)" }}
      />
      {p.slug && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "rgba(0,0,0,0.15)" }}
        >
          <span className="text-[10px] tracking-widest uppercase text-white border border-white/40 px-4 py-2 rounded-full">
            Bekijk project
          </span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-[9px] tracking-widest uppercase text-white/60 block mb-0.5" style={{ fontWeight: 600 }}>
          {p.creator} · {p.year}
        </span>
        <h3 className="text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", lineHeight: 1.2 }}>
          {p.brand}
        </h3>
      </div>
    </>
  );

  return p.slug ? (
    <Link href={`/partnerships/${p.slug}`} className={cls} style={style}>
      {inner}
    </Link>
  ) : (
    <div className={cls} style={style}>
      {inner}
    </div>
  );
}
