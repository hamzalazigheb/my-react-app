import React from 'react';
import './OptimisationFiscale.css';
import FiscalChatBot from '../components/FiscalChatBot';

const OptimisationFiscale = () => {
  return (
    <div className="optimisation-fiscale">
      <div className="hero-section">
        <h1>Optimisation Fiscale</h1>
        <p>Optimisez votre situation fiscale en toute légalité</p>
      </div>

      <div className="content-section">
        <div className="main-content">
          <section className="benefits">
            <h2>Nos Solutions d'Optimisation Fiscale</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <i className="fas fa-chart-line"></i>
                <h3>Réduction d'Impôts</h3>
                <p>Découvrez les dispositifs légaux pour réduire votre imposition</p>
              </div>
              <div className="benefit-card">
                <i className="fas fa-home"></i>
                <h3>Investissement Immobilier</h3>
                <p>Profitez des avantages fiscaux liés à l'investissement immobilier</p>
              </div>
              <div className="benefit-card">
                <i className="fas fa-piggy-bank"></i>
                <h3>Épargne Fiscale</h3>
                <p>Optimisez votre épargne avec des placements fiscalement avantageux</p>
              </div>
              <div className="benefit-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Protection du Patrimoine</h3>
                <p>Sécurisez et optimisez la transmission de votre patrimoine</p>
              </div>
            </div>
          </section>

          <section className="why-choose">
            <h2>Pourquoi Choisir Notre Expertise ?</h2>
            <div className="features">
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <p>Analyse personnalisée de votre situation fiscale</p>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <p>Solutions adaptées à vos objectifs</p>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <p>Accompagnement sur le long terme</p>
              </div>
              <div className="feature">
                <i className="fas fa-check-circle"></i>
                <p>Expertise reconnue en optimisation fiscale</p>
              </div>
            </div>
          </section>

          <section className="process">
            <h2>Notre Processus</h2>
            <div className="process-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Analyse</h3>
                <p>Étude approfondie de votre situation fiscale actuelle</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Stratégie</h3>
                <p>Élaboration d'une stratégie d'optimisation personnalisée</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Mise en œuvre</h3>
                <p>Accompagnement dans la mise en place des solutions</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Suivi</h3>
                <p>Ajustements et optimisation continue</p>
              </div>
            </div>
          </section>
        </div>

        <aside className="cta-section">
          <div className="cta-card">
            <h3>Prêt à Optimiser Votre Fiscalité ?</h3>
            <p>Prenez rendez-vous avec l'un de nos experts pour une analyse personnalisée.</p>
            <button className="cta-button">Prendre Rendez-vous</button>
          </div>
        </aside>
      </div>

      <FiscalChatBot />
    </div>
  );
};

export default OptimisationFiscale; 