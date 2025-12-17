import React from 'react';

interface HeroProps {
  onCtaClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section>
      <h1>Hero Section</h1>
      <button onClick={onCtaClick}>CTA</button>
    </section>
  );
};

export default Hero;