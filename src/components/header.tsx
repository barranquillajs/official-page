import { useEffect, useState } from 'react';
import cn from 'classnames';

import bqjsLogo from '/src/assets/BAQJS.svg';
import bqjsPartialLogo from '/src/assets/BAQJS-partial.svg';

const classes = {
  link: cn('font-bold text-lg text-end'),
};

export const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  const renderClasses = {
    container: cn('top-0 z-10 sticky transition-all', {
      'bg-base-100/70 backdrop-blur-md': !isAtTop,
    }),
    headerImage: cn('rounded-md transition-all', {
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
          <a href="/" className="flex items-center">
            <img className={renderClasses.headerImage} src={headerImage.src} alt="BarranquillaJS logo" />
          </a>
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
      <a className={classes.link} href="/events">
        Eventos
      </a>
    </li>
    <li>
      <a className={classes.link} href="/sponsors">
        Sponsors
      </a>
    </li>
    <li>
      <a className={classes.link} href="/#staff">
        Organizadores
      </a>
    </li>
    <li>
      <a className={classes.link} href="/#heroes">
        Héroes
      </a>
    </li>

    <a href="/sponsors" className="btn btn-primary">
      Únete ahora
    </a>
  </>
);
