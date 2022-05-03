import React, { useState } from 'react';

function NavBar() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(() => !nav);
  // navbar here
  return (
    <header className="flex justify-between bg-gradient-to-b from-soapstone dark:from-county-green">
      <p className="block p-4">mhasbisaputra</p>
      <nav>
        <button type="button" onClick={toggleNav} className="p-4 md:hidden">
          Menu
        </button>
        <ul className="hidden md:flex">
          <li>
            <a className="block p-4" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="block p-4" href="/">
              About
            </a>
          </li>
          <li>
            <a className="block p-4" href="/">
              Skills
            </a>
          </li>
          <li>
            <a className="block p-4" href="/">
              Work
            </a>
          </li>
          <li>
            <a className="block p-4" href="/">
              Contact
            </a>
          </li>
        </ul>
        {/* mobile menu */}
        <ul
          className={
            nav
              ? 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center'
              : 'hidden'
          }
        >
          <li>
            <a className="text-center p-4" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-center p-4" href="/">
              About
            </a>
          </li>
          <li>
            <a className="text-center p-4" href="/">
              Skills
            </a>
          </li>
          <li>
            <a className="text-center p-4" href="/">
              Work
            </a>
          </li>
          <li>
            <a className="text-center p-4" href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
