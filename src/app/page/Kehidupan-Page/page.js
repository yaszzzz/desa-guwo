'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const carouselImages = [
  'https://images.unsplash.com/photo-1618209292156-cbe00bdf8fbc', // sawah
  'https://images.unsplash.com/photo-1589782180184-6572bc253f16', // UMKM
  'https://images.unsplash.com/photo-1603645092752-24d53e5c33cc', // peternakan
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
          Potensi & Kehidupan Masyarakat Desa Guwo
        </h1>

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

        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg text-gray-300 max-w-none mb-10">
          <p>
            Desa Guwo merupakan salah satu wilayah administratif di Kecamatan
            Wonosegoro, Kabupaten Boyolali, Jawa Tengah. Lokasinya berada di
            kawasan perbukitan yang cenderung kering saat musim kemarau, dengan
            tantangan utama berupa keterbatasan air bersih dan pengairan lahan
            pertanian. Kondisi geografis ini memaksa warga harus mengandalkan
            curah hujan dan sumber air musiman untuk kebutuhan sehari-hari serta
            usaha pertanian.
          </p>
          <p>
            Mayoritas penduduk Desa Guwo bermata pencaharian sebagai petani dan
            peternak dengan sistem usaha tani tradisional. Komoditas utama di
            bidang pertanian adalah padi, jagung, dan tanaman hortikultura,
            sementara sektor peternakan meliputi sapi, kambing, dan ayam
            kampung. Namun ketergantungan pada cuaca membuat produktivitas
            pertanian sangat fluktuatif, terutama ketika terjadi musim kering
            berkepanjangan.
          </p>
          <p>
            Desa Guwo juga menyimpan potensi besar dari sektor usaha mikro
            kecil menengah (UMKM) dan Badan Usaha Milik Desa (BUMDes). Produk
            lokal seperti keripik singkong, anyaman bambu, hingga olahan susu
            sapi menjadi nilai tambah ekonomi yang bisa terus dikembangkan.
            Sayangnya, kapasitas manajemen dan strategi pemasaran BUMDes masih
            terbatas, sehingga perlu adanya pendampingan untuk mengoptimalkan
            fungsi kelembagaan desa ini sebagai penggerak perekonomian lokal.
          </p>
          <p>
            Kehidupan sosial masyarakat Desa Guwo ditopang oleh nilai-nilai
            gotong royong dan kebersamaan yang kuat. Hal ini tampak dari
            aktivitas rutin seperti kerja bakti membersihkan lingkungan,
            peringatan hari besar nasional, hingga acara keagamaan yang
            melibatkan seluruh lapisan masyarakat. Lembaga desa seperti Karang
            Taruna, PKK, serta kelompok tani berperan aktif dalam
            menyelenggarakan berbagai program pemberdayaan dan kegiatan sosial.
          </p>
          <p>
            Dari sisi pendidikan, Desa Guwo memiliki dua sekolah dasar dan satu
            sekolah menengah pertama yang cukup memfasilitasi anak-anak usia
            sekolah. Namun, untuk melanjutkan pendidikan ke tingkat SMA,
            sebagian besar siswa harus keluar desa karena belum tersedia
            fasilitas setingkat SMA di wilayah ini. Akses terhadap sarana
            penunjang belajar seperti perpustakaan atau jaringan internet pun
            masih terbatas, yang menjadi tantangan untuk meningkatkan literasi
            digital masyarakat.
          </p>
          <p>
            Pelayanan kesehatan di Desa Guwo pada dasarnya sudah mulai berjalan
            melalui posyandu dan puskesmas pembantu. Namun untuk layanan
            kesehatan lanjutan, masyarakat masih harus menempuh jarak cukup jauh
            ke pusat layanan kesehatan yang lebih besar di kecamatan atau
            kabupaten. Ini menjadi tantangan dalam meningkatkan akses kesehatan
            yang merata, terutama untuk warga usia lanjut dan ibu hamil.
          </p>
          <p>
            Dengan kondisi tersebut, peran program pemberdayaan masyarakat
            seperti Kuliah Kerja Nyata (KKN) menjadi sangat penting. Mahasiswa
            bersama pemerintah desa dan warga dapat berkolaborasi merancang
            program berbasis inovasi untuk memperkuat sektor pertanian,
            pengelolaan air, literasi kewirausahaan, serta teknologi tepat guna
            demi mendukung pembangunan desa yang lebih mandiri dan berkelanjutan.
          </p>
          <p>
            Melalui program-program pemberdayaan, diharapkan pula tumbuh
            kesadaran kolektif akan pentingnya menjaga kelestarian lingkungan
            dan budaya lokal, sehingga potensi Desa Guwo tidak hanya
            dimanfaatkan untuk kesejahteraan ekonomi semata, tetapi juga sebagai
            sarana pelestarian nilai-nilai budaya dan sosial masyarakat.
          </p>
        </article>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-desa.gray p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-3 text-desa.gold">
            Kesimpulan
          </h2>
          <p className="text-sm text-gray-300 mb-2">
            Desa Guwo memiliki berbagai potensi unggulan mulai dari pertanian,
            peternakan, UMKM, hingga kekuatan modal sosial melalui gotong royong
            dan solidaritas warga. Meski menghadapi tantangan signifikan seperti
            ketersediaan air, akses pendidikan lanjutan, dan layanan kesehatan,
            masyarakat tetap menunjukkan semangat tinggi untuk maju.
          </p>
          <p className="text-sm text-gray-300 mb-2">
            Melalui program pemberdayaan yang kolaboratif, potensi ini dapat
            digali secara optimal dengan pendekatan partisipatif, memberdayakan
            masyarakat untuk berinovasi dan mandiri. Dengan demikian, pembangunan
            Desa Guwo di masa depan diharapkan bukan hanya berfokus pada
            peningkatan ekonomi, tetapi juga memperkuat keberlanjutan lingkungan,
            budaya, dan nilai sosial.
          </p>
          <p className="text-sm text-gray-300">
            Upaya berkelanjutan dalam edukasi, peningkatan kapasitas, serta
            kolaborasi multipihak akan menjadi kunci utama untuk mewujudkan Desa
            Guwo yang tangguh, mandiri, dan lestari.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
