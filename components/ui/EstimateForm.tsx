import React, { useState } from 'react';

interface EstimateFormProps {
  formSubmitted: boolean;
  setFormSubmitted: (submitted: boolean) => void;
  priceEstimate: { min: number; max: number } | null;
  setPriceEstimate: (estimate: { min: number; max: number } | null) => void;
}

const EstimateForm: React.FC<EstimateFormProps> = ({
  formSubmitted,
  setFormSubmitted,
  priceEstimate,
  setPriceEstimate,
}) => {
  const [estimateType, setEstimateType] = useState<'Prodej' | 'Pronájem'>('Prodej');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setPriceEstimate({ min: 4000000, max: 5000000 }); // Example
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Odhad nemovitosti online. Prodej i pronájem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vyplnění formuláře zabere přibližně 1 minutu. Čím přesnější údaje uvedete, tím přesnější bude orientační odhad.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Typ odhadu</label>
              <div className="flex space-x-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="Prodej"
                    checked={estimateType === 'Prodej'}
                    onChange={(e) => setEstimateType(e.target.value as 'Prodej')}
                    className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">Prodej</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="Pronájem"
                    checked={estimateType === 'Pronájem'}
                    onChange={(e) => setEstimateType(e.target.value as 'Pronájem')}
                    className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-gray-700 font-medium">Pronájem</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Pokračovat k zadání parametrů
            </button>
          </form>
          {formSubmitted && priceEstimate && (
            <div className="mt-8 bg-green-50 border border-green-200 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h3 className="text-lg font-semibold text-green-800">Odhad dokončen!</h3>
              </div>
              <p className="text-green-700 text-lg">
                Odhad ceny: <span className="font-bold">{priceEstimate.min.toLocaleString()} - {priceEstimate.max.toLocaleString()} Kč</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EstimateForm;