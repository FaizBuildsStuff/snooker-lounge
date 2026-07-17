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

      <div className="cta-content relative z-10 max-w-5xl mx-auto text-center p-12 md:p-24 border border-white/[0.08] bg-white/[0.03] backdrop-blur-3xl rounded-[42px] shadow-[0_0_100px_rgba(163,230,53,0.05)] overflow-hidden">
        <div className="absolute inset-0 opacity-0 transition-all duration-700 hover:opacity-100 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(163,230,53,0.1), transparent 50%)' }} />
        
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/40 px-4 py-2 backdrop-blur-2xl">
          <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(163,230,53,1)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">JOIN THE ELITE</span>
        </div>

        <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-semibold tracking-[-0.05em] text-white mb-6 leading-[1.05]">
          Ready to Experience <br />
          <span className="text-primary">Multan's Finest?</span>
        </h2>
        <p className="text-[15px] text-white/50 mb-12 max-w-xl mx-auto leading-[1.8]">
          Reserve your table or VIP room in advance to guarantee your spot at the premium snooker and gaming lounge.
        </p>
        
        <div className="flex justify-center">
          <button className="group flex items-center overflow-hidden rounded-full bg-primary shadow-[0_0_40px_rgba(163,230,53,0.3)] transition-all duration-300 hover:scale-[1.04]">
            <span className="px-8 py-4 text-[13px] font-semibold tracking-[-0.01em] text-black uppercase">Book Your Table Today</span>
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#84cc16] transition-all duration-300 group-hover:bg-[#65a30d]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-5 w-5 text-black">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
