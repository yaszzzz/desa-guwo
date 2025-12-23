

'use client';

import { use } from 'react';
import informasiLayananList from "@/app/informasi/data";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DetailLayanan({ params }) {
  const { kategori, layanan } = use(params);

  // cari data
  const kategoriData = informasiLayananList.find(
    (item) => item.kategori === kategori && item.slug === layanan
  );

  if (!kategoriData) {
    notFound();
  }

  return (
    <section className="bg-desa-dark text-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200 capitalize">
            {kategoriData.title}
          </h1>
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-gray-300 capitalize mb-6">
            {kategori.replace(/-/g, " ")}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/10"
        >
          <img
            src={kategoriData.image}
            alt={kategoriData.title}
            className="w-full object-cover max-h-[400px] bg-black/50"
          />
        </motion.div>

        <article className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/5 shadow-xl">
          <p className="text-lg font-medium text-white mb-6">{kategoriData.desc}</p>
          {kategoriData.content && (
            <div className="mt-4 text-gray-300">
              <p>{kategoriData.content}</p>
            </div>
          )}
        </article>

        <div className="mt-12 text-center">
          <Link href="/#layanan" className="inline-flex items-center text-desa-gold hover:text-white transition-colors">
            <span className="mr-2">←</span> Kembali ke Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
