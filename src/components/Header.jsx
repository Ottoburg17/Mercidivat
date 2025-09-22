import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Kezdőoldal", href: "#home" },
    { name: "Rólunk", href: "#about" },
    { name: "Termékek", href: "#products" },
    { name: "Elérhetőség", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logó balra */}
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Merci Divat logo" className="h-12 md:h-16" />
        </div>

        {/* Desktop menü */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8 text-white text-lg md:text-xl">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger ikon mobilon */}
        <div className="md:hidden flex-shrink-0">
          <button
            className="text-white text-3xl hover:text-yellow-400 transition-colors duration-300"
            onClick={toggleMenu}
          >
            <HiMenu />
          </button>
        </div>
      </div>

      {/* Mobil menü overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close gomb */}
        <button
          className="absolute top-6 right-6 text-3xl text-white hover:text-red-500 z-50"
          onClick={toggleMenu}
        >
          <HiX />
        </button>

        {/* Menü linkek középre */}
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl text-white">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
