import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
          OdhadRychle
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li><a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Domů</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">O nás</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Kontakt</a></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;