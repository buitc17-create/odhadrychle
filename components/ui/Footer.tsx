import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="mb-4">Odhad nemovitosti online během několika minut.</p>
        <p className="mb-4">
          Máte dotaz? Kontaktujte nás: <a href="mailto:info@odhadrychle.cz" className="underline">info@odhadrychle.cz</a> • <a href="tel:+420725430492" className="underline">+420 725 430 492</a>
        </p>
        <p>Všechny poskytnuté údaje jsou zpracovány důvěrně.</p>
      </div>
    </footer>
  );
};

export default Footer;