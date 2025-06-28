"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts"

const jenisKelamin = [
  { name: "Pria", value: 1748 },
  { name: "Wanita", value: 1775 },
]

const kepemilikanKK = [
  { name: "KK Pria", value: 1300 },
  { name: "KK Wanita", value: 1200 },
  { name: "Kepala Keluarga Pria", value: 600 },
  { name: "Kepala Keluarga Wanita", value: 400 },
]

const usia = [
  { age: "0-4", pria: 50, wanita: 48 },
  { age: "5-9", pria: 70, wanita: 65 },
  { age: "10-14", pria: 90, wanita: 85 },
  // lanjutkan sesuai data kamu
]

const pendidikan = [
  { tingkat: "Tidak Sekolah", pria: 64, wanita: 50 },
  { tingkat: "SD", pria: 406, wanita: 292 },
  { tingkat: "SMP", pria: 170, wanita: 85 },
  { tingkat: "SMA", pria: 85, wanita: 29 },
  { tingkat: "D1/D2/D3", pria: 10, wanita: 5 },
  { tingkat: "S1", pria: 11, wanita: 6 },
  { tingkat: "S2", pria: 2, wanita: 1 },
]

const colors = ["#3b82f6", "#ec4899"]; // pria biru, wanita pink

export default function StatistikKependudukan() {
  return (
    <section className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-desa.gold text-center mb-10">Statistik Kependudukan</h2>
        <div className="grid md:grid-cols-2 gap-8">

          {/* PIE CHART jenis kelamin */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg">
            <h3 className="text-desa.gold text-center mb-4">Berdasarkan Jenis Kelamin</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={jenisKelamin} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
                  {jenisKelamin.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* BAR CHART kepemilikan KK */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg">
            <h3 className="text-desa.gold text-center mb-4">Kepemilikan KK</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={kepemilikanKK}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#fbbf24" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* BAR CHART umur */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg col-span-2">
            <h3 className="text-desa.gold text-center mb-4">Distribusi Usia</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={usia}>
                <XAxis dataKey="age" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pria" fill="#3b82f6" />
                <Bar dataKey="wanita" fill="#ec4899" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* BAR CHART pendidikan */}
          <div className="bg-desa.gray rounded-xl p-4 shadow-lg col-span-2">
            <h3 className="text-desa.gold text-center mb-4">Tingkat Pendidikan</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={pendidikan} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="tingkat" type="category" />
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
