/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

import React from "react";
import Link from "next/link";

interface CardProps {
  name: string;
  date: string;
  imageSrc: string;
}

function Card({ name, date, imageSrc }: CardProps) {
  return (
    <>
      <Link href={`/travel/${name}`}>
        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 transition duration-300 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:bg-gray-200">
          <img
            src={imageSrc}
            alt="card image"
            className="pointer-events-none object-cover group-hover:opacity-75"
          />
          <button type="button" className="absolute inset-0 focus:outline-none">
            <span className="sr-only">View details for {name}</span>
          </button>
        </div>
        <div className="flex justify-between">
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
            {name}
          </p>
          <p className="pointer-events-none mt-2 block text-sm font-medium text-gray-500">
            {date}
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
