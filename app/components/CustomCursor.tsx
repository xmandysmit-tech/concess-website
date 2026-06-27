"use client";
import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    let x = 0, y = 0;
    let rx = 0, ry = 0;
    let animId: number;
    let isHovering = false;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;

      // Detect background colour under cursor to switch dot colour
      const el = document.elementFromPoint(x, y);
      if (el) {
        const bg = getComputedStyle(el).backgroundColor;
        const isDark = bg.includes("rgb(22") || bg.includes("rgb(30") || bg.includes("rgb(28") || bg.includes("rgb(20");
        setIsLight(isDark);
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      rx = lerp(rx, x, 0.1);
      ry = lerp(ry, y, 0.1);

      if (dot.current) {
        dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      animId = requestAnimationFrame(tick);
    };

    const grow = () => {
      isHovering = true;
      if (ring.current) {
        ring.current.style.width = "52px";
        ring.current.style.height = "52px";
        ring.current.style.transform = `translate(${rx - 26}px, ${ry - 26}px)`;
        ring.current.style.opacity = "0.6";
      }
      if (dot.current) dot.current.style.opacity = "0";
    };

    const shrink = () => {
      isHovering = false;
      if (ring.current) {
        ring.current.style.width = "40px";
        ring.current.style.height = "40px";
        ring.current.style.opacity = "1";
      }
      if (dot.current) dot.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    animId = requestAnimationFrame(tick);

    // Use event delegation so dynamically added elements also work
    const onEnter = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [data-cursor]")) grow();
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as Element;
      if (t.closest("a, button, [data-cursor]")) shrink();
    };

    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  const color = isLight ? "rgba(242,237,228,0.9)" : "rgba(22,18,16,0.9)";
  const borderColor = isLight ? "rgba(242,237,228,0.7)" : "rgba(22,18,16,0.7)";

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
        style={{
          background: color,
          transition: "opacity 0.2s, background 0.3s",
        }}
      />
      {/* Ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9997] border"
        style={{
          borderColor,
          transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
