/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, ArchiveBoxIcon } from '@heroicons/react/24/outline/';

import logo from '../public/logo32.png';

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + ' - AkangTour' : 'AkangTour'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 lg:h-16 items-center px-4 lg:px-16 justify-between shadow-md mt-1">
            <Link href="/">
              <div className="flex justify-center items-center gap-2">
                <Image src={logo} width={32} height={32} layout="fixed" />
                <a className="text-lg font-bold">Logo</a>
              </div>
            </Link>
            <div className="lg:w-[200px]">
              <Bars3Icon className="h-6 w-6 lg:hidden" />
              <div className="hidden lg:flex lg:gap-4 justify-between items-center">
                <button className="secondary-button px-4 py-3 w-24">
                  Sign in
                </button>
                <button className="primary-button px-4 py-3 w-24">
                  Sign up
                </button>
              </div>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 mb-4 px-4 max-w-screen-xl">
          {' '}
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;




