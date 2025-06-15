import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import CarouselBand from '../components/CarouselBand';
import InvestmentChatBot from '../components/InvestmentChatBot';
import styles from '../styles/Expertises.module.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('entreprises');

  const expertiseContent = {
    entreprises: [
      {
        title: "Épargne salariale",
        description: "Optimisez la rémunération et la fidélisation de vos collaborateurs grâce à des dispositifs d'épargne sur-mesure, offrant également des avantages fiscaux et sociaux."
      },
      {
        title: "Placement de trésorerie",
        description: "Valorisez vos excédents de liquidités en les plaçant dans des solutions sûres et performantes, garantissant ainsi la pérennité financière de votre entreprise."
      },
      {
        title: "Santé collective",
        description: "Bénéficiez d'une couverture santé complète et flexible, conçue pour réduire votre reste à charge et garantir un accès rapide et de qualité aux soins pour vos collaborateurs."
      },
      {
        title: "Retraite collective",
        description: "Nous élaborons des solutions sur-mesure pour sécuriser la retraite collective de vos équipes, en optimisant les avantages fiscaux et en renforçant l'attractivité de votre politique RH."
      },
      {
        title: "Gestion des passifs sociaux",
        description: "Anticipez et maîtrisez les obligations sociales de votre entreprise pour réduire les risques et optimiser vos coûts en matière de protection sociale."
      }
    ],
    particuliers: [
      {
        title: "Assurance-vie",
        description: "Préparez l'avenir de vos proches tout en bénéficiant d'avantages fiscaux grâce à une assurance-vie flexible et personnalisée."
      },
      {
        title: "Retraite",
        description: "Construisez votre retraite idéale avec des solutions d'épargne sur-mesure, assurant une sécurité financière durable pour vos années futures."
      },
      {
        title: "Prévoyance",
        description: "Protégez-vous et vos proches contre les imprévus en adoptant des dispositifs de prévoyance adaptés à vos besoins spécifiques."
      },
      {
        title: "Investissements immobiliers",
        description: "Diversifiez et valorisez votre capital avec des investissements immobiliers sélectionnés rigoureusement pour leur stabilité et leur potentiel de plus-value à long terme."
      },
      {
        title: "Club deals",
        description: "Rejoignez un dispositif d'investissement collectif qui vous permet de mutualiser vos ressources pour investir dans des projets alternatifs à fort potentiel, avec un accompagnement expert."
      },
      {
        title: "Private equity",
        description: "Participez au financement d'entreprises innovantes et non cotées, dynamisant ainsi votre portefeuille par des investissements à forte valeur ajoutée."
      },
      {
        title: "Santé",
        description: "Optez pour une couverture santé complète et transparente qui réduit votre reste à charge et vous donne accès à un large réseau de professionnels pour des soins de qualité."
      }
    ]
  };

  const testimonials = [
    {
      text: "Une expertise et un accompagnement sur-mesure ! Grâce à Azalee Patrimoine, j'ai pu sécuriser mon avenir financier en toute sérénité. Transparence et professionnalisme au rendez-vous",
      author: "Dominique Dupont",
      role: "Directeur Général"
    },
    {
      text: "Un service client irréprochable ! L'équipe a su répondre à toutes mes questions et me proposer des solutions adaptées à mes besoins. Je recommande à 100%.",
      author: "Arthur Moez",
      role: "Entrepreneur"
    },
    {
      text: "Azalee Patrimoine a transformé ma vision de l'assurance et de l'investissement. Des conseils clairs, un suivi personnalisé et surtout des résultats concrets. Une vraie référence !",
      author: "Flavien Boer",
      role: "Profession Libérale"
    },
    {
      text: "Un accompagnement premium du début à la fin ! Azalee Patrimoine m'a aidée à prendre les meilleures décisions financières pour ma famille et moi. Une équipe au top !",
      author: "Marie Madeleine",
      role: "Médecin"
    },
    {
      text: "Une approche humaine et des conseils ultra pertinents. Azalee Patrimoine m'a permis d'optimiser mon épargne et de préparer sereinement mon avenir. Merci pour votre professionnalisme !",
      author: "Sonia Braillon",
      role: "Particulier"
    }
  ];

  return (
    <div className="page-container">
      <Head>
        <title>Azalée Patrimoine - Votre Partenaire de Confiance</title>
        <meta name="description" content="Azalée Patrimoine, votre partenaire de confiance pour la gestion et l'optimisation de votre patrimoine. Solutions sur-mesure en investissement, protection et optimisation fiscale." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/images/paris_desti_slider.webp"
            alt="Tour Eiffel Paris"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1>Votre patrimoine, notre expertise depuis 30 ans</h1>
          <p>Depuis 30 ans, nous sculptons l'avenir financier de ceux qui exigent l'excellence. Laissez-nous révéler le potentiel insoupçonné de votre patrimoine.</p>
          <div className="cta-buttons">
            <Link href="/contact" className="cta-button primary">
              Découvrez nos expertises
            </Link>
          </div>
        </div>
      </section>

      {/* Section Carousel */}
      <CarouselBand />

      {/* Section Expertises */}
      <section className={styles.expertiseSection}>
        <div className={styles.expertiseContent}>
          <h2>Nos Expertises & Services</h2>
          <p>Que vous soyez chef d'entreprise, professionnel libéral, médecin ou particulier, nos offres sont conçues pour répondre aux défis spécifiques de chaque profil.</p>
          
          <div className={styles.expertiseTabs}>
            <button 
              className={`${styles.tabButton} ${activeTab === 'entreprises' ? styles.active : ''}`}
              onClick={() => setActiveTab('entreprises')}
            >
              Pour les entreprises
            </button>
            <button 
              className={`${styles.tabButton} ${activeTab === 'particuliers' ? styles.active : ''}`}
              onClick={() => setActiveTab('particuliers')}
            >
              Pour les particuliers
            </button>
          </div>

          <div className={styles.expertiseGrid}>
            {expertiseContent[activeTab].map((expertise, index) => (
              <div key={index} className={styles.expertiseCard}>
                <h3>{expertise.title}</h3>
                <p>{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsHeader}>
          <h2>Ils nous font confiance</h2>
          <div className={styles.rating}>
            <div className={styles.stars}>★★★★★</div>
            <span className={styles.ratingText}>4.8/5 Satisfaction clients</span>
          </div>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialText}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorInfo}>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section Accompagnement */}
      <section className={styles.accompanimentSection}>
        <div className={styles.accompanimentContent}>
          <h2>Un Accompagnement Premium à Vos Côtés</h2>
          <p>
            Plus qu'un simple conseil, nous vous offrons un partenariat sur-mesure.
            De la première consultation à la mise en œuvre de solutions personnalisées, 
            notre équipe se tient à vos côtés avec écoute, réactivité et une disponibilité sans faille.
            Ici, chaque décision est guidée par la volonté de transformer vos défis en opportunités 
            et de faire de votre succès une réalité.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Prendre RDV en ligne
          </Link>
        </div>
      </section>

      <InvestmentChatBot />
    </div>
  );
} 