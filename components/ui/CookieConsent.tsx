import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <h4 className="font-semibold mb-2">Používáme cookies</h4>
          <p className="text-sm text-gray-300 max-w-2xl">
            Aby náš web správně fungoval a abychom mohli zlepšovat jeho výkon, používáme soubory cookies. Nezbytné cookies zajišťují fungování webu, další lze povolit dobrovolně.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => setShow(false)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Souhlasím
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors font-medium"
          >
            Nesouhlasím
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;