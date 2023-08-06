'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import cn from 'classnames';

import bqjsLogo from '@/public/assets/BAQJS.svg';
import bqjsPartialLogo from '@/public/assets/BAQJS-partial.svg';

const classes = {
  link: cn('font-bold text-lg text-end'),
};

export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const renderClasses = {
    container: cn('top-0 z-10 sticky', {
      'bg-base-100/70 backdrop-blur-md': !isAtTop,
    }),
    headerImage: cn('rounded-md', {
      'h-28 w-28': isAtTop,
      'h-10 w-28': !isAtTop,
    }),
  };

  const headerImage = isAtTop ? bqjsLogo : bqjsPartialLogo;

  const handleScroll = () => {
    const isTop = window.scrollY === 0;
    setIsAtTop(isTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(renderClasses.container)}>
      <nav className="container navbar mx-auto">
        <div className="flex-1">
          <Link href="/" className="flex items-center">
            <Image className={renderClasses.headerImage} src={headerImage} alt="BarranquillaJS logo" />
          </Link>
        </div>

        <div className="flex-none">
          <div className="flex lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 gap-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <NavbarList />
            </ul>
          </div>
          <ul className="menu menu-horizontal items-center hidden lg:flex gap-2">
            <NavbarList />
          </ul>
        </div>
      </nav>
    </header>
  );
};

const NavbarList = () => (
  <>
    <li>
      <Link className={classes.link} href="/events">
        Eventos
      </Link>
    </li>
    <li>
      <Link className={classes.link} href="/sponsors">
        Sponsors
      </Link>
    </li>
    <li>
      <Link className={classes.link} href={{ pathname: '/', hash: 'staff' }}>
        Organizadores
      </Link>
    </li>
    <li>
      <Link className={classes.link} href={{ pathname: '/', hash: 'heroes' }}>
        Héroes
      </Link>
    </li>

    <Link href="/sponsors" className={(classes.link, 'btn btn-primary')}>
      Únete ahora
    </Link>
  </>
);
