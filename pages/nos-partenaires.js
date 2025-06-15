import Head from 'next/head';
import Image from 'next/image';

export default function NosPartenaires() {
  const partenaires = [
    {
      name: "Banque Privée",
      description: "Solutions bancaires personnalisées pour la gestion de patrimoine",
      image: "/images/partenaires/banque-privee.jpg"
    },
    {
      name: "Assurance Vie",
      description: "Produits d'assurance adaptés à vos besoins",
      image: "/images/partenaires/assurance-vie.jpg"
    },
    {
      name: "Immobilier",
      description: "Investissements immobiliers sécurisés",
      image: "/images/partenaires/immobilier.jpg"
    }
  ];

  return (
    <>
      <Head>
        <title>Nos Partenaires - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos partenaires de confiance pour la gestion de votre patrimoine." />
      </Head>

      <div className="page-container">
        <div className="content-section">
          <h1>Nos Partenaires</h1>
          <p>Nous collaborons avec des institutions financières de premier plan pour vous offrir les meilleures solutions.</p>
          
          <div className="partners-grid">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="partner-card">
                <div className="partner-image">
                  <Image
                    src={partenaire.image}
                    alt={partenaire.name}
                    width={300}
                    height={200}
                    className="partner-img"
                  />
                </div>
                <h3>{partenaire.name}</h3>
                <p>{partenaire.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 