import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/GestionPatrimoine.module.css';
import ChatBot from '../src/components/ChatBot';

const GestionPatrimoine = () => {
  return (
    <>
      <Head>
        <title>Gestion Patrimoine Sur Mesure | Azalée Patrimoine</title>
        <meta name="description" content="Découvrez notre approche personnalisée de gestion de patrimoine, adaptée à vos objectifs et à votre situation unique." />
      </Head>

      <div className={styles.gestionPatrimoine}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Gestion Patrimoine Sur Mesure</h1>
            <p>
              Une approche personnalisée pour optimiser et faire fructifier votre patrimoine
              selon vos objectifs et votre situation unique.
            </p>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              src="/images/build_9199943.png"
              alt="Gestion Patrimoine Sur Mesure"
              width={300}
              height={300}
              className={styles.heroImage}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Pourquoi choisir une gestion de patrimoine sur-mesure ?</h2>
          <div className={styles.caseStudy}>
            <h3>Cas pratique : Claire, médecin libérale en Île-de-France</h3>
            <p>
              Claire souhaite réduire sa pression fiscale et anticiper sa retraite. Ensemble, nous avons optimisé la 
              répartition de ses revenus entre ses sociétés civiles, mis en place un contrat PER, et simulé ses besoins 
              futurs avec une projection à 20 ans.
            </p>
            <p className={styles.result}>
              Résultat : une économie d'impôts de 12 000 € par an et une stratégie retraite réaliste et sécurisée.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Nos solutions sur-mesure</h2>
          <p>
            Chez Azalée Patrimoine, nous ne proposons pas de catalogue figé ni de produits pré-emballés. Chaque 
            recommandation est le fruit d'une analyse approfondie de votre situation personnelle, professionnelle et 
            patrimoniale. Notre indépendance nous permet de sélectionner les solutions les plus pertinentes du marché, 
            en toute liberté, et toujours dans votre intérêt exclusif.
          </p>

          <div className={styles.levers}>
            <h3>Concrètement, nous construisons des stratégies patrimoniales personnalisées autour de plusieurs leviers :</h3>
            <ul>
              <li>
                <strong>Optimisation fiscale</strong> : via le choix des bons statuts, dispositifs ou enveloppes 
                (PER, démembrement, holding, immobilier locatif…)
              </li>
              <li>
                <strong>Préparation de la retraite</strong> : simulation de besoins futurs, arbitrage entre dispositifs 
                (PER, contrat Madelin, capitalisation…)
              </li>
              <li>
                <strong>Transmission et protection familiale</strong> : donation, pacte Dutreil, assurance-vie, 
                rédaction de clauses bénéficiaires personnalisées
              </li>
              <li>
                <strong>Diversification des investissements</strong> : immobilier direct ou via SCPI, fonds ISR, 
                private equity, produits structurés, obligations à coupon
              </li>
              <li>
                <strong>Gestion de trésorerie d'entreprise ou personnelle</strong> : solutions sécurisées ou 
                dynamiques selon votre profil de risque
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Notre approche</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Analyse Personnalisée et Approfondie</h3>
              <p>
                Nous commençons par étudier votre structure et vos spécificités afin d'identifier vos priorités 
                et de comprendre vos contraintes. Cette analyse permet de définir précisément le niveau de garanties 
                et les options les plus adaptées pour votre dispositif.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Conception de Solutions Innovantes</h3>
              <p>
                En nous appuyant sur notre expertise et les meilleures pratiques du secteur, nous créons des 
                dispositifs sur-mesure qui maximisent les avantages fiscaux et optimisent les rendements de vos 
                investissements.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Gestion Intégrée et Suivi Transparent</h3>
              <p>
                La mise en œuvre de notre solution se traduit par une gestion fluide et un suivi régulier, 
                garantissant une transparence totale sur les performances de votre épargne salariale.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Optimisation Continue</h3>
              <p>
                Conscients que vos besoins évoluent, nous mettons en place un processus d'optimisation continue 
                qui ajuste votre solution en fonction des changements économiques, fiscaux et de votre activité.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Transformez vos avantages en succès !</h2>
          <p>
            Votre patrimoine est un levier puissant. Encore faut-il le comprendre, le structurer et le faire 
            évoluer avec agilité. Chez Azalée Patrimoine, nous ne nous contentons pas de vous conseiller : nous 
            vous donnons les moyens d'agir, de transformer vos atouts — fiscaux, financiers, familiaux ou 
            professionnels — en résultats concrets et durables.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </section>
        <ChatBot avatar={"/images/build_9199943.png"} />
      </div>
    </>
  );
};

export default GestionPatrimoine; 