"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MapPin, Clock, Phone } from "lucide-react";

export default function Location() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".location-card", {
        x: 50,
        opacity: 0,
        duration: 1,
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
    <section ref={containerRef} className="py-32 w-full relative">
      <div className="absolute inset-0 z-0 opacity-100 transition-all duration-1000">
        <iframe
          src="https://maps.google.com/maps?q=559/D+Shah+Rukn+E+Alam+St,+D+Block+Block+D+Shah+Rukn+E+Alam+Housing+Scheme,+Multan,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-50 dark:invert dark:hue-rotate-180 dark:opacity-40"
        />
        <div className="absolute inset-0 bg-[#FAFAFA]/40 dark:bg-[#030303]/60" />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-[1400px] mx-auto w-full flex justify-end">
        <div className="location-card rounded-[32px] border border-black/[0.08] dark:border-white/10 p-8 md:p-12 w-full max-w-lg backdrop-blur-xl bg-white/95 dark:bg-[#030303]/95 shadow-lg">
          <h3 className="text-black/60 dark:text-white/60 tracking-[0.2em] uppercase text-sm mb-8 font-semibold">Visit Us</h3>
          
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-black dark:text-primary shrink-0 mt-1" />
              <div>
                <div className="text-black dark:text-white font-medium mb-1">Address</div>
                <div className="text-black/60 dark:text-white/60 leading-relaxed font-sans">
                  559/D Shah Rukn E Alam St, D Block <br />
                  Block D Shah Rukn E Alam Housing Scheme, <br />
                  Multan, Pakistan
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-black dark:text-primary shrink-0 mt-1" />
              <div>
                <div className="text-black dark:text-white font-medium mb-1">Opening Hours</div>
                <div className="text-black/60 dark:text-white/60 leading-relaxed font-sans">
                  Open 24/7
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-black dark:text-primary shrink-0 mt-1" />
              <div>
                <div className="text-black dark:text-white font-medium mb-1">Contact / WhatsApp</div>
                <div className="text-black/60 dark:text-white/60 leading-relaxed font-sans">
                  <a href="https://wa.me/923146217172" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-primary transition-colors">
                    0314 6217172
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com/?q=559/D+Shah+Rukn+E+Alam+St,+D+Block+Block+D+Shah+Rukn+E+Alam+Housing+Scheme,+Multan,+Pakistan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full mt-10 bg-black dark:bg-primary text-white dark:text-[#030303] py-4 font-semibold rounded-full hover:bg-gray-900 dark:hover:bg-[#a3e635] brightness-100 dark:hover:brightness-110 transition-colors duration-300 shadow-md flex items-center justify-center text-center"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
