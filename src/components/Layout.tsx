'use client';

import React from 'react';
import { Footer, Header, Navigation } from '@/components';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
