'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative h-screen text-white pt-24 overflow-hidden">
      <img
        src="/assets/photos/membuat lapangan/WhatsApp Image 2025-06-29 at 22.10.42_4a490a4a.jpg"
        alt="Desa Guwo"
        className="absolute inset-0 w-full h-full object-cover  brightness-[0.3] z-0"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold font- mb-4 drop-shadow-lg">
          Desa Guwo, Harmoni Alam & Budaya
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-200 drop-shadow">
          Menyambut masa depan dengan semangat kebersamaan, menjaga kearifan lokal, dan membuka diri terhadap perubahan.
        </p>
        <Link
          href="#profil-desa"
          className="bg-desa.gold text- px-6 py-3 rounded-full font-semibold shadow hover:dark:bg-yellow-800 transition outline-2 "
        >
          Lihat Informasi Desa
        </Link>
      </motion.div>
    </header>
  )
}
