// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((prevNav) => !prevNav);
  const [theme, setTheme] = useState(localStorage.theme);
  const oppositeTheme = theme === 'dark' ? 'light' : 'dark';

  const navItems = [
    ['Home', '/', 'nav1'],
    ['About', '/', 'nav2'],
    ['Skills', '/', 'nav3'],
    ['Work', '/', 'nav4'],
    ['Contact', '/', 'nav5'],
  ];
  const navElements = navItems.map(([title, url, key]) => (
    <li key={key}>
      <a
        className="text-center min-h-44px min-w-44px block p-4 md:text-base"
        href={url}
      >
        {title}
      </a>
    </li>
  ));
  const toggleTheme = () => {
    setTheme(oppositeTheme);
    localStorage.setItem('theme', oppositeTheme);
    if (oppositeTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 flex justify-between bg-gradient-to-b from-soapstone dark:from-county-green w-full">
      <p className="block p-4">
        mhasbi
        <br />
        saputra
      </p>
      <div className="flex flex-shrink-0">
        <button type="button" className="min-w-44px" onClick={toggleTheme}>
          <Icon
            className="m-auto"
            icon={
              oppositeTheme === 'light'
                ? 'clarity:sun-line'
                : 'clarity:moon-line'
            }
          />
        </button>
        <button
          type="button"
          onClick={toggleNav}
          className="p-4 relative md:hidden z-10"
        >
          {nav ? (
            <Icon icon="clarity:close-line" />
          ) : (
            <Icon icon="clarity:menu-line" />
          )}
        </button>
        <nav className={nav ? 'flex align-middle' : 'hidden md:flex align-middle'}>
          <ul
            className={
              nav
                ? 'absolute md:static bg-soapstone dark:bg-county-green md:bg-transparent right-0 md:right-auto top-0 md:top-auto w-full max-w-xs md:w-auto md:max-w-0 h-fit md:h-auto md:min-h-0 flex flex-col md:flex-row md:justify-stretch items-start shadow-md md:shadow-none pt-3'
                : 'hidden md:flex items-center'
            }
          >
            {navElements}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
