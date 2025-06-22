import React from 'react';
import Head from 'next/head';
import styles from '../styles/FinancerEtudes.module.css';
import MoneyGrowthIcon from '../src/assets/money-growth_12028691.png';
import ChatBot from '../src/components/ChatBot';

const FinancerEtudesEnfants = () => {
  return (
    <div className={styles.financerEtudes}>
      <Head>
        <title>Financer les études de vos enfants | Azalée Patrimoine</title>
        <meta name="description" content="Préparez l'avenir de vos enfants en finançant leurs études supérieures. Découvrez nos solutions d'épargne et d'investissement adaptées pour anticiper les coûts des études." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Financer les études de mes enfants</h1>
          <p>Pourquoi anticiper le financement des études supérieures ? Offrir à son enfant les meilleures chances de réussite passe souvent par des études supérieures de qualité. Pourtant, peu de familles mesurent réellement l'ampleur du coût des études dans leur globalité : frais d'inscription, logement, transport, alimentation, matériel informatique, etc.</p>
          <p>En anticipant ce projet à long terme, vous vous donnez les moyens d'aider votre enfant sans mettre en péril votre équilibre financier. C'est aussi une façon de lui transmettre de bonnes pratiques budgétaires et de le sécuriser pour l'avenir.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/student_15175598.png" alt="Épargne Études" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>Quel est le coût moyen des études supérieures en France ?</h2>
        <div className={styles.costTable}>
          <table>
            <thead>
              <tr>
                <th>Type d'études</th>
                <th>Coût estimé par an</th>
                <th>Durée moyenne</th>
                <th>Coût total approximatif</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Université (hors logement)</td>
                <td>3 000 € à 6 000 €</td>
                <td>3 à 5 ans</td>
                <td>15 000 € à 30 000 €</td>
              </tr>
              <tr>
                <td>École de commerce</td>
                <td>10 000 € à 15 000 €</td>
                <td>3 à 5 ans</td>
                <td>30 000 € à 75 000 €</td>
              </tr>
              <tr>
                <td>École d'ingénieur</td>
                <td>8 000 € à 12 000 €</td>
                <td>3 à 5 ans</td>
                <td>25 000 € à 60 000 €</td>
              </tr>
              <tr>
                <td>Études à l'étranger</td>
                <td>15 000 € à 30 000 €</td>
                <td>Variable</td>
                <td>45 000 € à 100 000 €</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Pourquoi commencer à épargner dès aujourd'hui ?</h2>
        <p>Plus vous commencez tôt, moins l'effort mensuel est important. Grâce à l'effet des intérêts composés, une épargne régulière même modeste peut faire une grande différence à long terme.</p>
        <div className={styles.exampleBox}>
          <h3>Exemple :</h3>
          <p>Épargner 150 €/mois pendant 15 ans à un rendement moyen de 4 % = près de 40 000 € à terme.</p>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Quels sont les outils pour financer les études de vos enfants ?</h2>
        <div className={styles.situationsGrid}>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📊</div>
            <h3>Assurance vie</h3>
            <p>Souplesse, fiscalité avantageuse, placements diversifiés.</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>💰</div>
            <h3>Plan d'épargne retraite (PER)</h3>
            <p>Peut être débloqué pour financer les études (dans certains cas).</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>📈</div>
            <h3>Compte-titres ou PEA</h3>
            <p>Pour ceux qui souhaitent investir sur les marchés financiers.</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🏦</div>
            <h3>Livrets réglementés</h3>
            <p>Livret A, Livret Jeune, LEP : sécurisés mais peu rémunérateurs.</p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>Optimiser vos revenus passifs pour financer les études</h2>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>1️⃣</div>
            <h3>L'option de l'usufruit temporaire</h3>
            <p>Si votre enfant est majeur et détaché de votre foyer fiscal, vous pouvez lui transmettre l'usufruit temporaire d'un bien immobilier pendant la durée de ses études. Il percevra alors directement les loyers pour financer ses besoins, sans alourdir votre propre imposition.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>2️⃣</div>
            <h3>Avantages de cette stratégie</h3>
            <p>Réduction de votre revenu imposable, soutien financier pour votre enfant, et préparation d'une transmission en douceur.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>3️⃣</div>
            <h3>Accompagnement personnalisé</h3>
            <p>Cette stratégie doit être étudiée au cas par cas. Notre rôle est de vous accompagner pour vérifier sa pertinence et la mettre en place dans les meilleures conditions.</p>
          </div>
        </div>
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
        <h2>🤝 Parlons-en : votre projet est unique</h2>
        <div className={styles.formContainer}>
          <h3>💡 Quel budget prévoir pour les études de vos enfants ?</h3>
          <p>Répondez à ces quelques questions et recevez une estimation personnalisée de vos besoins en financement.</p>
          <form className={styles.estimationForm}>
            <div className={styles.formGroup}>
              <label>👶 Âge de votre enfant :</label>
              <select>
                <option>— Choisissez —</option>
                <option>0-5 ans</option>
                <option>6-10 ans</option>
                <option>11-15 ans</option>
                <option>16-18 ans</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>🎓 Type d'études envisagées :</label>
              <select>
                <option>— Choisissez —</option>
                <option>Université</option>
                <option>École de commerce</option>
                <option>École d'ingénieur</option>
                <option>Études à l'étranger</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>💰 Budget mensuel disponible pour l'épargne :</label>
              <select>
                <option>— Choisissez —</option>
                <option>Moins de 100€</option>
                <option>100€ - 300€</option>
                <option>300€ - 500€</option>
                <option>Plus de 500€</option>
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
        <h2>Transformez vos avantages en succès !</h2>
        <p>Ne laissez pas le hasard décider de l'avenir de vos enfants. Prenez rendez-vous avec l'un de nos conseillers pour découvrir tout ce que vous pourriez mettre en place dès aujourd'hui.</p>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <ChatBot avatar={"/images/student_15175598.png"} />
    </div>
  );
};

export default FinancerEtudesEnfants; 