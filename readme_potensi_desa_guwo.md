# Potensi Desa Guwo – Next.js Page

Project ini berisi sebuah halaman React/Next.js yang menampilkan informasi lengkap mengenai potensi dan kondisi sosial Desa Guwo. Halaman dibuat menggunakan **Next.js (App Router)**, **Tailwind CSS**, dan **Framer Motion** untuk animasi.

## 🚀 Fitur Utama

- **Carousel Gambar** otomatis dengan animasi halus menggunakan Framer Motion.
- **Grid Potensi Desa** berisi highlight sektor pertanian, peternakan, UMKM, budaya, dan wisata.
- **Deskripsi lengkap** mengenai kondisi geografis, sosial kemasyarakatan, dan potensi desa.
- **Design responsif** dan cocok dengan tema dark mode.
- **Animasi on-scroll** (fade & slide) untuk pengalaman pengguna yang lebih interaktif.

## 🛠️ Teknologi yang Digunakan

- **Next.js 14+ (App Router)**
- **React 18**
- **Tailwind CSS**
- **Framer Motion**


## 📁 Struktur Folder

```
project-folder/
│
├── app/
│   ├── potensi/
│   │   └── page.jsx        # File halaman Potensi Desa Guwo
│   └── layout.jsx
│
├── public/                 # (opsional) gambar atau aset tambahan
├── styles/
│   └── globals.css         # Konfigurasi Tailwind
│
├── package.json
└── README.md               # Dokumentasi proyek
```

## 📦 Instalasi & Menjalankan Project

1. **Clone repository**

```bash
git clone https://github.com/username/nama-repo.git
cd nama-repo
```

2. **Install dependencies**

```bash
npm install
```

3. **Jalankan development server**

```bash
npm run dev
```

4. Buka di browser:

```
http://localhost:3000/potensi
```

---

## ✨ Cara Mengganti Konten
Semua konten utama ada di file:
```
app/potensi/page.jsx
```
Bagian yang bisa kamu edit:

### 1. **Carousel Gambar**
```js
const carouselImages = [
  'https://...'
]
```

### 2. **List Potensi Desa**
```js
const potensi = [
  { title: 'Pertanian', icon: '🌾', desc: '...' },
]
```

### 3. **Paragraf Deskripsi Desa**
Ada di bagian:
```jsx
<article className="prose ...">
  <p> ... </p>
</article>
```

---

## 🧩 Customisasi Theme
Project menggunakan warna custom seperti:
```
bg-desa.dark
bg-desa.gray
text-desa.gold
```
Pastikan sudah menambahkan theme ini di `tailwind.config.js`.

---

## 🤝 Kontribusi
Pull request sangat diterima! Jika ingin menambah halaman desa lain atau fitur baru, silakan buat branch baru dan ajukan PR.

---

## 📄 Lisensi
Proyek ini dirilis dengan lisensi **MIT License**.

---

Jika kamu ingin dibuatkan **logo desa**, **preview gambar untuk GitHub**, atau **deployment ke Vercel**, tinggal bilang saja! 🚀

