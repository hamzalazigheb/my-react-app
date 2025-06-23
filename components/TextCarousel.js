'use client';

const TextCarousel = () => {
  const items = [
    "Des solutions sur-mesure, rien que pour vous.",
    "Un accompagnement sur-mesure",
    "30 ans d'expertise éprouvée",
    "Une vision globale et à long terme",
    "Transparence et rigueur",
    "Des solutions innovantes et exclusives",
    "Un accompagnement premium et proactif"
  ];

  // Duplicate items for a seamless loop
  const duplicatedItems = [...items, ...items];

  return (
    <div className="text-carousel-container">
      <div className="text-carousel-track">
        {duplicatedItems.map((text, index) => (
          <div className="text-carousel-cell" key={index}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel; 