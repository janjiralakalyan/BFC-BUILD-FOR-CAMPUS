"use client";

import { motion } from "framer-motion";
import { Trophy, FileCheck, Gift, Star } from "lucide-react";

export default function Perks() {
  const perks = [
    { title: "Cash Prizes", description: "Top innovators receive significant cash rewards for their impact.", icon: Trophy, color: "primary" },
    { title: "Certificates", description: "Each participant gets a certified recognition of their innovation.", icon: FileCheck, color: "secondary" },
    { title: "Exclusive Swag", description: "BFC branded tech kits and merch for the top finalists.", icon: Gift, color: "primary" },
    { title: "Portfolio Boost", description: "Showcase your campus innovations to top tech recruiters.", icon: Star, color: "secondary" },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-16 inline-block glass px-12 py-4 rounded-3xl neon-border rotate-1"
        >
          PERKS & <span className="neon-text">REWARDS</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl blur-2xl -z-10"></div>
              <div className="glass p-10 rounded-4xl border-white/5 h-full flex flex-col items-center justify-center transition-all duration-500 overflow-hidden relative group-hover:-translate-y-4 shadow-2xl">
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-${perk.color}/10 border border-${perk.color}/20 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-[10deg]`}>
                  <perk.icon className={`${perk.color === "primary" ? "text-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "text-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)]"}`} size={36} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight group-hover:text-primary transition-colors">{perk.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {perk.description}
                </p>

                {/* Decorative particles */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${perk.color}/5 rounded-full blur-3xl group-hover:bg-${perk.color}/10 transition-all`}></div>
                <div className={`absolute bottom-0 left-0 w-20 h-20 bg-${perk.color}/5 rounded-full blur-3xl group-hover:bg-${perk.color}/10 transition-all`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Background Effects */}
        <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden pointer-events-none -z-10">
          <motion.div
            animate={{ y: [0, -100, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute top-1/2 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] opacity-20"
          ></motion.div>
          <motion.div
            animate={{ y: [0, 100, 0] }}
            transition={{ duration: 18, repeat: Infinity }}
            className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] opacity-20"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
