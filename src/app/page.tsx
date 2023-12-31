/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

'use client';

import Grid from '@/components/Grid';

export default function Home() {
  return (
    <>
      <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        My Trips
      </h1>
      <div className="mt-6">
        <Grid />
      </div>
    </>
  );
}
