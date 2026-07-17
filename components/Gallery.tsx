"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const images = [
  "/images/hero.jpg",
  "/images/vip.jpg",
  "/images/gaming.jpg",
  "/images/hero.jpg",
  "/images/vip.jpg",
  "/images/gaming.jpg",
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="gallery" className="py-24 md:py-32 w-full relative border-t border-black/[0.04]">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.02) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-black/[0.02] px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-black shadow-sm" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">GALLERY</span>
          </div>
          <h2 className="text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4.6rem] text-black">
            A Glimpse of Perfection.
          </h2>
        </div>
        <button className="text-black/60 hover:text-black transition-colors border-b border-black/30 hover:border-black pb-1 text-sm uppercase tracking-widest font-semibold">
          View Full Gallery
        </button>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item relative w-full overflow-hidden rounded-[24px] border border-black/[0.08] shadow-sm group break-inside-avoid bg-white">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
