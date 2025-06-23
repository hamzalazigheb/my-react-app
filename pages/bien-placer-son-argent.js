import Head from 'next/head';
import Link from 'next/link';
import styles from './bien-placer-son-argent.module.css';
import MoneyGrowthIcon from '../src/assets/money-growth_12028691.png';
import ChatBot from '../src/components/ChatBot';

export default function BienPlacerSonArgent() {
  return (
    <div className={styles.protegerProches}>
      <Head>
        <title>Bien Placer Son Argent - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez la méthode Azalée Patrimoine pour investir avec sens, efficacité et sérénité." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>💰 Bien placer votre argent</h1>
          <p>La méthode Azalée Patrimoine pour investir avec sens, efficacité et sérénité</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={MoneyGrowthIcon.src} alt="Money Growth Icon" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>🎯 Pourquoi investir ? Clarifier vos objectifs pour orienter vos choix</h2>
        <p>
          Avant de parler produits, rendement ou fiscalité, il est essentiel de définir vos objectifs patrimoniaux.
          Un euro investi n'a pas le même sens selon votre projet :
        </p>
        <div className={styles.situationsGrid}>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📈</div>
            <h3>Valoriser un capital</h3>
            <p>Rechercher de la performance dans le temps</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🏠</div>
            <h3>Préparer un achat immobilier</h3>
            <p>Financer un projet à moyen terme</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🎓</div>
            <h3>Constituer une épargne</h3>
            <p>Pour les études des enfants</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>👴</div>
            <h3>Préparer la retraite</h3>
            <p>Anticiper la baisse de revenus</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>
              <img src="/images/money-back_6643108.png" alt="Créer des revenus passifs" style={{width:'2.2em',height:'2.2em',verticalAlign:'middle'}} />
            </div>
            <h3>Créer des revenus passifs</h3>
            <p>Se libérer du temps</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>👨‍👩‍👧‍👦</div>
            <h3>Transmettre un patrimoine</h3>
            <p>Dans un cadre fiscal maîtrisé</p>
          </div>
        </div>
        <p className={styles.note}>👉 Dans toutes ces situations, des dispositifs existent pour protéger vos proches, à condition d'être activés à temps.</p>
      </div>

      <div className={styles.section}>
        <h2>🛡️ La base : préserver votre capital de l'érosion monétaire</h2>
        <p>
          Investir, c'est d'abord éviter de perdre de l'argent sans s'en rendre compte.
          L'ennemi n°1 de votre épargne dormante, c'est l'inflation.
        </p>
        <div className={styles.note}>
          <h3>📊 Exemple concret :</h3>
          <p>
            10 000 € laissés sur un compte courant entre 2005 et 2025 ont perdu environ 30 % de leur pouvoir d'achat.
            Même placés sur un Livret A, l'effet est similaire : avec des taux inférieurs à l'inflation sur la plupart
            des 20 dernières années, vous perdez de la valeur sans le voir.
          </p>
          <p className={styles.note}>
            💡 Conclusion : ne rien faire coûte cher. Bien placer son argent, c'est agir pour protéger son pouvoir d'achat.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h2>📝 Fiscalité : savoir protéger ses gains pour mieux les conserver</h2>
        <p>En France, tous les revenus du capital sont fiscalisés :</p>
        <div className={styles.situationsGrid}>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>💸</div>
            <h3>Revenus financiers</h3>
            <p>Soumis à la flat tax (30%) ou à l'IR + prélèvements sociaux</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🏢</div>
            <h3>Revenus immobiliers</h3>
            <p>Taxation via le régime réel ou micro, plus impôts fonciers</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📈</div>
            <h3>Plus-values</h3>
            <p>Soumises à l'impôt, sauf si vous optimisez vos montages</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>⚡ Notre Approche</h2>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>1️⃣</div>
            <h3>Analyse Personnalisée</h3>
            <p>Nous étudions votre structure et vos spécificités pour identifier vos priorités.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>2️⃣</div>
            <h3>Solutions Innovantes</h3>
            <p>Nous créons des dispositifs sur-mesure qui maximisent vos avantages.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>3️⃣</div>
            <h3>Gestion Intégrée</h3>
            <p>Un suivi régulier avec une transparence totale sur les performances.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>4️⃣</div>
            <h3>Optimisation Continue</h3>
            <p>Nous ajustons votre solution selon l'évolution de vos besoins.</p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>🤝 Azalée Patrimoine vous accompagne</h2>
        <p>Notre méthode repose sur une approche simple et personnalisée :</p>
        <Link href="/contact" className={styles.ctaButton}>
          Prenez rendez-vous dès maintenant
        </Link>
      </div>
      <ChatBot avatar={MoneyGrowthIcon.src} />
    </div>
  );
} 