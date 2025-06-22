import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Carriere.module.css';

const Carriere = () => {
  const jobOffers = [
    {
      id: 1,
      title: "Conseiller en Gestion de Patrimoine",
      location: "Paris",
      type: "CDI",
      experience: "3-5 ans",
      description: "Nous recherchons un conseiller expérimenté pour accompagner notre clientèle privée dans la gestion de leur patrimoine.",
      requirements: [
        "Bac+5 en finance, économie ou équivalent",
        "Minimum 3 ans d'expérience en gestion de patrimoine",
        "Certification AMF obligatoire",
        "Excellentes compétences relationnelles"
      ],
      benefits: [
        "Salaire attractif + intéressement",
        "Évolution de carrière rapide",
        "Formation continue",
        "Avantages sociaux complets"
      ]
    },
    {
      id: 2,
      title: "Expert Juridique et Fiscal",
      location: "Lyon",
      type: "CDI",
      experience: "5-8 ans",
      description: "Rejoignez notre équipe d'experts pour développer nos solutions juridiques et fiscales innovantes.",
      requirements: [
        "Master en droit fiscal ou équivalent",
        "Minimum 5 ans d'expérience en cabinet",
        "Spécialisation en droit patrimonial",
        "Maîtrise des outils numériques"
      ],
      benefits: [
        "Rémunération à la hauteur de l'expertise",
        "Autonomie dans les missions",
        "Développement de projets innovants",
        "Équipe dynamique et bienveillante"
      ]
    },
    {
      id: 3,
      title: "Chargé de Clientèle Entreprise",
      location: "Marseille",
      type: "CDI",
      experience: "2-4 ans",
      description: "Développez notre portefeuille clients entreprises et accompagnez-les dans leurs projets patrimoniaux.",
      requirements: [
        "Bac+4/5 en commerce ou finance",
        "Expérience en relation client B2B",
        "Connaissances en finance d'entreprise",
        "Permis B obligatoire"
      ],
      benefits: [
        "Salaire fixe + commissions",
        "Véhicule de fonction",
        "Formation métier complète",
        "Perspectives d'évolution"
      ]
    },
    {
      id: 4,
      title: "Développeur Full-Stack",
      location: "Télétravail",
      type: "CDI",
      experience: "3-6 ans",
      description: "Participez au développement de nos outils digitaux et plateformes d'accompagnement client.",
      requirements: [
        "Formation en informatique ou équivalent",
        "Maîtrise de React, Node.js, Python",
        "Expérience en développement d'applications",
        "Connaissances en cybersécurité"
      ],
      benefits: [
        "Télétravail possible",
        "Technologies modernes",
        "Projets innovants",
        "Équipe technique performante"
      ]
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Nous croyons en la force du travail d'équipe et de l'entraide."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Nous encourageons la créativité et les nouvelles idées."
    },
    {
      icon: "📈",
      title: "Excellence",
      description: "Nous visons l'excellence dans tout ce que nous faisons."
    },
    {
      icon: "🌱",
      title: "Développement",
      description: "Nous investissons dans la formation et l'évolution de nos collaborateurs."
    }
  ];

  return (
    <div className={styles.carriere}>
      <Head>
        <title>Carrière | Azalée Patrimoine</title>
        <meta name="description" content="Rejoignez l'équipe Azalée Patrimoine et participez à notre mission d'accompagnement patrimonial." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Carrière</h1>
          <p>
            Rejoignez une équipe dynamique et passionnée, dédiée à l'excellence 
            dans l'accompagnement patrimonial. Découvrez nos opportunités de carrière 
            et participez à notre mission.
          </p>
        </div>
        <div className={styles.heroImageContainer}>
          <img
            src="/images/carrierepng.png"
            alt="Carrière"
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.values}>
        <h2>Nos Valeurs</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.jobs}>
        <h2>Nos Offres d'Emploi</h2>
        <div className={styles.jobsGrid}>
          {jobOffers.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h3>{job.title}</h3>
                <div className={styles.jobMeta}>
                  <span className={styles.jobLocation}>📍 {job.location}</span>
                  <span className={styles.jobType}>📋 {job.type}</span>
                  <span className={styles.jobExperience}>⏱️ {job.experience}</span>
                </div>
              </div>
              <p className={styles.jobDescription}>{job.description}</p>
              
              <div className={styles.jobRequirements}>
                <h4>Profil recherché :</h4>
                <ul>
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.jobBenefits}>
                <h4>Avantages :</h4>
                <ul>
                  {job.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <button className={styles.applyButton}>Postuler</button>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.candidature}>
        <h2>Candidature Spontanée</h2>
        <p>
          Vous ne trouvez pas d'offre correspondant à votre profil ? 
          Envoyez-nous votre candidature spontanée !
        </p>
        <div className={styles.candidatureForm}>
          <div className={styles.formRow}>
            <input type="text" placeholder="Nom" />
            <input type="text" placeholder="Prénom" />
          </div>
          <div className={styles.formRow}>
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Téléphone" />
          </div>
          <select>
            <option value="">Sélectionnez un poste</option>
            <option value="conseiller">Conseiller en Gestion de Patrimoine</option>
            <option value="expert">Expert Juridique et Fiscal</option>
            <option value="charge">Chargé de Clientèle Entreprise</option>
            <option value="developpeur">Développeur Full-Stack</option>
            <option value="autre">Autre</option>
          </select>
          <textarea placeholder="Votre message" rows="5"></textarea>
          <button type="submit">Envoyer ma candidature</button>
        </div>
      </section>
    </div>
  );
};

export default Carriere; 