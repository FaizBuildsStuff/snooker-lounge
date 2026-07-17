"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2
      });

      // Float animation for tags
      gsap.to(".floating-tag-1", {
        y: -15,
        rotation: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".floating-tag-2", {
        y: 15,
        rotation: -2,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Navbar Overlay */}
      <header className="fixed left-1/2 top-4 z-[9999] w-[94%] max-w-[1280px] -translate-x-1/2 transition-all duration-500">
        <div className="relative overflow-hidden rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-[#030303]/60 backdrop-blur-xl shadow-sm">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(163,230,53,0.02), transparent 72%)' }} />
          <div className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.04), transparent 72%)', filter: 'blur(50px)' }} />
          
          <div className="relative z-20 flex h-[68px] items-center justify-between px-4 sm:px-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.04), transparent 72%)' }} />
                <span className="text-black dark:text-white font-bold text-lg relative z-10">S.</span>
              </div>
              <div className="hidden sm:block">
                <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-black dark:text-white">Snooker Lounge</h3>
                <p className="text-[11px] text-black/50 dark:text-white/50">Premium Gaming</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {['Home', 'VIP', 'Tables', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden rounded-full px-5 py-3 transition-all duration-500 hover:bg-black/5 dark:hover:bg-white/5">
                  <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.03), transparent 72%)' }} />
                  <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.16em] text-black/60 dark:text-white/60 transition-all duration-500 group-hover:text-black dark:group-hover:text-white">{item}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button className="group relative hidden md:flex overflow-hidden rounded-full border border-black/10 dark:border-primary/50 bg-black dark:bg-primary px-5 py-3 text-white dark:text-[#030303] transition-all duration-500 hover:scale-[1.02] shadow-sm">
                <div className="absolute top-[-20%] h-[180px] w-[100px] rotate-[24deg] bg-white/20 blur-xl transition-all duration-1000 left-[-120px] group-hover:left-[110%]" />
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Book Table</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#030303] text-black dark:text-white transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4 stroke-[2.5px]" />
                  </div>
                </div>
              </button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 w-full">
        
        <div className="hero-reveal relative mb-10 mt-16">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-black dark:text-white">
            Multan's Most Premium <br className="hidden md:block"/>
            <span className="relative mx-2 inline-block px-4 py-1 mt-2">
              {/* Figma-style Selection Box */}
              <div className="absolute inset-0 border-[1.5px] border-black/90 dark:border-primary bg-black/[0.02] dark:bg-primary/[0.05]">
                <div className="absolute -left-[4px] -top-[4px] h-[8px] w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -right-[4px] -top-[4px] h-[8px] w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -left-[4px] -bottom-[4px] h-[8px] w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -right-[4px] -bottom-[4px] h-[8px] w-[8px] bg-black dark:bg-primary" />
              </div>
              Gaming Lounge
              {/* Floating Cursor/Label */}
              <div className="absolute -right-4 -bottom-6 md:-right-8 md:-bottom-8 z-10">
                <div className="relative rounded-full bg-black dark:bg-primary px-3 py-[6px] text-[11px] font-black tracking-widest text-white dark:text-[#030303] shadow-xl shadow-black/20 dark:shadow-primary/20">
                  VIP
                  <div className="absolute -left-5 -top-5 rotate-[-15deg]">
                    <MousePointer2 className="h-6 w-6 fill-black dark:fill-primary text-white dark:text-[#030303] stroke-[1.5px] drop-shadow-md" />
                  </div>
                </div>
              </div>
            </span>
            <br className="hidden md:block"/> built for professionals.
          </h1>
        </div>

        <p className="hero-reveal max-w-2xl text-[15px] md:text-[17px] leading-[1.8] text-black/60 dark:text-white/60 mb-12">
          Experience gaming like never before. Heated slate snooker tables, RTX 4090 powered setups, and private rooms designed for the ultimate competitive edge.
        </p>

        <div className="hero-reveal mb-24">
          <button className="group flex items-center overflow-hidden rounded-full bg-white dark:bg-primary border border-black/10 dark:border-primary/20 shadow-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-md">
            <span className="px-8 py-4 text-[13px] font-semibold tracking-[-0.01em] text-black dark:text-[#030303] uppercase">Book Now</span>
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-black dark:bg-[#a3e635] brightness-90 dark:brightness-110 transition-all duration-300 group-hover:bg-gray-900 dark:group-hover:bg-white">
              <ArrowUpRight className="h-5 w-5 text-white dark:text-[#030303] stroke-[3px]" />
            </div>
          </button>
        </div>

        {/* Floating Background Tags */}
        <div className="floating-tag-1 absolute left-[5%] lg:left-[10%] top-[30%] lg:top-[35%] hidden md:block">
          <div className="relative rounded-full bg-white dark:bg-[#030303] border border-black/10 dark:border-white/10 px-6 py-3 text-[14px] font-bold text-black dark:text-white shadow-lg shadow-black/5">
            Esports PCs
            <div className="absolute right-[-18px] top-[-18px] rotate-[15deg]">
              <MousePointer2 className="h-6 w-6 fill-black dark:fill-white text-white dark:text-[#030303] drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="floating-tag-2 absolute right-[5%] lg:right-[10%] bottom-[30%] lg:bottom-[40%] hidden md:block">
          <div className="relative rounded-full bg-white dark:bg-[#030303] border border-black/10 dark:border-white/10 px-6 py-3 text-[14px] font-bold text-black dark:text-white shadow-lg shadow-black/5">
            Heated Slate Tables
            <div className="absolute left-[-18px] top-[-18px] rotate-[-15deg]">
              <MousePointer2 className="h-6 w-6 fill-black dark:fill-white text-white dark:text-[#030303] drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Matera Media Style Partner Banner at Bottom of Hero */}
        <div className="hero-reveal mt-16 w-full max-w-5xl border-t border-black/10 dark:border-white/10 pt-12">
          <h3 className="mb-8 text-[11px] font-bold tracking-[0.35em] text-black/30 dark:text-white/30 uppercase">Powered By</h3>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-30 sm:gap-16 lg:gap-24 text-black dark:text-white">
            <div className="text-[1.5rem] font-black italic tracking-tighter sm:text-[2rem] font-sans">NVIDIA</div>
            <div className="text-[1.5rem] font-bold tracking-tighter sm:text-[2rem] font-sans">PlayStation</div>
            <div className="text-[1.5rem] font-black tracking-tighter sm:text-[2rem] font-sans">RAZER</div>
            <div className="text-[1.5rem] font-bold tracking-tighter sm:text-[2rem] font-sans">ALIENWARE</div>
          </div>
        </div>

      </div>
    </section>
  );
}
