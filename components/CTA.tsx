"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] z-0 opacity-50 pointer-events-none" />

      <div className="cta-content relative z-10 max-w-4xl mx-auto text-center glass-panel p-12 md:p-24 border-primary/20">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
          Ready to Experience <br />
          <span className="text-primary italic font-serif">Multan's Finest?</span>
        </h2>
        <p className="text-secondary text-lg mb-12 max-w-xl mx-auto">
          Reserve your table or VIP room in advance to guarantee your spot at the premium snooker and gaming lounge.
        </p>
        
        <MagneticButton>
          <button className="bg-primary text-background px-10 py-5 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-500 shadow-[0_0_40px_rgba(34,197,94,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
            Book Your Table Today
          </button>
        </MagneticButton>
      </div>
    </section>
  );
}
