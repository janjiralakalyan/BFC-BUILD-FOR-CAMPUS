"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, QrCode, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Registration() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-4xl border-primary/20 text-center relative overflow-hidden group shadow-[0_0_80px_rgba(6,182,212,0.2)]"
        >
          {/* Background Animated Elements */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] animate-pulse"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass border-primary/30 text-primary mb-12 animate-bounce-slow"
          >
            <Sparkles size={18} />
            <span className="text-sm font-bold tracking-widest uppercase">REGISTRATION OPEN</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter neon-text">
            JOIN THE <br /> <span className="text-foreground">ELITE SQUAD</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
            Ready to build for your campus? Secure your registration today and lead the innovation frontier at AZURA-2K26.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
            {/* Main Button */}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeF-7oSGNtF43aIvocLGLJmHtlmR2eHBg3qxCLO2z__n6oqAA/viewform"
              target="_blank"
              className="group relative px-12 py-6 bg-primary text-primary-foreground font-black text-2xl rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.6)] hover:shadow-[0_0_120px_rgba(6,182,212,0.8)] transition-all duration-500 transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"></div>
              <span className="relative flex items-center">
                REGISTER NOW <ArrowUpRight className="ml-3 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </span>
            </Link>

            {/* QR Code Placeholder/SVG */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="glass p-6 rounded-3xl border-white/10 flex flex-col items-center justify-center space-y-3 cursor-pointer group hover:border-primary/50 transition-all shadow-xl"
            >
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center p-2 relative">
                {/* SVG QR Code Replacement */}
                <QrCode size={96} className="text-background" />
                <div className="absolute inset-0 border-4 border-primary/30 rounded-2xl group-hover:border-primary transition-all"></div>
                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all rounded-2xl"></div>
              </div>
              <span className="text-xs font-black tracking-widest text-muted-foreground group-hover:text-primary transition-colors">SCAN TO REG</span>
            </motion.div>
          </div>

          <div className="text-sm text-muted-foreground font-black tracking-[0.3em] uppercase opacity-50">
            Powered by CMR College of Engineering and Technology
          </div>
        </motion.div>
      </div>
    </section>
  );
}
