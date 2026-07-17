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
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black transition-colors hover:bg-black/5"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Full Screen Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#FAFAFA]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out flex flex-col items-center justify-center ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-black p-4 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col gap-8 text-center text-3xl font-semibold tracking-tight">
          <a href="#home" onClick={() => setIsOpen(false)} className="text-black/80 hover:text-black transition-colors">Home</a>
          <a href="#vip" onClick={() => setIsOpen(false)} className="text-black/80 hover:text-black transition-colors">VIP Experience</a>
          <a href="#tables" onClick={() => setIsOpen(false)} className="text-black/80 hover:text-black transition-colors">Tables</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-black/80 hover:text-black transition-colors">Contact</a>
        </div>
        
        <div className="absolute bottom-12 text-center text-[10px] tracking-[0.2em] uppercase text-black/40">
          Multan's Premium Destination
        </div>
      </div>
    </div>
  );
}
