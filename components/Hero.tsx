"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
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
        <div className="relative overflow-hidden rounded-full border border-white/[0.06] bg-black/45 backdrop-blur-xl">
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(255,255,255,0.05), transparent 72%)' }} />
          <div className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.12), transparent 72%)', filter: 'blur(50px)' }} />
          
          <div className="relative z-20 flex h-[68px] items-center justify-between px-4 sm:px-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/[0.08] bg-white/[0.03]">
                <div className="absolute inset-0" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.12), transparent 72%)' }} />
                <span className="text-white font-bold text-lg relative z-10">S.</span>
              </div>
              <div className="hidden sm:block">
                <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-white">Snooker Lounge</h3>
                <p className="text-[11px] text-white/40">Premium Gaming</p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {['Home', 'VIP', 'Tables', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden rounded-full px-5 py-3 transition-all duration-500 hover:bg-white/[0.04]">
                  <div className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.06), transparent 72%)' }} />
                  <span className="relative z-10 text-[11px] font-medium uppercase tracking-[0.16em] text-white/70 transition-all duration-500 group-hover:text-white">{item}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="group relative hidden md:flex overflow-hidden rounded-full border border-[#84cc16]/10 bg-[#a3e635] px-5 py-3 text-black transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute top-[-20%] h-[180px] w-[100px] rotate-[24deg] bg-white/40 blur-2xl transition-all duration-1000 left-[-120px] group-hover:left-[110%]" />
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Book Table</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-500 group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
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
          <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-white">
            Multan's Most Premium <br className="hidden md:block"/>
            <span className="relative mx-2 inline-block px-4 py-1 mt-2">
              {/* Figma-style Selection Box */}
              <div className="absolute inset-0 border-[1.5px] border-primary/90 bg-primary/5">
                <div className="absolute -left-[4px] -top-[4px] h-[8px] w-[8px] bg-primary" />
                <div className="absolute -right-[4px] -top-[4px] h-[8px] w-[8px] bg-primary" />
                <div className="absolute -left-[4px] -bottom-[4px] h-[8px] w-[8px] bg-primary" />
                <div className="absolute -right-[4px] -bottom-[4px] h-[8px] w-[8px] bg-primary" />
              </div>
              Gaming Lounge
              {/* Floating Cursor/Label */}
              <div className="absolute -right-16 -top-5">
                <div className="relative rounded-full bg-primary px-2 py-[5px] text-[10px] font-black text-black shadow-[0_0_20px_rgba(163,230,53,0.6)]">
                  VIP
                  <div className="absolute -left-3.5 -top-3.5 rotate-[-20deg]">
                    <ArrowUpRight className="h-5 w-5 stroke-[3px] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                  </div>
                </div>
              </div>
            </span>
            <br className="hidden md:block"/> built for professionals.
          </h1>
        </div>

        <p className="hero-reveal max-w-2xl text-[15px] md:text-[17px] leading-[1.8] text-white/60 mb-12">
          Experience gaming like never before. Heated slate snooker tables, RTX 4090 powered setups, and private rooms designed for the ultimate competitive edge.
        </p>

        <div className="hero-reveal mb-24">
          <button className="group flex items-center overflow-hidden rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.04]">
            <span className="px-8 py-4 text-[13px] font-semibold tracking-[-0.01em] text-black uppercase">Reserve Your Spot</span>
            <div className="flex h-[54px] w-[54px] items-center justify-center bg-primary transition-all duration-300 group-hover:bg-[#84cc16]">
              <ArrowUpRight className="h-5 w-5 text-black stroke-[3px]" />
            </div>
          </button>
        </div>

        {/* Floating Background Tags */}
        <div className="floating-tag-1 absolute left-[5%] lg:left-[10%] top-[30%] lg:top-[35%] hidden md:block">
          <div className="relative rounded-full bg-primary px-6 py-3 text-[14px] font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.4)]">
            Esports PCs
            <div className="absolute right-[-18px] top-[-18px] rotate-[15deg]">
              <MousePointer2 className="h-6 w-6 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>
          </div>
        </div>

        <div className="floating-tag-2 absolute right-[5%] lg:right-[10%] bottom-[30%] lg:bottom-[40%] hidden md:block">
          <div className="relative rounded-full bg-primary px-6 py-3 text-[14px] font-bold text-black shadow-[0_0_35px_rgba(163,230,53,0.4)]">
            Heated Slate Tables
            <div className="absolute left-[-18px] top-[-18px] rotate-[-15deg]">
              <MousePointer2 className="h-6 w-6 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            </div>
          </div>
        </div>

        {/* Matera Media Style Partner Banner at Bottom of Hero */}
        <div className="hero-reveal mt-16 w-full max-w-5xl border-t border-white/5 pt-12">
          <h3 className="mb-8 text-[11px] font-bold tracking-[0.35em] text-white/25 uppercase">Powered By</h3>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-25 sm:gap-16 lg:gap-24">
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
