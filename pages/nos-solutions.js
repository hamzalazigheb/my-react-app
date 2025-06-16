import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/NosSolutions.module.css';

const NosSolutions = () => {
  const solutions = [
    {
      id: 'audit-patrimonial',
      title: 'Audit Patrimonial',
      description: 'Un diagnostic complet de votre situation patrimoniale pour établir une stratégie sur mesure.',
      icon: '📊',
      link: '/nos-solutions/audit-patrimonial'
    },
    {
      id: 'optimisation-fiscale',
      title: 'Optimisation Fiscale',
      description: 'Des solutions adaptées pour optimiser votre fiscalité et réduire votre pression fiscale.',
      icon: '💰',
      link: '/nos-solutions/optimisation-fiscale'
    },
    {
      id: 'transmission',
      title: 'Transmission',
      description: 'Préparer et organiser la transmission de votre patrimoine dans les meilleures conditions.',
      icon: '🏛️',
      link: '/nos-solutions/transmission'
    },
    {
      id: 'retraite',
      title: 'Retraite',
      description: 'Anticiper et préparer votre retraite pour maintenir votre niveau de vie.',
      icon: '🌅',
      link: '/nos-solutions/retraite'
    },
    {
      id: 'immobilier',
      title: 'Investissement Immobilier',
      description: 'Des solutions immobilières adaptées à vos objectifs et à votre profil.',
      icon: '🏠',
      link: '/nos-solutions/immobilier'
    },
    {
      id: 'assurance',
      title: 'Assurance & Protection',
      description: 'Protéger votre patrimoine et vos proches avec des solutions d\'assurance adaptées.',
      icon: '🛡️',
      link: '/nos-solutions/assurance'
    }
  ];

  return (
    <>
      <Head>
        <title>Nos Solutions - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos solutions patrimoniales sur mesure pour optimiser votre patrimoine et atteindre vos objectifs financiers." />
      </Head>

      <div className={styles.solutionsPage}>
        <div className={styles.hero}>
          <h1>Nos Solutions</h1>
          <p>
            Chez Azalée Patrimoine, nous vous accompagnons avec des solutions sur mesure 
            pour répondre à vos objectifs patrimoniaux. Découvrez notre gamme complète 
            de services et solutions adaptés à votre situation.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {solutions.map((solution) => (
            <Link href={solution.link} key={solution.id} className={styles.solutionCard}>
              <div className={styles.solutionIcon}>{solution.icon}</div>
              <h2>{solution.title}</h2>
              <p>{solution.description}</p>
              <span className={styles.learnMore}>En savoir plus →</span>
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <h2>Besoin d'un conseil personnalisé ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans vos projets 
            patrimoniaux et vous proposer des solutions adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default NosSolutions; 