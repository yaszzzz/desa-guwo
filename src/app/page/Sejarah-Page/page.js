"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const photos = [
  "https://images.unsplash.com/photo-1670620800086-3b9a345967fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1508325739122-c57a76313bf4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1670620800493-69a8642011bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function SejarahDesa() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-desa.gold mb-10 text-center">
          Sejarah Singkat Desa Guwo
        </h1>

        {/* Image Carousel */}
        <div className="relative w-full h-[250px] md:h-[350px] mb-10 overflow-hidden rounded-xl shadow-lg">
          <AnimatePresence>
            <motion.img
              key={photos[index]}
              src={`${photos[index]}?w=800&q=80&auto=format`}
              alt={`Foto ${index + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute w-full h-full object-cover rounded-xl"
            />
          </AnimatePresence>
        </div>

        {/* Artikel */}
        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-300">
          <p>
            Desa Guwo merupakan salah satu desa kecil yang berada di Kabupaten
            Boyolali. Letaknya yang strategis di dataran rendah menjadikannya
            sebagai wilayah agraris yang subur dan produktif, dengan sawah dan
            ladang yang mendominasi lanskapnya.
          </p>

          <p>
            Nama Guwo berasal dari kata guwo dalam bahasa Jawa yang berarti gua
            atau tempat berlindung. Menurut cerita turun-temurun, masyarakat
            dahulu memanfaatkan gua-gua alami di sekitar desa sebagai tempat
            persembunyian dari ancaman penjajah dan konflik antar wilayah pada
            masa lampau.
          </p>

          <p>
            Pada zaman kolonial, Desa Guwo mulai terbentuk sebagai permukiman
            yang terorganisir, dihuni oleh petani-petani tangguh yang hidup
            berdampingan dengan alam. Jalan tanah, rumah bambu, dan irigasi
            sederhana menjadi ciri khas desa ini kala itu. Namun, semangat
            gotong royong telah tumbuh sejak awal dan menjadi pondasi kehidupan
            sosial warga.
          </p>

          <p>
            Seiring waktu dan perkembangan zaman, Desa Guwo perlahan-lahan
            membangun infrastruktur dasar seperti jalan desa, fasilitas
            pendidikan, dan layanan masyarakat. Kini, meskipun masih
            mempertahankan suasana pedesaan yang asri, Guwo telah memiliki akses
            transportasi yang baik dan terus bergerak menuju desa yang lebih
            mandiri dan berdaya.
          </p>

          <p>
            Saat ini, Desa Guwo dikenal sebagai desa yang tenang, bersih, dan
            memiliki potensi pertanian serta ekonomi lokal seperti UMKM. Tradisi
            seperti kenduri, pertunjukan seni rakyat, dan kegiatan sosial
            lainnya masih dilestarikan sebagai identitas budaya lokal yang kuat.
          </p>
        </article>
      </div>
    </section>
  );
}
