import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Transmission.module.css';

const Transmission = () => {
  return (
    <>
      <Head>
        <title>Transmission - Azalée Patrimoine</title>
        <meta name="description" content="Préparez et organisez la transmission de votre patrimoine dans les meilleures conditions avec Azalée Patrimoine." />
      </Head>

      <div className={styles.transmission}>
        <div className={styles.hero}>
          <h1>Transmission</h1>
          <p>
            Organisez la transmission de votre patrimoine dans les meilleures conditions 
            pour protéger vos proches et optimiser la fiscalité successorale.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Pourquoi préparer sa transmission ?</h2>
          <div className={styles.reasons}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>👨‍👩‍👧‍👦</div>
              <h3>Protéger ses proches</h3>
              <p>
                Assurez la sécurité financière de vos proches et préservez leur niveau de vie 
                après votre départ.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>💰</div>
              <h3>Optimiser la fiscalité</h3>
              <p>
                Réduisez l'impact des droits de succession et optimisez la transmission 
                de votre patrimoine.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>⚖️</div>
              <h3>Éviter les conflits</h3>
              <p>
                Prévoyez et organisez la répartition de votre patrimoine pour éviter 
                les litiges familiaux.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Nos solutions de transmission</h2>
          <div className={styles.solutions}>
            <div className={styles.solutionCard}>
              <h3>Assurance-vie</h3>
              <ul>
                <li>Transmission hors succession</li>
                <li>Abattement spécifique</li>
                <li>Flexibilité des bénéficiaires</li>
                <li>Protection du capital</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Donation</h3>
              <ul>
                <li>Donation progressive</li>
                <li>Abattements renouvelables</li>
                <li>Donation-partage</li>
                <li>Donation avec réserve d'usufruit</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Succession</h3>
              <ul>
                <li>Testament</li>
                <li>Réserve héréditaire</li>
                <li>Quotité disponible</li>
                <li>Pacte Dutreil</li>
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
                Nous étudions votre situation familiale et patrimoniale pour identifier 
                les enjeux de transmission.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Solutions personnalisées</h3>
              <p>
                Nous vous proposons des solutions adaptées à votre situation et à vos objectifs.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Accompagnement</h3>
              <p>
                Nous vous accompagnons dans la mise en œuvre et le suivi de votre stratégie 
                de transmission.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Prêt à organiser votre transmission ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans l'organisation 
            de votre transmission et vous proposer des solutions adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default Transmission; 