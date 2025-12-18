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
    <section className="py-12 bg-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Odhad nemovitosti online. Prodej i pronájem
        </h2>
        <p className="text-center mb-8">
          Vyplnění formuláře zabere přibližně 1 minutu. Čím přesnější údaje uvedete, tím přesnější bude orientační odhad.
        </p>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Typ odhadu</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Prodej"
                  checked={estimateType === 'Prodej'}
                  onChange={(e) => setEstimateType(e.target.value as 'Prodej')}
                  className="mr-2"
                />
                Prodej
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="Pronájem"
                  checked={estimateType === 'Pronájem'}
                  onChange={(e) => setEstimateType(e.target.value as 'Pronájem')}
                  className="mr-2"
                />
                Pronájem
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Pokračovat k zadání parametrů
          </button>
        </form>
        {formSubmitted && priceEstimate && (
          <div className="mt-6 bg-green-100 p-4 rounded-lg">
            <p className="text-green-800">
              Odhad ceny: {priceEstimate.min.toLocaleString()} - {priceEstimate.max.toLocaleString()} Kč
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EstimateForm;