import React from 'react';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Zjistěte reálný odhad ceny nemovitosti zdarma online
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Chcete rychle zjistit, jakou má vaše nemovitost aktuální tržní hodnotu? Náš online nástroj pro odhad ceny nemovitosti nabízí nezávazný odhad zdarma, který vychází z reálných tržních dat, lokality a parametrů nemovitosti.
        </p>
        <button
          onClick={onCtaClick}
          className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Získat odhad zdarma
        </button>
      </div>
    </section>
  );
};

export default Hero;