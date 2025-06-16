import React from 'react';
import Head from 'next/head';
import styles from '../../styles/Immobilier.module.css';

const Immobilier = () => {
  return (
    <>
      <Head>
        <title>Investissement Immobilier - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos solutions d'investissement immobilier adaptées à vos objectifs et à votre profil." />
      </Head>

      <div className={styles.immobilier}>
        <div className={styles.hero}>
          <h1>Investissement Immobilier</h1>
          <p>
            Développez votre patrimoine avec des solutions immobilières adaptées à vos 
            objectifs et à votre profil d'investisseur.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Pourquoi investir dans l'immobilier ?</h2>
          <div className={styles.reasons}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>💰</div>
              <h3>Revenus complémentaires</h3>
              <p>
                Générez des revenus locatifs réguliers pour compléter vos revenus 
                actuels ou votre retraite.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>📈</div>
              <h3>Plus-value à long terme</h3>
              <p>
                Bénéficiez de la plus-value immobilière sur le long terme pour 
                accroître votre patrimoine.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🛡️</div>
              <h3>Diversification</h3>
              <p>
                Diversifiez votre patrimoine avec un investissement tangible et 
                moins volatile que les marchés financiers.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Nos solutions immobilières</h2>
          <div className={styles.solutions}>
            <div className={styles.solutionCard}>
              <h3>Investissement locatif</h3>
              <ul>
                <li>Location meublée</li>
                <li>Location non meublée</li>
                <li>Colocation</li>
                <li>Location saisonnière</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Défiscalisation</h3>
              <ul>
                <li>Pinel</li>
                <li>Denormandie</li>
                <li>Monument historique</li>
                <li>Malraux</li>
              </ul>
            </div>
            <div className={styles.solutionCard}>
              <h3>Investissement indirect</h3>
              <ul>
                <li>SCPI</li>
                <li>OPCI</li>
                <li>Immobilier papier</li>
                <li>Immobilier d'entreprise</li>
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
                Nous étudions votre profil d'investisseur et vos objectifs pour 
                identifier les opportunités immobilières adaptées.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Solutions personnalisées</h3>
              <p>
                Nous vous proposons des solutions immobilières adaptées à votre 
                situation et à vos objectifs.
              </p>
            </div>
            <div className={styles.approachStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Accompagnement</h3>
              <p>
                Nous vous accompagnons dans la mise en œuvre et le suivi de votre 
                investissement immobilier.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Prêt à investir dans l'immobilier ?</h2>
          <p>
            Nos experts sont à votre disposition pour vous accompagner dans votre 
            projet d'investissement immobilier et vous proposer des solutions 
            adaptées à votre situation.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </div>
      </div>
    </>
  );
};

export default Immobilier; 