import React from 'react';

const RecentEstimatesTicker: React.FC = () => {
  const estimates = [
    { type: 'Odhad bytu 2+kk', location: 'Karviná', price: '4.4 mil. Kč' },
    { type: 'Odhad bytu 2+kk', location: 'Praha', price: '6.5 mil. Kč' },
    { type: 'Odhad bytu 3+kk', location: 'Ostrava', price: '3.8 mil. Kč' },
    { type: 'Odhad bytu 1+kk', location: 'Ostrava', price: '4.2 mil. Kč' },
    { type: 'Odhad bytu 3+kk', location: 'Praha', price: '10.8 mil. Kč' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">Poslední online odhady</h2>
        <p className="text-center mb-12 text-gray-600 max-w-2xl mx-auto">
          Ukázka nedávno zadaných odhadů – částky jsou pouze informativní.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {estimates.map((estimate, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold text-lg">🏠</span>
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-2">{estimate.type}</div>
                <div className="text-lg font-bold text-blue-600 mb-1">{estimate.location}</div>
                <div className="text-2xl font-bold text-gray-800">{estimate.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEstimatesTicker;