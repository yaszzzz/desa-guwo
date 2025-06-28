"use client"

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const Map = dynamic(() => import('../../components/Map'), { ssr: false })

const lokasiData = [
  {
    nama: 'Kantor Desa',
    koordinat: [-7.272916744794913, 110.7139179779824],
    deskripsi: 'Tempat pelayanan administrasi dan pusat pemerintahan Desa Guwo.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Bodeh (Bodeh)',
    koordinat: [-7.263169745935812, 110.71849341155082],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Bodeh (Rempelas)',
    koordinat: [-7.262382, 110.724088],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Kalitulang (Jatiri)',
    koordinat: [-7.269384664939981, 110.71507362627148],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Kalitulang (Klampok)',
    koordinat: [-7.273175, 110.714505],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Kalitulang (Kalitulang)',
    koordinat: [-7.285139, 110.714047],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  },
  {
    nama: 'Dusun Guwo',
    koordinat: [-7.282475413309768, 110.70666828044922],
    deskripsi: 'Tempat berkumpul warga untuk acara sosial dan rapat.',
    gambar: '/assets/images/medan.jpg'
  }
]

export default function LetakPage() {
  const [selected, setSelected] = useState(lokasiData[0])

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Sidebar */}
      <aside className="space-y-3 order-1 md:order-none">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Lokasi Strategis</h2>    
        {lokasiData.map((lokasi, index) => (
          <button
            key={index}
            className={`w-full text-left p-3 rounded border transition
              ${
                selected.nama === lokasi.nama
                  ? 'bg-yellow-100 dark:bg-yellow-800 font-bold'
                  : 'hover:bg-yellow-100 dark:hover:bg-yellow-900'
              }`}
            onClick={() => setSelected(lokasi)}
          >
            {lokasi.nama}
          </button>
        ))}
      </aside>

      {/* Map */}
      <div className="h-60 sm:h-80 md:h-96 rounded overflow-hidden shadow order-3 md:order-none">
        <Map posisi={selected.koordinat} />
      </div>

      {/* Panel Info */}
      <article className="space-y-3 order-2 md:order-none">
        <Image
          src={selected.gambar}
          alt={selected.nama}
          width={600}
          height={400}
          className="rounded shadow w-full h-auto"
        />
        <h3 className="text-lg font-semibold">{selected.nama}</h3>
        <p className="text-gray-700 dark:text-gray-300">{selected.deskripsi}</p>
      </article>
    </section>
  )
}
