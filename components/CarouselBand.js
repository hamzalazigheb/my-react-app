import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    title: "Votre Patrimoine, Notre Expertise",
    description: "Depuis 30 ans, nous sculptons l'avenir financier de ceux qui exigent l'excellence. Laissez-nous révéler le potentiel insoupçonné de votre patrimoine.",
    image: "/images/paris_desti_slider.webp",
    bgColor: "linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%)"
  },
  {
    title: "Solutions Sur-Mesure",
    description: "Des stratégies d'investissement innovantes et personnalisées, conçues pour répondre aux enjeux uniques de chaque client. De l'épargne salariale aux investissements immobiliers.",
    image: "/images/paris_desti_slider.webp",
    bgColor: "linear-gradient(135deg, #2C3E50 0%, #1A2A44 100%)"
  },
  {
    title: "Accompagnement Premium",
    description: "Un partenariat exclusif basé sur la confiance et l'excellence. Notre équipe d'experts vous accompagne à chaque étape de votre projet patrimonial.",
    image: "/images/paris_desti_slider.webp",
    bgColor: "linear-gradient(135deg, #1A2A44 0%, #2C3E50 100%)"
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
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{
              background: slide.bgColor,
              opacity: isTransitioning ? 0 : 1
            }}
          >
            <div className="carousel-content">
              <div className="carousel-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <Link href="/contact" className="carousel-cta">
                  Prendre rendez-vous
                </Link>
              </div>
              <div className="carousel-image">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
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