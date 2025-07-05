'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProfilDesa() {
  const infoDesa = [
    {
      title: 'Letak Geografis',
      icon: '🗺️',
      desc: 'Terletak di Kabupaten Boyolali, Desa Guwo berada di wilayah dataran rendah dengan akses jalan yang baik.',
      page: '/page/Letak-Geografis',
    },
    {
      title: 'Potensi & Kehidupan',
      icon: '🌾',
      desc: 'Mayoritas warga bekerja di bidang pertanian dan peternakan, serta memiliki potensi wisata dan UMKM lokal.',
      page: '/page/Kehidupan-Page',
    },
  ]

  return (
    <section
      id="profil-desa"
      className="bg-gradient-to-b from-desa.dark to-black text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-12 text-desa.gold tracking-tight">
          Profil Desa Guwo
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {infoDesa.map((item, i) => (
            <Link href={item.page} key={i} aria-label={item.title} className="group">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-desa.gold/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-left"
              >
                <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-full bg-yellow-400/20 text-2xl shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
