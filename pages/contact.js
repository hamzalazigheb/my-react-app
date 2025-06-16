import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Contact.module.css';
import contactHeroImage from '../src/assets/contact.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.contactPage}>
      <Head>
        <title>Contact - Azalée Patrimoine</title>
        <meta name="description" content="Contactez-nous pour toute question sur nos services de gestion de patrimoine." />
      </Head>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contactez-nous</h1>
          <h2>Besoin d'aide ou d'information ? Contactez-nous !</h2>
          <p>Les conseillers du cabinet Azalee Patrimoine sont à votre écoute ! Vous pouvez nous envoyer un message directement depuis cette page pour être recontacté(e) dans les meilleurs délais.</p>
        </div>
        <div className={styles.heroImageContainer}>
          <Image 
            src={contactHeroImage}
            alt="Contactez-nous" 
            width={300} 
            height={300}
            className={styles.heroImage}
          />
        </div>
      </section>

      <section className={styles.contactDetailsSection}>
        <div className={styles.contactDetailsContent}>
          <h2>Nos Coordonnées</h2>
          <div className={styles.infoItem}>
            <h3>Adresse</h3>
            <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>contact@azalee-patrimoine.fr</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Horaires</h3>
            <p>Lundi - Vendredi: 9h00 - 18h00</p>
          </div>
        </div>
      </section>

      <section className={styles.contactFormSection}>
        <div className={styles.contactFormContainer}>
          <h2>Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nom & Prénom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nom complet."
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Adresse Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email."
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">N° de Téléphone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Tel."
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Plus de détails</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Des précisions ? "
                required
                rows="5"
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Envoyer
            </button>
          </form>
        </div>
      </section>
      
      <section className={styles.joinUsSection}>
        <div className={styles.joinUsContent}>
          <h2>Valorisez votre talent et faites évoluer votre carrière</h2>
          <p>au sein d'une équipe d'experts passionnés, dans un environnement où l'innovation et la performance sont au cœur de chaque projet.</p>
          <Link href="/carrieres" className={styles.ctaButton}>Rejoignez-nous</Link>
        </div>
      </section>
    </div>
  );
} 