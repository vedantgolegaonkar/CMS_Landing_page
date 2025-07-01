import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import navbarText from '../constants/Navbar';

const Navbar = () => {
  const [height, setHeight] = useState(64);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updatedDimensions = () => {
      const screenHeight = window.innerHeight;

      if (screenHeight < 600) setHeight(56);
      else if (screenHeight < 800) setHeight(64);
      else if (screenHeight < 1000) setHeight(80);
      else setHeight(96);
    };

    const debouncedUpdate = debounce(updatedDimensions, 200);
    updatedDimensions();
    window.addEventListener('resize', debouncedUpdate);
    return () => {
      window.removeEventListener('resize', debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 bg-white flex items-center px-7 z-50"
        style={{ height: `${height}px` }}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl font-bold mr-4"
        >
          ☰
        </button>

        {/* Logo */}
        <a
          href="#"
          className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold"
        >
          Logo
        </a>

        {/* Desktop Nav */}
        <ul className="ml-auto hidden lg:flex space-x-10 font-semibold text-sm md:text-base lg:text-lg xl:text-xl">
          {navbarText.map((link) => (
            <li key={link.id} className="hover:text-blue-500 cursor-pointer">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* Auth buttons (ALWAYS visible) */}
        <div className="ml-auto flex items-center space-x-4">
          <button className="font-semibold text-base sm:text-lg lg:text-xl">
            Sign In
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-base sm:text-lg lg:text-xl">
            Get Started
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu (only UL) */}
      {menuOpen && (
        <div className="fixed top-[64px] w-full bg-white shadow-md px-7 py-4 z-40 lg:hidden">
          <ul className="flex flex-col space-y-4 font-semibold text-base">
            {navbarText.map((link) => (
            <li key={link.id} className="hover:text-blue-500 cursor-pointer">
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
