"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "", label: "Professional Tables" },
  { value: 5000, suffix: "+", label: "Happy Players" },
  { value: 200, suffix: "+", label: "Monthly Tournaments" },
];

export default function Statistics() {
  const containerRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((el, index) => {
        if (!el) return;
        const targetValue = stats[index].value;
        
        gsap.to(el, {
          innerHTML: targetValue,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
          snap: { innerHTML: 1 },
          onUpdate: function () {
            el.innerHTML = Math.ceil(Number(el.innerHTML)).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative w-full border-t border-white/[0.02]">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 50% 100%, rgba(163, 230, 53, 0.04) 0%, transparent 70%)'
        }}
      />

      <div className="px-4 md:px-8 lg:px-16 max-w-[1500px] mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-white/[0.06]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center py-4">
              <div className="flex items-baseline text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-semibold text-white mb-2 tracking-[-0.04em] leading-none">
                <div ref={(el) => { numbersRef.current[index] = el; }}>0</div>
                <span className="text-primary ml-1 text-4xl">{stat.suffix}</span>
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
