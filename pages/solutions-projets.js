import React from 'react';
import Head from 'next/head';
import styles from '../styles/SolutionsProjets.module.css';

const SolutionsProjets = () => {
  const projets = [
    {
      categorie: 'Projets Immobiliers',
      projets: [
        {
          titre: 'Investissement locatif',
          description: 'Développez votre patrimoine avec des investissements immobiliers locatifs adaptés à vos objectifs.',
          points: [
            'Location meublée ou non meublée',
            'Colocation',
            'Location saisonnière',
            'Défiscalisation'
          ]
        },
        {
          titre: 'Résidence principale',
          description: 'Réalisez votre projet d\'accession à la propriété avec un accompagnement personnalisé.',
          points: [
            'Étude de faisabilité',
            'Recherche de financement',
            'Optimisation fiscale',
            'Suivi du projet'
          ]
        },
        {
          titre: 'Immobilier d\'entreprise',
          description: 'Investissez dans l\'immobilier professionnel pour diversifier votre patrimoine.',
          points: [
            'Bureaux',
            'Locaux commerciaux',
            'Entrepôts',
            'Parkings'
          ]
        }
      ]
    },
    {
      categorie: 'Projets Financiers',
      projets: [
        {
          titre: 'Épargne retraite',
          description: 'Préparez votre retraite avec des solutions d\'épargne adaptées à votre profil.',
          points: [
            'PER',
            'Assurance-vie',
            'SCPI',
            'PEA'
          ]
        },
        {
          titre: 'Transmission',
          description: 'Organisez la transmission de votre patrimoine dans les meilleures conditions.',
          points: [
            'Assurance-vie',
            'Donation',
            'Succession',
            'Pacte Dutreil'
          ]
        },
        {
          titre: 'Optimisation fiscale',
          description: 'Optimisez votre fiscalité avec des solutions adaptées à votre situation.',
          points: [
            'Défiscalisation',
            'Réduction d\'impôt',
            'Optimisation professionnelle',
            'Holding'
          ]
        }
      ]
    },
    {
      categorie: 'Projets de Protection',
      projets: [
        {
          titre: 'Protection de la famille',
          description: 'Protégez votre famille et vos proches avec des solutions d\'assurance adaptées.',
          points: [
            'Assurance décès',
            'Assurance invalidité',
            'Assurance dépendance',
            'Prévoyance'
          ]
        },
        {
          titre: 'Protection du patrimoine',
          description: 'Sécurisez votre patrimoine contre les aléas de la vie.',
          points: [
            'Assurance habitation',
            'Assurance responsabilité civile',
            'Protection juridique',
            'Assurance professionnelle'
          ]
        },
        {
          titre: 'Protection santé',
          description: 'Complétez votre couverture santé avec des garanties adaptées.',
          points: [
            'Complémentaire santé',
            'Assurance hospitalisation',
            'Assurance invalidité',
            'Assurance dépendance'
          ]
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Solutions Projets - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos solutions pour vos projets immobiliers, financiers et de protection avec Azalée Patrimoine." />
      </Head>

      <div className={styles.solutionsProjets}>
        <div className={styles.hero}>
          <h1>Solutions Projets</h1>
          <p>
            Nous vous accompagnons dans la réalisation de vos projets patrimoniaux, 
            qu\'ils soient immobiliers, financiers ou de protection. Découvrez nos 
            solutions adaptées à vos objectifs.
          </p>
        </div>

        {projets.map((section, index) => (
          <div key={index} className={styles.section}>
            <h2>{section.categorie}</h2>
            <div className={styles.projetsGrid}>
              {section.projets.map((projet, pIndex) => (
                <div key={pIndex} className={styles.projetCard}>
                  <h3>{projet.titre}</h3>
                  <p>{projet.description}</p>
                  <ul>
                    {projet.points.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                  <button className={styles.enSavoirPlus}>
                    En savoir plus
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className={styles.cta}>
          <h2>Vous avez un projet ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans la 
            réalisation de vos projets et vous proposer des solutions adaptées 
            à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default SolutionsProjets; 