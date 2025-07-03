"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden rounded-xl shadow-lg mb-10">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
