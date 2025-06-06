'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'

export default function KabarDesa() {
  const kabar = [
    {
      title: 'Gotong Royong Perbaikan Jalan Dusun',
      date: 'Mei 2025',
      image: '/images/kabar1.jpg',
      summary:
        'Warga Desa Guwo bersama perangkat desa melaksanakan kerja bakti memperbaiki jalan utama yang rusak akibat musim hujan.',
    },
    {
      title: 'Musyawarah Rencana Pembangunan (Musrenbang) 2025',
      date: 'April 2025',
      image: '/images/kabar2.jpg',
      summary:
        'Desa Guwo mengadakan Musrenbang untuk menentukan prioritas pembangunan tahun depan. Hadir pula perwakilan dari kecamatan.',
    },
    {
      title: 'Panen Raya Padi Organik',
      date: 'Maret 2025',
      image: '/images/kabar3.jpg',
      summary:
        'Petani Desa Guwo berhasil panen padi organik. Hasil panen meningkat 15% dari tahun sebelumnya.',
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap', // ✅ smooth snap
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created(slider) {
      slider.container.style.scrollBehavior = 'smooth'
    },
  })

  // ✅ Auto Slide dengan durasi transisi
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 6000) // delay antar slide
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section id="kabar-desa" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-desa.gold">
          Kabar Desa
        </h2>

        <div ref={sliderRef} className="keen-slider transition-all duration-700 ease-in-out">
          {kabar.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-desa.gray rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-desa.gold font-medium mb-2">{item.date}</p>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {kabar.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? 'bg-desa.gold' : 'bg-gray-400'
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
