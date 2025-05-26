import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>À Propos</h3>
          <p>Azalée Patrimoine vous accompagne dans la gestion et l'optimisation de votre patrimoine avec expertise et professionnalisme.</p>
        </div>

        <div className="footer-section">
          <h3>Nos Services</h3>
          <ul>
            <li><a href="#conseil-strategique">Conseil Stratégique</a></li>
            <li><a href="#gestion-patrimoine">Gestion de Patrimoine</a></li>
            <li><a href="#optimisation-fiscale">Optimisation Fiscale</a></li>
            <li><a href="#investissement">Investissement Immobilier</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><i className="fas fa-phone"></i> +33 (0)1 23 45 67 89</li>
            <li><i className="fas fa-envelope"></i> contact@azalee-patrimoine.fr</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Avenue des Finances<br />75008 Paris, France</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Suivez-nous</h3>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Azalée Patrimoine. Tous droits réservés.</p>
          <div className="footer-links">
            <a href="/mentions-legales">Mentions Légales</a>
            <a href="/politique-confidentialite">Politique de Confidentialité</a>
            <a href="/cgv">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 