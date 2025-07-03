// src/app/kabar/[slug]/page.js

import kabarList from '../data'

export function generateStaticParams() {
  return kabarList.map((kabar) => ({
    slug: kabar.slug
  }))
}

export default function DetailKabar({ params }) {
  const { slug } = params

  const kabar = kabarList.find((item) => item.slug === slug)

  if (!kabar) {
    return <div className="text-center text-red-500 py-20">Data tidak ditemukan.</div>
  }

  const images = Array.isArray(kabar.image) ? kabar.image : [kabar.image]
  const paragraphs = kabar.content.split('\n\n')

  return (
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-desa.gold mb-10 text-center">
          {kabar.title}
        </h1>

        {/* gambar pertama */}
        {images[0] && (
          <div className="relative w-full h-[250px] md:h-[350px] mb-10 overflow-hidden rounded-xl shadow-lg">
            <img
              src={images[0]}
              alt={kabar.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <article className="space-y-6 text-lg">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>
              <p>{paragraph}</p>

              {/* gambar kedua setelah paragraf pertama */}
              {index === 0 && images[1] && (
                <div className="relative w-full h-[250px] md:h-[350px] my-10 overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={images[1]}
                    alt={`${kabar.title} (2)`}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
