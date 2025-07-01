

import informasiLayananList from "@/app/informasi/data";
import { notFound } from "next/navigation";

export default function DetailSub({ params }) {
  const { kategori, layanan, sub } = params;

  // cari data kategori
  const kategoriData = informasiLayananList.find(
    (item) => item.kategori === kategori && item.slug === layanan
  );

  if (!kategoriData) {
    notFound();
  }

  // cari sub
  const child = kategoriData.children.find(
    (c) => c.slug.toLowerCase() === sub.toLowerCase()
  );

  if (!child) {
    notFound();
  }

  return (
    <section className="py-20 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-desa.gold mb-4 text-center capitalize">
          {child.title}
        </h1>
        <p className="text-lg text-gray-300 text-center mb-4 capitalize">
          Kategori: {kategori.replace(/-/g, " ")} / {layanan.replace(/-/g, " ")}
        </p>
        <div className="rounded-xl overflow-hidden shadow mb-6">
          <img
            src={child.image}
            alt={child.title}
            className="w-full object-cover max-h-96"
          />
        </div>
        <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none text-gray-300">
          <p>{child.desc}</p>
          {child.content && (
            <div className="mt-4">
              <p>{child.content}</p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
