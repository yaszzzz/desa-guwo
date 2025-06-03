'use client'

export default function KabarDesa() {
  const kabar = [
    {
      title: 'Gotong Royong Perbaikan Jalan Dusun',
      date: 'Mei 2025',
      image: '/images/kabar1.jpg',
      summary:
        'Warga Desa Guwo bersama perangkat desa melaksanakan kerja bakti memperbaiki jalan utama yang rusak akibat musim hujan. Kegiatan ini dilakukan secara sukarela oleh seluruh lapisan masyarakat.',
    },
    {
      title: 'Musyawarah Rencana Pembangunan (Musrenbang) 2025',
      date: 'April 2025',
      image: '/images/kabar2.jpg',
      summary:
        'Desa Guwo mengadakan Musrenbang untuk menentukan prioritas pembangunan tahun depan. Hadir pula perwakilan dari kecamatan dan tokoh masyarakat yang memberikan masukan.',
    },
    {
      title: 'Panen Raya Padi Organik',
      date: 'Maret 2025',
      image: '/images/kabar3.jpg',
      summary:
        'Petani di Desa Guwo berhasil melakukan panen raya padi organik. Hasil panen tahun ini meningkat 15% dibandingkan tahun sebelumnya, berkat sistem pertanian ramah lingkungan yang diterapkan.',
    },
  ]

  return (
    <section id="kabar-desa" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-desa.gold">Kabar Desa</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {kabar.map((item, i) => (
            <div
              key={i}
              className="bg-desa.gray rounded-xl shadow hover:shadow-lg transition-all hover:scale-[1.02] overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-desa.gold font-semibold mb-1">{item.date}</p>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
