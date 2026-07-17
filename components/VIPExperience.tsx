"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function VIPExperience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vip-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      gsap.to(".vip-bg", {
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="vip" className="relative py-40 w-full overflow-hidden flex items-center justify-center min-h-[90vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vip.jpg"
          alt="VIP Room"
          fill
          className="vip-bg object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
      </div>

      <div className="relative z-10 px-4 max-w-4xl mx-auto text-center">
        <h3 className="vip-reveal text-primary tracking-[0.3em] uppercase text-sm mb-6">Exclusive Access</h3>
        <h2 className="vip-reveal text-5xl md:text-6xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.1] font-serif italic">
          The VIP Room
        </h2>
        <p className="vip-reveal text-secondary text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          An intimately lit, soundproofed sanctuary reserved for our most distinguished guests. Featuring a championship star table, dedicated waiting staff, and absolute privacy.
        </p>
        <button className="vip-reveal glass-panel px-10 py-5 rounded-full font-medium text-white tracking-wide hover:bg-white/10 transition-colors duration-500 uppercase text-sm border-white/20">
          Request Booking
        </button>
      </div>
    </section>
  );
}
