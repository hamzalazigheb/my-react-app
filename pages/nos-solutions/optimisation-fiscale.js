import React from 'react';
import Head from 'next/head';
import styles from '../../styles/OptimisationFiscale.module.css';

const OptimisationFiscale = () => {
  return (
    <>
      <Head>
        <title>Optimisation Fiscale - Azalée Patrimoine</title>
        <meta name="description" content="Optimisez votre fiscalité avec nos solutions sur mesure pour réduire votre pression fiscale et maximiser votre patrimoine." />
      </Head>

      <div className={styles.optimisationFiscale}>
        <div className={styles.hero}>
          <h1>Optimisation Fiscale</h1>
          <p>
            Réduisez votre pression fiscale et optimisez votre patrimoine avec des solutions 
            adaptées à votre situation personnelle et professionnelle.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Pourquoi optimiser sa fiscalité ?</h2>
          <div className={styles.benefits}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>💰</div>
              <h3>Réduire sa pression fiscale</h3>
              <p>
                Optimisez votre fiscalité pour réduire votre pression fiscale tout en respectant 
                la législation en vigueur.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📈</div>
              <h3>Maximiser son patrimoine</h3>
              <p>
                Développez votre patrimoine plus efficacement en minimisant l'impact de la fiscalité 
                sur vos investissements.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3>Atteindre ses objectifs</h3>
              <p>
                Alignez votre stratégie fiscale avec vos objectifs patrimoniaux pour une approche 
                cohérente et efficace.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Nos solutions d'optimisation fiscale</h2>
          <div className={styles.solutions}>
            <div className={styles.solutionCard}>
              <h3>Investissements défiscalisants</h3>
              <ul>
                <li>Pinel</li>
                <li>Denormandie</li>
                <li>Monument historique</li>
                <li>Malraux</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Solutions d'épargne</h3>
              <ul>
                <li>Assurance-vie</li>
                <li>PER</li>
                <li>PEA</li>
                <li>SCPI</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Optimisation professionnelle</h3>
              <ul>
                <li>Statut juridique</li>
                <li>Rémunération optimisée</li>
                <li>Défiscalisation des frais</li>
                <li>Holding</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Notre approche</h2>
          <div className={styles.approach}>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Analyse de votre situation</h3>
              <p>
                Nous étudions votre situation fiscale actuelle pour identifier les opportunités 
                d'optimisation.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Solutions personnalisées</h3>
              <p>
                Nous vous proposons des solutions adaptées à votre profil et à vos objectifs.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Accompagnement</h3>
              <p>
                Nous vous accompagnons dans la mise en œuvre et le suivi de votre stratégie fiscale.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Prêt à optimiser votre fiscalité ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans l'optimisation 
            de votre fiscalité et vous proposer des solutions adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default OptimisationFiscale; 