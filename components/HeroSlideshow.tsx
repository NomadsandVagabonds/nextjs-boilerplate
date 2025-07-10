// src/components/HeroSlideshow.tsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  { src: '/hero/hero-1.jpg', alt: 'Slide 1' },
  { src: '/hero/hero-2.jpg', alt: 'Slide 2' },
  { src: '/hero/hero-3.jpg', alt: 'Slide 3' },
  { src: '/hero/hero-4.jpg', alt: 'Slide 4' }
];

export default function HeroSlideshow() {
  const [[idx, dir], set] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const id = setInterval(() => set(([i]) => [(i + 1) % slides.length, 1]), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={dir}>
        <motion.div
          key={idx}
          custom={dir}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 })
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[idx].src}
            alt={slides[idx].alt}
            fill
            className="object-cover"
            priority={idx === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* 👇 change the headline here */}
      <div className="absolute inset-0 bg-black/40 flex items-end pb-12 px-6">
        <h1 className="font-display text-white text-4xl sm:text-6xl drop-shadow-xl">
          Glitching Memory &amp; Machine
        </h1>
      </div>
    </div>
  );
}
