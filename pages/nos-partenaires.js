import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AzaleePatrimoine.module.css';

export default function NosPartenaires() {
  const partenaires = [
    {
      name: "Banque Privée",
      description: "Solutions bancaires personnalisées pour la gestion de patrimoine",
      image: "/images/deal_914022.png"
    },
    {
      name: "Assurance Vie",
      description: "Produits d'assurance adaptés à vos besoins",
      image: "/images/life-insurance_10723210.png"
    },
    {
      name: "Immobilier",
      description: "Investissements immobiliers sécurisés",
      image: "/images/apartment_6191268.png"
    }
  ];

  return (
    <>
      <Head> 
        <title>Nos Partenaires - Azalée Patrimoine</title>
        <meta name="description" content="Découvrez nos partenaires de confiance pour la gestion de votre patrimoine." />
      </Head>

      <div className={styles.azaleePatrimoine}>
        {/* Hero Section */}
        <div className={styles.hero} style={{background: '#1A2A44', color: '#fff', marginBottom: 40, borderRadius: '0 0 20px 20px'}}>
          <div className={styles.heroContent}>
            <h1 style={{color: '#fff'}}>Nos Partenaires</h1>
            <p style={{color: '#fff'}}>Nous collaborons avec des institutions financières de premier plan pour vous offrir les meilleures solutions.</p>
          </div>
          <div className={styles.heroImageContainer}>
            <Image src="/images/deal_914022.png" alt="Partenaires" width={180} height={180} className={styles.heroImage} />
          </div>
        </div>

        {/* Partners Grid */}
        <section className={styles.section}>
          <h2 style={{color: '#D4AF37', borderBottom: 'none'}}>Nos partenaires de confiance</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', margin: '2rem 0'}}>
            {partenaires.map((partenaire, index) => (
              <div key={index} style={{background: 'white', borderRadius: '1rem', boxShadow: '0 4px 16px rgba(26,42,68,0.10)', border: '2px solid #D4AF37', padding: '2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 340}}>
                <div style={{marginBottom: '1.5rem'}}>
                  <Image
                    src={partenaire.image}
                    alt={partenaire.name}
                    width={120}
                    height={120}
                    style={{objectFit: 'contain', borderRadius: 16, background: '#f8f9fa', boxShadow: '0 2px 8px rgba(26,42,68,0.07)'}}
                  />
                </div>
                <h3 style={{color: '#1A2A44', fontSize: '1.3rem', marginBottom: '1rem'}}>{partenaire.name}</h3>
                <p style={{color: '#495057', fontSize: '1.05rem'}}>{partenaire.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
} 