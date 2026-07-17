"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Professional Player",
    content: "The best tables in Multan. The cloth is always fresh, and the atmosphere allows for complete focus. A truly premium experience.",
    rating: 5,
  },
  {
    name: "Saad Ali",
    role: "Gaming Enthusiast",
    content: "The PS5 setups are insane. Massive OLED screens and the VIP service makes you feel like royalty. Highly recommended.",
    rating: 5,
  },
  {
    name: "Zain Qureshi",
    role: "Regular Member",
    content: "I've been to many clubs, but the level of luxury and exclusivity here is unmatched. It's more than a lounge; it's a lifestyle.",
    rating: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 w-full relative border-t border-white/[0.02]">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 100% 50%, rgba(163, 230, 53, 0.04) 0%, transparent 60%)'
        }}
      />

      <div className="px-4 md:px-8 lg:px-12 max-w-[1500px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col items-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(163,230,53,1)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">TESTIMONIALS</span>
          </div>
          <h2 className="text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4.6rem] text-white">
            Word on the Street.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="testimonial-card relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.02] p-8 md:p-10 flex flex-col gap-6 group transition-all duration-500 hover:-translate-y-2 hover:border-white/[0.15] backdrop-blur-2xl">
              <div className="absolute inset-0 z-10 opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(163,230,53,0.08), transparent 45%)' }} />
              
              <div className="relative z-20 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="relative z-20 text-white/70 text-[15px] leading-[1.8] flex-1 italic">
                "{testimonial.content}"
              </p>
              
              <div className="relative z-20 flex items-center gap-4 mt-4 border-t border-white/[0.06] pt-6">
                <div className="w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-primary font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium text-[14px]">{testimonial.name}</div>
                  <div className="text-white/40 text-[12px]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
