import React from 'react';
import Head from 'next/head';
import styles from '../styles/GestionPatrimoine.module.css';

const GestionPatrimoine = () => {
  return (
    <>
      <Head>
        <title>Gestion de Patrimoine Sur-Mesure - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez notre approche personnalisée de la gestion de patrimoine, adaptée à vos objectifs et à votre situation unique." />
      </Head>

      <div className={styles.gestionPatrimoine}>
        <div className={styles.hero}>
          <h1>Gestion de patrimoine sur-mesure</h1>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>🧭 Pourquoi choisir une gestion de patrimoine sur-mesure ?</h2>
              <p>
                Chaque patrimoine est unique. Chez Azalée Patrimoine, nous concevons des stratégies 100 % personnalisées 
                pour répondre à vos objectifs de vie : croissance, protection, transmission ou reconversion. Parce que 
                derrière chaque bilan patrimonial, il y a une histoire personnelle, professionnelle, émotionnelle.
              </p>
            </div>
            <div className={styles.caseStudy}>
              <h3>🔍 Cas pratique : Claire, médecin libérale en Île-de-France</h3>
              <p>
                Claire souhaite réduire sa pression fiscale et anticiper sa retraite. Ensemble, nous avons optimisé la 
                répartition de ses revenus entre ses sociétés civiles, mis en place un contrat PER, et simulé ses besoins 
                futurs avec une projection à 20 ans.
              </p>
              <p className={styles.result}>
                Résultat : une économie d'impôts de 12 000 € par an et une stratégie retraite réaliste et sécurisée.
              </p>
            </div>
          </div>
        </div>

        <section className={styles.solutions}>
          <h2>Nos solutions sur-mesure</h2>
          <h3>Construire un patrimoine qui vous ressemble</h3>
          <p>
            Chez Azalée Patrimoine, nous ne proposons pas de catalogue figé ni de produits pré-emballés. Chaque 
            recommandation est le fruit d'une analyse approfondie de votre situation personnelle, professionnelle et 
            patrimoniale. Notre indépendance nous permet de sélectionner les solutions les plus pertinentes du marché, 
            en toute liberté, et toujours dans votre intérêt exclusif.
          </p>

          <div className={styles.levers}>
            <h4>Concrètement, nous construisons des stratégies patrimoniales personnalisées autour de plusieurs leviers :</h4>
            <ul>
              <li>
                <strong>Optimisation fiscale</strong> : via le choix des bons statuts, dispositifs ou enveloppes 
                (PER, démembrement, holding, immobilier locatif…)
              </li>
              <li>
                <strong>Préparation de la retraite</strong> : simulation de besoins futurs, arbitrage entre dispositifs 
                (PER, contrat Madelin, capitalisation…)
              </li>
              <li>
                <strong>Transmission et protection familiale</strong> : donation, pacte Dutreil, assurance-vie, 
                rédaction de clauses bénéficiaires personnalisées
              </li>
              <li>
                <strong>Diversification des investissements</strong> : immobilier direct ou via SCPI, fonds ISR, 
                private equity, produits structurés, obligations à coupon
              </li>
              <li>
                <strong>Gestion de trésorerie d'entreprise ou personnelle</strong> : solutions sécurisées ou 
                dynamiques selon votre profil de risque
              </li>
            </ul>
          </div>

          <div className={styles.caseStudy}>
            <h3>📌 Cas pratique : Isabelle, cheffe d'entreprise dans l'événementiel</h3>
            <p>
              Isabelle souhaitait placer la trésorerie de sa société en dehors des circuits bancaires classiques. 
              Après une analyse de ses comptes et de ses projets de développement, nous avons mis en place une 
              solution mixte : contrat de capitalisation logé dans une holding, obligations à revenu fixe, et parts 
              de SCPI de rendement.
            </p>
            <p className={styles.result}>
              Résultat : une meilleure rentabilité, une disponibilité à court terme, et une optimisation fiscale 
              de la rémunération.
            </p>
          </div>
        </section>

        <section className={styles.process}>
          <h2>Notre approche</h2>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Analyse Personnalisée et Approfondie</h3>
              <p>
                Nous commençons par étudier votre structure et vos spécificités afin d'identifier vos priorités 
                et de comprendre vos contraintes. Cette analyse permet de définir précisément le niveau de garanties 
                et les options les plus adaptées pour votre dispositif.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Conception de Solutions Innovantes</h3>
              <p>
                En nous appuyant sur notre expertise et les meilleures pratiques du secteur, nous créons des 
                dispositifs sur-mesure qui maximisent les avantages fiscaux et optimisent les rendements de vos 
                investissements.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Gestion Intégrée et Suivi Transparent</h3>
              <p>
                La mise en œuvre de notre solution se traduit par une gestion fluide et un suivi régulier, 
                garantissant une transparence totale sur les performances de votre épargne salariale.
              </p>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Optimisation Continue</h3>
              <p>
                Conscients que vos besoins évoluent, nous mettons en place un processus d'optimisation continue 
                qui ajuste votre solution en fonction des changements économiques, fiscaux et de votre activité.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.followUp}>
          <h2>🔄 Suivi et ajustements dans le temps</h2>
          <p>
            Votre vie change, votre patrimoine aussi. C'est pourquoi nous assurons un suivi régulier, avec des 
            points de situation programmés et des alertes proactives : évolution fiscale, nouvelles opportunités 
            d'investissement, changement de régime matrimonial, modification de votre statut professionnel…
          </p>

          <div className={styles.caseStudy}>
            <h3>📌 Cas pratique : Mehdi, cadre dirigeant devenu indépendant</h3>
            <p>
              En 2021, Mehdi était salarié. En 2022, il est passé freelance. En 2023, il a créé sa société. 
              Grâce à notre accompagnement continu, nous avons adapté sa stratégie au fil de l'eau : optimisation 
              de sa trésorerie, bascule vers des placements professionnels, puis intégration d'un contrat de 
              capitalisation dans sa holding.
            </p>
            <p className={styles.result}>
              Résultat : une gestion agile, cohérente, et alignée avec ses nouvelles ambitions.
            </p>
          </div>
        </section>

        <section className={styles.transparency}>
          <h2>📄 Lettre de mission claire et sans frais cachés</h2>
          <p>
            Chez Azalée Patrimoine, vous connaissez nos honoraires dès le début, grâce à une lettre de mission 
            détaillée : nature de la mission, temps estimé, mode de rémunération (forfait, à l'acte, ou au succès), 
            et engagement mutuel. Pas de commission déguisée, pas de rétrocommission non déclarée.
          </p>

          <div className={styles.caseStudy}>
            <h3>📌 Cas pratique : Pascal et Émilie, couple en cours de divorce avec résidence secondaire</h3>
            <p>
              Ils avaient besoin d'un accompagnement neutre pour estimer la valeur de leur patrimoine commun et 
              envisager une sortie amiable. Nous leur avons proposé une lettre de mission forfaitaire, sans lien 
              avec la vente des actifs.
            </p>
            <p className={styles.result}>
              Résultat : un climat apaisé et des décisions partagées, avec à la clé une répartition équitable 
              et la préservation du bien immobilier dans une SCI pour les enfants.
            </p>
          </div>
        </section>

        <section className={styles.tools}>
          <h2>🛠️ Outils d'aide à la décision propriétaires</h2>
          <ul>
            <li>⚡ Une réactivité inégalée grâce à notre organisation agile et à l'intelligence augmentée</li>
            <li>🌟 Le CLUB Azalée : une convention de services claire, au service de vos intérêts</li>
            <li>⚠️ Conseil indépendant vs conseil non indépendant : pourquoi c'est essentiel ?</li>
          </ul>
        </section>

        <section className={styles.cta}>
          <h2>Transformez vos avantages en succès !</h2>
          <p>
            Votre patrimoine est un levier puissant. Encore faut-il le comprendre, le structurer et le faire 
            évoluer avec agilité. Chez Azalée Patrimoine, nous ne nous contentons pas de vous conseiller : nous 
            vous donnons les moyens d'agir, de transformer vos atouts — fiscaux, financiers, familiaux ou 
            professionnels — en résultats concrets et durables.
          </p>
          <p>
            Rejoignez celles et ceux qui ont décidé de prendre le contrôle de leur avenir patrimonial, avec 
            méthode, transparence et ambition.
          </p>
          <button className={styles.ctaButton}>Prendre rendez-vous</button>
        </section>
      </div>
    </>
  );
};

export default GestionPatrimoine; 