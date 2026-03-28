"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Award } from "lucide-react";

export default function EventDetails() {
  const details = [
    { label: "Date", value: "APRIL 2, 2026", icon: Calendar, color: "primary" },
    { label: "Duration", value: "3 HOURS", icon: Clock, color: "secondary" },
    { label: "Location", value: "CMR Campus", icon: MapPin, color: "primary" },
    { label: "Platform", value: "BUILD FOR CAMPUS", icon: Award, color: "secondary" },
  ];

  return (
    <section id="events" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 glass p-10 rounded-4xl border-primary/20 flex flex-col justify-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
            <h2 className="text-5xl font-black mb-6 leading-tight neon-text">
              EVENT <br /> <span className="text-foreground">TIMELINE</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us for a high-intensity innovation sprint. 3 hours to build, 3 hours to transform.
            </p>
            <div className="w-20 h-2 bg-primary self-start rounded-full shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          </motion.div>

          {/* Details Grid */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {details.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border-white/5 flex items-center space-x-6 hover:border-white/20 hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-${item.color}/10 border border-${item.color}/30`}>
                  <item.icon className={`${item.color === "primary" ? "text-primary shadow-[0_0_10px_rgba(6,182,212,0.5)]" : "text-secondary shadow-[0_0_10px_rgba(168,85,247,0.5)]"}`} size={28} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1 font-bold">{item.label}</p>
                  <h3 className="text-2xl font-black tracking-tight">{item.value}</h3>
                </div>
              </motion.div>
            ))}

            {/* Special Highlight Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 glass p-8 rounded-3xl border-secondary/20 bg-gradient-to-r from-secondary/5 to-transparent relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="text-2xl font-bold mb-2 text-secondary">Limited Squads Available!</h4>
                  <p className="text-muted-foreground">Register before March 30 to secure your spot in the tech arena.</p>
                </div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-background bg-muted flex items-center justify-center text-xs font-bold overflow-hidden shadow-xl`}>
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 123}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-background bg-primary/20 flex items-center justify-center text-[10px] font-black shadow-xl z-10 text-primary">
                    +50
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
