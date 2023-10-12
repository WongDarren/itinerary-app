import './globals.css';
import { Inter } from 'next/font/google';
import { Layout } from '@/components';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Itinerary App',
  description: 'Itinerary App'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} flex min-h-full`}>
        <div className="w-full">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  );
}
