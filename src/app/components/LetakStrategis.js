'use client'

import { motion } from 'framer-motion'

export default function PetaDesa() {
  const lokasiPenting = [
    {
      nama: 'Kantor Desa Guwo',
      deskripsi: 'Pusat administrasi dan pelayanan masyarakat.',
      icon: '🏢',
    },
    {
      nama: 'Balai Dusun Timur',
      deskripsi: 'Tempat pertemuan warga dan kegiatan sosial.',
      icon: '🏠',
    },
    {
      nama: 'Balai Dusun Barat',
      deskripsi: 'Digunakan untuk posyandu, rapat warga, dan pelatihan.',
      icon: '🏡',
    },
  ]

  return (
    <section id="peta-desa" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-desa.gold">
          Peta Interaktif Desa Guwo
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-lg mb-10"
        >
          <img
            src="/images/peta-desa.jpg"
            alt="Peta Desa Guwo"
            className="w-full h-64 object-cover"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {lokasiPenting.map((lokasi, i) => (
            <div
              key={i}
              className="bg-desa.gray p-6 rounded-xl shadow hover:shadow-lg transition hover:scale-105"
            >
              <div className="text-3xl mb-3">{lokasi.icon}</div>
              <h3 className="text-xl font-bold mb-2">{lokasi.nama}</h3>
              <p className="text-sm text-gray-300">{lokasi.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
