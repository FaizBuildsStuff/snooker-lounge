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
    <section ref={containerRef} className="py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h3 className="text-primary tracking-[0.2em] uppercase text-sm mb-6">Testimonials</h3>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1] mb-6">
          Word on the Street
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="testimonial-card glass-panel p-8 md:p-10 flex flex-col gap-6 group glass-panel-hover">
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed flex-1 italic">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4 mt-4 border-t border-white/10 pt-6">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-primary font-medium">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-medium text-sm">{testimonial.name}</div>
                <div className="text-secondary text-xs">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
