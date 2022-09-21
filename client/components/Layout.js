import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { BarsIcon4 } from '@heroicons/react/24/outline';

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
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">AkangTour</a>
            </Link>
            <div>
              <BarsIcon4 />
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4"> {cjildren}</main>
      </div>
    </>
  );
};

export default Layout;
