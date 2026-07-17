"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const stats = [
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "", label: "Professional Tables" },
  { value: 5000, suffix: "+", label: "Happy Players" },
  { value: 200, suffix: "+", label: "Monthly Visitors" },
];

export default function Statistics() {
  const containerRef = useRef<HTMLElement>(null);
  const numbersRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
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
    <section ref={containerRef} className="py-24 border-y border-white/5 bg-[#030303]">
      <div className="px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="flex items-baseline text-4xl md:text-6xl font-medium text-white mb-4 tracking-tighter">
                <div ref={(el) => { numbersRef.current[index] = el; }}>0</div>
                <span className="text-primary ml-1">{stat.suffix}</span>
              </div>
              <div className="text-sm text-secondary uppercase tracking-[0.1em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
