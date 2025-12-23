// src/app/kabar/KabarDesa.jsx
'use client'

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'
import kabarList from './data.js'
import Link from 'next/link'

export default function KabarDesa() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      '(min-width: 768px)': { slides: { perView: 2, spacing: 20 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } }
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 6000)
    return () => clearInterval(interval)
  }, [instanceRef])

  return (
    <section id="kabar-desa" className="bg-desa-dark text-white py-24 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-desa-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Seputar</span>{" "}
            <span className="text-desa-gold">Desa</span>
          </h2>
          <div className="h-1 w-24 bg-desa-gold mx-auto mt-4 rounded-full" />
        </div>

        <div ref={sliderRef} className="keen-slider !overflow-visible">
          {kabarList.map((item, i) => (
            <div
              key={i}
              className="keen-slider__slide h-full"
            >
              <div className="h-full bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-desa-gold/40 hover:shadow-2xl hover:shadow-desa-gold/10 transition-all duration-300 group">
                <Link href={`/kabar/${item.slug}`} className="flex flex-col h-full">
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                    <img
                      src={item.images}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-sm text-desa-gold text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                      {item.date}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-desa-gold transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
                      {item.summary}
                    </p>

                    <div className="flex items-center text-desa-gold text-sm font-semibold uppercase tracking-wider mt-auto">
                      <span>Baca Berita</span>
                      <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {kabarList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-desa-gold' : 'w-2 bg-gray-600 hover:bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
