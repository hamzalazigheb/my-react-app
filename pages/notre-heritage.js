import React from 'react';
import Head from 'next/head';
import styles from '../styles/NotreHeritage.module.css';

const NotreHeritage = () => {
  return (
    <div className={styles.notreHeritage}>
      <Head>
        <title>Notre Héritage | Azalée Patrimoine</title>
        <meta name="description" content="Découvrez l'histoire, les valeurs et la vision d'Azalée Patrimoine. 30 ans d'expertise au service de votre patrimoine." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Notre Héritage</h1>
          <p>Depuis 30 ans, Azalée Patrimoine s'est construite sur des valeurs fortes et une expertise reconnue. Notre parcours est marqué par l'innovation et l'excellence dans le service à nos clients.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/halicarnassus-mausoleum_12194561.png"
            alt="Mausolée d'Halicarnasse"
            className={styles.heroImage}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Notre Histoire</h2>
        <p>Fondée avec la vision de transformer la gestion de patrimoine, Azalée Patrimoine s'est construite sur des valeurs fortes et une expertise reconnue. Notre parcours est marqué par l'innovation et l'excellence dans le service à nos clients.</p>
        <p>Au fil des années, nous avons su nous adapter aux évolutions du marché et aux besoins changeants de nos clients, tout en conservant notre engagement envers l'excellence et la transparence.</p>
      </div>

      <div className={styles.section}>
        <h2>Nos Valeurs</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>⭐</div>
            <h3>Excellence</h3>
            <p>Nous visons l'excellence dans chaque aspect de notre service, de la première consultation à la mise en œuvre des solutions.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🤝</div>
            <h3>Intégrité</h3>
            <p>La transparence et l'honnêteté guident chacune de nos actions. Nous construisons des relations de confiance durables.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>💡</div>
            <h3>Innovation</h3>
            <p>Nous repoussons constamment les limites pour offrir les meilleures solutions adaptées aux enjeux contemporains.</p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.valueIcon}>🎯</div>
            <h3>Engagement</h3>
            <p>Nous nous engageons pleinement pour la réussite de nos clients, en mettant notre expertise à leur service.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Notre Vision</h2>
        <p>Nous aspirons à être le leader reconnu dans la gestion de patrimoine, en offrant des solutions innovantes et personnalisées qui répondent aux besoins évolutifs de nos clients.</p>
        <div className={styles.visionHighlight}>
          <p>Notre mission est de transformer vos défis patrimoniaux en opportunités de croissance, en vous accompagnant vers un avenir financier serein et prospère.</p>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Découvrez notre expertise</h2>
        <p>Prêt à bénéficier de 30 ans d'expérience au service de votre patrimoine ? Rencontrez nos experts et découvrez comment nous pouvons vous accompagner.</p>
        <a href="/contact" className={styles.ctaButton}>Prendre rendez-vous</a>
      </div>
    </div>
  );
};

export default NotreHeritage; 