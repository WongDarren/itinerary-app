/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

import React from 'react';
import Sidebar from '@/components/Sidebar';

function SideNavigation() {
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <Sidebar />
      </div>
    </>
  );
}

export default SideNavigation;
