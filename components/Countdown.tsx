"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const targetDate = new Date("2026-04-02T09:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 py-10">
      <TimerCard value={timeLeft.days} label="Days" color="primary" />
      <TimerCard value={timeLeft.hours} label="Hours" color="secondary" />
      <TimerCard value={timeLeft.minutes} label="Minutes" color="primary" />
      <TimerCard value={timeLeft.seconds} label="Seconds" color="secondary" />
    </div>
  );
}

function TimerCard({ value, label, color }: { value: number; label: string; color: "primary" | "secondary" }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="glass p-4 rounded-3xl min-w-[120px] md:min-w-[140px] text-center border-white/10 shadow-2xl relative overflow-hidden group"
    >
      <div className={`absolute inset-0 bg-${color}/10 group-hover:bg-${color}/20 transition-all duration-500`}></div>
      <div className="relative">
        <span className={`text-4xl md:text-5xl font-black ${color === "primary" ? "neon-text" : "text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"}`}>
          {value.toString().padStart(2, "0")}
        </span>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mt-2">{label}</p>
      </div>
    </motion.div>
  );
}
