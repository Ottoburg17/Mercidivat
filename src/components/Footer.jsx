import React from "react";
import { FaTiktok, FaInstagram, FaFacebookMessenger } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-black text-gold py-8 text-center">
      <div className="max-w-screen-lg mx-auto px-4">
        {/* Mini menü */}
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center gap-6 text-sm sm:text-base font-medium">
            <li>
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Rólunk
              </a>
            </li>
            <li>
              <Link
                to="/shop"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Kollekció
              </Link>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Kapcsolat
              </a>
            </li>
          </ul>
        </nav>

        {/* Ikonok */}
        <div className="flex justify-center gap-6 text-2xl mb-6">
          <a
            href="https://www.tiktok.com/@mercidivat"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTiktok />
          </a>

          <a
            href="https://www.instagram.com/merci_divat/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaInstagram />
          </a>

          <a
            href="https://m.me/melania.barna.5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaFacebookMessenger />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; 2025 Merci Divat. Minden jog fenntartva.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
