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
    <section ref={containerRef} className="py-32 px-4 w-full relative overflow-hidden border-t border-black/[0.04] dark:border-white/[0.04]">
      <div className="absolute inset-0 bg-black/[0.02] dark:bg-[#030303] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.03] dark:bg-primary/[0.02] rounded-full blur-[120px] z-0 opacity-50 pointer-events-none" />

      <div className="cta-content relative z-10 max-w-5xl mx-auto text-center p-12 md:p-24 border border-black/[0.08] dark:border-white/10 bg-white dark:bg-[#0A0A0A] backdrop-blur-3xl rounded-[42px] shadow-lg overflow-hidden">
        <div className="absolute inset-0 opacity-0 transition-all duration-700 hover:opacity-100 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.02), transparent 50%)' }} />
        <div className="absolute inset-0 opacity-0 transition-all duration-700 hover:opacity-100 pointer-events-none dark:block hidden" style={{ background: 'linear-gradient(180deg, rgba(163,230,53,0.02), transparent 50%)' }} />
        
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] px-4 py-2 backdrop-blur-2xl">
          <div className="h-2 w-2 rounded-full bg-black dark:bg-primary shadow-sm" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60 dark:text-white/60">BOOK YOUR VISIT</span>
        </div>

        <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[5rem] font-semibold tracking-[-0.05em] text-black dark:text-white mb-6 leading-[1.05]">
          Ready to play? <br />
          <span className="text-black dark:text-primary/90 italic">Visit us today.</span>
        </h2>
        <p className="text-[15px] text-black/60 dark:text-white/60 mb-12 max-w-xl mx-auto leading-[1.8] font-sans">
          Whether you want a casual game with friends or a private VIP room for serious snooker, grab your table before it's gone.
        </p>
        
        <div className="flex justify-center">
          <a 
            href="https://wa.me/923170657192" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center overflow-hidden rounded-full bg-black dark:bg-primary shadow-md transition-all duration-300 hover:scale-[1.04]"
          >
            <span className="px-8 py-4 text-[13px] font-semibold tracking-[-0.01em] text-white dark:text-[#030303] uppercase">Book Your Table Today</span>
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-gray-900 dark:bg-[#a3e635] brightness-100 dark:brightness-110 transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:brightness-125">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right h-5 w-5 text-white dark:text-[#030303]">
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
