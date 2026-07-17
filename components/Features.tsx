"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Gamepad2, Trophy, Coffee, Users, Target, Shield } from "lucide-react";

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

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full relative">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h3 className="text-primary tracking-[0.2em] uppercase text-sm mb-6">Exceptional Facilities</h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
          Designed for Excellence
        </h2>
        <p className="text-secondary text-lg">
          Every aspect of our lounge has been meticulously curated to provide an unmatched gaming experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card glass-panel p-8 group relative overflow-hidden glass-panel-hover"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500 border border-white/5">
                <feature.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="text-xl font-medium text-white mb-3">{feature.title}</h4>
              <p className="text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
