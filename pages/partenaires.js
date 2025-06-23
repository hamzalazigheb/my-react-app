import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Partenaires.module.css';
import ChatBot from '../src/components/ChatBot';

const Partenaires = () => {
  const partners = [
    {
      category: "Banques & Assurances",
      items: [
        {
          name: "BNP Paribas",
          description: "Solutions bancaires et d'investissement",
          logo: "/images/partners/bnp.png"
        },
        {
          name: "AXA",
          description: "Solutions d'assurance et de protection",
          logo: "/images/partners/axa.png"
        }
      ]
    },
    {
      category: "Immobilier",
      items: [
        {
          name: "Foncia",
          description: "Gestion locative et transaction",
          logo: "/images/partners/foncia.png"
        },
        {
          name: "SCPI",
          description: "Investissement immobilier indirect",
          logo: "/images/partners/scpi.png"
        }
      ]
    },
    {
      category: "Conseil & Expertise",
      items: [
        {
          name: "Cabinet Juridique",
          description: "Expertise juridique et fiscale",
          logo: "/images/partners/juridique.png"
        },
        {
          name: "Expert-Comptable",
          description: "Conseil et optimisation fiscale",
          logo: "/images/partners/comptable.png"
        }
      ]
    }
  ];

  return (
    <div className={styles.partenaires}>
      <Head>
        <title>Nos Partenaires | Azalée Patrimoine</title>
        <meta name="description" content="Découvrez notre réseau de partenaires de confiance, sélectionnés pour leur expertise et leur qualité de service." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Nos Partenaires</h1>
          <p>
            Nous collaborons avec des partenaires de confiance pour vous offrir
            les meilleures solutions patrimoniales adaptées à vos besoins.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/deal_914022.png"
            alt="Partenariats"
            className={styles.heroImage}
          />
        </div>
      </section>

      {partners.map((category, index) => (
        <section key={index} className={styles.section}>
          <h2>{category.category}</h2>
          <div className={styles.partnersGrid}>
            {category.items.map((partner, pIndex) => (
              <div key={pIndex} className={styles.partnerCard}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={200}
                  height={120}
                  className={styles.partnerLogo}
                />
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className={styles.cta}>
        <h2>Rejoignez notre réseau de partenaires</h2>
        <p>
          Vous êtes un professionnel de confiance et souhaitez collaborer avec Azalée Patrimoine ?
          Contactez-nous pour discuter des opportunités de partenariat.
        </p>
        <button className={styles.ctaButton}>Devenir Partenaire</button>
      </section>
      <ChatBot avatar={"/images/deal_914022.png"} />
    </div>
  );
};

export default Partenaires; 