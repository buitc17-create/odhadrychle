import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Vyplníte údaje o nemovitosti',
      description: 'Zadáte parametry, které nejvíce ovlivňují cenu.',
    },
    {
      number: 2,
      title: 'Vyhodnotíme podle tržních dat',
      description: 'Model provede porovnání s aktuální situací na trhu a podobnými nemovitostmi.',
    },
    {
      number: 3,
      title: 'Dokončíme ověření a odešleme odhad',
      description: 'Zavoláme vám do 30 minut. Po ověření údajů odešleme přesný odhad a další informace do e-mailu.',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Jak to funguje</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;