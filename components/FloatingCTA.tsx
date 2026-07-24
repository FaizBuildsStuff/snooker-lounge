"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMenuState = (e: any) => setIsMenuOpen(e.detail);
    window.addEventListener("mobileMenuState", handleMenuState);
    
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      window.removeEventListener("mobileMenuState", handleMenuState);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const { scrollYProgress } = useScroll();
  
  // The doodle draws itself completely between 5% and 50% scroll
  const pathLength = useTransform(scrollYProgress, [0.05, 0.5], [0, 1]);
  // The doodle opacity fades in
  const opacity = useTransform(scrollYProgress, [0.02, 0.1], [0, 1]);

  return (
    <div className={`fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[9000] flex flex-col items-end pointer-events-none transition-all duration-500 ${isMenuOpen ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
      
      {/* Scroll Animated Doodle */}
      <motion.div 
        style={{ opacity }}
        className="mr-8 mb-2 hidden md:flex flex-col items-end"
      >
        <div className="text-[12px] font-semibold tracking-[0.2em] uppercase text-black/40 dark:text-white/40 mb-1 mr-4 rotate-[-6deg] italic">
          Ready?
        </div>
        <svg 
          width="80" 
          height="60" 
          viewBox="0 0 80 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-black/30 dark:stroke-white/30 overflow-visible"
        >
          {/* Main curved body of the arrow */}
          <motion.path
            d="M 10,10 C 25,2 50,15 70,50"
            strokeWidth="2"
            strokeLinecap="round"
            style={{ pathLength }}
          />
          {/* Arrow head */}
          <motion.path
            d="M 55,42 L 70,50 L 68,32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ pathLength }}
          />
        </svg>
      </motion.div>

      {/* Button */}
      <div className="pointer-events-auto relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="group flex items-center overflow-hidden rounded-full bg-black dark:bg-primary shadow-xl shadow-black/10 dark:shadow-primary/10 transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-primary/20 border border-white/10 dark:border-primary/20"
        >
          <span className="px-6 py-3 md:px-8 md:py-4 text-[12px] md:text-[13px] font-semibold tracking-[-0.01em] text-white dark:text-[#030303] uppercase">Book Table</span>
          <div className={`flex h-[44px] w-[44px] md:h-[54px] md:w-[54px] items-center justify-center bg-gray-900 dark:bg-[#a3e635] brightness-100 dark:brightness-110 transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:brightness-125 rounded-r-full border-l border-white/5 dark:border-[#030303]/10 ${isDropdownOpen ? 'rotate-180' : ''}`}>
            <ArrowUpRight className={`h-4 w-4 md:h-5 md:w-5 text-white dark:text-[#030303] transition-transform ${isDropdownOpen ? '' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
          </div>
        </button>

        {/* Premium Dropdown Menu (Upward) */}
        <div 
          className={`absolute right-0 bottom-full mb-3 w-60 rounded-3xl border border-black/[0.08] dark:border-white/[0.08] bg-white/90 dark:bg-[#0d0d0d]/90 p-2 backdrop-blur-2xl shadow-2xl transition-all duration-300 origin-bottom-right
            ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' : 'opacity-0 scale-95 translate-y-[10px] invisible pointer-events-none'}`}
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
    </div>
  );
}
