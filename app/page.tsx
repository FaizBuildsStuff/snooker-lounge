import SmoothScroll from "@/components/SmoothScroll";
import Noise from "@/components/Noise";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import GridBackground from "@/components/GridBackground";
import Hero from "@/components/Hero";
import IntroAndFeatures from "@/components/IntroAndFeatures";
import TournamentVideo from "@/components/TournamentVideo";
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
      <main className="flex min-h-screen flex-col selection:bg-black selection:text-white relative overflow-x-hidden">
        <GridBackground />
        <Hero />
        <IntroAndFeatures />
        <TournamentVideo />
        <Location />
        <CTA />
        <Footer />
        <FloatingCTA />
      </main>
    </SmoothScroll>
  );
}
