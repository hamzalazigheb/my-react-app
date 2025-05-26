import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo1 from './assets/logo1.png'; // Make sure the path matches your logo location
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import OptimisationFiscale from './pages/OptimisationFiscale';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Check if we're near the footer (within 100px)
      setIsAtFooter(scrollTop + windowHeight > documentHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Show chatbot after 5 seconds
    const timer = setTimeout(() => {
      setShowChatBot(true);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <nav className={`navbar ${isAtFooter ? 'at-footer' : ''}`}>
        <ul className="nav-links">
          <div className="nav-group left">
            <li><Link to="/">Accueil</Link></li>
            <li className="dropdown">
              <a 
                href="#expertises" 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('expertises');
                }}
              >
                Nos Expertises
                <span className="dropdown-arrow">▼</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'expertises' ? 'active' : ''}`}>
                <li><Link to="/conseil-strategique" onClick={() => setActiveDropdown(null)}>Conseil Stratégique</Link></li>
                <li><Link to="/gestion-patrimoine" onClick={() => setActiveDropdown(null)}>Gestion de Patrimoine</Link></li>
                <li><Link to="/optimisation-fiscale" onClick={() => setActiveDropdown(null)}>Optimisation Fiscale</Link></li>
              </ul>
            </li>
          </div>
          
          <li className="logo-container">
            <Link to="/">
              <img src={logo1} alt="Logo" className="logo" />
            </Link>
          </li>

          <div className="nav-group right">
            <li className="dropdown">
              <a 
                href="#solutions"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown('solutions');
                }}
              >
                Nos Solutions
                <span className="dropdown-arrow">▼</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                <li><Link to="/investissement-immobilier" onClick={() => setActiveDropdown(null)}>Investissement Immobilier</Link></li>
                <li><Link to="/placements-financiers" onClick={() => setActiveDropdown(null)}>Placements Financiers</Link></li>
                <li><Link to="/protection-familiale" onClick={() => setActiveDropdown(null)}>Protection Familiale</Link></li>
              </ul>
            </li>
            <li><Link to="/ressources">Ressources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/optimisation-fiscale" element={<OptimisationFiscale />} />
        <Route path="/" element={
          <main className="content">
            <div style={{ padding: '20px', minHeight: '80vh' }}>
              <h1>Bienvenue chez Azalée Patrimoine</h1>
              <p>Votre partenaire de confiance pour la gestion et l'optimisation de votre patrimoine.</p>
            </div>
          </main>
        } />
      </Routes>

      <Footer />
      {showChatBot && <ChatBot />}
    </div>
  );
}

export default App;