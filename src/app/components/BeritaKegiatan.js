'use client'

import { motion } from 'framer-motion'

const kegiatan = [
  {
    title: 'Kerja Bakti Membersihkan Lingkungan',
    img: '/assets/berita/kerja-bakti.jpg',
    desc: 'Warga Desa Guwo bergotong-royong membersihkan selokan dan fasilitas umum sebagai persiapan musim hujan.',
    date: 'Mei 2025',
  },
  {
    title: 'Posyandu Balita Dusun Tengah',
    img: '/assets/berita/posyandu.jpg',
    desc: 'Kegiatan posyandu rutin kembali digelar di balai dusun, melibatkan kader kesehatan dan ibu-ibu balita.',
    date: 'April 2025',
  },
  {
    title: 'Lomba 17 Agustus & Pentas Seni',
    img: '/assets/berita/lomba.jpg',
    desc: 'Warga desa antusias mengikuti lomba agustusan dan pertunjukan seni anak-anak di lapangan desa.',
    date: 'Agustus 2024',
  },
]

export default function BeritaKegiatan() {
  return (
    <section id="berita" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-desa.gold mb-12">Berita & Kegiatan</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {kegiatan.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-desa.gray rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
