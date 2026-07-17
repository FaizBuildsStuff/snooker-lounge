"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function About() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    <section ref={containerRef} id="about" className="py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="about-image-container relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/vip.jpg"
            alt="About Lounge"
            fill
            className="about-image object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
        </div>
        
        <div ref={textRef} className="flex flex-col justify-center">
          <h3 className="about-reveal text-primary tracking-[0.2em] uppercase text-sm mb-6">About The Club</h3>
          <h2 className="about-reveal text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-8 leading-[1.1] text-balance">
            Where precision meets luxury.
          </h2>
          <div className="about-reveal flex flex-col gap-6 text-secondary text-lg leading-relaxed">
            <p>
              Located in the heart of Multan, our club redefines the standard for competitive gaming and professional snooker. We've crafted an environment where every detail speaks of exclusivity and premium quality.
            </p>
            <p>
              From championship-grade tables to next-generation gaming setups, our lounge is designed for those who appreciate the finer things in life and accept nothing less than perfection.
            </p>
          </div>
          
          <div className="about-reveal mt-12 grid grid-cols-2 gap-8 border-t border-white/10 pt-12">
            <div>
              <div className="text-4xl font-light text-white mb-2">01</div>
              <div className="text-sm text-secondary uppercase tracking-wider">Premium Tables</div>
            </div>
            <div>
              <div className="text-4xl font-light text-white mb-2">02</div>
              <div className="text-sm text-secondary uppercase tracking-wider">VIP Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
