'use client'

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProfilDesa() {
  const infoDesa = [
    {
      title: 'Letak Geografis',
      icon: '🗺️',
      desc: 'Desa Guwo terletak di dataran rendah Kabupaten Boyolali, Provinsi Jawa Tengah, dan secara administratif masuk wilayah Kecamatan Wonosegoro.',
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
      id="profil"
      className="relative bg-desa-dark text-white py-24 px-6 overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-desa-gold/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200 mb-4 inline-block">
            Profil Desa Guwo
          </h2>
          <div className="h-1 w-24 bg-desa-gold mx-auto rounded-full" />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
            Mengenal lebih dekat karakteristik, potensi, dan kehidupan masyarakat Desa Guwo yang asri dan produktif.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {infoDesa.map((item, i) => (
            <Link href={item.page} key={i} aria-label={item.title} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="h-full relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl hover:border-desa-gold/50 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-desa-gold/10 overflow-hidden"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-desa-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-desa-gold to-yellow-600 text-3xl shadow-lg ring-4 ring-white/5 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-desa-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-desa-gold text-sm font-semibold tracking-wide uppercase">
                    <span>Selengkapnya</span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
