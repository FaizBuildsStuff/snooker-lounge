"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function FloatingCTA() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleMenuState = (e: any) => setIsMenuOpen(e.detail);
    window.addEventListener("mobileMenuState", handleMenuState);
    return () => window.removeEventListener("mobileMenuState", handleMenuState);
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
      <div className="pointer-events-auto">
        <a 
          href="https://wa.me/923170657192" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group flex items-center overflow-hidden rounded-full bg-black dark:bg-primary shadow-xl shadow-black/10 dark:shadow-primary/10 transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl hover:shadow-black/20 dark:hover:shadow-primary/20 border border-white/10 dark:border-primary/20"
        >
          <span className="px-6 py-3 md:px-8 md:py-4 text-[12px] md:text-[13px] font-semibold tracking-[-0.01em] text-white dark:text-[#030303] uppercase">Book Table</span>
          <div className="flex h-[44px] w-[44px] md:h-[54px] md:w-[54px] items-center justify-center bg-gray-900 dark:bg-[#a3e635] brightness-100 dark:brightness-110 transition-all duration-300 group-hover:bg-gray-800 dark:group-hover:brightness-125 rounded-r-full border-l border-white/5 dark:border-[#030303]/10">
            <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-white dark:text-[#030303] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </a>
      </div>
    </div>
  );
}
