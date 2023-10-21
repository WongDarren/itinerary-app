/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

import React from "react";
import Grid from "../../components/Grid";

function Page() {
  return (
    <>
      <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Archived Trips
      </h1>
      <div className="mt-6">
        <Grid />
      </div>
    </>
  );
}

export default Page;
