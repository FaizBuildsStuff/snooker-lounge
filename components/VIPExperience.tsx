"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function VIPExperience() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(textRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      gsap.from(imageRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });
      
      gsap.to(".vip-parallax", {
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
    <section ref={containerRef} id="vip" className="py-32 md:py-48 w-full relative overflow-hidden">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 0% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 60%), radial-gradient(circle at 100% 0%, rgba(0, 0, 0, 0.03) 0%, transparent 50%)'
        }}
      />

      <div className="relative z-10 px-4 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-gradient-to-r from-[#D4AF37]/5 to-transparent px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]">EXCLUSIVE ACCESS</span>
          </div>
          <h2 className="mx-auto max-w-4xl text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4.6rem] text-black">
            The Private<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#997a15]">Lounge Experience.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-[1.8] text-black/60 sm:text-[15px]">
            Elevate your experience in our private VIP rooms. Perfect for private parties, high-stakes games, or those who simply prefer uninterrupted focus.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {/* Image Panel */}
          <div ref={imageRef} className="relative overflow-hidden rounded-[30px] lg:rounded-[42px] border border-black/[0.08] bg-white shadow-sm aspect-[4/3] lg:aspect-auto">
            <div className="absolute inset-0 bg-black/5 mix-blend-overlay z-10 pointer-events-none" />
            <Image
              src="/privatelounge.jpeg"
              alt="Private VIP Lounge"
              fill
              className="object-cover vip-parallax transition-all duration-700 hover:scale-[1.05]"
            />
          </div>

          {/* Text/Features Panel */}
          <div ref={textRef} className="relative overflow-hidden rounded-[30px] lg:rounded-[42px] border border-[#D4AF37]/20 bg-white p-6 sm:p-10 backdrop-blur-3xl shadow-[0_8px_40px_rgba(212,175,55,0.08)]">
            <div className="absolute right-[-10%] top-[-10%] h-[320px] w-[320px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08), transparent 72%)', filter: 'blur(90px)' }} />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Private Service", desc: "Dedicated waitstaff for absolute privacy." },
                  { title: "Premium Tables", desc: "Star-grade heated slate snooker." },
                  { title: "Lounge Area", desc: "Plush leather seating and 4K entertainment." },
                  { title: "Priority Booking", desc: "Skip the line, guaranteed availability." }
                ].map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-[24px] border border-black/[0.06] bg-black/[0.02] p-6 backdrop-blur-3xl transition-all duration-500 hover:border-black/[0.15] hover:bg-black/[0.04]">
                    <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.02), transparent 45%)' }} />
                    <div className="relative z-10">
                      <h4 className="text-[1.1rem] font-semibold tracking-[-0.03em] text-black mb-2">{item.title}</h4>
                      <p className="text-[13px] leading-[1.75] text-black/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="group relative flex items-center justify-center overflow-hidden rounded-full bg-black shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(212,175,55,0.2)] border border-transparent hover:border-[#D4AF37]/40 w-max">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  <span className="relative z-10 px-8 py-4 text-[13px] font-semibold tracking-[0.05em] text-[#D4AF37] uppercase">Reserve Private Lounge</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
