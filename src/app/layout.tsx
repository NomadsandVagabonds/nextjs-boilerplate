import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['600', '700'], variable: '--font-display' });

export const metadata = {
  title: 'Nomads & Vagabonds \u2014 Digital Art',
  description: 'Glitching the boundaries between memory & machine',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}> 
      <body className="font-body bg-white text-[#111] dark:bg-[#111] dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
