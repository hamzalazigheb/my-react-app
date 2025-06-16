import Head from 'next/head';

export default function AzaleePatrimoine() {
  return (
    <>
      <Head>
        <title>Azalée Patrimoine - À propos</title>
        <meta name="description" content="Découvrez Azalée Patrimoine, votre partenaire de confiance pour la gestion de patrimoine." />
      </Head>

      <div className="page-container">
        <div className="content-section">
          <h1>Azalée Patrimoine</h1>
          <p>Votre partenaire de confiance pour la gestion et l'optimisation de votre patrimoine.</p>
          
          <div className="about-content">
            <h2>Notre Mission</h2>
            <p>Chez Azalée Patrimoine, nous nous engageons à accompagner nos clients dans la réalisation de leurs objectifs patrimoniaux. Notre approche personnalisée et notre expertise nous permettent de proposer des solutions adaptées à chaque situation.</p>
            
            <h2>Notre Expertise</h2>
            <p>Avec des années d'expérience dans le domaine de la gestion de patrimoine, notre équipe d'experts vous guide à travers les différentes étapes de votre projet patrimonial.</p>
            
            <h2>Nos Valeurs</h2>
            <ul>
              <li>Confiance et transparence</li>
              <li>Expertise et professionnalisme</li>
              <li>Accompagnement personnalisé</li>
              <li>Innovation et adaptabilité</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
} 