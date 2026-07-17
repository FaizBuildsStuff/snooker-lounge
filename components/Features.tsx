"use client";

import { Gamepad2, Trophy, Coffee, Users, Target, Shield } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Professional Tables",
    description: "Championship-grade snooker tables maintained to international tournament standards.",
    icon: Target,
  },
  {
    title: "Next Gen Gaming",
    description: "High-end PS5 and Xbox setups with 4K OLED displays and premium audio.",
    icon: Gamepad2,
  },
  {
    title: "VIP Rooms",
    description: "Exclusive private spaces for those seeking discretion and undisturbed gameplay.",
    icon: Shield,
  },
  {
    title: "Tournaments",
    description: "Regular competitive events with substantial prize pools and professional refereeing.",
    icon: Trophy,
  },
  {
    title: "Premium Cafe",
    description: "Artisan coffee, gourmet snacks, and refreshing beverages served to your table.",
    icon: Coffee,
  },
  {
    title: "Community",
    description: "Join an elite community of players who share your passion for the game.",
    icon: Users,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export default function Features() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-8 lg:px-12 w-full relative border-t border-white/[0.02]">
      {/* Section-specific Background */}
      <div 
        className="absolute inset-0 pointer-events-none z-[-1]"
        style={{
          background: 'radial-gradient(circle at 0% 20%, rgba(163, 230, 53, 0.05) 0%, transparent 50%), radial-gradient(circle at 100% 80%, rgba(163, 230, 53, 0.04) 0%, transparent 50%)'
        }}
      />

      <div className="max-w-[1500px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-12 relative z-10">
        <div>
          <h2 className="text-[2.1rem] sm:text-[3.2rem] lg:text-[4.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white">
            Designed for <br/>Excellence.
          </h2>
          <p className="mt-4 max-w-xl text-[14px] sm:text-[15px] leading-[1.8] text-white/50">
            Every aspect curated for an unmatched competitive experience.
          </p>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="flex gap-5 overflow-x-auto pb-10 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="feature-card snap-center shrink-0 w-[280px] sm:w-[320px] lg:w-auto relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-2 group"
          >
            <div className="absolute inset-0 z-10 opacity-0 transition-all duration-700 group-hover:opacity-100" style={{ background: 'linear-gradient(180deg, rgba(163,230,53,0.14), transparent 35%)' }} />
            
            <div className="relative z-20 flex flex-col items-start h-full">
              <div className="mb-8 w-14 h-14 flex items-center justify-center rounded-[20px] bg-black/30 border border-white/10 text-white group-hover:text-primary transition-colors duration-500">
                <feature.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-[1.2rem] font-semibold tracking-[-0.05em] text-white mb-3">{feature.title}</h4>
              <p className="text-[13px] text-white/50 leading-relaxed font-sans">{feature.description}</p>
            </div>
            
            <div className="absolute inset-0 rounded-[32px] border border-white/10 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>
      </div>
    </section>
  );
}
