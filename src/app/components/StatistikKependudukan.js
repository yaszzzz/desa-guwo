'use client'

import {
  PieChart, Pie, Cell, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
} from 'recharts'

const jenisKelamin = [
  { name: 'Pria', value: 1715 },
  { name: 'Wanita', value: 1727 },
]
const kepemilikanKK = [
  { name: 'Total KK', value: 1151 },
  { name: 'KK Pria', value: 700 },
  { name: 'KK Wanita', value: 451 },
]
const pendidikan = [
  { tingkat: 'Tidak Sekolah', pria: 64, wanita: 50 },
  { tingkat: 'Belum Tamat SD', pria: 42, wanita: 22 },
  { tingkat: 'SD', pria: 406, wanita: 292 },
  { tingkat: 'SLTP', pria: 85, wanita: 29 },
  { tingkat: 'SLTA', pria: 170, wanita: 85 },
  { tingkat: 'D1/D2', pria: 6, wanita: 2 },
  { tingkat: 'S1', pria: 11, wanita: 6 },
]
const usia = [
  { umur: '0-4', pria: 60, wanita: 53 },
  { umur: '5-9', pria: 130, wanita: 135 },
  { umur: '10-14', pria: 140, wanita: 141 },
  { umur: '15-19', pria: 137, wanita: 142 },
  { umur: '20-27', pria: 210, wanita: 215 },
  { umur: '28-35', pria: 203, wanita: 210 },
  { umur: '36-45', pria: 256, wanita: 263 },
  { umur: '45+', pria: 469, wanita: 622 },
]

const colors = ['#60A5FA', '#C084FC']

export default function DashboardKependudukan() {
  return (
    <main
      className="relative min-h-screen text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/photos/letak/bodeh.jpg')" }}
    >
      {/* Overlay: blur + gelap */}
      <div className="absolute inset-0 bg-black/90 z-0" />

      {/* Konten utama */}
      <div className="relative z-10 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#f6f5f4]">
          Dashboard Kependudukan Desa Guwo
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Total Penduduk */}
          <Card title="Total Penduduk">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={[{ name: 'Penduduk', value: 3442 }]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={70}
                  fill="#facc15"
                  label
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: 'white' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: 'white' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-center text-xl font-bold mt-2">3.442</p>
            <p className="text-xs text-gray-400 mt-1 text-center">Update: 2025</p>
          </Card>

          {/* Jenis Kelamin */}
          <Card title="Proporsi Jenis Kelamin">
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={jenisKelamin}
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  dataKey="value"
                  nameKey="name"
                >
                  {jenisKelamin.map((_, i) => (
                    <Cell key={i} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}`, name]}
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: 'white' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: 'white' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-1 text-center">Update: 2025</p>
          </Card>

          {/* Kepemilikan KK */}
          <Card title="Kepemilikan Kartu Keluarga">
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={kepemilikanKK}>
                <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#cbd5e1' }} />
                <YAxis tick={{ fill: '#cbd5e1' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: 'white' }}
                />
                <Bar dataKey="value" fill="#facc15" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-1 text-center">Update: 2020</p>
          </Card>

          {/* Distribusi Usia */}
          <Card title="Distribusi Usia" className="md:col-span-2">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={usia}>
                <XAxis dataKey="umur" tick={{ fill: '#cbd5e1' }} />
                <YAxis tick={{ fill: '#cbd5e1' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: 'white' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="pria" fill={colors[0]} radius={[4, 4, 0, 0]} />
                <Bar dataKey="wanita" fill={colors[1]} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-1 text-center">Update: 2025</p>
          </Card>

          {/* Pendidikan */}
          <Card title="Tingkat Pendidikan" className="md:col-span-2">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={pendidikan} layout="vertical">
                <XAxis type="number" tick={{ fill: '#cbd5e1' }} />
                <YAxis dataKey="tingkat" type="category" width={100} tick={{ fill: '#cbd5e1' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', borderColor: '#475569', color: 'white' }}
                />
                <Legend iconType="circle" wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="pria" fill={colors[0]} radius={[0, 4, 4, 0]} />
                <Bar dataKey="wanita" fill={colors[1]} radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-gray-400 mt-1 text-center">Update: 2020</p>
          </Card>
        </div>
      </div>
    </main>
  )
}

function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-[#1e293b] p-4 rounded-xl shadow-md ${className}`}>
      <h2 className="text-lg font-semibold mb-3 text-white">{title}</h2>
      {children}
    </div>
  )
}
