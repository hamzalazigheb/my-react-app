import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo1 from './assets/logo1.png'; // Make sure the path matches your logo location
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import OptimisationFiscale from './pages/OptimisationFiscale';
import PlacementsFinanciers from './pages/PlacementsFinanciers';
import CMS from './pages/CMS';

function App() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem('websiteContent');
    if (savedContent) {
      return JSON.parse(savedContent);
    }
    return {
      home: {
        title: 'Bienvenue chez Azalée Patrimoine',
        description: 'Votre partenaire de confiance pour la gestion et l\'optimisation de votre patrimoine.'
      },
      expertises: {
        title: 'Nos Expertises',
        items: [
          { name: 'Conseil Stratégique', path: '/conseil-strategique' },
          { name: 'Gestion de Patrimoine', path: '/gestion-patrimoine' },
          { name: 'Optimisation Fiscale', path: '/optimisation-fiscale' }
        ]
      },
      solutions: {
        title: 'Nos Solutions',
        items: [
          { name: 'Investissement Immobilier', path: '/investissement-immobilier' },
          { name: 'Placements Financiers', path: '/placements-financiers' },
          { name: 'Protection Familiale', path: '/protection-familiale' }
        ]
      },
      blogs: [],
      pages: {
        'placements-financiers': {
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
              content: 'Découvrez nos solutions de placements financiers adaptées à vos besoins. Notre équipe d\'experts vous accompagne dans la construction et la gestion de votre portefeuille d\'investissements, en tenant compte de vos objectifs et de votre profil de risque.'
            }
          ]
        }
      }
    };
  });

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Check if we're near the footer (within 100px)
      setIsAtFooter(scrollTop + windowHeight > documentHeight - 100);

      // Handle navbar transparency
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
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
  }, [lastScrollY]);

  // Listen for content changes in localStorage
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'websiteContent') {
        setContent(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      <nav className={`navbar ${isScrollingDown ? 'scrolled' : ''} ${isAtFooter ? 'at-footer' : ''}`}>
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
                {content.expertises.title}
                <span className="dropdown-arrow">▼</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'expertises' ? 'active' : ''}`}>
                {content.expertises.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={() => setActiveDropdown(null)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
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
                {content.solutions.title}
                <span className="dropdown-arrow">▼</span>
              </a>
              <ul className={`dropdown-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}>
                {content.solutions.items.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path} onClick={() => setActiveDropdown(null)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link to="/ressources">Ressources</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/optimisation-fiscale" element={<OptimisationFiscale content={content} />} />
        <Route path="/placements-financiers" element={<PlacementsFinanciers content={content} />} />
        <Route path="/cms" element={<CMS />} />
        <Route path="/" element={
          <main className="content">
            <div className="home-container">
              <div className="home-header">
                <h1>{content.home.title}</h1>
                <p>{content.home.description}</p>
              </div>

              <div className="blogs-section">
                <h2>Derniers Articles</h2>
                <div className="blogs-grid">
                  {content.blogs && content.blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                      <div className="blog-card-content">
                        <h3>{blog.title}</h3>
                        <div className="blog-meta">
                          <span className="blog-category">{blog.category}</span>
                          <span className="blog-date">{blog.date}</span>
                        </div>
                        <p className="blog-excerpt">
                          {blog.content.length > 150 
                            ? `${blog.content.substring(0, 150)}...` 
                            : blog.content}
                        </p>
                        <button className="read-more">Lire la suite</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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