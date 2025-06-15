import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './CarouselBand.css';

// Import images
import moneyGrowth from '../assets/money-growth_12028691.png';
import money from '../assets/money_12037483.png';
import man from '../assets/man_14038016.png';

const CarouselBand = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Optimisation Fiscale",
      description: "Réduisez votre imposition en toute légalité",
      imageSrc: moneyGrowth
    },
    {
      title: "Gestion de Patrimoine",
      description: "Protégez et faites fructifier vos actifs",
      imageSrc: money
    },
    {
      title: "Investissement Immobilier",
      description: "Bénéficiez des avantages fiscaux de l'immobilier",
      imageSrc: man
    },
    {
      title: "Conseil Stratégique",
      description: "Des solutions adaptées à vos objectifs",
      imageSrc: moneyGrowth
    },
    {
      title: "Financer les études de mes enfants",
      description: "Préparez l'avenir éducatif de vos enfants avec des solutions adaptées.",
      imageSrc: money
    },
    {
      title: "Préparer ma retraite",
      description: "Assurez votre avenir financier avec des stratégies de retraite personnalisées.",
      imageSrc: man
    },
    {
      title: "Comprendre mes placements",
      description: "Décryptez le monde des placements pour des décisions éclairées.",
      imageSrc: moneyGrowth
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carousel-band">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`
            }}
          >
            <div className="slide-content">
              <Image src={slide.imageSrc} alt={slide.title} width={80} height={80} />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBand; 