import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/AzaleePatrimoine.module.css';
import contact from '../src/assets/contact.png';
import phone from '../src/assets/phone_12153240.png';
import home from '../src/assets/home_14994708.png';
import money from '../src/assets/money_12037483.png';
import man from '../src/assets/man_14038016.png';
import moneyGrowth from '../src/assets/money-growth_12028691.png';
import azaleePatrimoine from '../src/assets/azalee-patrimoine.png';
import logo1 from '../src/assets/logo1.png';
import homeIcon from '../src/assets/home_14994708.png';

const AzaleePatrimoine = () => {
  const history = [
    {
      title: 'AGORA PATRIMOINE',
      description: 'Notre trajectoire débute avec AGORA PATRIMOINE, symbole d\'un savoir-faire rigoureux et d\'un engagement sans faille dans la gestion patrimoniale.'
    },
    {
      title: 'PROACTIVE FINANCE',
      description: 'Vingt ans plus tard, PROACTIVE FINANCE prend le relais, en introduisant des solutions personnalisées et diversifiées qui redéfinissent les contours de l\'investissement.'
    },
    {
      title: 'AZALÉE PATRIMOINE',
      description: 'En 2025, sous l\'impulsion de trois experts visionnaires, AZALÉE PATRIMOINE naît pour incarner une nouvelle ère : celle d\'un accompagnement premium, capable de révéler le plein potentiel de votre patrimoine, tout en anticipant les évolutions du marché.'
    }
  ];

  return (
    <>
      <Head>
        <title>Qui sommes-nous - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez l'histoire et la vision d'Azalée Patrimoine, votre partenaire de confiance en gestion patrimoniale depuis plus de 30 ans." />
      </Head>

      <div className={styles.azaleePatrimoine}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem'}}>
              <h1 style={{margin: 0}}>L'Histoire d'une excellence évolutive</h1>
            </div>
            <p>
              Depuis plus de 30 ans, Azalée Patrimoine incarne l'art de transformer le patrimoine en véritable levier d'avenir. 
              Notre histoire, façonnée par l'expérience et l'innovation, témoigne d'un parcours qui allie tradition et audace, 
              pour offrir à nos clients exigeants des solutions financières qui transcendent le conventionnel.
            </p>
          </div>
          <div className={styles.heroImageContainer}>
            <Image
              src={logo1}
              alt="Azalée Patrimoine"
              width={180}
              height={180}
              className={styles.heroImage}
            />
          </div>
        </div>

        {/* Big Bubble Icons Section */}
        <section className={styles.bubbleSection}>
          <div className={styles.bubble} style={{position: 'relative'}}>
            <div className={styles.iconGrid}>
              <Link href="/reduire-vos-impots" className={styles.iconItem}>
                <img src="/images/tax-deducted_14431175.png" alt="Réduction d'Impôts" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Réduire vos impôts</span>
              </Link>
              <Link href="/financer-etudes-enfants" className={styles.iconItem}>
                <img src="/images/student_15175598.png" alt="Études" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Financer études</span>
              </Link>
              <Link href="/gestion-patrimoine-sur-mesure" className={styles.iconItem}>
                <img src="/images/build_9199943.png" alt="Patrimoine" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Gestion patrimoine</span>
              </Link>
              <Link href="/ressources/carriere" className={styles.iconItem}>
                <img src="/images/carrierepng.png" alt="Carrière" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Carrière</span>
              </Link>
              <Link href="/ressources/faq" className={styles.iconItem}>
                <img src="/images/faq_17516656.png" alt="FAQ" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>FAQ</span>
              </Link>
              <Link href="/ressources/actualites" className={styles.iconItem}>
                <img src="/images/publication.png" alt="Publication" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Actualités</span>
              </Link>
              <Link href="/solutions-projets" className={styles.iconItem}>
                <img src="/images/idea_10962016.png" alt="Idée" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Solutions projets</span>
              </Link>
              <Link href="/comprendre-placements" className={styles.iconItem}>
                <img src="/images/learn_2861672.png" alt="Apprentissage" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Comprendre placements</span>
              </Link>
              <Link href="/audit-patrimonial" className={styles.iconItem}>
                <Image src={homeIcon} alt="Audit Patrimonial" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Audit patrimonial</span>
              </Link>
              <Link href="/outils-pedagogiques" className={styles.iconItem}>
                <img src="/images/design_3516748.png" alt="Design" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Outils pédagogiques</span>
              </Link>
              <Link href="/bien-placer-son-argent" className={styles.iconItem}>
                <Image src={moneyGrowth} alt="Money Growth" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Bien placer argent</span>
              </Link>
              <Link href="/proteger-vos-proches" className={styles.iconItem}>
                <img src="/images/life-insurance_10723210.png" alt="Protection des proches" className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Protéger proches</span>
              </Link>
              <Link href="/contact" className={styles.iconItem}>
                <Image src={contact} alt="Contact" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Contact</span>
              </Link>
              <Link href="/contact" className={styles.iconItem}>
                <Image src={phone} alt="Phone" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Contact</span>
              </Link>
              <Link href="/" className={styles.iconItem}>
                <Image src={home} alt="Home" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Accueil</span>
              </Link>
              <Link href="/azalee-patrimoine" className={styles.iconItem}>
                <Image src={logo1} alt="Logo" width={74} height={74} className={styles.bubbleIcon} />
                <span className={styles.iconLabel}>Qui sommes-nous</span>
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>De l'héritage à l'innovation ...</h2>
          <div className={styles.historyGrid}>
            {history.map((item, index) => (
              <div key={index} className={styles.historyCard}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Notre vision</h2>
          <p className={styles.sectionDescription}>
            Nous allions l'expertise éprouvée d'un héritage de 30 ans à une vision résolument tournée vers l'avenir.
            Chaque conseil, chaque stratégie est élaboré avec la précision d'un artisan, pour transformer vos ambitions en succès concrets.
          </p>
          <div className={styles.stats}>
            <div className={styles.statsNumber}>30</div>
            <div className={styles.statsLabel}>Années d'expériences</div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>L'Engagement AZALÉE : Une promesse d'avenir</h2>
          <p>
            Chez Azalée Patrimoine, chaque décision, chaque conseil est une promesse d'avenir.
            Nous vous invitons à découvrir comment notre héritage d'excellence et notre approche sur-mesure 
            peuvent transformer votre patrimoine en une réussite durable.
            Parce que votre avenir mérite d'être sculpté avec soin et ambition, nous sommes à vos côtés 
            pour révéler tout le potentiel de vos projets.
          </p>
          <button className={styles.ctaButton}>Faites la rencontre de votre conseillé</button>
        </section>
      </div>
    </>
  );
};

export default AzaleePatrimoine; 