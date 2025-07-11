import HeroSlideshow from '@/components/HeroSlideshow';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <section className="max-w-7xl mx-auto px-6 py-24 prose dark:prose-invert text-center">
        <p>
          Exploring the porous boundary between creativity and appropriation—where algorithmic memory ruptures into lived experience.
        </p>
        <p className="mt-8">
          <Link href="/collections" className="inline-block bg-accent text-white px-8 py-4 rounded-md hover:opacity-90 transition">
            View Collections
          </Link>
        </p>
      </section>
    </>
  );
}
