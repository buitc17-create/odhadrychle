import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          OdhadRychle
        </Link>

        {/* Desktop navigace */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600">Domů</Link></li>
            <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
            <li><a href="#" className="hover:text-blue-600">O nás</a></li>
            <li><a href="#" className="hover:text-blue-600">Kontakt</a></li>
          </ul>
        </nav>

        {/* Mobilní navigace - Blog odkaz a hamburger */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link href="/blog" className="text-blue-600 font-medium hover:text-blue-800">
            Blog
          </Link>

          {/* Hamburger tlačítko */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-800 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-800 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-gray-800 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobilní menu dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t mt-4">
          <ul className="flex flex-col py-4">
            <li>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Domů
              </Link>
            </li>
            <li>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                O nás
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
