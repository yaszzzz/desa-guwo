'use client'

import { useEffect } from 'react'
import Hero from './components/Hero'
import KabarDesa from './kabar/KabarDesa'
import ProfilDesa from './components/ProfilDesa'
import BeritaKegiatan from './components/BeritaKegiatan'
import LetakPage from './page/letak/page'
import InformasiLayanan from './components/InformasiLayanan'

// Scroll ke hash (misal #layanan) saat load
export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash
      if (hash) {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' })
          }, 100) // delay agar komponen sempat render
        }
      }
    }
  }, [])

  return (
    <>
      <Hero />
      
      {/* Tambahkan id untuk scroll target */}
      <section id="profil">
        <ProfilDesa />
      </section>

      <section>
        <KabarDesa />
      </section>

      <section id="layanan">
        <InformasiLayanan />
      </section>

      <section id="kontak">
        <LetakPage />
      </section>

      <section>
        <BeritaKegiatan />
      </section>
    </>
  )
}
