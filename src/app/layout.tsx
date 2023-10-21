/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

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
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
