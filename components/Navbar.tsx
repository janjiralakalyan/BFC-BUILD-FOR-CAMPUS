"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Events", href: "#events" },
  { name: "Prices", href: "#prices" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300 ${
          scrolled ? "bg-background/80 shadow-[0_0_20px_rgba(6,182,212,0.2)]" : "bg-transparent border-transparent"
        }`}>
          <Link href="/" className="text-2xl font-bold tracking-tighter neon-text">
            AZURA <span className="text-foreground">2K26</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeF-7oSGNtF43aIvocLGLJmHtlmR2eHBg3qxCLO2z__n6oqAA/viewform"
              target="_blank"
              className="px-6 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              REGISTER
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-6 right-6 glass p-6 rounded-3xl z-40"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium py-2 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSeF-7oSGNtF43aIvocLGLJmHtlmR2eHBg3qxCLO2z__n6oqAA/viewform"
                target="_blank"
                className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-full neon-border"
                onClick={() => setIsOpen(false)}
              >
                REGISTER NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
