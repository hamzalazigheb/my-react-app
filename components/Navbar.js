import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const content = {
    home: {
      title: 'Bienvenue chez Azalée Patrimoine',
      description: 'Votre partenaire de confiance pour la gestion et l\'optimisation de votre patrimoine.',
      items: [
        { name: 'Azalée Patrimoine', path: '/azalee-patrimoine' },
        { name: 'Nos Partenaires', path: '/nos-partenaires' },
        { name: 'Notre Héritage', path: '/notre-heritage' }
      ]
    },
    expertises: {
      title: 'Nos Expertises',
      items: [
        { name: 'Bien placer son argent', path: '/bien-placer-son-argent' },
        { name: 'Protéger vos proches', path: '/proteger-vos-proches' },
        { name: 'Réduire vos impôts', path: '/reduire-vos-impots' },
        { name: 'Financer les études de mes enfants', path: '/financer-etudes-enfants' },
        { name: 'Préparer ma retraite', path: '/preparer-retraite' },
        { name: 'Comprendre mes placements', path: '/comprendre-placements' },
        { name: 'Investir dans l\'immobilier', path: '/investir-immobilier' },
        { name: 'Construire ma stratégie patrimoniale', path: '/strategie-patrimoniale' }
      ]
    },
    solutions: {
      title: 'Nos Solutions',
      items: [
        { name: 'Audit Patrimonial', path: '/audit-patrimonial' },
        { name: 'Solutions de Projets', path: '/solutions-projets' },
        { name: 'Gestion de Patrimoine Sur-mesure', path: '/gestion-patrimoine-sur-mesure' },
        { name: 'Partenaires', path: '/partenaires' },
        { name: 'Outils Pédagogiques', path: '/outils-pedagogiques' }
      ]
    },
    ressources: {
      title: 'Ressources',
      items: [
        { name: 'Actualités', path: '/ressources/actualites' },
        { name: 'Carrière', path: '/ressources/carriere' },
        { name: 'FAQ', path: '/ressources/faq' }
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      setIsAtFooter(scrollTop + windowHeight > documentHeight - 100);

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isScrollingDown ? 'scrolled' : ''} ${isAtFooter ? 'at-footer' : ''}`}>
      <ul className="nav-links">
        <div className="nav-group left">
          <li className="dropdown">
            <a 
              href="#accueil"
              onMouseEnter={() => setActiveDropdown('accueil')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Accueil
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul 
              className={`dropdown-menu ${activeDropdown === 'accueil' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('accueil')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.home.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <a 
              href="#expertises"
              onMouseEnter={() => setActiveDropdown('expertises')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.expertises.title}
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul 
              className={`dropdown-menu ${activeDropdown === 'expertises' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('expertises')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.expertises.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </div>
        
        <li className="logo-container">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt="Azalée Patrimoine Logo"
              width={150}
              height={50}
              priority
              className="logo"
            />
          </Link>
        </li>

        <div className="nav-group right">
          <li className="dropdown">
            <a 
              href="#solutions"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.solutions.title}
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul 
              className={`dropdown-menu ${activeDropdown === 'solutions' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.solutions.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="dropdown">
            <a 
              href="#ressources"
              onMouseEnter={() => setActiveDropdown('ressources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.ressources.title}
              <span className="dropdown-arrow">▼</span>
            </a>
            <ul 
              className={`dropdown-menu ${activeDropdown === 'ressources' ? 'active' : ''}`}
              onMouseEnter={() => setActiveDropdown('ressources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {content.ressources.items.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link href="/contact">Contact</Link></li>
        </div>
      </ul>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(26, 42, 68, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
        }

        .nav-links {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
          height: 90px;
          max-width: 1400px;
          margin: 0 auto;
          list-style: none;
        }

        .nav-group {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .logo-container {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .dropdown {
          position: relative;
        }

        .dropdown a {
          color: white;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.3s ease;
        }

        .dropdown a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #D4AF37;
          transition: width 0.3s ease;
        }

        .dropdown a:hover {
          color: #D4AF37;
        }

        .dropdown a:hover::after {
          width: 100%;
        }

        .dropdown-arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
          margin-left: 0.3rem;
          color: #D4AF37;
        }

        .dropdown:hover .dropdown-arrow {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 12px;
          padding: 0.8rem 0;
          min-width: 280px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(212, 175, 55, 0.1);
          list-style: none;
          z-index: 1001;
        }

        .dropdown-menu.active {
          opacity: 1;
          visibility: visible;
        }

        .dropdown-menu li a {
          color: #1A2A44;
          padding: 0.8rem 1.5rem;
          font-size: 1rem;
          display: block;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.2s ease;
          position: relative;
          border-bottom: 1px solid rgba(26, 42, 68, 0.1);
        }

        .dropdown-menu li:last-child a {
          border-bottom: none;
        }

        .dropdown-menu li a:hover {
          background: rgba(212, 175, 55, 0.05);
          color: #D4AF37;
          padding-left: 2rem;
        }

        .dropdown-menu li a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 3px;
          background: #D4AF37;
          transform: scaleY(0);
          transition: transform 0.2s ease;
        }

        .dropdown-menu li a:hover::before {
          transform: scaleY(1);
        }

        .logo {
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .logo:hover {
          transform: scale(1.02);
        }

        @media (max-width: 768px) {
          .nav-links {
            padding: 0 1.5rem;
            height: 80px;
          }

          .nav-group {
            display: none;
          }

          .logo-container {
            flex: 0;
          }

          .logo {
            width: 120px;
            height: 40px;
          }
        }
      `}</style>
    </nav>
  );
} 