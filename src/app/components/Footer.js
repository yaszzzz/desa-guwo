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
    <footer className="bg-desa.dark text-white pt-12 pb-6 px-4 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-8 border-b border-gray-700 pb-6">
        {/* Kontak Info */}
        <div>
          <h2 className="text-base font-bold text-desa.gold mb-4">Kontak</h2>
          <ul className="space-y-3">
            <li className="flex gap-2 items-start">
              <MapPin className="text-desa.gold w-4 h-4 mt-1" />
              <span>
               Jl. Guwo-Juwangi Km 2, dukuh klampok RT 01 RW 04, Desa Guwo, Kec. Wonosegoro, Kab. Boyolali, Jawa
                Tengah 57382
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <Mail className="text-desa.gold w-4 h-4 mt-1" />
              <span>pemerintahdesaguwo@gmail.com</span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="text-desa.gold w-4 h-4 mt-1" />
              <span>+6281329791769</span>
            </li>
          </ul>
        </div>

        {/* Logo Tengah */}
        <div className="flex justify-center md:justify-end items-center my-6">
          <img
            src="/logo2.png"
            alt="Logo Desa Guwo"
            className="w-52 h-auto object-contain"
          />
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h2 className="text-base font-bold text-desa.gold">Media Sosial</h2>
          <div className="flex gap-4 text-desa.gold">
            <Facebook className="hover:text-white cursor-pointer" />
            <Instagram className="hover:text-white cursor-pointer" />
            <Youtube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[11px] text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Desa Guwo. All rights reserved.
      </div>
    </footer>
  );
}
