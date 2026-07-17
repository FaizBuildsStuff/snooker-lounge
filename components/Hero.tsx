"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background image
      gsap.to(imageRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal animation
      const tl = gsap.timeline();
      tl.from(".hero-text", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5,
      }).from(".hero-btn", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }, "-=1");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-background flex flex-col justify-center items-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%]">
        <Image
          ref={imageRef}
          src="/images/hero.jpg"
          alt="Cinematic Snooker Lounge"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#050505]/30 backdrop-blur-[2px]" />
      </div>

      {/* Navbar (Absolute to float on Hero) */}
      <nav className="absolute top-0 left-0 w-full p-8 flex justify-between items-center z-50">
        <div className="text-2xl font-bold tracking-tighter text-white uppercase">
          Lounge<span className="text-primary">.</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#gaming" className="hover:text-white transition-colors">Gaming</a>
          <a href="#vip" className="hover:text-white transition-colors">VIP</a>
          <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
        </div>
        <MagneticButton>
          <button className="glass-panel px-6 py-2.5 text-sm font-medium text-white glass-panel-hover">
            Book Table
          </button>
        </MagneticButton>
      </nav>

      {/* Main Content */}
      <div ref={textRef} className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto mt-20">
        <h2 className="hero-text text-primary text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium">
          Multan's Premium Destination
        </h2>
        <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.1] mb-8 text-balance">
          The Ultimate <br /> Snooker & Gaming Experience
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
          <MagneticButton className="hero-btn">
            <button className="bg-primary text-background px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-colors duration-500">
              Book Now
            </button>
          </MagneticButton>
          <MagneticButton className="hero-btn">
            <button className="glass-panel px-8 py-4 rounded-full font-semibold text-lg text-white hover:bg-white/[0.08] transition-colors duration-500">
              Explore Club
            </button>
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center hero-text opacity-50">
        <span className="text-xs tracking-[0.2em] uppercase mb-2">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
}
