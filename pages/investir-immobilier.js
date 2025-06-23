import React from 'react';
import Head from 'next/head';
import styles from '../styles/InvestirImmobilier.module.css';
import ChatBot from '../src/components/ChatBot';

const InvestirImmobilier = () => {
  return (
    <div className={styles.investirImmobilier}>
      <Head>
        <title>Investir dans l'immobilier | Azalée Patrimoine</title>
        <meta name="description" content="Découvrez les stratégies d'investissement immobilier et optimisez votre patrimoine avec Azalée Patrimoine." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Investir dans l'immobilier</h1>
          <p>Acheter un bien immobilier, ce n'est pas comme acheter une baguette de pain. Entre le budget, les diagnostics, la fiscalité, les travaux, la gestion… les freins sont nombreux : peur de se tromper, crainte d'un endettement mal maîtrisé, manque de temps ou d'expertise. Et pourtant, l'immobilier reste un outil d'enrichissement incontournable pour les Français.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/apartment_6191268.png" alt="Investissement Immobilier" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>🔎 Pourquoi investir dans l'immobilier reste une stratégie gagnante</h2>
        <p>L'immobilier offre un triple avantage unique :</p>
        <div className={styles.avantagesGrid}>
          <div className={styles.avantageCard}>
            <div className={styles.avantageIcon}>💰</div>
            <h3>Investissement avec effet de levier</h3>
            <p>Vous investissez avec l'argent des autres : la banque finance une partie du projet, le locataire rembourse une partie du crédit.</p>
          </div>
          <div className={styles.avantageCard}>
            <div className={styles.avantageIcon}>🛡️</div>
            <h3>Protection contre l'inflation</h3>
            <p>Vous protégez votre capital de l'inflation : les loyers et la valeur des biens suivent (souvent) la hausse des prix.</p>
          </div>
          <div className={styles.avantageCard}>
            <div className={styles.avantageIcon}>👨‍👩‍👧‍👦</div>
            <h3>Transmission optimisée</h3>
            <p>Vous préparez l'avenir de vos proches : l'immobilier est un actif transmissible, et certaines stratégies permettent d'optimiser cette transmission fiscalement.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>💡 Résidence principale, locatif… et après ?</h2>
        <p>En France, on commence souvent par acheter sa résidence principale, puis vient l'envie (ou l'opportunité) d'investir dans du locatif. C'est à ce moment qu'il faut dissocier les achats "coup de cœur" des investissements "intelligents". Un bon investissement immobilier ne se choisit pas avec le cœur, mais avec une analyse rigoureuse du marché, de la rentabilité, de la fiscalité et des opportunités à long terme.</p>
      </div>

      <div className={styles.section}>
        <h2>🧱 Le B-A-BA d'un bon investissement immobilier</h2>
        <p>Voici les fondations indispensables à vérifier avant de vous lancer :</p>
        <div className={styles.fondationsGrid}>
          <div className={styles.fondationCard}>
            <div className={styles.fondationIcon}>📍</div>
            <h3>L'adresse</h3>
            <p>Un bien moyen dans une bonne rue vaut mieux que l'inverse.</p>
          </div>
          <div className={styles.fondationCard}>
            <div className={styles.fondationIcon}>🚆</div>
            <h3>Le dynamisme de la zone</h3>
            <p>Bassin d'emploi, attractivité, accessibilité, infrastructures.</p>
          </div>
          <div className={styles.fondationCard}>
            <div className={styles.fondationIcon}>🏠</div>
            <h3>La tension locative</h3>
            <p>Plus la demande est forte, moins vous avez de vacance, plus vous sécurisez vos loyers.</p>
          </div>
          <div className={styles.fondationCard}>
            <div className={styles.fondationIcon}>📈</div>
            <h3>La valorisation dans le temps</h3>
            <p>Potentiel de revente, évolution du quartier.</p>
          </div>
          <div className={styles.fondationCard}>
            <div className={styles.fondationIcon}>💼</div>
            <h3>Le régime fiscal associé</h3>
            <p>Chaque projet doit être optimisé.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>📚 Les dispositifs immobiliers à connaître</h2>
        <div className={styles.dispositifsGrid}>
          <div className={styles.dispositifCard}>
            <div className={styles.dispositifIcon}>🏢</div>
            <h3>Loi Pinel</h3>
            <p>Dispositif de défiscalisation pour l'investissement locatif neuf.</p>
          </div>
          <div className={styles.dispositifCard}>
            <div className={styles.dispositifIcon}>🧱</div>
            <h3>Déficit foncier</h3>
            <p>Outil historique de défiscalisation immobilière.</p>
          </div>
          <div className={styles.dispositifCard}>
            <div className={styles.dispositifIcon}>👨‍👩‍👧</div>
            <h3>Usufruit temporaire</h3>
            <p>Pour un enfant majeur.</p>
          </div>
          <div className={styles.dispositifCard}>
            <div className={styles.dispositifIcon}>🪑</div>
            <h3>LMNP</h3>
            <p>Loueur Meublé Non Professionnel.</p>
          </div>
          <div className={styles.dispositifCard}>
            <div className={styles.dispositifIcon}>🧾</div>
            <h3>Nue-propriété</h3>
            <p>Outil patrimonial de transmission et d'optimisation.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Historique des différents dispositifs fiscaux liés à l'immobilier</h2>
        <div className={styles.historiqueGrid}>
          <div className={styles.historiqueCard}>
            <h3>LMNP</h3>
            <p>Le statut LMNP existe depuis le début du XXe siècle, mais a pris une place importante à partir des années 2000, avec le développement des résidences étudiantes, seniors et de tourisme.</p>
            <div className={styles.historiqueDetails}>
              <h4>Principe :</h4>
              <p>Il s'agit de louer un bien meublé, en respectant certaines conditions (mobilier, équipement, durée, etc.), tout en bénéficiant d'un régime fiscal très avantageux : le régime réel permet d'amortir la valeur du bien et des meubles, ce qui réduit fortement, voire annule l'imposition sur les loyers.</p>
              <ul>
                <li>💼 Revenu locatif peu ou pas fiscalisé + pas de cotisations sociales si non professionnel.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Transformez vos avantages en succès !</h2>
        <p>L'immobilier est un formidable levier… à condition de le structurer intelligemment. Chez Azalée Patrimoine, nous faisons plus que vous conseiller un bien :</p>
        <p>Nous construisons avec vous une stratégie patrimoniale globale où chaque investissement s'intègre dans votre projet de vie.</p>
        <p>➡️ Vous disposez d'une capacité d'épargne mais ne savez pas si vous devez acheter ou attendre ?</p>
        <p>➡️ Vous avez déjà investi mais vous ne savez pas si vos choix sont encore cohérents avec votre fiscalité ?</p>
        <p>➡️ Vous voulez investir pour vos enfants, mais sans alourdir votre impôt ou votre endettement ?</p>
        <p>Nous transformons vos intentions en résultats concrets. Grâce à une approche humaine, pédagogique et structurée, nous faisons de votre projet immobilier un accélérateur de réussite, pas un pari.</p>
        <div className={styles.ctaHighlight}>
          <p>🤝 Parlons-en !</p>
          <p>📞 Prenez rendez-vous avec un conseiller Azalée pour un diagnostic immobilier personnalisé.</p>
          <p>En 30 minutes, nous faisons le point sur votre situation, vos possibilités de financement, vos objectifs… et vous guidons vers la meilleure stratégie.</p>
          <p>💬 Votre projet n'a pas besoin d'attendre : il a besoin de clarté.</p>
        </div>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <ChatBot avatar={"/images/apartment_6191268.png"} />
    </div>
  );
};

export default InvestirImmobilier; 