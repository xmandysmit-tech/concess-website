"use client";
import { useState } from "react";

export default function TrailerEmbed({ youtubeId }: { youtubeId: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "var(--color-dark-900)" }}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1&loop=1&playlist=${youtubeId}&controls=0&disablekb=1&iv_load_policy=3`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
          style={{
            border: "none",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
          onLoad={() => setVisible(true)}
        />
      </div>
    </div>
  );
}
