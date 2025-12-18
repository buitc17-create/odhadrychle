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
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Poslední online odhady</h2>
        <p className="text-center mb-8">Ukázka nedávno zadaných odhadů – částky jsou pouze informativní.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {estimates.map((estimate, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <div className="text-sm font-semibold mb-2">{estimate.type}</div>
              <div className="text-lg font-bold text-blue-600 mb-1">{estimate.location}</div>
              <div className="text-xl font-bold">{estimate.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEstimatesTicker;