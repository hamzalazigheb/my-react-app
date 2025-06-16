import React from 'react';
import Head from 'next/head';
import styles from '../styles/OutilsPedagogiques.module.css';

const OutilsPedagogiques = () => {
  const outils = [
    {
      categorie: 'Fidélisation et attractivité',
      description: 'Attirer et retenir les meilleurs talents est crucial dans un marché concurrentiel. Vos collaborateurs attendent des avantages salariaux à la hauteur de leurs aspirations. Un dispositif bien pensé renforce non seulement leur motivation, mais contribue également à forger une image employeur forte et différenciante.',
      outils: [
        {
          titre: 'Guide de l\'épargne salariale',
          description: 'Comprendre les différents dispositifs d\'épargne salariale et leurs avantages.',
          lien: '/guides/epargne-salariale'
        },
        {
          titre: 'Calculateur de participation',
          description: 'Estimez le montant de la participation aux bénéfices de votre entreprise.',
          lien: '/calculateurs/participation'
        },
        {
          titre: 'Fiche pratique PER',
          description: 'Tout savoir sur le Plan d\'Épargne Retraite et ses avantages.',
          lien: '/fiches/per'
        }
      ]
    },
    {
      categorie: 'Conformité et sécurité',
      description: 'La conformité réglementaire est essentielle pour protéger votre entreprise et vos collaborateurs. Nos outils vous aident à comprendre et à mettre en œuvre les bonnes pratiques.',
      outils: [
        {
          titre: 'Checklist conformité',
          description: 'Vérifiez que votre dispositif respecte toutes les obligations légales.',
          lien: '/checklists/conformite'
        },
        {
          titre: 'Guide des obligations légales',
          description: 'Panorama complet des obligations en matière d\'épargne salariale.',
          lien: '/guides/obligations-legales'
        },
        {
          titre: 'Fiche sécurité juridique',
          description: 'Les points clés pour sécuriser votre dispositif.',
          lien: '/fiches/securite-juridique'
        }
      ]
    },
    {
      categorie: 'Simplicité administrative',
      description: 'Simplifiez la gestion de votre dispositif d\'épargne salariale grâce à nos outils pratiques et intuitifs.',
      outils: [
        {
          titre: 'Modèles de documents',
          description: 'Téléchargez des modèles de documents prêts à l\'emploi.',
          lien: '/modeles/documents'
        },
        {
          titre: 'Calendrier des échéances',
          description: 'Ne manquez plus aucune date importante.',
          lien: '/calendriers/echeances'
        },
        {
          titre: 'Guide des procédures',
          description: 'Suivez pas à pas les procédures administratives.',
          lien: '/guides/procedures'
        }
      ]
    },
    {
      categorie: 'Optimisation fiscale et financière',
      description: 'Maximisez les avantages de votre dispositif d\'épargne salariale grâce à nos outils d\'optimisation.',
      outils: [
        {
          titre: 'Simulateur fiscal',
          description: 'Calculez les économies d\'impôts potentielles.',
          lien: '/simulateurs/fiscal'
        },
        {
          titre: 'Guide d\'optimisation',
          description: 'Découvrez les meilleures stratégies d\'optimisation.',
          lien: '/guides/optimisation'
        },
        {
          titre: 'Fiche avantages fiscaux',
          description: 'Panorama des avantages fiscaux disponibles.',
          lien: '/fiches/avantages-fiscaux'
        }
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Outils Pédagogiques - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos outils pédagogiques pour vous accompagner dans vos projets patrimoniaux." />
      </Head>

      <div className={styles.outilsPedagogiques}>
        <div className={styles.hero}>
          <h1>Outils pédagogiques</h1>
          <p>
            Nous mettons à votre disposition des fiches thématiques pour chaque situation étudiée.
            Ex : Dois-je me PACSER pour protéger ma compagne ? Dois-je signer un contrat de mariage, si oui lequel ?
          </p>
        </div>

        {outils.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2>{section.categorie}</h2>
            <p className={styles.sectionDescription}>{section.description}</p>
            <div className={styles.outilsGrid}>
              {section.outils.map((outil, oIndex) => (
                <div key={oIndex} className={styles.outilCard}>
                  <h3>{outil.titre}</h3>
                  <p>{outil.description}</p>
                  <a href={outil.lien} className={styles.outilLink}>
                    Consulter l'outil
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className={styles.cta}>
          <h2>Transformez vos avantages en succès !</h2>
          <p>
            Nos outils pédagogiques sont conçus pour vous aider à prendre les meilleures décisions 
            pour votre patrimoine. N'hésitez pas à les consulter et à nous contacter pour plus d'informations.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </section>
      </div>
    </>
  );
};

export default OutilsPedagogiques; 