"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const konten = {
  Pendidikan: {
    title: "Pendidikan",
    desc: "Akses pendidikan dasar hingga menengah yang tersedia di desa.",
    links: ["SD Negeri", "SMP Terdekat"],
  },
  Kesehatan: {
    title: "Kesehatan",
    desc: "Layanan kesehatan untuk warga desa.",
    links: ["Puskesmas Terdekat", "Posyandu"],
  },
  Keagamaan: {
    title: "Keagamaan",
    desc: "Berbagai kegiatan keagamaan di desa.",
    links: ["Kegiatan Keagamaan"],
  },
  "Administrasi Surat": {
    title: "Administrasi Surat",
    desc: "Pengurusan berbagai jenis surat di balai desa.",
    links: ["Surat Domisili", "Surat Keterangan Usaha", "Surat Tidak Mampu"],
  },
  "Layanan Kependudukan": {
    title: "Layanan Kependudukan",
    desc: "Pelayanan dokumen kependudukan warga.",
    links: ["Pelayanan KTP", "Pelayanan KK", "Akta Kelahiran"],
  },
  "Pengaduan Warga": {
    title: "Pengaduan Warga",
    desc: "Sarana menyampaikan aspirasi atau keluhan.",
    links: ["Kontak Perangkat Desa"],
  },
  "Bantuan Sosial": {
    title: "Bantuan Sosial",
    desc: "Bantuan sosial yang tersedia untuk warga.",
    links: ["BLT Dana Desa", "PKH"],
  },
};

const menu = {
  "Fasilitas Umum": ["Pendidikan", "Kesehatan", "Keagamaan"],
  "Layanan Balai Desa": [
    "Administrasi Surat",
    "Layanan Kependudukan",
    "Pengaduan Warga"
  ]
};

export default function InformasiLayanan() {
  const defaultKategori = Object.keys(menu)[0];
  const defaultSub = menu[defaultKategori][0];

  const [kategoriAktif, setKategoriAktif] = useState(defaultKategori);
  const [subAktif, setSubAktif] = useState(defaultSub);

  return (
    <section
      id="informasi"
      className="relative text-white py-24 px-6 overflow-hidden bg-desa-dark"
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/photos/hero/foto4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-desa-dark via-desa-dark/95 to-desa-dark/80 z-0" />

      {/* Konten */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-desa-gold to-yellow-200">
            Informasi & Layanan Publik
          </span>
          <div className="h-1 w-24 bg-desa-gold mx-auto mt-4 rounded-full" />
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-6 md:col-span-1">
            {Object.keys(menu).map((kategori) => (
              <div key={kategori} className="bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                <h3 className="text-desa-gold font-bold text-lg mb-4 px-2 tracking-wide uppercase text-xs">
                  {kategori}
                </h3>
                <div className="space-y-1">
                  {menu[kategori].map((submenu) => (
                    <button
                      key={submenu}
                      onClick={() => {
                        setKategoriAktif(kategori);
                        setSubAktif(submenu);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium flex items-center justify-between group ${subAktif === submenu
                          ? "bg-desa-gold text-desa-dark shadow-lg shadow-desa-gold/20"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                      <span>{submenu}</span>
                      {subAktif === submenu && (
                        <motion.div layoutId="activeInd" className="w-1.5 h-1.5 rounded-full bg-desa-dark" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Konten */}
          <motion.div
            key={subAktif}
            className="md:col-span-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Decorative blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-desa-gold/10 rounded-full blur-3xl pointer-events-none" />

            {konten[subAktif] ? (
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 text-white">
                  {konten[subAktif].title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg leading-relaxed border-l-4 border-desa-gold pl-4">
                  {konten[subAktif].desc}
                </p>

                <h4 className="text-desa-gold text-sm font-bold uppercase tracking-wider mb-4">
                  Menu Terkait
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  {konten[subAktif].links.map((link) => {
                    const kategoriSlug = Object.keys(menu).find((key) =>
                      menu[key].includes(subAktif)
                    )?.toLowerCase().replace(/\s+/g, "-");

                    const layananSlug = subAktif.toLowerCase().replace(/\s+/g, "-");
                    const subSlug = link.toLowerCase().replace(/\s+/g, "-");

                    return (
                      <a
                        key={link}
                        href={`/informasi/${kategoriSlug}/${layananSlug}/${subSlug}`}
                        className="group flex items-center p-4 rounded-xl bg-white/5 hover:bg-desa-gold hover:text-desa-dark transition-all duration-300 border border-white/5 hover:border-desa-gold shadow-sm hover:shadow-lg hover:-translate-y-1"
                      >
                        <div className="p-2 rounded-full bg-white/10 group-hover:bg-black/10 mr-4 transition-colors">
                          <span className="text-lg">📄</span>
                        </div>
                        <span className="font-medium text-gray-200 group-hover:text-desa-dark">
                          {link}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <p className="text-gray-500 text-lg">
                  Silakan pilih layanan dari menu di sebelah kiri.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
