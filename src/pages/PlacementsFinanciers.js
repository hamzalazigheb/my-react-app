import React from 'react';
import './PlacementsFinanciers.css';

function PlacementsFinanciers({ content }) {
  const pageContent = content?.pages?.['placements-financiers'] || {
    title: 'Placements Financiers',
    sections: [
      {
        id: 'header',
        title: 'En-tête',
        content: 'Optimisez vos investissements financiers avec nos experts'
      },
      {
        id: 'main',
        title: 'Contenu Principal',
        content: 'Découvrez nos solutions de placements financiers adaptées à vos besoins...'
      },
      {
        id: 'services',
        title: 'Services',
        items: [
          {
            id: 'service1',
            title: 'Gestion d\'Actifs',
            content: 'Une gestion professionnelle de vos actifs financiers pour optimiser vos rendements.'
          },
          {
            id: 'service2',
            title: 'Investissements Diversifiés',
            content: 'Une stratégie d\'investissement diversifiée pour réduire les risques et maximiser les opportunités.'
          },
          {
            id: 'service3',
            title: 'Suivi Personnalisé',
            content: 'Un accompagnement sur mesure avec des conseils adaptés à vos objectifs.'
          }
        ]
      },
      {
        id: 'cta',
        title: 'Call to Action',
        content: {
          title: 'Prêt à optimiser vos placements ?',
          subtitle: 'Contactez-nous pour un rendez-vous personnalisé',
          buttonText: 'Prendre rendez-vous'
        }
      }
    ]
  };

  const getSection = (id) => pageContent.sections.find(s => s.id === id);
  const headerSection = getSection('header');
  const mainSection = getSection('main');
  const servicesSection = getSection('services');
  const ctaSection = getSection('cta');

  return (
    <div className="placements-financiers-container">
      <div className="page-header">
        <h1>{pageContent.title}</h1>
        {headerSection?.content && <p>{headerSection.content}</p>}
      </div>

      <div className="main-content">
        {mainSection?.content && (
          <div className="content-section">
            {mainSection.content}
          </div>
        )}

        {servicesSection?.items && (
          <div className="services-grid">
            {servicesSection.items.map((service) => (
              <div key={service.id} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.content}</p>
              </div>
            ))}
          </div>
        )}

        {ctaSection?.content && (
          <div className="cta-section">
            <h2>{ctaSection.content.title}</h2>
            <p>{ctaSection.content.subtitle}</p>
            <button className="cta-button">{ctaSection.content.buttonText}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PlacementsFinanciers; 