'use client'

import Link from "next/link"

export default function ProfilDesa() {
  const infoDesa = [
    {
      title: 'Sejarah Singkat',
      icon: '📜',
      desc: 'Desa Guwo memiliki sejarah panjang sejak zaman kolonial dan dikenal sebagai desa agraris yang damai.',
      page: '/page/Sejarah-Page'
    },
    {
      title: 'Letak Geografis',
      icon: '🗺️',
      desc: 'Terletak di Kabupaten Boyolali, Desa Guwo berada di wilayah dataran rendah dengan akses jalan yang baik.',
      page: '/page/Letak-Geografis'
    },
    {
      title: 'Potensi & Kehidupan',
      icon: '🌾',
      desc: 'Mayoritas warga bekerja di bidang pertanian dan peternakan, serta memiliki potensi wisata dan UMKM lokal.',
      page: '/page/Kehidupan-Page'
    },
  ]

  return (
    <section id="profil-desa" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-desa.gold">Profil Desa Guwo</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {infoDesa.map((item, i) => {
            const content = (
              <div className="group bg-desa.gray p-6 rounded-xl shadow border-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            )

            // jika ada link (page), gunakan <Link>, kalau tidak hanya tampilkan div
            return item.page ? (
              <Link key={i} href={item.page}>{content}</Link>
            ) : (
              <div key={i}>{content}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
