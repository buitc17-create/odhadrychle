import React, { useState } from 'react';

const CookieConsent: React.FC = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-sm">
          Aby náš web správně fungoval a abychom mohli zlepšovat jeho výkon, používáme soubory cookies. Nezbytné cookies zajišťují fungování webu, další lze povolit dobrovolně.
        </p>
        <div className="flex space-x-4 ml-4">
          <button
            onClick={() => setShow(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Souhlasím
          </button>
          <button
            onClick={() => setShow(false)}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Nesouhlasím
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;