"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable scroll during preloader
    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsComplete(true);
          document.body.style.overflow = "";
        },
      });

      // Counter animation
      const counter = { val: 0 };
      tl.to(counter, {
        val: 100,
        duration: 2.5,
        ease: "power4.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.innerText = Math.round(counter.val) + "%";
          }
        },
      });

      // Text reveal
      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=2"
      );

      // Exit animation
      tl.to(
        [counterRef.current, textRef.current],
        { opacity: 0, y: -20, duration: 0.8, ease: "power3.in" },
        "+=0.2"
      );

      tl.to(
        containerRef.current,
        {
          yPercent: -100,
          duration: 1.2,
          ease: "expo.inOut",
        },
        "-=0.2"
      );
    }, containerRef);

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, []);

  if (isComplete) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050505] text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-[#050505] to-[#050505] opacity-50" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div ref={textRef} className="text-sm tracking-[0.4em] uppercase text-primary font-medium opacity-0">
          Initializing Experience
        </div>
        <div ref={counterRef} className="text-8xl md:text-9xl font-light tracking-tighter">
          0%
        </div>
      </div>
    </div>
  );
}
