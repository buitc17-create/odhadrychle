import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">OdhadRychle</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Nezávazný odhad ceny na základě skutečných parametrů vaší nemovitosti a aktuální situace na trhu.
          </p>
          <p className="text-gray-300 mt-2">Rychle, přehledně a zdarma.</p>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Odhad nemovitosti online během několika minut.
            </p>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="mailto:info@odhadrychle.cz" className="text-gray-300 hover:text-white transition-colors">
                info@odhadrychle.cz
              </a>
              <a href="tel:+420725430492" className="text-gray-300 hover:text-white transition-colors">
                +420 725 430 492
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Všechny poskytnuté údaje jsou zpracovány důvěrně.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;