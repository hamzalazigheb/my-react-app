import React from 'react';
import Head from 'next/head';
import styles from '../../styles/AuditPatrimonial.module.css';

const AuditPatrimonial = () => {
  return (
    <>
      <Head>
        <title>Audit Patrimonial - Azalée Patrimoine</title>
        <meta name="description" content="Un diagnostic complet de votre situation patrimoniale pour établir une stratégie sur mesure avec Azalée Patrimoine." />
      </Head>

      <div className={styles.auditPatrimonial}>
        <div className={styles.hero}>
          <h1>Audit Patrimonial</h1>
          <p>
            Un diagnostic complet de votre situation patrimoniale pour établir une 
            stratégie sur mesure et atteindre vos objectifs.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Pourquoi réaliser un audit patrimonial ?</h2>
          <div className={styles.reasons}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>📊</div>
              <h3>État des lieux complet</h3>
              <p>
                Faites le point sur votre situation patrimoniale actuelle et identifiez 
                les axes d'amélioration.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🎯</div>
              <h3>Objectifs clairs</h3>
              <p>
                Définissez vos objectifs patrimoniaux et établissez une stratégie 
                adaptée pour les atteindre.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>💡</div>
              <h3>Solutions personnalisées</h3>
              <p>
                Bénéficiez de recommandations sur mesure pour optimiser votre patrimoine 
                et votre fiscalité.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Notre méthodologie</h2>
          <div className={styles.methodology}>
            <div className={styles.methodologyStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Analyse de votre situation</h3>
              <ul>
                <li>Votre situation personnelle et professionnelle</li>
                <li>Vos actifs et passifs</li>
                <li>Votre fiscalité</li>
                <li>Vos objectifs patrimoniaux</li>
              </ul>
            </div>
            <div className={styles.methodologyStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Diagnostic patrimonial</h3>
              <ul>
                <li>Analyse de vos points forts et faibles</li>
                <li>Identification des opportunités</li>
                <li>Évaluation des risques</li>
                <li>Recommandations stratégiques</li>
              </ul>
            </div>
            <div className={styles.methodologyStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Plan d'action</h3>
              <ul>
                <li>Stratégie patrimoniale personnalisée</li>
                <li>Solutions concrètes et adaptées</li>
                <li>Calendrier de mise en œuvre</li>
                <li>Suivi et ajustements</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Les points analysés</h2>
          <div className={styles.analysisPoints}>
            <div className={styles.analysisCard}>
              <h3>Patrimoine immobilier</h3>
              <ul>
                <li>Résidence principale</li>
                <li>Investissements locatifs</li>
                <li>SCPI et OPCI</li>
                <li>Immobilier d'entreprise</li>
              </ul>
            </div>
            <div className={styles.analysisCard}>
              <h3>Actifs financiers</h3>
              <ul>
                <li>Assurance-vie</li>
                <li>PER</li>
                <li>PEA</li>
                <li>Actions et obligations</li>
              </ul>
            </div>
            <div className={styles.analysisCard}>
              <h3>Protection et transmission</h3>
              <ul>
                <li>Assurances de personnes</li>
                <li>Transmission du patrimoine</li>
                <li>Protection juridique</li>
                <li>Succession et donation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Prêt à faire le point sur votre patrimoine ?</h2>
          <p>
            Nos experts sont à votre disposition pour réaliser un audit patrimonial 
            complet et vous proposer des solutions adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default AuditPatrimonial; 