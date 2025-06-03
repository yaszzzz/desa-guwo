'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const carouselImages = [
  'https://images.unsplash.com/photo-1618209292156-cbe00bdf8fbc', // sawah
  'https://images.unsplash.com/photo-1589782180184-6572bc253f16', // UMKM
  'https://images.unsplash.com/photo-1603645092752-24d53e5c33cc', // peternakan
]

const potensi = [
  {
    title: 'Pertanian',
    icon: '🌾',
    desc: 'Mayoritas warga bekerja sebagai petani padi, jagung, dan hortikultura. Sawah dan ladang menjadi pusat aktivitas ekonomi desa.',
  },
  {
    title: 'Peternakan',
    icon: '🐄',
    desc: 'Warga juga mengembangkan peternakan sapi, kambing, dan ayam sebagai sumber penghasilan tambahan.',
  },
  {
    title: 'UMKM & Home Industry',
    icon: '🏠',
    desc: 'Beberapa warga memproduksi keripik, anyaman bambu, dan olahan susu sapi lokal yang dijual ke pasar sekitar.',
  },
  {
    title: 'Budaya & Tradisi',
    icon: '🎎',
    desc: 'Tradisi seperti nyadran, kuda lumping, dan upacara adat masih rutin dijalankan, menambah kekayaan budaya lokal.',
  },
  {
    title: 'Wisata Lokal',
    icon: '🏞️',
    desc: 'Ada potensi wisata alam dan edukasi pertanian yang mulai dikembangkan sebagai sarana belajar dan rekreasi.',
  },
]

export default function PotensiKehidupan() {
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-desa.gold mb-10 text-center">
          Potensi & Kehidupan Warga Desa
        </h1>

        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg text-gray-300 max-w-none mb-10">
          <p>
            Desa Guwo memiliki sumber daya manusia dan alam yang saling mendukung. Warga desa dikenal sebagai pekerja keras dengan semangat gotong royong tinggi. Kegiatan ekonomi utama berfokus pada sektor pertanian dan peternakan, tetapi beberapa sektor lain mulai berkembang seperti UMKM dan wisata berbasis desa.
          </p>
        </article>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
          {potensi.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-desa.gray p-5 rounded-xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] mb-10 rounded-xl overflow-hidden shadow-lg">
          <AnimatePresence>
            <motion.img
              key={carouselImages[imgIndex]}
              src={`${carouselImages[imgIndex]}?w=800&q=80&auto=format`}
              alt="Potensi desa"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg text-gray-300 max-w-none">
          <p>
            Dengan dukungan warga dan pemerintah desa, Guwo perlahan membangun identitasnya sebagai desa mandiri dan aktif. Potensi yang ada terus dikembangkan untuk meningkatkan kesejahteraan warga, menjaga lingkungan, dan memperkenalkan budaya lokal ke masyarakat luas.
          </p>
        </article>
      </div>
    </section>
  )
}
