"use client";
import { useEffect, useRef } from "react";

function AutoVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.muted = true;
      ref.current.play().catch(() => {});
    }
  }, []);
  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      autoPlay
      className="w-full h-full object-cover"
    />
  );
}

export default function VideoGrid({ videos }: { videos: string[] }) {
  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div className="flex md:hidden gap-3 overflow-x-auto snap-x snap-mandatory pb-2" style={{ scrollbarWidth: "none" }}>
        {videos.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden snap-start shrink-0" style={{ aspectRatio: "9/16", width: "45vw", background: "var(--color-dark-900)" }}>
            <AutoVideo src={src} />
          </div>
        ))}
      </div>
      {/* Desktop: grid */}
      <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: `repeat(${videos.length}, 1fr)` }}>
        {videos.map((src, i) => (
          <div key={i} className="rounded-2xl overflow-hidden" style={{ aspectRatio: "9/16", background: "var(--color-dark-900)" }}>
            <AutoVideo src={src} />
          </div>
        ))}
      </div>
    </>
  );
}
