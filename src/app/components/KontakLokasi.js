'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function KontakLokasi() {
  return (
    <section id="kontak" className="bg-desa.dark text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kontak Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-desa.gold mb-6">
            Kontak & Lokasi
          </h2>
          <ul className="space-y-6 text-sm sm:text-base">
            <li className="flex items-start gap-4">
              <MapPin className="text-desa.gold" />
              <div>
                <strong>Alamat:</strong><br />
                Jl. Raya Guwo No. 01, Kec. Wonosegoro, Kab. Boyolali, Jawa Tengah 57392
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Mail className="text-desa.gold" />
              <div>
                <strong>Email:</strong><br />
                desa.guwo@gmail.com
              </div>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="text-desa.gold" />
              <div>
                <strong>WhatsApp:</strong><br />
                +62 812-3456-7890
              </div>
            </li>
          </ul>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3496!2d110.7281!3d-7.4311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a6e11aa8e91d3%3A0xf27e1e0b9ff8d2c1!2sDesa%20Guwo%2C%20Boyolali!5e0!3m2!1sen!2sid!4v1700000000000"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
