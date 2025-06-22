import React from 'react';
import Head from 'next/head';
import styles from '../styles/ProtegerProches.module.css';
import ChatBot from '../src/components/ChatBot';

const ProtegerProches = () => {
  return (
    <div className={styles.protegerProches}>
      <Head>
        <title>Protéger vos proches | Azalée Patrimoine</title>
        <meta name="description" content="Protégez vos proches avec des solutions adaptées à votre situation. Assurance prévoyance, protection juridique et transmission optimisée." />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Protéger vos proches</h1>
          <p>Personne n'aime penser au pire… et pourtant, prévoir l'imprévisible, c'est offrir à ceux qu'on aime un cadre sécurisé, des ressources stables et un avenir préservé.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <img src="/images/life-insurance_10723210.png" alt="Life Insurance Protection" className={styles.heroImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2>👨‍👩‍👧‍👦 Les situations qui méritent votre attention</h2>
        <div className={styles.situationsGrid}>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>👶</div>
            <h3>Enfants à charge</h3>
            <p>Vous avez des enfants encore à charge</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>💑</div>
            <h3>Couple non marié</h3>
            <p>Vous êtes en couple sans être mariés</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🏡</div>
            <h3>Patrimoine / Entreprise</h3>
            <p>Vous avez constitué un patrimoine ou une entreprise</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>💳</div>
            <h3>Crédits en cours</h3>
            <p>Vous avez des crédits en cours</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🤝</div>
            <h3>Aide financière</h3>
            <p>Vous aidez financièrement un parent ou un enfant</p>
          </div>
          <div className={styles.situationCard}>
            <div className={styles.situationIcon}>🌍</div>
            <h3>Expatrié / Indépendant</h3>
            <p>Vous êtes expatrié(e), travailleur non salarié ou chef d'entreprise</p>
          </div>
        </div>
        <p className={styles.note}>👉 Dans toutes ces situations, des dispositifs existent pour protéger vos proches, à condition d'être activés à temps.</p>
      </div>

      <div className={styles.section}>
        <h2>🧰 Quelles solutions pour bien les protéger ?</h2>
        <div className={styles.solutionsGrid}>
          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>🛡️</div>
            <h3>Assurance Prévoyance</h3>
            <p>Garantissez la pérennité de vos revenus en cas d'arrêt de travail, d'invalidité ou de décès. Une protection essentielle pour maintenir le niveau de vie de vos proches.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>🏦</div>
            <h3>Assurance Emprunteur</h3>
            <p>Une couverture sur-mesure qui s'adapte à votre profil et à vos besoins, bien au-delà des exigences bancaires standard.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>📜</div>
            <h3>Optimisation Contrats</h3>
            <p>Une gestion stratégique de vos contrats d'assurance vie pour une transmission optimale de votre patrimoine.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>🏠</div>
            <h3>Gestion Patrimoniale</h3>
            <p>Des solutions juridiques et fiscales pour une transmission efficace de votre patrimoine immobilier.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>⚖️</div>
            <h3>Protection Juridique</h3>
            <p>Des outils juridiques adaptés pour anticiper et sécuriser l'avenir de vos proches.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>🏢</div>
            <h3>Stratégie d'Entreprise</h3>
            <p>Une approche globale pour protéger votre entreprise et assurer sa pérennité.</p>
          </div>

          <div className={styles.solutionCard}>
            <div className={styles.solutionIcon}>👰</div>
            <h3>Protection du Couple</h3>
            <p>Des solutions adaptées pour les couples non mariés ou en PACS, garantissant une protection optimale.</p>
          </div>
        </div>
        <p className={styles.note}>💡 Chaque solution est étudiée en fonction de votre situation familiale, patrimoniale et fiscale. Notre approche personnalisée garantit une protection optimale adaptée à vos objectifs.</p>
      </div>

      <div className={styles.section}>
        <h2>Vos enjeux, Nos réponses</h2>
        <div className={styles.enjeuxGrid}>
          <div className={styles.enjeux}>
            <h3>✅ Vous souhaitez…</h3>
            <ul>
              <li>Assurer un revenu stable à votre famille en cas d'imprévu ?</li>
              <li>Préserver l'autonomie financière de votre conjoint ou de vos enfants ?</li>
              <li>Financer les coûts liés à la dépendance sans alourdir la charge de vos proches ?</li>
              <li>Transmettre votre patrimoine en toute sérénité, sans conflit ni surcoût fiscal ?</li>
              <li>Protéger une personne vulnérable ou en situation de handicap ?</li>
              <li>Sécuriser votre succession si vous êtes en couple non marié ou en famille recomposée ?</li>
              <li>Prévoir l'après sans impacter l'équilibre de votre vie actuelle ?</li>
            </ul>
          </div>
          <div className={styles.reponses}>
            <h3>💡 Nos réponses</h3>
            <ul>
              <li>Un bilan patrimonial personnalisé pour identifier les zones de fragilité et les leviers d'action.</li>
              <li>Des solutions de prévoyance sur-mesure : décès, invalidité, dépendance.</li>
              <li>Une optimisation juridique et fiscale de vos contrats (assurance vie, donations, testament…).</li>
              <li>Des outils de protection juridique adaptés : mandat de protection future, assurance dépendance, démembrement de propriété.</li>
              <li>Un accompagnement humain et pédagogique, pour vous et vos proches, à chaque étape.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2>🧓 Financer la « deuxième retraite » : anticiper la dépendance</h2>
        <p>On parle souvent de la retraite comme d'une période de liberté retrouvée… mais on oublie parfois qu'après la retraite active vient souvent une « deuxième retraite », marquée par la perte d'autonomie et la nécessité d'une aide quotidienne. Cette phase peut durer plusieurs années et engendrer des coûts importants : aide à domicile, aménagement du logement, établissement spécialisé, perte de revenus pour le conjoint aidant, etc.</p>
        <p>Le coût moyen d'un EHPAD en France dépasse 2 000 €/mois — et peut atteindre 3 500 € dans certaines régions. Sans anticipation, ce sont souvent les enfants ou le conjoint survivant qui en supportent la charge.</p>
        <p className={styles.note}>💡 Mettre en place une solution de prévoyance dépendance, constituer une épargne dédiée ou adapter son patrimoine immobilier permet d'aborder cette phase avec plus de sérénité — pour vous et pour vos proches.</p>
      </div>

      <div className={styles.section}>
        <h2>🔍 Protéger, c'est aussi transmettre avec intelligence</h2>
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>1️⃣</div>
            <h3>Analyse Personnalisée</h3>
            <p>Nous commençons par étudier votre structure et vos spécificités afin d'identifier vos priorités et de comprendre vos contraintes.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>2️⃣</div>
            <h3>Conception de Solutions Innovantes</h3>
            <p>En nous appuyant sur notre expertise et les meilleures pratiques du secteur, nous créons des dispositifs sur-mesure qui maximisent les avantages fiscaux et optimisent les rendements de vos investissements.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>3️⃣</div>
            <h3>Gestion Intégrée</h3>
            <p>La mise en œuvre de notre solution se traduit par une gestion fluide et un suivi régulier, garantissant une transparence totale sur les performances de votre épargne.</p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processIcon}>4️⃣</div>
            <h3>Optimisation Continue</h3>
            <p>Conscients que vos besoins évoluent, nous mettons en place un processus d'optimisation continue qui ajuste votre solution en fonction des changements économiques, fiscaux et de votre activité.</p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Transformez vos avantages en succès !</h2>
        <p>Vous avez travaillé dur pour construire un patrimoine, sécuriser votre famille, et offrir un avenir à ceux que vous aimez. Notre rôle, c'est de détecter les forces de votre situation, de relever les failles potentielles et de transformer votre capital — immobilier, financier, professionnel — en véritable levier de protection et de transmission.</p>
        <a href="/contact" className={styles.ctaButton}>Prenez rendez-vous dès maintenant</a>
      </div>
      <ChatBot avatar={"/images/life-insurance_10723210.png"} />
    </div>
  );
};

export default ProtegerProches; 