"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Monitor, Gamepad2, Mouse } from "lucide-react";

const bentoItems = [
  {
    title: "RTX 4090 Rigs",
    description: "Uncompromised performance with the world's fastest GPUs. Zero latency, maximum frames.",
    icon: Cpu,
    className: "lg:col-span-2 lg:row-span-2 bg-[url('/images/gaming.jpg')] bg-cover bg-center",
    overlay: "bg-gradient-to-t from-black/90 via-black/40 to-transparent",
    large: true,
  },
  {
    title: "OLED Displays",
    description: "240Hz OLED monitors for absolute visual clarity.",
    icon: Monitor,
    className: "lg:col-span-1 lg:row-span-1 bg-white/[0.02]",
  },
  {
    title: "Console Lounge",
    description: "PS5 and Xbox Series X on 75-inch 4K screens.",
    icon: Gamepad2,
    className: "lg:col-span-1 lg:row-span-1 bg-white/[0.02]",
  },
  {
    title: "Pro Peripherals",
    description: "Tournament-grade mice, keyboards, and headsets.",
    icon: Mouse,
    className: "lg:col-span-2 lg:row-span-1 bg-primary/[0.05] border-primary/20",
    highlight: true,
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
};

export default function GamingExperience() {
  return (
    <section id="gaming" className="py-24 md:py-32 px-4 md:px-8 lg:px-12 w-full relative z-10 border-t border-white/[0.02]">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(163, 230, 53, 0.05) 0%, transparent 50%), radial-gradient(circle at 0% 100%, rgba(163, 230, 53, 0.04) 0%, transparent 60%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay" 
          style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')" }} 
        />
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-end gap-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_rgba(163,230,53,1)]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/70">THE SETUP</span>
          </div>
          <h2 className="text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.5rem] lg:text-[4.6rem] text-white">
            Professional Grade<br/>Equipment.
          </h2>
        </div>
        <p className="max-w-md text-[14px] leading-[1.8] text-white/50 sm:text-[15px] lg:mb-4">
          Experience gaming like never before. Our lounge features state-of-the-art PCs, next-generation consoles, and tournament-standard peripherals designed to give you the competitive edge.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]"
      >
        {bentoItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-[32px] border border-white/[0.08] backdrop-blur-2xl p-8 transition-all duration-500 hover:border-white/[0.15] ${item.className}`}
          >
            {item.overlay && <div className={`absolute inset-0 ${item.overlay}`} />}
            
            {!item.overlay && (
              <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at top right, rgba(163,230,53,0.1), transparent 60%)' }} />
            )}

            <div className={`relative z-10 flex flex-col justify-end h-full ${item.large ? 'pb-4' : ''}`}>
              <div className={`mb-auto w-12 h-12 flex items-center justify-center rounded-2xl ${item.highlight ? 'bg-primary text-black' : 'bg-black/40 border border-white/10 text-white'} backdrop-blur-md`}>
                <item.icon className="w-5 h-5 stroke-[2]" />
              </div>
              
              <h4 className={`font-semibold tracking-[-0.03em] mb-2 ${item.large ? 'text-3xl text-white' : 'text-xl text-white'}`}>
                {item.title}
              </h4>
              <p className={`text-[13px] leading-[1.6] font-sans ${item.large ? 'text-white/80 max-w-sm' : 'text-white/50'}`}>
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
