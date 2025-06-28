"use client"

import { useState, useEffect } from "react"
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer
} from "recharts"

export default function StatistikKependudukan() {

  // gunakan window.innerWidth supaya tinggi chart adaptif
  const [chartHeight, setChartHeight] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartHeight(250)  // mobile
      } else {
        setChartHeight(400)  // desktop
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // data tetap seperti sumber asli
  const jenisKelamin = [
    { name: "Pria", value: 1748 },
    { name: "Wanita", value: 1775 },
  ]

  const kepemilikanKK = [
    { name: "Kepemilikan KK Pria", value: 1270 },
    { name: "Kepemilikan KK Wanita", value: 1240 },
    { name: "Kepala Keluarga Pria", value: 600 },
    { name: "Kepala Keluarga Wanita", value: 400 },
  ]

  const usia = [
    { umur: "0-4", pria: 50, wanita: 48 },
    { umur: "5-9", pria: 70, wanita: 65 },
    { umur: "10-14", pria: 100, wanita: 90 },
    { umur: "15-19", pria: 120, wanita: 110 },
    { umur: "20-24", pria: 150, wanita: 140 },
    // dst sesuai data kamu
  ]

  const pendidikan = [
    { tingkat: "Tidak Sekolah", pria: 64, wanita: 50 },
    { tingkat: "Belum Tamat SD", pria: 42, wanita: 22 },
    { tingkat: "SD", pria: 406, wanita: 292 },
    { tingkat: "SLTP", pria: 85, wanita: 29 },
    { tingkat: "SLTA", pria: 170, wanita: 85 },
    { tingkat: "D1/D2", pria: 6, wanita: 2 },
    { tingkat: "S1", pria: 11, wanita: 6 },
    { tingkat: "S2", pria: 0, wanita: 0 }
  ]

  const colors = ["#3b82f6", "#ec4899"]

  return (
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-desa.gold mb-10 text-center">
          Statistik Kependudukan
        </h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* Pie Jenis Kelamin */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg">
            <h3 className="text-desa.gold text-center mb-4">Berdasarkan Jenis Kelamin</h3>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <PieChart>
                <Pie data={jenisKelamin} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={chartHeight / 3}>
                  {jenisKelamin.map((_, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar KK */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg">
            <h3 className="text-desa.gold text-center mb-4">Kepemilikan KK</h3>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart data={kepemilikanKK}>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#facc15" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Usia */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg col-span-2">
            <h3 className="text-desa.gold text-center mb-4">Distribusi Usia</h3>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart data={usia}>
                <XAxis dataKey="umur" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pria" fill="#3b82f6" />
                <Bar dataKey="wanita" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Pendidikan */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg col-span-2">
            <h3 className="text-desa.gold text-center mb-4">Tingkat Pendidikan</h3>
            <ResponsiveContainer width="100%" height={chartHeight}>
              <BarChart data={pendidikan} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="tingkat" type="category" width={100} />
                <Tooltip />
                <Legend />
                <Bar dataKey="pria" fill="#3b82f6" />
                <Bar dataKey="wanita" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </section>
  )
}
