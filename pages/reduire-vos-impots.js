import React from 'react';
import Head from 'next/head';
import styles from '../styles/ReduireImpots.module.css';
import MoneyIcon from '../src/assets/money_12037483.png';

const ReduireImpots = () => {
  return (
    <div className={styles.protegerProches}>
      <Head>
        <title>Réduire vos impôts | Azalée Patrimoine</title>
        <meta name="description" content="Optimisez votre fiscalité avec des solutions légales et adaptées à votre situation. Découvrez nos solutions pour réduire vos impôts tout en construisant votre patrimoine." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Réduire vos impôts : faites de votre fiscalité une opportunité</h1>
          <p>Chez Azalée Patrimoine, nous pensons qu'un impôt bien maîtrisé est un patrimoine qui progresse plus vite. Trop souvent, les contribuables subissent leur fiscalité sans savoir qu'il existe des leviers concrets, simples et parfaitement légaux pour réduire leur imposition, tout en servant des objectifs personnels : préparer la retraite, protéger la famille, investir intelligemment…</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={MoneyIcon.src} alt="Impôts Icon" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Pourquoi payer plus que nécessaire ?</h2>
        <p>Chaque année, des milliers de foyers fiscaux passent à côté d'opportunités de réduction d'impôts faute d'informations claires ou de stratégie personnalisée. Pourtant, il existe de nombreux dispositifs qui permettent de réduire son impôt sur le revenu, son IFI ou ses plus-values, tout en construisant un patrimoine solide :</p>
        <div className={styles.situationsGrid}>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>💰</div>
            <h3>Le Plan d'Épargne Retraite (PER)</h3>
            <p>Pour déduire jusqu'à plusieurs milliers d'euros de son revenu imposable</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🏠</div>
            <h3>Dispositifs immobiliers</h3>
            <p>Pinel, Denormandie, LMNP, déficit foncier pour allier investissement et défiscalisation</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📈</div>
            <h3>Fonds d'investissement (FIP, FCPI)</h3>
            <p>Pour soutenir l'économie réelle tout en diminuant son impôt</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📜</div>
            <h3>Assurance-vie ou don d'usufruit temporaire</h3>
            <p>Pour optimiser sa transmission</p>
          </div>
        </div>
        <p className={styles.note}>👉 Vous ne savez pas par où commencer ? Notre équipe vous aide à détecter les leviers les plus adaptés à votre situation personnelle.</p>
      </div>

      <div className={styles.section}>
        <h2>📉 Les dispositifs de défiscalisation à connaître</h2>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>1️⃣</div>
            <h3>PER : préparez votre retraite tout en réduisant vos impôts</h3>
            <p>Chaque versement sur un PER est déductible de vos revenus imposables dans la limite d'un plafond. Résultat : vous épargnez tout en réduisant votre imposition.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>2️⃣</div>
            <h3>Immobilier locatif : gagnez sur tous les plans</h3>
            <p>Acheter un bien sous Pinel ou en location meublée (LMNP) vous permet à la fois de défiscaliser, générer des revenus réguliers et constituer un patrimoine tangible.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>3️⃣</div>
            <h3>Fonds fiscaux (FIP/FCPI) : soutenez l'innovation</h3>
            <p>Ces placements vous offrent une réduction d'impôt immédiate (18 à 25 %) en contrepartie d'un investissement dans les PME françaises.</p>
          </div>
        </div>
        <p className={styles.note}>💡 Astuce Azalée : Il ne s'agit pas de cumuler tous les dispositifs, mais de choisir ceux qui correspondent à votre profil, à vos objectifs et à votre horizon d'investissement.</p>
      </div>

      <div className={styles.section}>
        <h2>⚠️ Les pièges à éviter</h2>
        <div className={styles.enjeuxGrid}>
          <div className={styles.enjeux}>
            <ul>
              <li>Choisir un produit uniquement pour la carotte fiscale</li>
              <li>Investir dans un bien mal localisé ou mal géré</li>
              <li>Ne pas anticiper les conséquences à la sortie (fiscalité différée, liquidité, transmission)</li>
              <li>Oublier d'actualiser sa stratégie quand la situation personnelle évolue</li>
            </ul>
          </div>
        </div>
        <p>Chez Azalée, nous vous accompagnons pas à pas pour construire une stratégie cohérente, durable et fiscalement optimisée.</p>
      </div>

      <div className={styles.section}>
        <h2>🤝 Parlons-en : votre situation est unique</h2>
        <div className={styles.formContainer}>
          <h3>💡 Combien pouvez-vous réduire vos impôts ?</h3>
          <p>Répondez à ces quelques questions et recevez votre estimation + nos conseils personnalisés par email.</p>
          <form className={styles.estimationForm}>
            <div className={styles.formGroup}>
              <label>💶 Votre revenu imposable annuel :</label>
              <select>
                <option>— Choisissez —</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>📊 Connaissez-vous votre tranche d'imposition ?</label>
              <select>
                <option>— Choisissez —</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>🎯 Votre principal objectif :</label>
              <select>
                <option>— Choisissez —</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>📁 Avez-vous déjà utilisé un dispositif de réduction d'impôts ?</label>
              <select>
                <option>— Choisissez —</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>📩 Pour recevoir votre estimation personnalisée :</label>
              <input type="text" placeholder="Prénom" />
              <input type="email" placeholder="Email" />
            </div>
            <button type="submit" className={styles.submitButton}>Recevoir mon estimation</button>
          </form>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Transformez votre fiscalité en opportunité !</h2>
        <p>Ne laissez plus votre fiscalité être une contrainte. Avec Azalée Patrimoine, transformez-la en levier de croissance pour votre patrimoine.</p>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
    </div>
  );
};

export default ReduireImpots; 