"use client";
import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const getInitial = () => {
    if (direction === "left") return "translateX(-40px)";
    if (direction === "right") return "translateX(40px)";
    return "translateY(40px)";
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = getInitial();
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
