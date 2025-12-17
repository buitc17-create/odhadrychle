import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      icon: '📝',
      title: 'Vyplníte údaje o nemovitosti',
      description: 'Zadáte parametry, které nejvíce ovlivňují cenu.',
    },
    {
      number: 2,
      icon: '📊',
      title: 'Vyhodnotíme podle tržních dat',
      description: 'Model provede porovnání s aktuální situací na trhu a podobnými nemovitostmi.',
    },
    {
      number: 3,
      icon: '✅',
      title: 'Dokončíme ověření a odešleme odhad',
      description: 'Zavoláme vám do 30 minut. Po ověření údajů odešleme přesný odhad a další informace do e-mailu.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">Jak to funguje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center group">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 group-hover:bg-blue-700 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;