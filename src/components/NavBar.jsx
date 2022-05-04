import React, { useState } from 'react';

function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav((prevNav) => !prevNav);

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
        className="text-center min-h-44px min-w-44px block p-4 text-4xl md:text-base"
        href={url}
      >
        {title}
      </a>
    </li>
  ));

  // navbar here
  return (
    <header className="flex justify-between bg-gradient-to-b from-soapstone dark:from-county-green">
      <p className="block p-4">mhasbisaputra</p>
      <nav>
        <button
          type="button"
          onClick={toggleNav}
          className="p-4 relative md:hidden z-10"
        >
          {nav ? 'Close' : 'Menu'}
        </button>
        <ul
          className={
            nav
              ? 'absolute md:static bg-soapstone md:bg-none left-0 md:left-auto top-0 md:top-auto w-full md:w-auto h-screen md:h-auto min-h-410px md:min-h-0 flex flex-col md:flex-row justify-center md:justify-stretch items-center'
              : 'hidden md:flex items-center'
          }
        >
          {navElements}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
