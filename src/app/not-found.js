'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-desa-dark relative overflow-hidden font-sans">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 px-4 text-center max-w-lg w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-24 bg-desa-gold/10 rounded-full flex items-center justify-center border border-desa-gold/20 animate-pulse">
                            <FileQuestion className="w-12 h-12 text-desa-gold" />
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-2">404</h1>
                    <h2 className="text-xl font-medium text-gray-300 mb-4">Halaman Tidak Ditemukan</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-desa-gold text-desa-dark font-semibold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-desa-gold/20"
                        >
                            <Home className="w-5 h-5" />
                            Beranda
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Kembali
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
