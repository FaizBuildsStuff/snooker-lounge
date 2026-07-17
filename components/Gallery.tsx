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
    <section ref={containerRef} id="gallery" className="py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-2xl">
          <h3 className="text-primary tracking-[0.2em] uppercase text-sm mb-6">Visuals</h3>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
            A Glimpse of Perfection
          </h2>
        </div>
        <button className="text-secondary hover:text-white transition-colors border-b border-secondary/30 hover:border-white pb-1">
          View Full Gallery
        </button>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-item relative w-full overflow-hidden rounded-xl group break-inside-avoid">
            <Image
              src={src}
              alt={`Gallery image ${idx + 1}`}
              width={600}
              height={800}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}
