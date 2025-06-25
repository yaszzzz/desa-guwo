export default function DetailLayanan({ params }) {
  const { kategori, layanan } = params

  // Konversi dari slug ke nama layanan
  const formattedLayanan = layanan.replace(/-/g, ' ').toUpperCase()

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-desa.gold mb-4 text-center capitalize">
          {formattedLayanan}
        </h1>
        <p className="text-lg text-gray-300 text-center">
          Ini adalah halaman detail untuk {formattedLayanan} dalam kategori {kategori}.
        </p>
      </div>
    </section>
  )
}
