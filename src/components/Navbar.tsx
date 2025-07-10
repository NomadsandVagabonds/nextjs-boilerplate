'use client';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/collections', label: 'Collections' },
  { href: '/selected-works', label: 'Selected Works' },
  { href: '/about', label: 'About' },
  { href: '/shop', label: 'Shop' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-[#111]/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand doubles as Home */}
        <Link href="/" className="font-display text-xl tracking-tight hover:opacity-80">
          Nomads&nbsp;&amp;&nbsp;Vagabonds
        </Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:underline underline-offset-4">
              {label}
            </Link>
          ))}
        </nav>
        {/* Dark-mode switch */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        )}
      </div>
    </header>
  );
}
