"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import About from "@/components/About";
import Participation from "@/components/Participation";
import EventDetails from "@/components/EventDetails";
import Perks from "@/components/Perks";
import Contact from "@/components/Contact";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Global Background Particles/Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.png')] bg-repeat opacity-20"></div>
      </div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        
        <div className="container mx-auto px-6 -mt-16 relative z-20">
          <Countdown />
        </div>

        <About />
        <Participation />
        <EventDetails />
        <Perks />
        <Contact />
        <Registration />
      </motion.div>

      <Footer />

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse transition-all duration-[5000ms]"></div>
      </div>
    </main>
  );
}
