/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

'use client';

import React from 'react';
import { SideNavigation, TopNavigation } from '@/components/index';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SideNavigation />
      <div className="lg:pl-72">
        <TopNavigation />
        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
