import React from 'react';
import Head from 'next/head';
import styles from '../styles/PreparerRetraite.module.css';
import RetraiteChatBot from '../src/components/RetraiteChatBot';

const PreparerRetraite = () => {
  return (
    <div className={styles.preparerRetraite}>
      <Head>
        <title>Préparer ma retraite | Azalée Patrimoine</title>
        <meta name="description" content="Anticipez votre retraite avec Azalée Patrimoine. Découvrez nos solutions personnalisées pour préparer sereinement votre avenir." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Préparer ma retraite</h1>
          <p>La retraite… certains rêvent de la prendre à 40 ans, d'autres sont plus terre à terre.</p>
          <p>Que ce soit l'allongement de la durée de travail, l'augmentation du prix du point, les restrictions en termes de réversion.</p>
          <p>La retraite, ce sera au moins 40% de décôte. Alors, faut-il encore miser sur la retraite par répartition ou est-il préférable de capitaliser pour la retraite?</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/elderly_9442083.png" alt="Préparation Retraite" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Préparer votre retraite : le bon réflexe, c'est d'anticiper</h2>
        <p>La retraite n'est plus ce qu'elle était. Les régimes obligatoires sont de plus en plus fragilisés, et la baisse de revenus à la fin de la vie active peut être brutale. Il est donc essentiel d'anticiper dès que possible.</p>
        <div className={styles.exampleBox}>
          <h3>Un principe simple : plus vous commencez tôt, plus l'effort d'épargne est faible.</h3>
          <p>Exemple concret :<br />
          ➡️ 150 € épargnés par mois pendant 23 ans à 5 %/an = un capital qui vous permet de percevoir 150 €/mois pendant toute votre retraite.</p>
        </div>
        <p>Vous voulez 1 000 € par mois de complément ? Vous avez 10, 20 ou 30 ans devant vous ? Nous construisons avec vous une stratégie adaptée à votre horizon.</p>
        <p>Immobilier locatif, assurance-vie, PER, contrats à points, dividendes… chaque levier est actionné en fonction de vos moyens, de vos objectifs et de votre fiscalité.</p>
      </div>

      <div className={styles.section}>
        <h2>🕒 À partir de quel âge prépare-t-on sa retraite ?</h2>
        <p>La réponse est simple : le plus tôt possible. Préparer sa retraite ne se limite pas à cotiser : c'est aussi anticiper ses besoins futurs, choisir les bons supports d'épargne, optimiser sa fiscalité et protéger ses proches. Plus on commence jeune, plus l'effort financier est léger grâce à l'effet des intérêts composés. Mais il n'est jamais trop tard pour agir intelligemment : à 30, 45 ou même 55 ans, des stratégies adaptées existent.</p>
      </div>

      <div className={styles.section}>
        <h2>Vos enjeux, Nos réponses</h2>
        <div className={styles.enjeuxGrid}>
          <div className={styles.enjeux}>
            <h3>✅ Vous vous demandez…</h3>
            <ul>
              <li>À quel âge prendre votre retraite ?</li>
              <li>Comment compenser la baisse de vos revenus ?</li>
              <li>Comment optimiser la fiscalité de votre épargne ou de vos rentes ?</li>
              <li>Quels supports privilégier selon votre horizon ?</li>
              <li>Si vous devez investir dans l'immobilier ou plutôt en assurance vie ?</li>
              <li>Comment préserver votre patrimoine tout en générant un complément de revenu stable ?</li>
            </ul>
          </div>
          <div className={styles.enjeux}>
            <h3>💡 Nos réponses</h3>
            <ul>
              <li>Un bilan retraite personnalisé, avec simulation de vos droits actuels</li>
              <li>Des solutions d'épargne ciblées, avec un suivi régulier</li>
              <li>Une stratégie de décumulation optimisée pour votre retraite active et la dépendance</li>
              <li>Une vision intergénérationnelle pour lier retraite, transmission et protection</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Nos solutions sur-mesure</h2>
        <p>Chez Azalée Patrimoine, nous savons qu'il n'existe pas de solution universelle pour bien préparer sa retraite. Chaque projet est unique, car il dépend de votre âge, de votre situation professionnelle, de vos objectifs de vie, de votre fiscalité… et de vos priorités.</p>
        <p>C'est pourquoi nous commençons toujours par un bilan retraite complet, incluant :</p>
        <ul className={styles.checklist}>
          <li>La projection de vos droits à la retraite obligatoire</li>
          <li>L'analyse de votre capacité d'épargne et de votre patrimoine existant</li>
          <li>L'étude de vos contraintes fiscales et de vos objectifs de transmission</li>
        </ul>
        <p>À partir de là, nous construisons une stratégie sur-mesure, en combinant les meilleurs leviers : PER, assurance vie, immobilier, contrats de capitalisation, investissements thématiques, optimisation fiscale et juridique.</p>
        <p>Nous ajustons votre stratégie au fil du temps, avec un accompagnement régulier, pour faire de votre retraite une étape sereine, maîtrisée et alignée avec vos valeurs.</p>
        <p className={styles.highlight}>🎯 Parce qu'une retraite réussie, ça se prépare… mais surtout, ça s'accompagne.</p>
      </div>

      <div className={styles.section}>
        <h2>Notre approche</h2>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>01</div>
            <h3>Analyse Personnalisée et Approfondie</h3>
            <p>Nous étudions votre structure et vos spécificités pour identifier vos priorités et comprendre vos contraintes.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>02</div>
            <h3>Conception de Solutions Innovantes</h3>
            <p>Nous créons des dispositifs sur-mesure qui maximisent les avantages fiscaux et optimisent les rendements.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>03</div>
            <h3>Gestion Intégrée et Suivi Transparent</h3>
            <p>Une gestion fluide et un suivi régulier, garantissant une transparence totale sur les performances.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>04</div>
            <h3>Optimisation Continue</h3>
            <p>Nous ajustons votre solution en fonction des changements économiques, fiscaux et de votre activité.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Sécurité et transparence : Nos engagements</h2>
        <p>Préparer sa retraite, c'est faire des choix importants qui engagent le long terme. Chez Azalée Patrimoine, nous plaçons la sécurité de vos placements et la transparence de nos conseils au cœur de notre accompagnement. Chaque solution proposée est sélectionnée selon des critères rigoureux de solidité financière, de lisibilité juridique et de performance adaptée à votre profil.</p>
        <p>Vous savez où va votre argent, pourquoi, et avec quels objectifs. Aucune décision n'est prise sans votre validation, et chaque étape vous est expliquée avec clarté.</p>
        <p className={styles.highlight}>💡 Faire confiance, c'est d'abord comprendre. Nous vous devons des conseils clairs, des outils fiables et une communication sans jargon.</p>
      </div>

      <div className={styles.section}>
        <h2>La retraite… certains rêvent de la prendre à 40 ans, d'autres sont plus terre à terre.</h2>
        <div className={styles.blueBackground}>
          <p>Que ce soit l'allongement de la durée de travail, l'augmentation du prix du point, les restrictions en termes de réversion.</p>
          <p>La retraite, ce sera au moins 40% de décôte. Alors, faut-il encore miser sur la retraite par répartition ou est-il préférable de capitaliser pour la retraite?</p>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Transformez vos avantages en succès !</h2>
        <p>Vous avez déjà un patrimoine, un contrat PER, un bien locatif ou une capacité d'épargne régulière ? Parfait. Mais savez-vous s'il est aligné avec vos objectifs de retraite ? Êtes-vous sûr d'en tirer le plein potentiel au bon moment, avec la bonne fiscalité ?</p>
        <p>Chez Azalée Patrimoine, nous vous aidons à valoriser ce que vous avez déjà, à compléter ce qui manque, et à sécuriser votre avenir sans sacrifier votre présent.</p>
        <p>👉 Contactez-nous pour un audit retraite gratuit et confidentiel.</p>
        <p>Chaque étape bien préparée, c'est une retraite plus sereine… et un patrimoine mieux maîtrisé.</p>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <RetraiteChatBot />
    </div>
  );
};

export default PreparerRetraite; 