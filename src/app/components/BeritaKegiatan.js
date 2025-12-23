"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import Link from "next/link";

const kegiatan = [
  {
    slug: "kerja-bakti",
    title:
      "Kerja Bakti Bersama Mahasiswa KKNT UDB Membersihkan Lapangan Voli Dukuh Jatiri",
    img: '/assets/photos/membersihkan lapangan/WhatsApp Image 2025-06-29 at 22.12.33_e24d663a.jpg',
    desc: "Mahasiswa KKNT Universitas Duta Bangsa Surakarta dan warga Dukuh Jatiri bergotong royong membersihkan lapangan voli terbengkalai agar dapat difungsikan kembali untuk kegiatan olahraga masyarakat.",
    date: "15 Juni 2025",
  },
  {
    slug: "posyandu-semua-usia",
    title: "Posyandu Semua Usia Dusun Guwo",
    img: "/assets/photos/posyandu/Screenshot 2025-07-05 140328.png",
    desc: "Posyandu semua usia digelar di Pos 2 Desa Guwo bersama bidan desa dan mahasiswa KKN UDB 26.",
    date: "5 Juli 2025",
  },
  {
    slug: "kurban-idul-adha-2025",
    title: "Pelaksanaan Kurban Idul Adha di Dusun Bodeh, Desa Guwo",
    img: "/assets/photos/kurban/Screenshot 2025-07-05 131616.png",
    desc: "Warga Dusun Bodeh, Desa Guwo, bergotong royong menyembelih 2 sapi dan 2 kambing pada Hari Raya Idul Adha 1446 H.",
    date: "6 Juni 2025",
  },
];

export default function BeritaKegiatan() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <section id="berita" className="bg-desa-dark text-white py-24 px-6 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-desa-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">Kabar &</span>{" "}
            <span className="text-desa-gold">Kegiatan</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Berita terkini dan dokumentasi kegiatan masyarakat Desa Guwo.
          </p>
        </div>

        <div ref={sliderRef} className="keen-slider mb-12 !overflow-visible">
          {kegiatan.map((item, i) => (
            <motion.div
              key={i}
              className="keen-slider__slide h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/berita/${item.slug}`} className="block h-full group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-desa-gold/30 hover:shadow-2xl hover:shadow-desa-gold/10 transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-desa-gold text-desa-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    {item.date}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-desa-gold transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-6">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-desa-gold text-sm font-semibold uppercase tracking-wider">
                    <span>Baca Selengkapnya</span>
                    <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Indikator Carousel */}
        <div className="flex justify-center gap-3">
          {kegiatan.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${currentSlide === idx ? "w-8 bg-desa-gold" : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
