'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const images = [
  '/assets/photos/hero/foto1.jpg',
  '/assets/photos/membuat lapangan/WhatsApp Image 2025-06-29 at 22.10.43_347e.jpg',
  '/assets/photos/membuat lapangan/WhatsApp Image 2025-06-29 at 22.10.44_a9e7.jpg',
  // tambahkan foto lain di sini
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000) // ganti foto tiap 5 detik
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative h-screen text-white pt-24 overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Foto Desa"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          />
        </AnimatePresence>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Desa Guwo, Harmoni Alam & Budaya
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200 drop-shadow">
          Menyambut masa depan dengan semangat kebersamaan, menjaga kearifan lokal, dan membuka diri terhadap perubahan.
        </p>
        <Link
          href="#profil"
          className="bg-desa.gold px-6 py-3 rounded-full font-semibold shadow hover:dark:bg-yellow-800 transition outline-2"
        >
          Lihat Informasi Desa
        </Link>
      </motion.div>
    </header>
  )
}
