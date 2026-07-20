"use client";

import { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export default function TournamentVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const videoId = "nKw-DefAqy8";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".video-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 w-full relative overflow-hidden bg-white/20 dark:bg-black/20">
      <div className="absolute inset-0 bg-[#FAFAFA] dark:bg-[#030303] z-[-2]" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/[0.03] dark:bg-primary/[0.03] rounded-full blur-[100px] z-[-1] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="video-reveal text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] dark:border-white/[0.08] bg-black/[0.02] dark:bg-white/[0.02] px-4 py-2 backdrop-blur-2xl">
            <div className="h-2 w-2 rounded-full bg-black dark:bg-primary shadow-sm" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60 dark:text-white/60">LIVE ACTION</span>
          </div>
          <h2 className="text-[2.2rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-black dark:text-white leading-[1.1]">
            Experience the <span className="italic text-black/60 dark:text-primary">Tournament</span>
          </h2>
        </div>

        <div className="video-reveal relative aspect-video w-full rounded-[24px] md:rounded-[40px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl bg-black group">
          
          {!isPlaying ? (
            <div 
              className="absolute inset-0 w-full h-full cursor-pointer overflow-hidden"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail Image */}
              <Image 
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Tournament Video"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/30" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center h-20 w-20 md:h-28 md:w-28 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/30 dark:group-hover:bg-primary/40">
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-2" />
                  
                  {/* Ping Animation Rings */}
                  <div className="absolute inset-0 rounded-full border border-white/50 animate-[ping_2.5s_ease-in-out_infinite]" />
                  <div className="absolute inset-0 rounded-full border border-white/30 animate-[ping_2.5s_ease-in-out_infinite_0.5s]" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          )}
        </div>
      </div>
    </section>
  );
}
