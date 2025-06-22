import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqCategories = [
    {
      title: "Gestion de Patrimoine",
      items: [
        {
          id: 1,
          question: "Qu'est-ce qu'un audit patrimonial ?",
          answer: "Un audit patrimonial est une analyse complète de votre situation financière, immobilière et familiale. Il permet d'identifier vos objectifs, d'évaluer vos besoins et de proposer des solutions adaptées pour optimiser votre patrimoine."
        },
        {
          id: 2,
          question: "Combien coûte un accompagnement en gestion de patrimoine ?",
          answer: "Nos tarifs varient selon la complexité de votre situation et les services requis. Nous proposons un premier rendez-vous gratuit pour évaluer vos besoins et vous présenter nos tarifs transparents."
        },
        {
          id: 3,
          question: "Quels sont les avantages fiscaux de l'assurance-vie ?",
          answer: "L'assurance-vie offre plusieurs avantages fiscaux : transmission hors succession (abattement de 152 500€ par bénéficiaire), imposition favorable des gains (prélèvement forfaitaire unique), et possibilité de retraits partiels."
        }
      ]
    },
    {
      title: "Immobilier",
      items: [
        {
          id: 4,
          question: "Qu'est-ce qu'une SCPI et comment ça fonctionne ?",
          answer: "Une SCPI (Société Civile de Placement Immobilier) permet d'investir dans l'immobilier sans les contraintes de gestion directe. Vous achetez des parts et recevez des revenus locatifs réguliers, avec une diversification géographique et sectorielle."
        },
        {
          id: 5,
          question: "Quels sont les avantages de l'investissement locatif ?",
          answer: "L'investissement locatif offre plusieurs avantages : revenus complémentaires, défiscalisation (Pinel, Malraux), constitution d'un patrimoine, et préparation de la retraite. Il nécessite cependant une bonne analyse du marché."
        },
        {
          id: 6,
          question: "Comment optimiser fiscalement un investissement immobilier ?",
          answer: "Plusieurs dispositifs existent : déduction des intérêts d'emprunt, amortissement, déficit foncier, et dispositifs de défiscalisation (Pinel, Malraux, Denormandie). Notre expertise vous aide à choisir la meilleure stratégie."
        }
      ]
    },
    {
      title: "Protection et Transmission",
      items: [
        {
          id: 7,
          question: "Comment protéger mon conjoint en cas de décès ?",
          answer: "Plusieurs solutions existent : assurance décès, assurance-vie avec clause bénéficiaire, donation entre époux, et testament. Nous analysons votre situation pour vous proposer la meilleure protection."
        },
        {
          id: 8,
          question: "Qu'est-ce qu'une donation-partage ?",
          answer: "La donation-partage permet de transmettre de son vivant une partie de son patrimoine à ses enfants, avec des avantages fiscaux importants. Elle évite les conflits successoraux et optimise la fiscalité."
        },
        {
          id: 9,
          question: "Comment préparer la transmission de mon entreprise ?",
          answer: "La transmission d'entreprise nécessite une préparation anticipée : évaluation, choix du repreneur, montage juridique, et optimisation fiscale. Nous vous accompagnons dans toutes ces étapes."
        }
      ]
    },
    {
      title: "Retraite et Épargne",
      items: [
        {
          id: 10,
          question: "Qu'est-ce que le PER et quels sont ses avantages ?",
          answer: "Le Plan d'Épargne Retraite (PER) permet d'épargner pour la retraite avec des avantages fiscaux : déduction des versements du revenu imposable, et imposition différée au moment de la retraite."
        },
        {
          id: 11,
          question: "Comment calculer mes besoins de retraite ?",
          answer: "Le calcul des besoins de retraite prend en compte : vos revenus actuels, votre mode de vie souhaité, l'inflation, et les prestations sociales. Nous vous aidons à établir un plan d'épargne adapté."
        },
        {
          id: 12,
          question: "Quels placements pour préparer ma retraite ?",
          answer: "Plusieurs solutions existent : PER, assurance-vie, PEA, immobilier locatif, et épargne salariale. Le choix dépend de votre horizon de placement, votre profil de risque, et votre situation fiscale."
        }
      ]
    }
  ];

  return (
    <div className={styles.faq}>
      <Head>
        <title>FAQ | Azalée Patrimoine</title>
        <meta name="description" content="Trouvez rapidement des réponses à vos questions sur la gestion de patrimoine, l'immobilier, la protection et la transmission." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Questions Fréquentes</h1>
          <p>
            Trouvez rapidement des réponses à vos questions sur la gestion de patrimoine, 
            l'immobilier, la protection et la transmission. Notre équipe d'experts est 
            également disponible pour des conseils personnalisés.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/home_14994708.png"
            alt="FAQ"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className={styles.searchContainer}>
          <input 
            type="text" 
            placeholder="Rechercher une question..." 
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>🔍</button>
        </div>
      </section>

      <section className={styles.faqContent}>
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className={styles.category}>
            <h2>{category.title}</h2>
            <div className={styles.faqItems}>
              {category.items.map((item) => (
                <div key={item.id} className={styles.faqItem}>
                  <button 
                    className={`${styles.faqQuestion} ${openItems[item.id] ? styles.active : ''}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    <span>{item.question}</span>
                    <span className={styles.arrow}>{openItems[item.id] ? '−' : '+'}</span>
                  </button>
                  <div className={`${styles.faqAnswer} ${openItems[item.id] ? styles.open : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className={styles.contact}>
        <h2>Vous ne trouvez pas votre réponse ?</h2>
        <p>
          Notre équipe d'experts est là pour vous accompagner. N'hésitez pas à nous 
          contacter pour des conseils personnalisés.
        </p>
        <div className={styles.contactButtons}>
          <button className={styles.contactButton}>Prendre rendez-vous</button>
          <button className={styles.contactButtonSecondary}>Nous contacter</button>
        </div>
      </section>
    </div>
  );
};

export default FAQ; 