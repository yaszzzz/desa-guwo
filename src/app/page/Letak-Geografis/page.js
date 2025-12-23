'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const maps = [
  '/assets/photos/letak geografis page/Screenshot 2025-07-05 152527.png', // contoh peta
  '/assets/photos/letak geografis page/Screenshot 2025-07-05 153122.png',
]

export default function LetakGeografis() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % maps.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-desa-dark text-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200">
            Letak Geografis
          </h1>
          <p className="text-gray-400 text-lg">Desa Guwo, Kec. Wonosegoro</p>
          <div className="h-1 w-20 bg-desa-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Carousel Peta */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[250px] md:h-[400px] mb-12 overflow-hidden rounded-3xl shadow-2xl border border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={maps[index]}
              src={`${maps[index]}?w=1200&q=80&auto=format`}
              alt={`Peta ${index + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-contain bg-black/40 backdrop-blur-sm"
            />
          </AnimatePresence>
        </motion.div>

        {/* Artikel */}
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-desa-gold first-letter:mr-3 first-letter:float-left">
                Desa Guwo terletak di dataran rendah Kabupaten Boyolali, Provinsi Jawa Tengah, dan secara administratif masuk wilayah Kecamatan Wonosegoro. Lokasi desa ini cukup strategis karena berada di jalur penghubung Wonosegoro–Kemusu, dengan akses jalan beraspal yang terhubung langsung ke jaringan jalan kabupaten.
              </p>
              <p>
                Wilayah Desa Guwo didominasi lahan persawahan, ladang, serta sebagian lahan kering yang masih berpotensi dikembangkan. Iklim tropis dengan curah hujan sedang mendukung aktivitas pertanian, peternakan, dan perkebunan sepanjang tahun.
              </p>
              <div className="my-8 p-6 bg-white/5 border-l-4 border-desa-gold rounded-r-xl text-gray-200">
                <strong>Aksesibilitas:</strong> Warga dapat mengakses fasilitas umum seperti pasar, puskesmas, dan sekolah di pusat Kecamatan Wonosegoro hanya dalam waktu 10–20 menit.
              </div>
              <p>
                Potensi geografis tersebut menjadi modal penting bagi Desa Guwo untuk mengembangkan sektor pertanian, peternakan, serta membuka peluang wisata edukasi dan budaya berbasis desa di masa mendatang.
              </p>
            </article>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 shadow-xl sticky top-32"
            >
              <h3 className="text-xl font-bold mb-4 text-desa-gold flex items-center">
                <span className="mr-2">📍</span> Google Maps
              </h3>
              <div className="w-full rounded-xl overflow-hidden shadow-inner border border-white/5 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23700.083979585954!2d110.7011423966519!3d-7.272440086945537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70a01ea1537ad9%3A0x261f794a70317583!2sGuwo%2C%20Kec.%20Kemusu%2C%20Kabupaten%20Boyolali%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1748504947565!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Koordinat Lokasi Balai Desa Guwo
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
