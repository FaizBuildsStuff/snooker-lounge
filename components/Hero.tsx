"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUpRight, MousePointer2 } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <section ref={containerRef} className="relative w-full flex flex-col items-center pt-[140px] md:pt-[180px] pb-32 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
      `}} />
      
      {/* Navbar Overlay */}
      <header className="fixed left-1/2 top-4 z-[9999] w-[94%] max-w-[1280px] -translate-x-1/2 transition-all duration-500">
        <div className="relative rounded-full border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-[#030303]/60 backdrop-blur-xl shadow-sm">
          <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at top, rgba(163,230,53,0.02), transparent 72%)' }} />
            <div className="absolute left-1/2 top-[-120px] h-[220px] w-[220px] -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, rgba(163,230,53,0.04), transparent 72%)', filter: 'blur(50px)' }} />
          </div>
          
          <div className="relative z-20 flex h-[68px] items-center justify-between px-4 sm:px-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02]">
                <Image src="/logo.jpg" alt="Diamond Snooker Club" fill className="object-cover" />
              </div>
              <div className="hidden sm:block">
                <h3 className="text-[15px] font-semibold tracking-[-0.04em] text-black dark:text-white">Diamond Snooker Lounge</h3>
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
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="group relative flex overflow-hidden rounded-full border border-black/10 dark:border-primary/50 bg-black dark:bg-primary px-5 py-3 text-white dark:text-[#030303] transition-all duration-500 hover:scale-[1.02] shadow-sm"
                >
                  <div className="absolute top-[-20%] h-[180px] w-[100px] rotate-[24deg] bg-white/20 blur-xl transition-all duration-1000 left-[-120px] group-hover:left-[110%]" />
                  <div className="relative z-10 flex items-center gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">Book Table</span>
                    <div className={`flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-[#030303] text-black dark:text-white transition-all duration-500 ${isDropdownOpen ? 'rotate-180' : 'group-hover:rotate-45'}`}>
                      <ArrowUpRight className="h-4 w-4 stroke-[2.5px]" />
                    </div>
                  </div>
                </button>

                {/* Premium Dropdown Menu */}
                <div 
                  className={`absolute right-0 top-full mt-3 w-60 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-[#0d0d0d]/90 p-2 backdrop-blur-2xl shadow-2xl transition-all duration-300 origin-top-right
                    ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 translate-y-[-10px] invisible pointer-events-none'}`}
                >
                  <a 
                    href="https://wa.me/923146217172" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-[20px] px-4 py-3 text-[14px] font-semibold text-black/80 dark:text-white/80 transition-all hover:bg-[#25D366]/10 hover:text-[#25D366] dark:hover:bg-[#25D366]/20 group/item"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 transition-colors group-hover/item:bg-[#25D366] group-hover/item:text-white">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 3.825 0 6.938 3.112 6.938 6.937 0 3.825-3.113 6.938-6.938 6.938z"/></svg>
                    </div>
                    <span>Chat on WhatsApp</span>
                  </a>
                  
                  <div className="mx-4 my-1 h-px bg-black/5 dark:bg-white/5" />

                  <a 
                    href="tel:+923146217172"
                    className="flex items-center gap-3 rounded-[20px] px-4 py-3 text-[14px] font-semibold text-black/80 dark:text-white/80 transition-all hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white group/item"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/5 dark:bg-white/5 text-black/60 dark:text-white/60 transition-colors group-hover/item:bg-black group-hover/item:text-white dark:group-hover/item:bg-white dark:group-hover/item:text-black">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    <span>Dial Number</span>
                  </a>
                </div>
              </div>
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6 w-full">
        
        <div className="hero-reveal relative mb-10">
          <h1 className="text-[2.3rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold leading-[1.15] md:leading-[1.05] tracking-tight text-black dark:text-white">
            Multan's Premium <br />
            <span className="relative mx-1 md:mx-2 inline-block px-3 md:px-4 py-1 md:py-2 mt-2 md:mt-4 mb-1 md:mb-2">
              {/* Figma-style Selection Box */}
              <div className="absolute inset-0 border-[1.5px] border-black/90 dark:border-primary bg-black/[0.02] dark:bg-primary/[0.05]">
                <div className="absolute -left-[4px] -top-[4px] h-[6px] w-[6px] md:h-[8px] md:w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -right-[4px] -top-[4px] h-[6px] w-[6px] md:h-[8px] md:w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -left-[4px] -bottom-[4px] h-[6px] w-[6px] md:h-[8px] md:w-[8px] bg-black dark:bg-primary" />
                <div className="absolute -right-[4px] -bottom-[4px] h-[6px] w-[6px] md:h-[8px] md:w-[8px] bg-black dark:bg-primary" />
              </div>
              Snooker & Gaming
              {/* Floating Cursor/Label */}
              <div className="absolute -right-2 -bottom-5 md:-right-8 md:-bottom-8 z-10">
                <div className="relative rounded-full bg-black dark:bg-primary px-2 py-1 md:px-3 md:py-[6px] text-[9px] md:text-[11px] font-black tracking-widest text-white dark:text-[#030303] shadow-xl shadow-black/20 dark:shadow-primary/20">
                  VIP
                  <div className="absolute -left-4 -top-4 md:-left-5 md:-top-5 rotate-[-15deg]">
                    <MousePointer2 className="h-5 w-5 md:h-6 md:w-6 fill-black dark:fill-primary text-white dark:text-[#030303] stroke-[1.5px] drop-shadow-md" />
                  </div>
                </div>
              </div>
            </span>
            <br /> Lounge
          </h1>
        </div>

        <p className="hero-reveal max-w-2xl text-[18px] md:text-[22px] leading-[1.8] text-black/60 dark:text-white/60 mb-12 italic font-serif">
          Where passion meets premium gaming.
        </p>



        {/* Floating Background Tags */}
        <div className="floating-tag-1 absolute left-[2%] lg:left-[5%] bottom-[45%] lg:bottom-[40%] hidden md:block">
          <div className="relative rounded-full bg-white dark:bg-[#030303] border border-black/10 dark:border-white/10 px-6 py-3 text-[14px] font-bold text-black dark:text-white shadow-lg shadow-black/5">
            Esports PCs
            <div className="absolute right-[-18px] top-[-18px] rotate-[15deg]">
              <MousePointer2 className="h-6 w-6 fill-black dark:fill-white text-white dark:text-[#030303] drop-shadow-sm" />
            </div>
          </div>
        </div>

        <div className="floating-tag-2 absolute right-[2%] lg:right-[5%] bottom-[25%] lg:bottom-[20%] hidden md:block">
          <div className="relative rounded-full bg-white dark:bg-[#030303] border border-black/10 dark:border-white/10 px-6 py-3 text-[14px] font-bold text-black dark:text-white shadow-lg shadow-black/5">
            Heated Slate Tables
            <div className="absolute left-[-18px] top-[-18px] rotate-[-15deg]">
              <MousePointer2 className="h-6 w-6 fill-black dark:fill-white text-white dark:text-[#030303] drop-shadow-sm" />
            </div>
          </div>
        </div>

        {/* Endless Ticker Tape */}
        <div className="absolute bottom-0 left-0 w-full py-4 overflow-hidden flex z-20">
          <div className="flex whitespace-nowrap animate-ticker">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="mx-8 text-[11px] font-bold tracking-[0.3em] text-black/60 dark:text-white/60 uppercase">Multan's Premier Gaming Destination</span>
                <span className="text-primary text-[10px]">✦</span>
                <span className="mx-8 text-[11px] font-bold tracking-[0.3em] text-black/60 dark:text-white/60 uppercase">Pro Snooker Tables</span>
                <span className="text-primary text-[10px]">✦</span>
                <span className="mx-8 text-[11px] font-bold tracking-[0.3em] text-black/60 dark:text-white/60 uppercase">Next-Gen Consoles</span>
                <span className="text-primary text-[10px]">✦</span>
                <span className="mx-8 text-[11px] font-bold tracking-[0.3em] text-black/60 dark:text-white/60 uppercase">VIP Experience</span>
                <span className="text-primary text-[10px]">✦</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
