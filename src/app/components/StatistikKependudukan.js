'use client'

import { useState, useEffect } from "react"
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer
} from "recharts"

export default function StatistikKependudukan() {
  const [chartHeight, setChartHeight] = useState(300)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setChartHeight(250)
      } else {
        setChartHeight(400)
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalPenduduk = 3442
  const totalPria = 1715
  const totalWanita = 1727
  const propPria = totalPria / totalPenduduk
  const propWanita = totalWanita / totalPenduduk

  const jenisKelamin = [
    { name: "Pria", value: 1715 },
    { name: "Wanita", value: 1727 },
  ]

  const kepemilikanKK = [
    { name: "Jumlah Kepala Keluarga", value: 1151 },
    { name: "Kepemilikan KK Pria", value: 700 },
    { name: "Kepemilikan KK Wanita", value: 451 },
  ]

  const usiaTotal = [
    { umur: "0-4", total: 113 },
    { umur: "5-9", total: 265 },
    { umur: "10-14", total: 281 },
    { umur: "15-19", total: 279 },
    { umur: "20-27", total: 425 },
    { umur: "28-35", total: 413 },
    { umur: "36-45", total: 519 },
    { umur: "45+", total: 1091 },
  ]

  const usia = usiaTotal.map(({ umur, total }) => ({
    umur,
    pria: Math.round(total * propPria),
    wanita: Math.round(total * propWanita),
  }))

  const pendidikan = [
    { tingkat: "Tidak Sekolah", pria: 64, wanita: 50 },
    { tingkat: "Belum Tamat SD", pria: 42, wanita: 22 },
    { tingkat: "SD", pria: 406, wanita: 292 },
    { tingkat: "SLTP", pria: 85, wanita: 29 },
    { tingkat: "SLTA", pria: 170, wanita: 85 },
    { tingkat: "D1/D2", pria: 6, wanita: 2 },
    { tingkat: "S1", pria: 11, wanita: 6 },
    { tingkat: "S2", pria: 0, wanita: 0 },
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
            <h3 className="text-desa.gold text-center mb-4">Kepemilikan Kartu Keluarga</h3>
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
