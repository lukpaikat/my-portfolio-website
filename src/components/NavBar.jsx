// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

// alternative before for navElements
/* before:transition-all before:-z-10 before:absolute
  before:bg-salmon before:top-1/2 before:-translate-y-1/2
 before:left-1/2 before:-translate-x-1/2 before:h-0
 before:hover:h-3/4 before:w-0 before:hover:w-1/2
*/

function NavBar() {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);
  const oppositeTheme = theme === 'dark' ? 'light' : 'dark';

  const toggleNav = () => setNav((prevNav) => !prevNav);

  const navItems = [
    ['Home', 'hero', 'nav1', -200],
    ['About', 'about', 'nav2', -100],
    ['Skills', 'skills', 'nav3', -100],
    ['Work', 'work', 'nav4', -100],
    ['Contact', 'contact', 'nav5', -100],
  ];
  const navElements = navItems.map(([title, url, key, offset]) => (
    <li key={key}>
      <Link
        spy
        activeClass="after:!w-1/6 md:after:w-1/2"
        className="relative z-10 md:text-center min-h-44px min-w-44px w-60 md:w-auto block p-4 md:text-base transition-all
          border-2 border-transparent hover:border-county-green hover:dark:border-soapstone
          after:transition-all after:absolute after:h-0.5 after:dark:bg-soapstone after:bg-county-green
          after:bottom-3 after:left-4 md:after:left-1/2 md:after:-translate-x-1/2 hover:after:w-1/6 md:hover:after:w-1/2 after:w-0
          2xl:text-xl"
        to={url}
        smooth
        duration={500}
        offset={offset}
        onClick={() => { if (nav) { toggleNav(); } }}
      >
        {title}
      </Link>
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
    <header className="fixed top-0 left-0 flex justify-between bg-gradient-to-b transition-colors from-soapstone dark:from-county-green-darker w-full">
      <p className="block p-4 2xl:text-xl">
        mhasbisaputra
      </p>
      <div className="flex flex-shrink-0">
        <button
          aria-label="toggle dark mode"
          type="button"
          className="transition-colors min-w-44px min-h-44px hover:bg-county-green dark:hover:bg-soapstone dark:hover:text-county-green hover:text-soapstone"
          onClick={toggleTheme}
        >
          <div className="relative w-full">
            <Icon
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all opacity-100 rotate-0 dark:opacity-0 dark:rotate-180"
              icon="clarity:moon-solid"
            />
            <Icon
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all opacity-0 rotate-180 dark:opacity-100 dark:rotate-0"
              icon="clarity:sun-solid"
            />
          </div>
        </button>
        <button
          type="button"
          onClick={toggleNav}
          className="p-4 relative md:hidden z-10 transition-colors min-w-44px min-h-44px hover:bg-county-green dark:hover:bg-soapstone dark:hover:text-county-green hover:text-soapstone"
        >
          {nav ? (
            <Icon icon="clarity:close-line" />
          ) : (
            <Icon icon="clarity:menu-line" />
          )}
        </button>
        {/* nav ? 'flex align-middle' : 'hidden md:flex align-middle' */}
        <nav className={`flex align-middle ${nav ? '' : 'hidden md:flex'}`}>
          <ul
            className="absolute md:static
            bg-soapstone dark:bg-county-green md:!bg-transparent
            right-0 md:right-auto top-0 md:top-auto
            w-full max-w-xs md:w-auto md:max-w-none h-[min(320px,_100vh)] md:h-auto md:min-h-0
            flex flex-col md:flex-row md:justify-stretch items-start md:items-center shadow-md md:shadow-none overflow-y-auto md:overflow-hidden"
          >
            {navElements}
          </ul>

        </nav>
      </div>
    </header>
  );
}

export default NavBar;
