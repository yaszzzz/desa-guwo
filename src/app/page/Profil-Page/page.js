'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProfilPage() {
    return (
        <section className="bg-desa-dark text-white min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200">
                        Profil Desa Guwo
                    </h1>
                    <p className="text-gray-400 text-lg">Visi, Misi, dan Arah Pembangunan</p>
                    <div className="h-1 w-20 bg-desa-gold mx-auto mt-6 rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Visi */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-9xl font-serif text-white">V</span>
                        </div>
                        <h2 className="text-2xl font-bold text-desa-gold mb-6 relative z-10 flex items-center">
                            <span className="bg-desa-gold/20 p-2 rounded-lg mr-3">🚀</span>
                            Visi Desa
                        </h2>
                        <p className="text-xl italic text-gray-200 leading-relaxed relative z-10">
                            "Terwujudnya Desa Guwo yang Maju, Mandiri, Sejahtera, dan Berakhlak Mulia melalui Tata Kelola Pemerintahan yang Baik dan Pembangunan Berkelanjutan."
                        </p>
                    </motion.div>

                    {/* Misi */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 shadow-xl relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="text-9xl font-serif text-white">M</span>
                        </div>
                        <h2 className="text-2xl font-bold text-desa-gold mb-6 relative z-10 flex items-center">
                            <span className="bg-desa-gold/20 p-2 rounded-lg mr-3">🎯</span>
                            Misi Desa
                        </h2>
                        <ul className="space-y-4 text-gray-300 relative z-10">
                            <li className="flex items-start">
                                <span className="text-desa-gold mr-3 mt-1">•</span>
                                Meningkatkan kualitas pelayanan publik yang transparan dan akuntabel.
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-gold mr-3 mt-1">•</span>
                                Mengembangkan potensi ekonomi lokal berbasis pertanian dan UMKM.
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-gold mr-3 mt-1">•</span>
                                Meningkatkan kualitas sumber daya manusia melalui pendidikan dan kesehatan.
                            </li>
                            <li className="flex items-start">
                                <span className="text-desa-gold mr-3 mt-1">•</span>
                                Melestarikan nilai-nilai budaya dan kearifan lokal serta menjaga lingkungan hidup.
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Struktur Organisasi Section - Placeholder for now */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-semibold text-white mb-8">Struktur Pemerintahan</h2>
                    <div className="p-10 border-2 border-dashed border-white/10 rounded-3xl bg-white/5">
                        <p className="text-gray-400">Bagan Struktur Organisasi Pemerintah Desa Guwo</p>
                        {/* You can allow the user to add an image here later */}
                        <div className="mt-4 inline-block px-4 py-2 bg-desa-gold/10 text-desa-gold rounded-full text-sm">
                            *Akan Diperbarui
                        </div>
                    </div>
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/" className="inline-flex items-center text-desa-gold hover:text-white transition-colors">
                        <span className="mr-2">←</span> Kembali ke Beranda
                    </Link>
                </div>

            </div>
        </section>
    )
}
