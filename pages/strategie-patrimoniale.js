import React from 'react';
import Head from 'next/head';
import styles from '../styles/StrategiePatrimoniale.module.css';
import ChatBot from '../src/components/ChatBot';

const StrategiePatrimoniale = () => {
  return (
    <div className={styles.strategiePatrimoniale}>
      <Head>
        <title>Stratégie Patrimoniale | Azalée Patrimoine</title>
        <meta name="description" content="Construisez votre stratégie patrimoniale avec Azalée Patrimoine pour un avenir maîtrisé et serein." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Construire ma stratégie patrimoniale</h1>
          <p>On pense souvent que faire appel à un conseiller en gestion de patrimoine (CGP), c'est réservé aux riches. En réalité, c'est l'une des meilleures décisions à prendre dès que l'on a des projets et une épargne à organiser. Que ce soit pour préparer votre retraite, protéger votre famille, optimiser votre fiscalité ou transmettre un bien à vos enfants, une stratégie patrimoniale bien construite vous permet de prendre de l'avance — et de faire les bons choix.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/finance_9552251.png" alt="Stratégie Patrimoniale" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>🤝 Une première rencontre fondée sur la confiance</h2>
        <p>Il est naturel de ressentir une certaine réserve lors de la première rencontre avec un CGP. Parler de son argent, de ses projets, de sa famille ou de ses peurs peut sembler intrusif. Et pourtant, c'est le point de départ essentiel d'une stratégie patrimoniale réussie.</p>
        <p>Chez Azalée Patrimoine, nous cultivons une approche fondée sur l'écoute, la bienveillance, l'honnêteté et la confidentialité. Notre mission n'est pas de vendre un produit, mais de comprendre votre vie dans sa globalité, sur plusieurs générations si besoin, pour vous aider à prendre des décisions éclairées et alignées avec vos objectifs.</p>
      </div>

      <div className={styles.section}>
        <h2>🩺 Diagnostic patrimonial : poser les bases</h2>
        <p>Une fois la relation de confiance instaurée, vient le temps du bilan patrimonial. Cette étape permet de faire un état des lieux complet de votre situation financière, juridique et familiale :</p>
        <div className={styles.diagnosticGrid}>
          <div className={styles.diagnosticCard}>
            <div className={styles.diagnosticIcon}>💰</div>
            <h3>Revenus et dépenses</h3>
            <p>Analyse de vos revenus, dépenses et capacité d'épargne</p>
          </div>
          <div className={styles.diagnosticCard}>
            <div className={styles.diagnosticIcon}>🏠</div>
            <h3>Actifs existants</h3>
            <p>Placements et immobilier détenus</p>
          </div>
          <div className={styles.diagnosticCard}>
            <div className={styles.diagnosticIcon}>📊</div>
            <h3>Fiscalité</h3>
            <p>Niveau d'imposition et charges supportées</p>
          </div>
          <div className={styles.diagnosticCard}>
            <div className={styles.diagnosticIcon}>👨‍👩‍👧‍👦</div>
            <h3>Situation familiale</h3>
            <p>Mariage, enfants, héritiers...</p>
          </div>
          <div className={styles.diagnosticCard}>
            <div className={styles.diagnosticIcon}>🎯</div>
            <h3>Projets</h3>
            <p>Objectifs à court, moyen et long terme</p>
          </div>
        </div>
        <p className={styles.objectif}>🎯 Objectif : identifier les leviers d'optimisation et les zones de vulnérabilité. C'est le socle de votre future stratégie.</p>
      </div>

      <div className={styles.section}>
        <h2>📚 L'éducation financière : comprendre avant d'agir</h2>
        <p>Nous croyons fermement que vous ne pouvez piloter votre avenir que si vous comprenez les outils à votre disposition. C'est pourquoi, chez Azalée, chaque rendez-vous est aussi un temps d'apprentissage. Nous vulgarisons des notions parfois complexes : fiscalité, retraite, épargne, démembrement, transmission…</p>
        <div className={styles.approcheGrid}>
          <div className={styles.approcheCard}>
            <div className={styles.approcheIcon}>👤</div>
            <h3>Vous restez acteur</h3>
            <p>Vous gardez le contrôle de vos décisions</p>
          </div>
          <div className={styles.approcheCard}>
            <div className={styles.approcheIcon}>🔑</div>
            <h3>Nous vous donnons les clés</h3>
            <p>Comprendre vos options pour mieux choisir</p>
          </div>
          <div className={styles.approcheCard}>
            <div className={styles.approcheIcon}>🏗️</div>
            <h3>Ensemble nous bâtissons</h3>
            <p>Une stratégie adaptée, durable et évolutive</p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Transformez vos avantages en succès !</h2>
        <p>Avoir des revenus confortables, des placements, un bien immobilier ou une capacité d'épargne, c'est déjà un atout. Mais encore faut-il savoir les activer au bon moment, avec la bonne stratégie.</p>
        <p>Chez Azalée Patrimoine, nous croyons que chaque avantage peut devenir un levier de réussite :</p>
        <div className={styles.avantagesList}>
          <p>✓ Vos versements d'épargne retraite peuvent réduire vos impôts</p>
          <p>✓ Votre assurance-vie peut devenir un outil de transmission efficace</p>
          <p>✓ Vos revenus locatifs peuvent être optimisés fiscalement</p>
          <p>✓ Votre situation familiale peut être anticipée intelligemment</p>
        </div>
        <p>Le succès patrimonial, ce n'est pas de posséder plus. C'est d'avoir une vision, une méthode, et un plan d'action adapté à votre réalité.</p>
        <div className={styles.ctaHighlight}>
          <p>🎯 Ne laissez plus vos avantages dormir. Donnez-leur une direction.</p>
          <p>📞 Prenez rendez-vous avec un conseiller Azalée pour révéler le potentiel de votre patrimoine.</p>
          <p>Un diagnostic personnalisé, confidentiel, sans engagement — pour transformer vos atouts en résultats concrets.</p>
        </div>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <ChatBot avatar={"/images/finance_9552251.png"} />
    </div>
  );
};

export default StrategiePatrimoniale; 