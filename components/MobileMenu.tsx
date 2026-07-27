"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.dispatchEvent(new CustomEvent("mobileMenuState", { detail: true }));
    } else {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("mobileMenuState", { detail: false }));
    }
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("mobileMenuState", { detail: false }));
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[9999] flex h-11 w-11 items-center justify-center rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] text-black dark:text-white transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {/* Full Screen Menu Overlay via Portal to escape header overflow-hidden */}
      {mounted && createPortal(
        <div 
          className={`fixed inset-0 z-[100] bg-[#FAFAFA]/95 dark:bg-[#030303]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
            isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
          }`}
        >
          <div className="mb-10 flex flex-col items-center gap-3">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] shadow-xl">
              <Image src="/logo.jpg" alt="Diamond Snooker Club" fill className="object-cover" />
            </div>
            <span className="text-sm font-semibold tracking-wider uppercase text-black/80 dark:text-white/80">Diamond Snooker Club</span>
          </div>
          <div className="flex flex-col gap-8 text-center text-3xl font-semibold tracking-tight">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">Home</a>
            <a href="#features" onClick={() => setIsOpen(false)} className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">The Experience</a>
            <a href="#location" onClick={() => setIsOpen(false)} className="text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors">Location</a>
          </div>
          
          <div className="absolute bottom-12 text-center text-[10px] tracking-[0.2em] uppercase text-black/40 dark:text-white/40">
            Multan's Premium Destination
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
