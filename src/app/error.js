'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-desa-dark relative overflow-hidden font-sans">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-desa-gold/10 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-desa-gold/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 px-4 text-center max-w-lg w-full">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
                            <AlertTriangle className="w-10 h-10 text-red-500" />
                        </div>
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-2">Terjadi Kesalahan</h2>
                    <p className="text-gray-400 mb-8">
                        Maaf, kami mengalami masalah saat memuat halaman ini. Silakan coba lagi.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={reset}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-desa-gold text-desa-dark font-semibold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-desa-gold/20"
                        >
                            <RefreshCcw className="w-5 h-5" />
                            Coba Lagi
                        </button>

                        <Link
                            href="/"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white font-medium rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                        >
                            <Home className="w-5 h-5" />
                            Ke Beranda
                        </Link>
                    </div>

                    {/* Optional: Error Details for Dev (Hidden in Prod usually, or small text) */}
                    <div className="mt-8 pt-4 border-t border-white/5">
                        <p className="text-xs text-red-400/50 font-mono break-all text-center">
                            Code: {error.digest || "Unknown"}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
