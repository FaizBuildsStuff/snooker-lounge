"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray(".about-reveal");
      
      texts.forEach((text: any) => {
        gsap.from(text, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
          },
        });
      });

      gsap.from(".about-image", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".about-image-container",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-24 md:py-32 px-4 md:px-8 lg:px-12 w-full relative">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="about-image-container relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-black/[0.08] shadow-sm">
            <Image
              src="/images/vip.jpg"
              alt="About Lounge"
              fill
              className="about-image object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.02]" />
          </div>
          
          <div ref={textRef} className="flex flex-col justify-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-4 py-2 backdrop-blur-2xl self-start">
              <div className="h-2 w-2 rounded-full bg-black" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">ABOUT THE CLUB</span>
            </div>
            
            <h2 className="about-reveal text-[2.2rem] sm:text-[3.5rem] lg:text-[4.6rem] font-semibold tracking-[-0.05em] text-black mb-8 leading-[0.95]">
              Where precision<br/>meets luxury.
            </h2>
            <div className="about-reveal flex flex-col gap-6 text-black/60 text-[14px] sm:text-[15px] leading-[1.8] max-w-xl">
              <p>
                Located in the heart of Multan, our club redefines the standard for competitive gaming and professional snooker. We've crafted an environment where every detail speaks of exclusivity and premium quality.
              </p>
              <p>
                From championship-grade tables to next-generation gaming setups, our lounge is designed for those who appreciate the finer things in life and accept nothing less than perfection.
              </p>
            </div>
            
            <div className="about-reveal mt-12 grid grid-cols-2 gap-8 border-t border-black/[0.08] pt-12">
              <div>
                <div className="text-4xl font-semibold text-black mb-2 tracking-tighter">01</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">Premium Tables</div>
              </div>
              <div>
                <div className="text-4xl font-semibold text-black mb-2 tracking-tighter">02</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black/60">VIP Service</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
