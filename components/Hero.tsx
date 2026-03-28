"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Animated Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Floating Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass border-primary/30 text-primary mb-8 animate-bounce-slow"
        >
          <Zap size={18} />
          <span className="text-sm font-bold tracking-widest uppercase">Limited Registrations</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter mb-4 neon-text"
        >
          AZURA-2K26
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl md:text-5xl font-bold tracking-tight mb-6 text-foreground/90 flex flex-col md:flex-row items-center justify-center md:space-x-4"
        >
          <span>BFC</span>
          <span className="text-muted-foreground font-light hidden md:inline">—</span>
          <span className="text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">BUILD FOR CAMPUS</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Build. Innovate. Transform Your Campus.
          <br className="hidden md:block" />
          The future of campus technology starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeF-7oSGNtF43aIvocLGLJmHtlmR2eHBg3qxCLO2z__n6oqAA/viewform"
            target="_blank"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-black text-xl rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]"
          >
            <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
            <span className="relative flex items-center">
              REGISTER NOW <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
          </Link>

          <Link
            href="#about"
            className="px-8 py-4 glass border-white/20 text-white font-bold text-xl rounded-2xl hover:bg-white/10 transition-all duration-300"
          >
            Explore Event
          </Link>
        </motion.div>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 opacity-20"
        >
          <div className="w-24 h-24 border-2 border-primary rounded-2xl rotate-12"></div>
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/4 opacity-10"
        >
          <div className="w-32 h-32 border-2 border-secondary rounded-full -rotate-12"></div>
        </motion.div>
      </div>
    </section>
  );
}
