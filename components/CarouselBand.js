import { useState, useEffect } from 'react';
import Link from 'next/link';
import LottieCanvas from './LottieCanvas';

const slides = [
  {
    title: "Audit Patrimonial",
    description: "Analysez votre situation financière actuelle avec notre audit patrimonial complet. Nous identifions vos forces, vos faiblesses et les opportunités d'optimisation pour votre avenir financier.",
    lottie: "https://lottie.host/YOUR_ANIMATION_ID.lottie", // Remplace par l'URL de ton animation Lottie
    bgColor: "linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%)",
    link: "/audit-patrimonial"
  },
  {
    title: "Solutions de Projets",
    description: "Transformez vos projets en réalité avec nos solutions personnalisées. De l'investissement immobilier à la préparation de retraite, nous vous accompagnons dans la concrétisation de vos objectifs.",
    icon: "/images/apartment_6191268.png",
    bgColor: "linear-gradient(135deg, #2C3E50 0%, #1A2A44 100%)",
    link: "/solutions-projets"
  },
  {
    title: "Gestion de Patrimonial sur Mesure",
    description: "Bénéficiez d'une gestion patrimoniale adaptée à votre profil et vos objectifs. Notre approche personnalisée vous garantit un accompagnement exclusif et des résultats optimaux.",
    icon: "/images/placement_7870830.png",
    bgColor: "linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%)",
    link: "/gestion-patrimoniale"
  },
  {
    title: "Partenaires",
    description: "Découvrez notre réseau de partenaires de confiance, sélectionnés pour leur expertise et leur qualité de service. Ensemble, nous vous offrons les meilleures solutions du marché.",
    icon: "/images/deal_914022.png",
    bgColor: "linear-gradient(135deg, #2C3E50 0%, #1A2A44 100%)",
    link: "/partenaires"
  },
  {
    title: "Outils Pédagogiques",
    description: "Accédez à nos ressources éducatives et outils pédagogiques pour mieux comprendre les enjeux patrimoniaux. Formez-vous et prenez des décisions éclairées pour votre avenir financier.",
    icon: "/images/location_8391003.png",
    bgColor: "linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%)",
    link: "/outils-pedagogiques"
  }
];

export default function CarouselBand() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleIndicatorClick = (index) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <section className="carousel-band">
      <div className="carousel-container">
        {slides.map((slide, index) => {
          let slideClass = 'carousel-slide';
          if (index === currentSlide) {
            slideClass += ' active';
          } else if (index < currentSlide) {
            slideClass += ' inactive left';
          } else {
            slideClass += ' inactive';
          }
          return (
            <div
              key={index}
              className={slideClass}
              style={{
                background: slide.bgColor,
                opacity: isTransitioning ? 0 : 1
              }}
            >
              <div className="carousel-content">
                <div className="carousel-text">
                  <div className="carousel-icon">
                    {slide.lottie ? (
                      <LottieCanvas src={slide.lottie} width={180} height={180} />
                    ) : (
                      <img src={slide.icon} alt={slide.title} style={{ width: 180, height: 180 }} />
                    )}
                  </div>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <Link href={slide.link} className="carousel-cta">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
} 