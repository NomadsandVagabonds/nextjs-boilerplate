'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  type: 'image' | 'video';
  src: string;
  /** Short description for accessibility */
  alt: string;
};

const slides: Slide[] = [
  {
    type: 'image',
    src: '/images/4.jpg',
    alt: 'Soft Collapse Collection',
  },
  {
    type: 'video',
    src: '/video/Residuals_Flood_web.mp4',
    alt: 'Residuals',
  },
  {
    type: 'image',
    src: '/images/Scene1.jpg',
    alt: 'Selected Works',
  },
  {
    type: 'video',
    src: '/video/exhibit.mp4',
    alt: 'Exhibitions',
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
          aria-label={slides[index].alt}
          role="img"
        >
          {slides[index].type === 'image' ? (
            <Image
              src={slides[index].src}
              alt={slides[index].alt}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />
          ) : (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-center"
            >
              <source src={slides[index].src} type="video/mp4" />
            </video>
          )}
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
