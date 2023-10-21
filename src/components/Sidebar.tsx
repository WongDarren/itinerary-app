/*
 * Copyright (c) 2023 Darren Wong. All rights reserved.
 *
 */

'use client';

import React from 'react';
import {
  ArchiveBoxIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    name: 'My Trips',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'Upcoming',
    href: '/upcoming',
    icon: BookmarkIcon
  },
  { name: 'Archived', href: '/archived', icon: ArchiveBoxIcon }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Sidebar() {
  const router = usePathname();
  console.log(router);

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
      <div className="flex h-16 shrink-0 items-center">
        <Link href={'/'}>
          <img
            className="h-8 w-auto"
            src="https://placehold.co/100x100"
            alt="Itinerary App"
          />{' '}
        </Link>
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={classNames(
                      router === item.href
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                      'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <Link
              href="/settings"
              className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
            >
              <Cog6ToothIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
