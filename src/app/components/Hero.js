"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const images = [
  "/assets/photos/hero/foto3.jpg",
  "/assets/photos/hero/foto4.jpg",
  "/assets/photos/letak/bodeh.jpg",
  // tambahkan foto lain di sini
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // ganti foto tiap 5 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-desa-dark z-10" />
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Foto Desa"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <span className="inline-block py-1 px-3 rounded-full bg-desa-gold/20 border border-desa-gold/50 text-desa-gold text-sm font-semibold mb-6 tracking-wider uppercase">
          Selamat Datang di
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl leading-tight">
          Desa Guwo
          <span className="block text-2xl md:text-4xl font-medium mt-2 text-gray-200">
            Harmoni Alam & Budaya
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
          Menyambut masa depan dengan semangat kebersamaan, menjaga kearifan
          lokal, dan membuka diri terhadap inovasi demi kesejahteraan bersama.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#profil"
            onClick={() => {
              // Optional: Trigger music or analytics
              if (typeof window !== 'undefined') window.dispatchEvent(new Event("playMusic"));
            }}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-desa-gold rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-desa-gold shadow-lg shadow-yellow-500/30"
          >
            <span className="mr-2">Jelajahi Desa</span>
            <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}
