"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "/assets/images/bandung.jpg",
  "/assets/images/medan.jpg",
  "/assets/images/surabaya.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex items-center justify-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover transition-all duration-1000"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl"
      >
        <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold leading-snug mb-4">
          Desa Guwo, <span className="text-desa.gold">Lebih Terbuka</span> dan
          Informatif
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-6">
          Website resmi Desa Guwo sebagai sumber informasi publik untuk warga
          desa kecil di Kabupaten Boyolali.
        </p>

        <a
          href="#layanan"
          className="inline-block bg-desa.gold text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded shadow hover:bg-yellow-500 transition text-sm sm:text-base outline-2"
        >
          Lihat Informasi
        </a>
      </motion.div>
    </section>
  );
}
