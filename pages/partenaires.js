import React from 'react';
import Head from 'next/head';
import styles from '../styles/Partenaires.module.css';

const Partenaires = () => {
  const partenaires = [
    {
      categorie: 'Banques',
      partenaires: [
        {
          nom: 'BNP Paribas',
          logo: '/images/partenaires/bnp.png',
          description: 'Banque universelle française, leader en Europe'
        },
        {
          nom: 'Crédit Agricole',
          logo: '/images/partenaires/ca.png',
          description: 'Premier groupe bancaire français'
        },
        {
          nom: 'Société Générale',
          logo: '/images/partenaires/sg.png',
          description: 'Banque française de premier plan'
        }
      ]
    },
    {
      categorie: 'Assurances',
      partenaires: [
        {
          nom: 'AXA',
          logo: '/images/partenaires/axa.png',
          description: 'Leader mondial de l\'assurance'
        },
        {
          nom: 'Allianz',
          logo: '/images/partenaires/allianz.png',
          description: 'Groupe d\'assurance international'
        },
        {
          nom: 'CNP Assurances',
          logo: '/images/partenaires/cnp.png',
          description: 'Assureur français spécialisé'
        }
      ]
    },
    {
      categorie: 'Gestion d\'actifs',
      partenaires: [
        {
          nom: 'Amundi',
          logo: '/images/partenaires/amundi.png',
          description: 'Premier gestionnaire d\'actifs européen'
        },
        {
          nom: 'Natixis IM',
          logo: '/images/partenaires/natixis.png',
          description: 'Gestionnaire d\'actifs international'
        },
        {
          nom: 'La Française',
          logo: '/images/partenaires/lafrancaise.png',
          description: 'Gestionnaire d\'actifs indépendant'
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Nos Partenaires - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos partenaires de confiance qui nous accompagnent dans la gestion de votre patrimoine." />
      </Head>

      <div className={styles.partenaires}>
        <div className={styles.hero}>
          <h1>Nos Partenaires</h1>
          <p>
            Nous travaillons avec des partenaires de confiance pour vous offrir 
            les meilleures solutions patrimoniales. Découvrez notre réseau de 
            partenaires sélectionnés pour leur expertise et leur fiabilité.
          </p>
        </div>

        {partenaires.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.categorie}</h2>
            <div className={styles.partenairesGrid}>
              {section.partenaires.map((partenaire, pIndex) => (
                <div key={pIndex} className={styles.partenaireCard}>
                  <div className={styles.logoContainer}>
                    <img 
                      src={partenaire.logo} 
                      alt={`Logo ${partenaire.nom}`}
                      className={styles.logo}
                    />
                  </div>
                  <h3>{partenaire.nom}</h3>
                  <p>{partenaire.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.cta}>
          <h2>Devenir partenaire</h2>
          <p>
            Vous souhaitez devenir partenaire d'Azalée Patrimoine ? Nous sommes 
            toujours à la recherche de nouveaux partenaires partageant nos valeurs 
            et notre vision du conseil patrimonial.
          </p>
          <button className={styles.ctaButton}>Nous contacter</button>
        </div>
      </div>
    </>
  );
};

export default Partenaires; 