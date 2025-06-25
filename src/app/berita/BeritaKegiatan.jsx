import Link from 'next/link'
// ...
<Link href={`/berita/${item.slug}`}>
  <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
  <div className="p-5 text-left">
    <p className="text-xs text-desa.gold font-medium mb-1">{item.date}</p>
    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
    <p className="text-sm text-gray-300">{item.desc}</p>
  </div>
</Link>
