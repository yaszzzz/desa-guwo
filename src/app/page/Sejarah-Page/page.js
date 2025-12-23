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
    <section className="bg-desa-dark text-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-desa-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-orange-200">
            Sejarah Desa Guwo
          </h1>
          <p className="text-gray-400 text-lg">Jejak Warisan & Perkembangan</p>
          <div className="h-1 w-20 bg-desa-gold mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Image Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[250px] md:h-[400px] mb-12 overflow-hidden rounded-3xl shadow-2xl border border-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={photos[index]}
              src={`${photos[index]}?w=1200&q=80&auto=format`}
              alt={`Foto ${index + 1}`}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-desa-dark/60 via-transparent to-transparent" />
        </motion.div>

        {/* Artikel */}
        <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
          <span className="text-5xl font-serif text-desa-gold float-left mr-4 -mt-2 opacity-50">“</span>
          <p className="first-letter:text-3xl first-letter:font-bold first-letter:text-white">
            Desa Guwo merupakan salah satu desa kecil yang berada di Kabupaten
            Boyolali. Letaknya yang strategis di dataran rendah menjadikannya
            sebagai wilayah agraris yang subur dan produktif, dengan sawah dan
            ladang yang mendominasi lanskapnya.
          </p>

          <p>
            Nama <span className="text-desa-gold font-semibold">"Guwo"</span> berasal dari kata guwo dalam bahasa Jawa yang berarti gua
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

          <div className="h-px w-full bg-white/10 my-8" />

          <p className="font-semibold text-white">
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
