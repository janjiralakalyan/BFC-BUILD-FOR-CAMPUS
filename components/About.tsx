"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const infoCards = [
  {
    title: "Problem Solving",
    description: "Identify real-world campus problems and engineer smart solutions that make a difference.",
    icon: Shield,
    color: "primary",
  },
  {
    title: "Innovation",
    description: "Think outside the box to create ground-breaking software or hardware frameworks.",
    icon: Lightbulb,
    color: "secondary",
  },
  {
    title: "Tech Development",
    description: "Scale your ideas into functional prototypes and future-ready campus tools.",
    icon: Rocket,
    color: "primary",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              WHAT IS <span className="neon-text">BFC?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Build For Campus is an innovation-driven event where students identify real campus problems and develop 
              software or hardware solutions. It's more than a hackathon—it's a mission to redefine campus living through technology.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] animate-pulse"></div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-4 border-dashed border-primary/30 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 border-2 border-dashed border-secondary/30 rounded-full"
              ></motion.div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 glass rounded-3xl flex items-center justify-center transform rotate-12 neon-border">
                  <Rocket className="text-primary w-16 h-16" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl border-white/5 group hover:border-primary/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-${card.color}/10 group-hover:bg-${card.color}/20 transition-colors`}>
                <card.icon className={`${card.color === "primary" ? "text-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "text-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)]"}`} size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
