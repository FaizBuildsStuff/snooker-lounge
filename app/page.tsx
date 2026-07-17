import SmoothScroll from "@/components/SmoothScroll";
import Noise from "@/components/Noise";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <Noise />
      <main className="flex min-h-screen flex-col selection:bg-black selection:text-white relative">
        <GridBackground />
        <Hero />
        <Gallery />
        <Location />
        <CTA />
        <Footer />
        <FloatingCTA />
      </main>
    </SmoothScroll>
  );
}
