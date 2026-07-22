"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function IntroAndFeatures() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Intro Text reveal
      gsap.from(".intro-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });

      // Bento cards reveal
      gsap.from(".bento-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bento-grid",
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="features" className="pt-8 pb-24 md:pt-12 md:pb-32 w-full relative overflow-hidden">
      {/* Background gradients */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1] hidden dark:block"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(163, 230, 53, 0.04) 0%, transparent 70%)'
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none z-[-1] block dark:hidden"
        style={{
          background: 'radial-gradient(circle at 50% 0%, rgba(0, 0, 0, 0.03) 0%, transparent 70%)'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Main Intro */}
        <div className="intro-text max-w-4xl mx-auto text-center mb-24">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-black dark:bg-primary shadow-sm" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60 dark:text-white/60">THE EXPERIENCE</span>
          </div>
          
          <h2 className="text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-black dark:text-white mb-8">
            Welcome to the <br className="hidden sm:block"/>
            <span className="italic font-serif">Ultimate Cue & Gaming</span> Experience!
          </h2>
          
          <p className="text-[16px] md:text-[20px] leading-[1.8] text-black/60 dark:text-white/60">
            We aren't just a snooker club; we are Multan's premium hangout destination for gamers and cueists. Experience world-class tables, next-gen gaming, and an unmatched vibe—all under one roof.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[400px]">
          
          {/* Card 1: Snooker Tables (Large) */}
          <div className="bento-card relative overflow-hidden rounded-[32px] md:col-span-8 group bg-black">
            <Image
              src="/1.jpeg"
              alt="Professional Snooker Tables"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary text-2xl">🎱</span> Professional Snooker Tables
              </h3>
              <p className="text-white/80 text-[15px] leading-relaxed max-w-2xl">
                Play on international-standard, perfectly maintained snooker tables. Whether you're here for a casual frame with friends or prepping for a serious match, we offer the ultimate playing surface.
              </p>
            </div>
          </div>

          {/* Card 2: Tournaments (Medium) */}
          <div className="bento-card relative overflow-hidden rounded-[32px] md:col-span-4 group bg-black">
            <Image
              src="/4.jpeg"
              alt="Thrilling Tournaments"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary text-2xl">🏆</span> Thrilling Tournaments
              </h3>
              <p className="text-white/80 text-[15px] leading-relaxed">
                Test your skills and compete with the best cueists in Multan! We regularly host high-stakes snooker tournaments with exciting prizes and professional setups.
              </p>
            </div>
          </div>

          {/* Card 3: Next-Gen Gaming (Medium) */}
          <div className="bento-card relative overflow-hidden rounded-[32px] md:col-span-5 group bg-black">
            <Image
              src="/2.jpeg"
              alt="Next-Gen Gaming Zone"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary text-2xl">🎮</span> Next-Gen Gaming Zone
              </h3>
              <p className="text-white/80 text-[14px] leading-relaxed mb-4">
                Dive into the ultimate gaming experience with PS5 & Xbox 360.
              </p>
              <ul className="text-white/70 text-[13px] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>PS5:</strong> Play the latest high-graphics, blockbuster titles on ultra-smooth screens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Xbox 360:</strong> Enjoy a massive collection of classic multiplayer games.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 4: VIP Room (Large) */}
          <div className="bento-card relative overflow-hidden rounded-[32px] md:col-span-7 group bg-black">
            <Image
              src="/privatelounge.jpeg"
              alt="Exclusive Private VIP Room"
              fill
              className="object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
              <h3 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-primary text-2xl">🔒</span> Exclusive Private VIP Room
              </h3>
              <p className="text-white/80 text-[15px] leading-relaxed max-w-xl">
                Need some personal space? Book our exclusive Private Room! It's the perfect premium spot for families and close friends to enjoy snooker and gaming with complete privacy and zero distractions.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
