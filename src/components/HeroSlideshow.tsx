'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    alt: 'Cities folding like waves',
  },
  {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21',
    alt: "Pixels dissolve a swimmer's face",
  },
  {
    src: 'https://images.unsplash.com/photo-1492691527719-6b17f5d94c3e',
    alt: 'Swirling backyard pool party',
  },
  {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    alt: 'Runners fleeing a glitching house',
  },
];

export default function HeroSlideshow() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex(([i]) => [(i + 1) % slides.length, 1]);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 flex items-end pb-12 px-6 sm:px-12 md:px-20">
        <h1 className="font-display text-white text-3xl sm:text-5xl lg:text-6xl drop-shadow-xl">
          Glitching Memory &amp; Machine
        </h1>
      </div>
    </div>
  );
}
