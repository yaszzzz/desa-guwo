'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselImages = [
  '/assets/photos/potensi/WhatsApp Image 2025-07-05 at 15.53.53_5584af89.jpg', // sawah
  '/assets/photos/potensi/WhatsApp Image 2025-07-05 at 15.59.42_cce33add.jpg', // UMKM
  '/assets/photos/letak/bodeh.jpg', // peternakan
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
    <section className="bg-desa-dark text-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200">
            Potensi & Kehidupan
          </h1>
          <p className="text-gray-400 text-lg">Masyarakat Desa Guwo</p>
          <div className="h-1 w-20 bg-desa-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[250px] sm:h-[400px] md:h-[500px] mb-12 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={carouselImages[imgIndex]}
              src={`${carouselImages[imgIndex]}?w=1200&q=80&auto=format`}
              alt="Potensi desa"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-desa-dark/80 via-transparent to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <article className="prose prose-invert prose-lg text-gray-300 max-w-none leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-desa-gold first-letter:mr-3 first-letter:float-left">
                Desa Guwo merupakan salah satu wilayah administratif di Kecamatan
                Wonosegoro, Kabupaten Boyolali, Jawa Tengah. Lokasinya berada di
                kawasan perbukitan yang cenderung kering saat musim kemarau, dengan
                tantangan utama berupa keterbatasan air bersih dan pengairan lahan
                pertanian.
              </p>
              <p>
                Mayoritas penduduk Desa Guwo bermata pencaharian sebagai petani dan
                peternak dengan sistem usaha tani tradisional. Komoditas utama di
                bidang pertanian adalah padi, jagung, dan tanaman hortikultura,
                sementara sektor peternakan meliputi sapi, kambing, dan ayam
                kampung.
              </p>
              <div className="my-8 p-6 bg-white/5 border-l-4 border-desa-gold rounded-r-xl italic text-gray-200">
                "Gotong royong adalah nadi kehidupan masyarakat Desa Guwo, terlihat dari semangat kebersamaan dalam setiap kegiatan sosial dan pembangunan desa."
              </div>
              <p>
                Desa Guwo juga menyimpan potensi besar dari sektor usaha mikro
                kecil menengah (UMKM) dan Badan Usaha Milik Desa (BUMDes). Produk
                lokal seperti keripik singkong, anyaman bambu, hingga olahan susu
                sapi menjadi nilai tambah ekonomi yang bisa terus dikembangkan.
              </p>
              {/* ... sisa konten ... */}
              <p>
                Melalui program-program pemberdayaan, diharapkan pula tumbuh
                kesadaran kolektif akan pentingnya menjaga kelestarian lingkungan
                dan budaya lokal, sehingga potensi Desa Guwo tidak hanya
                dimanfaatkan untuk kesejahteraan ekonomi semata.
              </p>
            </article>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl sticky top-32"
            >
              <h3 className="text-xl font-bold mb-4 text-desa-gold flex items-center">
                <span className="text-2xl mr-2">💡</span>
                Kesimpulan
              </h3>
              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                <p>
                  Desa Guwo memiliki potensi besar di sektor pertanian, peternakan, dan modal sosial yang kuat.
                </p>
                <div className="h-px w-full bg-white/10" />
                <p>
                  Tantangan infrastruktur air dan akses pendidikan menjadi fokus pembangunan ke depan.
                </p>
                <div className="h-px w-full bg-white/10" />
                <p>
                  Kolaborasi multipihak adalah kunci untuk mewujudkan desa yang mandiri dan lestari.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
