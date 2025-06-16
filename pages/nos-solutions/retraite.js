import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Retraite.module.css';

const Retraite = () => {
  return (
    <>
      <Head>
        <title>Retraite - Azalée Patrimoine</title>
        <meta name="description" content="Préparez votre retraite et maintenez votre niveau de vie avec nos solutions d'épargne et d'investissement adaptées." />
      </Head>

      <div className={styles.retraite}>
        <div className={styles.hero}>
          <h1>Retraite</h1>
          <p>
            Anticipez votre retraite et maintenez votre niveau de vie avec des solutions 
            d'épargne et d'investissement adaptées à vos objectifs.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Pourquoi préparer sa retraite ?</h2>
          <div className={styles.reasons}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>💰</div>
              <h3>Maintenir son niveau de vie</h3>
              <p>
                Assurez-vous de maintenir votre niveau de vie actuel après votre départ 
                à la retraite.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>📈</div>
              <h3>Compléter sa retraite</h3>
              <p>
                Compensez la baisse de revenus liée à la retraite avec des revenus 
                complémentaires.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🎯</div>
              <h3>Réaliser ses projets</h3>
              <p>
                Financez vos projets de retraite (voyages, loisirs, etc.) grâce à 
                une épargne adaptée.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Nos solutions pour la retraite</h2>
          <div className={styles.solutions}>
            <div className={styles.solutionCard}>
              <h3>PER (Plan d'Épargne Retraite)</h3>
              <ul>
                <li>Déduction fiscale immédiate</li>
                <li>Flexibilité des versements</li>
                <li>Choix des supports</li>
                <li>Sortie en capital ou en rente</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Assurance-vie</h3>
              <ul>
                <li>Épargne à long terme</li>
                <li>Fiscalité avantageuse</li>
                <li>Multi-supports</li>
                <li>Flexibilité des retraits</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Immobilier locatif</h3>
              <ul>
                <li>Revenus complémentaires</li>
                <li>Plus-value à long terme</li>
                <li>Défiscalisation possible</li>
                <li>Diversification du patrimoine</li>
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
                Nous étudions votre situation actuelle et vos objectifs de retraite 
                pour définir vos besoins.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Solutions personnalisées</h3>
              <p>
                Nous vous proposons des solutions adaptées à votre profil et à vos 
                objectifs de retraite.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Accompagnement</h3>
              <p>
                Nous vous accompagnons dans la mise en œuvre et le suivi de votre 
                stratégie de retraite.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Prêt à préparer votre retraite ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans la préparation 
            de votre retraite et vous proposer des solutions adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default Retraite; 