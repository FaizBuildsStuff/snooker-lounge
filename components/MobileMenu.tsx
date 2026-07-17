"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button 
        onClick={() => setIsOpen(true)}
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white transition-colors hover:bg-white/[0.08]"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#030303]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white p-4 rounded-full bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-8 text-center text-3xl font-semibold tracking-tight">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors">Home</a>
          <a href="#vip" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors">VIP Experience</a>
          <a href="#tables" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors">Tables</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors">Contact</a>
        </div>
        
        <div className="absolute bottom-12 text-center text-[10px] tracking-[0.2em] uppercase text-white/40">
          Multan's Premium Destination
        </div>
      </div>
    </div>
  );
}
