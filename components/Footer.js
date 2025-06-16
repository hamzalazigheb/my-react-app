// Importation du composant Link de Next.js pour la navigation
import Link from 'next/link';
import '../src/components/Footer.css';

export default function Footer() {
  return (
    // Conteneur principal du footer
    <footer className="footer">
      {/* Contenu principal du footer divisé en sections */}
      <div className="footer-content">
        {/* Section À propos */}
        <div className="footer-section">
          <h3>Azalée Patrimoine</h3>
          <p>Votre partenaire de confiance pour la gestion et l'optimisation de votre patrimoine.</p>
          <div className="social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
        
        {/* Section des liens rapides */}
        <div className="footer-section">
          <h3>Liens Rapides</h3>
          <ul>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/mentions-legales">Mentions Légales</Link></li>
            <li><Link href="/politique-confidentialite">Politique de Confidentialité</Link></li>
            <li><Link href="/audit-patrimonial">Audit patrimonial</Link></li>
            <li><Link href="/simulation-projets">Simulation de projets</Link></li>
            <li><Link href="/gestion-patrimoine-sur-mesure">Gestion de patrimoine sur-mesure</Link></li>
            <li><Link href="/partenaires">Partenaires</Link></li>
            <li><Link href="/outils-pedagogiques">Outils pédagogiques</Link></li>
          </ul>
        </div>
        
        {/* Section des informations de contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><i className="fas fa-envelope"></i> contact@azalee-patrimoine.fr</p>
          <p><i className="fas fa-phone"></i> +33 1 23 45 67 89</p>
          <p><i className="fas fa-map-marker-alt"></i> Paris, France</p>
        </div>

        {/* Section Newsletter */}
        <div className="footer-section">
          <h3>Newsletter</h3>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos actualités et conseils.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Votre email" />
            <button type="submit">S'inscrire</button>
          </form>
        </div>
      </div>
      
      {/* Section du bas du footer avec copyright */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2025 AZALEE PATRIMOINE. Tous droits réservés.</p>
          <div className="footer-links">
            <Link href="/mentions-legales">Mentions Légales</Link>
            <Link href="/politique-confidentialite">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 