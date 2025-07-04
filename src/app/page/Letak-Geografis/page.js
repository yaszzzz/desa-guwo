'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const maps = [
  'https://images.unsplash.com/photo-1581091870622-2c5d8b9fc3ab', // contoh peta
  'https://images.unsplash.com/photo-1524088480560-1640f1129c60',
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
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-desa.gold mb-10 text-center">
          Letak Geografis Desa Guwo
        </h1>

        {/* Carousel Peta */}
        <div className="relative w-full h-[250px] md:h-[350px] mb-10 overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence>
            <motion.img
              key={maps[index]}
              src={`${maps[index]}?w=800&q=80&auto=format`}
              alt={`Peta ${index + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        </div>
       
        {/* Artikel */}
        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-300">
          <p> Desa Guwo terletak di dataran rendah Kabupaten Boyolali, Provinsi Jawa Tengah, dan secara administratif masuk wilayah Kecamatan Wonosegoro. Lokasi desa ini cukup strategis karena berada di jalur penghubung Wonosegoro–Kemusu, dengan akses jalan beraspal yang terhubung langsung ke jaringan jalan kabupaten. </p> <p> Wilayah Desa Guwo didominasi lahan persawahan, ladang, serta sebagian lahan kering yang masih berpotensi dikembangkan. Iklim tropis dengan curah hujan sedang mendukung aktivitas pertanian, peternakan, dan perkebunan sepanjang tahun. </p> <p> Letaknya yang berdekatan dengan Pasar Guwo, jalur utama Wonosegoro, serta kawasan Jembatan Kliyo dan Kemusu membuat Desa Guwo mudah dijangkau. Warga dapat mengakses fasilitas umum seperti pasar, puskesmas, dan sekolah menengah kejuruan di pusat Kecamatan Wonosegoro dengan waktu tempuh sekitar 10–20 menit. </p> <p> Potensi geografis tersebut menjadi modal penting bagi Desa Guwo untuk mengembangkan sektor pertanian, peternakan, serta membuka peluang wisata edukasi dan budaya berbasis desa di masa mendatang. </p>
          <br></br>
        </article>
      </div>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23700.083979585954!2d110.7011423966519!3d-7.272440086945537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70a01ea1537ad9%3A0x261f794a70317583!2sGuwo%2C%20Kec.%20Kemusu%2C%20Kabupaten%20Boyolali%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1748504947565!5m2!1sid!2sid"
        width="100%"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  )
}
