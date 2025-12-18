import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">OdhadRychle</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-blue-600">Domů</a></li>
            <li><a href="#" className="hover:text-blue-600">O nás</a></li>
            <li><a href="#" className="hover:text-blue-600">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;