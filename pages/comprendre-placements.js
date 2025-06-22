import React from 'react';
import Head from 'next/head';
import styles from '../styles/ComprendrePlacements.module.css';
import ChatBot from '../src/components/ChatBot';

const ComprendrePlacements = () => {
  return (
    <div className={styles.comprendrePlacements}>
      <Head>
        <title>Comprendre mes placements | Azalée Patrimoine</title>
        <meta name="description" content="Découvrez les clés pour mieux comprendre vos placements financiers et faire les bons choix pour l'avenir avec Azalée Patrimoine." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Comprendre mes placements</h1>
          <h2>Des choix éclairés pour un avenir maîtrisé</h2>
          <p>Chez Azalée Patrimoine, nous croyons qu'un bon placement commence toujours par une bonne compréhension. Trop souvent, les épargnants investissent sans savoir à quoi sert vraiment leur placement, ni s'il est en cohérence avec leur projet de vie. Notre mission, c'est de rendre vos décisions d'investissement claires, accessibles et alignées avec vos objectifs personnels.</p>
          <p>👉 Découvrez les clés pour mieux comprendre vos placements financiers, et faire les bons choix pour l'avenir.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/placement_7870830.png" alt="Comprendre Placements" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Pourquoi comprendre ses placements est essentiel ?</h2>
        <p>Investir, ce n'est pas simplement faire fructifier son argent. C'est construire un projet de vie, se protéger face aux aléas, préparer l'avenir de ses proches ou compléter ses revenus.</p>
        <p>Mais sans une bonne compréhension des produits financiers, beaucoup d'épargnants prennent des décisions mal informées, souvent influencées par des promesses de rendement ou des conseils génériques.</p>
        <p className={styles.highlight}>👉 En comprenant vraiment le fonctionnement, les risques, la fiscalité et l'horizon de chaque placement, vous reprenez le pouvoir sur votre argent. Vous évitez les erreurs coûteuses et faites des choix cohérents avec votre profil, vos besoins et vos valeurs.</p>
      </div>

      <div className={styles.section}>
        <h2>Les grandes familles de placements expliquées simplement</h2>
        <p>Chez Azalée, nous vous aidons à y voir clair dans la jungle des placements financiers. Voici un aperçu des principales catégories d'investissement :</p>
        <div className={styles.placementsGrid}>
          <div className={styles.placementCard}>
            <div className={styles.placementIcon}>🔒</div>
            <h3>Placements sécurisés</h3>
            <p>Idéaux pour constituer une épargne de précaution ou sécuriser une partie de son patrimoine. Il s'agit principalement des livrets réglementés (Livret A, LDDS), comptes à terme ou fonds euros dans l'assurance-vie. Le rendement est faible, mais le capital est garanti.</p>
          </div>
          <div className={styles.placementCard}>
            <div className={styles.placementIcon}>📈</div>
            <h3>Placements dynamiques</h3>
            <p>Pour ceux qui souhaitent une croissance plus importante de leur capital, avec une acceptation du risque. Actions, obligations, fonds d'investissement...</p>
          </div>
          <div className={styles.placementCard}>
            <div className={styles.placementIcon}>🧓</div>
            <h3>Placements à long terme</h3>
            <p>Solutions adaptées pour préparer sa retraite ou transmettre son patrimoine. PER, assurance-vie, contrats de capitalisation...</p>
          </div>
          <div className={styles.placementCard}>
            <div className={styles.placementIcon}>🏠</div>
            <h3>Investissements immobiliers</h3>
            <p>SCPI, immobilier locatif, pierre-papier... Des solutions pour diversifier son patrimoine et générer des revenus complémentaires.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Associer chaque placement à un objectif</h2>
        <p>Un placement efficace, c'est un placement qui répond à un objectif bien défini. Chez Azalée, nous vous aidons à faire le lien entre vos projets de vie et les supports les plus adaptés.</p>
        <div className={styles.objectifsGrid}>
          <div className={styles.objectifCard}>
            <div className={styles.objectifIcon}>💰</div>
            <h3>Constituer une épargne de précaution</h3>
            <p>Livrets, fonds euros</p>
          </div>
          <div className={styles.objectifCard}>
            <div className={styles.objectifIcon}>👵</div>
            <h3>Préparer sa retraite</h3>
            <p>PER, assurance-vie à long terme</p>
          </div>
          <div className={styles.objectifCard}>
            <div className={styles.objectifIcon}>👨‍👩‍👧‍👦</div>
            <h3>Protéger sa famille et transmettre</h3>
            <p>Assurance-vie, donation</p>
          </div>
          <div className={styles.objectifCard}>
            <div className={styles.objectifIcon}>📉</div>
            <h3>Réduire sa fiscalité</h3>
            <p>PER, immobilier défiscalisant, FIP/FCPI</p>
          </div>
          <div className={styles.objectifCard}>
            <div className={styles.objectifIcon}>📈</div>
            <h3>Générer des revenus complémentaires</h3>
            <p>SCPI, immobilier locatif</p>
          </div>
        </div>
        <p className={styles.highlight}>👉 Vous ne savez pas par où commencer ? Faites notre mini-diagnostic gratuit pour découvrir les solutions adaptées à votre situation.</p>
      </div>

      <div className={styles.section}>
        <h2>Les erreurs fréquentes des épargnants à éviter</h2>
        <p>Même avec les meilleures intentions, il est facile de faire fausse route. Voici les erreurs que nous observons régulièrement :</p>
        <div className={styles.errorsGrid}>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>❌</div>
            <p>Investir sans comprendre le risque réel</p>
          </div>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>❌</div>
            <p>Ne pas tenir compte de la fiscalité</p>
          </div>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>❌</div>
            <p>Mettre tous ses œufs dans le même panier</p>
          </div>
          <div className={styles.errorCard}>
            <div className={styles.errorIcon}>❌</div>
            <p>Oublier d'adapter ses placements à l'évolution de sa vie</p>
          </div>
        </div>
        <p>Chez Azalée, notre rôle est aussi de vous protéger contre les pièges classiques de l'épargne, en vous fournissant des explications claires et des recommandations objectives.</p>
      </div>

      <div className={styles.section}>
        <h2>Quel placement est fait pour vous ?</h2>
        <p>Répondez à ces 4 questions et découvrez les solutions les plus adaptées à votre profil.</p>
        <div className={styles.formContainer}>
          <form className={styles.placementForm}>
            <div className={styles.formGroup}>
              <label>🎯 Votre objectif principal :</label>
              <select>
                <option>— Choisissez —</option>
                <option>Épargne de précaution</option>
                <option>Préparation retraite</option>
                <option>Transmission</option>
                <option>Réduction fiscale</option>
                <option>Revenus complémentaires</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>⏳ Votre horizon de placement :</label>
              <select>
                <option>— Choisissez —</option>
                <option>Court terme (&lt; 3 ans)</option>
                <option>Moyen terme (3-8 ans)</option>
                <option>Long terme (&gt; 8 ans)</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>⚖️ Votre tolérance au risque :</label>
              <select>
                <option>— Choisissez —</option>
                <option>Prudent</option>
                <option>Équilibré</option>
                <option>Dynamique</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>📊 Avez-vous déjà des produits en place ?</label>
              <select>
                <option>— Choisissez —</option>
                <option>Non, je débute</option>
                <option>Oui, quelques placements</option>
                <option>Oui, un patrimoine diversifié</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>📩 Pour recevoir votre analyse personnalisée :</label>
              <input type="text" placeholder="Prénom" />
              <input type="email" placeholder="Email" />
            </div>
            <button type="submit" className={styles.submitButton}>Obtenir mes résultats</button>
          </form>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Comment Azalée vous aide à mieux investir?</h2>
        <p>Nous pensons que chaque épargnant mérite un accompagnement personnalisé. Notre méthode repose sur trois piliers :</p>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>01</div>
            <h3>Écoute et diagnostic</h3>
            <p>Comprendre votre situation, vos projets et votre appétence au risque.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>02</div>
            <h3>Analyse de vos placements actuels</h3>
            <p>Détecter les incohérences et opportunités d'optimisation.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>03</div>
            <h3>Recommandations concrètes</h3>
            <p>Vous proposer une stratégie d'investissement sur-mesure, avec un suivi dans la durée.</p>
          </div>

        </div>
        <p className={styles.highlight}>📞 Besoin d'un avis sur vos placements ? Prenez rendez-vous gratuitement avec un conseiller Azalée pour un point patrimonial personnalisé.</p>
      </div>

      <div className={styles.cta}>
        <h2>Transformez vos avantages en succès !</h2>
        <p>Chaque avantage fiscal, chaque produit d'épargne, chaque opportunité patrimoniale peut devenir un véritable levier de réussite… à condition d'être bien utilisé. Chez Azalée Patrimoine, nous ne vous parlons pas en jargon technique. Nous vous aidons à comprendre vos atouts pour mieux les activer.</p>
        <p>➡️ Vous avez un PER mais vous ne savez pas combien il peut vraiment vous faire économiser d'impôts ?</p>
        <p>➡️ Vous avez un contrat d'assurance-vie qui dort, sans savoir s'il est encore adapté à votre situation ?</p>
        <p>➡️ Vous êtes en train d'acheter un bien immobilier sans savoir s'il peut optimiser votre fiscalité ?</p>
        <p>Nous vous accompagnons pour faire le lien entre vos outils financiers et vos ambitions concrètes. Le bon placement, c'est celui qui sert un projet. Nous transformons vos produits d'épargne en actions stratégiques, pour que chaque euro placé vous rapproche de vos objectifs de vie.</p>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <ChatBot avatar={"/images/placement_7870830.png"} />
    </div>
  );
};

export default ComprendrePlacements; 