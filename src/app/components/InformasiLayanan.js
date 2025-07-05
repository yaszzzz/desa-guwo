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
    links: [ "Kegiatan Keagamaan"],
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
      className="relative text-white py-20 px-6 overflow-hidden bg-black"
    >
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.3] z-0"
        style={{
          backgroundImage: "url('/assets/photos/hero/foto4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-desa.gold mb-10 text-center">
          Informasi dan Layanan
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="space-y-4">
            {Object.keys(menu).map((kategori) => (
              <div key={kategori}>
                <button
                  onClick={() => {
                    setKategoriAktif(kategori);
                    setSubAktif(menu[kategori][0]);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    kategoriAktif === kategori
                      ? "bg-desa.gray text-white font-bold"
                      : "bg-desa.gray/80 text-gray-300 hover:bg-desa.gray/90"
                  }`}
                >
                  {kategori}
                </button>
                {kategoriAktif === kategori && menu[kategori].length > 0 && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {menu[kategori].map((submenu) => (
                      <li key={submenu}>
                        <button
                          onClick={() => setSubAktif(submenu)}
                          className={`text-sm transition ${
                            subAktif === submenu
                              ? "text-desa.gold font-semibold"
                              : "text-gray-300 hover:text-desa.gold"
                          }`}
                        >
                          ▸ {submenu}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Konten */}
          <motion.div
            className="md:col-span-2 bg-neutral-900 rounded-xl p-6 shadow-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {konten[subAktif] ? (
              <>
                <h3 className="text-2xl font-bold mb-2 text-desa.gold">
                  {konten[subAktif].title}
                </h3>
                <p className="text-gray-300 mb-4">{konten[subAktif].desc}</p>
                <ul className="list-disc list-inside space-y-2">
                  {konten[subAktif].links.map((link) => {
                    // sinkron dengan slug di data.js
                    const kategoriSlug = Object.keys(menu).find((key) =>
                      menu[key].includes(subAktif)
                    )?.toLowerCase().replace(/\s+/g, "-");

                    const layananSlug = subAktif.toLowerCase().replace(/\s+/g, "-");
                    const subSlug = link.toLowerCase().replace(/\s+/g, "-");

                    return (
                      <li key={link}>
                        <a
                          href={`/informasi/${kategoriSlug}/${layananSlug}/${subSlug}`}
                          className="text-white hover:text-desa.gold hover:underline transition duration-200"
                        >
                          {link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <p className="text-gray-400">
                Silakan pilih salah satu sub-menu untuk melihat informasi.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
