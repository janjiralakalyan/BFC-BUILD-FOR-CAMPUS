"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const InstagramIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
);

const TwitterIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg>
);

const coordinators = [
  { name: "J. Kalyan", phone: "7815833882", role: "Student Coordinator" },
  { name: "T. Ganesh", phone: "8074398893", role: "Student Coordinator" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-background/80">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              CONNECT WITH <br /> THE <span className="text-secondary drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">SQUAD</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have questions about the event or your registration? Our student coordinators are here to assist you.
            </p>

            <div className="flex space-x-6">
              {[InstagramIcon, TwitterIcon, Mail].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-14 h-14 rounded-2xl glass border-white/5 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon size={24} className="text-foreground/70 active:text-primary" />
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coordinators.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-4xl border-white/5 relative group hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <Phone className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">{person.name}</h3>
                <p className="text-sm text-muted-foreground mb-6 uppercase tracking-widest">{person.role}</p>
                <Link
                  href={`tel:${person.phone}`}
                  className="inline-flex items-center space-x-2 text-xl font-black text-primary hover:text-white transition-colors duration-300"
                >
                  <span>{person.phone}</span>
                </Link>
                <div className="mt-6 flex justify-end">
                  <div className="px-3 py-1 bg-primary/20 rounded-full text-[10px] font-black tracking-widest text-primary uppercase animate-pulse">
                    Available Now
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
