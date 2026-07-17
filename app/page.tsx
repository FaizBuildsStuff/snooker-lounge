import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import GamingExperience from "@/components/GamingExperience";
import VIPExperience from "@/components/VIPExperience";
import Gallery from "@/components/Gallery";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30 selection:text-white">
        <Hero />
        <About />
        <Features />
        <GamingExperience />
        <VIPExperience />
        <Gallery />
        <Statistics />
        <Testimonials />
        <Location />
        <CTA />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
