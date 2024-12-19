import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VocabPK - English Vocabulary Learning',
  description: 'Learn and master English vocabulary through interactive battles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-14 min-h-screen bg-gray-50/50">
          {children}
        </main>
      </body>
    </html>
  );
}