"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-desa-dark text-white pt-16 pb-8 px-6 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-gray-800 pb-12">
        {/* Kontak Info */}
        <div className="md:w-1/3">
          <h2 className="text-lg font-bold text-desa-gold mb-6 uppercase tracking-wider">Hubungi Kami</h2>
          <ul className="space-y-4">
            <li className="flex gap-4 items-start group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-desa-gold/20 transition-colors">
                <MapPin className="text-desa-gold w-5 h-5" />
              </div>
              <span className="text-gray-300 leading-relaxed">
                Jl. Guwo-Juwangi Km 2, Dukuh Klampok, RT 01 RW 04, Desa Guwo, Kec. Wonosegoro, Kab. Boyolali, Jawa Tengah 57382
              </span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-desa-gold/20 transition-colors">
                <Mail className="text-desa-gold w-5 h-5" />
              </div>
              <span className="text-gray-300">pemerintahdesaguwo@gmail.com</span>
            </li>
            <li className="flex gap-4 items-center group">
              <div className="p-2 rounded-full bg-white/5 group-hover:bg-desa-gold/20 transition-colors">
                <Phone className="text-desa-gold w-5 h-5" />
              </div>
              <span className="text-gray-300">+62 813-2979-1769</span>
            </li>
          </ul>
        </div>

        {/* Logo Tengah */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-desa-gold/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/logo2.png"
              alt="Logo Desa Guwo"
              className="relative w-48 md:w-64 h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Social Media */}
        <div className="md:w-1/3 md:text-right">
          <h2 className="text-lg font-bold text-desa-gold mb-6 uppercase tracking-wider">Ikuti Kami</h2>
          <div className="flex gap-4 md:justify-end">
            {[Facebook, Instagram, Youtube].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="p-3 rounded-full bg-white/5 hover:bg-desa-gold hover:text-desa-dark transition-all duration-300 text-desa-gold transform hover:scale-110"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p className="mt-6 text-gray-400 text-xs">
            Dapatkan informasi terbaru seputar kegiatan dan potensi Desa Guwo melalui media sosial kami.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-8 font-medium">
        &copy; {new Date().getFullYear()} Pemerintah Desa Guwo. All rights reserved.
      </div>
    </footer>
  );
}
