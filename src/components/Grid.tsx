/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

import React from "react";
import { CardList } from "@/components/index";

function Grid() {
  return (
    <>
      <ul
        role="list"
        className="xs:grid-cols-1 grid gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 2xl:grid-cols-5"
      >
        <CardList />
      </ul>
    </>
  );
}

export default Grid;
