"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function GamingExperience() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gaming-text", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });

      gsap.to(".gaming-parallax", {
        yPercent: 20,
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
    <section ref={containerRef} id="gaming" className="py-32 w-full relative overflow-hidden bg-[#020202]">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-[#050505] to-[#050505]" />
      
      <div className="px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <h3 className="gaming-text text-primary tracking-[0.2em] uppercase text-sm mb-6">Next-Gen Gaming</h3>
            <h2 className="gaming-text text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1] text-balance">
              Immerse yourself <br/> in the game.
            </h2>
            <div className="gaming-text flex flex-col gap-6 text-secondary text-lg leading-relaxed mb-10 max-w-lg">
              <p>
                Experience the latest titles on PlayStation 5 and Xbox Series X, displayed on massive 4K OLED screens with HDR capabilities. 
              </p>
              <p>
                Our gaming stations feature premium ergonomic leather chairs, professional headsets, and lag-free fiber internet for the ultimate competitive edge.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative h-[60vh] w-full overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/images/gaming.jpg"
              alt="Gaming Setup"
              fill
              className="gaming-parallax object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
            
            {/* Overlay Specs */}
            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-4 border-t border-white/20 pt-8 backdrop-blur-sm">
              <div>
                <div className="text-white font-medium mb-1">Display</div>
                <div className="text-secondary text-xs">4K OLED 120Hz</div>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Console</div>
                <div className="text-secondary text-xs">PS5 / Xbox X</div>
              </div>
              <div>
                <div className="text-white font-medium mb-1">Audio</div>
                <div className="text-secondary text-xs">3D Surround</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
