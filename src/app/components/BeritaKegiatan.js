'use client'

import { useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { motion } from 'framer-motion'
import Link from 'next/link'

const kegiatan = [
  {
    slug: 'kerja-bakti',
    title: 'Kerja Bakti Membersihkan Lingkungan',
    img: '/assets/photos/membersihkan lapangan/WhatsApp Image 2025-06-29 at 22.12.33_e24d663a.jpg',
    desc: 'Warga Desa Guwo bergotong-royong membersihkan selokan dan fasilitas umum sebagai persiapan musim hujan.',
    date: 'Mei 2025',
  },
  {
     slug: 'posyandu-balita',
    title: 'Posyandu Balita Dusun Tengah',
    img: '/assets/berita/posyandu.jpg',
    desc: 'Kegiatan posyandu rutin kembali digelar di balai dusun, melibatkan kader kesehatan dan ibu-ibu balita.',
    date: 'April 2025',
  },
  {
    slug: 'lomba-17an',
    title: 'Lomba 17 Agustus & Pentas Seni',
    img: '/assets/berita/lomba.jpg',
    desc: 'Warga desa antusias mengikuti lomba agustusan dan pertunjukan seni anak-anak di lapangan desa.',
    date: 'Agustus 2024',
  },
]

export default function BeritaKegiatan() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  return (
    <section id="berita" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-desa.gold mb-12">Berita & Kegiatan</h2>

         <div ref={sliderRef} className="keen-slider mb-8">
          {kegiatan.map((item, i) => (
            <motion.div
              key={i}
              className="keen-slider__slide bg-desa.gray rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Link href={`/berita/${item.slug}`} className="block">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 text-left">
                  <p className="text-xs text-desa.gold font-medium mb-1">{item.date}</p>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Indikator Carousel */}
        <div className="flex justify-center gap-2">
          {kegiatan.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? 'bg-desa.gold' : 'bg-gray-500'
              } transition-colors`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}
