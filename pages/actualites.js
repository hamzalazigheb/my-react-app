import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Actualites.module.css';

const Actualites = () => {
  const articles = [
    {
      id: 1,
      title: "Nouvelles réglementations fiscales 2024",
      excerpt: "Découvrez les principales évolutions fiscales qui impactent votre patrimoine en 2024 et nos recommandations pour optimiser votre situation.",
      category: "Fiscalité",
      date: "15 Janvier 2024",
      image: "/images/finance_9552251.png",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "L'immobilier en 2024 : tendances et opportunités",
      excerpt: "Analyse du marché immobilier français et des opportunités d'investissement pour cette nouvelle année.",
      category: "Immobilier",
      date: "10 Janvier 2024",
      image: "/images/home_14994708.png",
      readTime: "7 min"
    },
    {
      id: 3,
      title: "Préparer sa retraite : les solutions Azalée",
      excerpt: "Nos experts vous présentent les meilleures stratégies pour préparer votre retraite et sécuriser votre avenir.",
      category: "Retraite",
      date: "5 Janvier 2024",
      image: "/images/deal_914022.png",
      readTime: "6 min"
    },
    {
      id: 4,
      title: "Protection de la famille : les nouveaux outils",
      excerpt: "Découvrez les dernières innovations en matière de protection familiale et de transmission patrimoniale.",
      category: "Protection",
      date: "1 Janvier 2024",
      image: "/images/finance_9552251.png",
      readTime: "4 min"
    },
    {
      id: 5,
      title: "Investissement responsable : guide complet",
      excerpt: "Comment allier performance financière et impact positif sur la société et l'environnement.",
      category: "Investissement",
      date: "28 Décembre 2023",
      image: "/images/home_14994708.png",
      readTime: "8 min"
    },
    {
      id: 6,
      title: "Optimisation fiscale pour les entrepreneurs",
      excerpt: "Les solutions dédiées aux chefs d'entreprise pour optimiser leur fiscalité et protéger leur patrimoine.",
      category: "Entrepreneurs",
      date: "20 Décembre 2023",
      image: "/images/deal_914022.png",
      readTime: "6 min"
    }
  ];

  const categories = ["Tous", "Fiscalité", "Immobilier", "Retraite", "Protection", "Investissement", "Entrepreneurs"];

  return (
    <div className={styles.actualites}>
      <Head>
        <title>Actualités | Azalée Patrimoine</title>
        <meta name="description" content="Restez informé des dernières actualités patrimoniales, fiscales et financières avec Azalée Patrimoine." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Actualités</h1>
          <p>
            Restez informé des dernières actualités patrimoniales, fiscales et financières. 
            Nos experts analysent pour vous les évolutions du marché et vous proposent des conseils adaptés.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/finance_9552251.png"
            alt="Actualités"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.filters}>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <button key={index} className={styles.categoryButton}>
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.articles}>
        <div className={styles.articlesGrid}>
          {articles.map((article) => (
            <article key={article.id} className={styles.articleCard}>
              <div className={styles.articleImage}>
                <img src={article.image} alt={article.title} />
                <div className={styles.articleCategory}>{article.category}</div>
              </div>
              <div className={styles.articleContent}>
                <div className={styles.articleMeta}>
                  <span className={styles.articleDate}>{article.date}</span>
                  <span className={styles.articleReadTime}>{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href={`/actualites/${article.id}`} className={styles.readMore}>
                  Lire la suite →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.newsletter}>
        <h2>Restez informé</h2>
        <p>Recevez nos dernières actualités et conseils directement dans votre boîte mail.</p>
        <div className={styles.newsletterForm}>
          <input type="email" placeholder="Votre adresse email" />
          <button>S'abonner</button>
        </div>
      </section>
    </div>
  );
};

export default Actualites; 