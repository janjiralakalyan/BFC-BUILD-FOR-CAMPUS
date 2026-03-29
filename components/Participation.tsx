"use client";

import { motion } from "framer-motion";
import { User, Users, Check } from "lucide-react";
import Link from "next/link";

const pricingPlans = [
  {
    name: "Solo",
    price: "70",
    icon: User,
    features: ["Single Participant", "Event Access", "Certificate", "Innovator Badge"],
    color: "primary",
  },
  {
    name: "Duo",
    price: "120",
    icon: Users,
    features: ["Two Participants", "Collaborative Seat", "Event Access", "Team Certificate"],
    color: "secondary",
  },
  {
    name: "Team of 3",
    price: "150",
    icon: Users,
    features: ["Three Participants", "Full Team Access", "Premium Mentoring", "Project Showcase"],
    color: "primary",
  },
];

export default function Participation() {
  return (
    <section id="prices" className="py-24 relative overflow-hidden bg-background/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            PARTICIPATION <span className="text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">FEES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Choose your squad size and build the future. Affordable prices for the next generation of campus leaders.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="glass p-10 rounded-4xl border-white/5 relative group transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            >
              <div className={`absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-3xl flex items-center justify-center transition-all bg-${plan.color}/10 border border-${plan.color}/30 shadow-xl group-hover:scale-110 group-hover:rotate-6`}>
                <plan.icon className={`${plan.color === "primary" ? "text-primary" : "text-secondary"}`} size={32} />
              </div>

              <div className="text-center mt-6 mb-8">
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tighter">{plan.name}</h3>
                <div className="flex items-center justify-center space-x-1">
                  <span className="text-3xl font-light text-muted-foreground mt-2">₹</span>
                  <span className={`text-6xl font-black ${plan.color === "primary" ? "neon-text" : "text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"}`}>
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3 text-muted-foreground group-hover:text-foreground transition-colors">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.color === "primary" ? "text-primary" : "text-secondary"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeF-7oSGNtF43aIvocLGLJmHtlmR2eHBg3qxCLO2z__n6oqAA/viewform"
                target="_blank"
                className={`w-full py-4 text-center font-bold text-lg rounded-2xl transition-all duration-300 transform active:scale-95 flex items-center justify-center space-x-2 border-2 ${plan.color === "primary"
                  ? "bg-primary text-primary-foreground border-primary hover:shadow-[0_0_30px_rgba(6,182,212,0.6)]"
                  : "bg-secondary text-white border-secondary hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                  }`}
              >
                SELECT {plan.name.toUpperCase()}
              </Link>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 overflow-hidden pointer-events-none rounded-tr-4xl`}>
                <div className={`absolute top-0 right-0 w-40 h-10 -rotate-45 translate-x-20 translate-y-4 border-t border-${plan.color}/30`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
