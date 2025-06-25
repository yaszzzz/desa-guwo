// src/app/berita/[slug]/page.jsx
import { notFound } from 'next/navigation'
import kegiatan from '../data'

export default function DetailKegiatan({ params }) {
  const data = kegiatan.find((item) => item.slug === params.slug)

  if (!data) return notFound()

  return (
    <section className="bg-desa.dark text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-desa.gold mb-4 text-center">{data.title}</h1>
        <p className="text-sm text-gray-400 text-center mb-8">{data.date}</p>
        <img src={data.img} alt={data.title} className="rounded-xl w-full mb-6" />
        <p className="text-lg text-gray-200 leading-relaxed">{data.content}</p>
      </div>
    </section>
  )
}
