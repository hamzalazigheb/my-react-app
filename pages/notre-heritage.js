import Head from 'next/head';
import Image from 'next/image';

export default function NotreHeritage() {
  return (
    <>
      <Head>
        <title>Notre Héritage - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez l'histoire et les valeurs d'Azalée Patrimoine." />
      </Head>

      <div className="page-container">
        <div className="content-section">
          <h1>Notre Héritage</h1>
          
          <div className="heritage-content">
            <div className="heritage-section">
              <h2>Notre Histoire</h2>
              <p>Fondée avec la vision de transformer la gestion de patrimoine, Azalée Patrimoine s'est construite sur des valeurs fortes et une expertise reconnue. Notre parcours est marqué par l'innovation et l'excellence dans le service à nos clients.</p>
            </div>

            <div className="heritage-section">
              <h2>Nos Valeurs</h2>
              <div className="values-grid">
                <div className="value-card">
                  <h3>Excellence</h3>
                  <p>Nous visons l'excellence dans chaque aspect de notre service.</p>
                </div>
                <div className="value-card">
                  <h3>Intégrité</h3>
                  <p>La transparence et l'honnêteté guident chacune de nos actions.</p>
                </div>
                <div className="value-card">
                  <h3>Innovation</h3>
                  <p>Nous repoussons constamment les limites pour offrir les meilleures solutions.</p>
                </div>
                <div className="value-card">
                  <h3>Engagement</h3>
                  <p>Nous nous engageons pleinement pour la réussite de nos clients.</p>
                </div>
              </div>
            </div>

            <div className="heritage-section">
              <h2>Notre Vision</h2>
              <p>Nous aspirons à être le leader reconnu dans la gestion de patrimoine, en offrant des solutions innovantes et personnalisées qui répondent aux besoins évolutifs de nos clients.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 