import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../../styles/CMS.module.css';

export default function CMSHome() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result?.error) {
        setError(result.error);
      }
    } catch (error) {
      setError('Une erreur est survenue lors de la connexion');
    } finally {
      setIsLoading(false);
    }
  };

  if (status === 'loading') {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Chargement...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className={styles.authContainer}>
        <div className={styles.authBox}>
          <h1>Administration Azalée</h1>
          <p>Veuillez vous connecter pour accéder au panneau d'administration</p>
          
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            {error && <div className={styles.errorMessage}>{error}</div>}
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@azalee.fr"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button 
              type="submit"
              className={styles.loginButton}
              disabled={isLoading}
            >
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cmsContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1>Panneau d'administration</h1>
          <div className={styles.userInfo}>
            <span>Connecté en tant que {session.user.email}</span>
            <button 
              className={styles.logoutButton}
              onClick={() => signOut()}
            >
              Se déconnecter
            </button>
          </div>
        </div>
      </header>

      <main className={styles.mainContent}>
        <div className={styles.welcomeSection}>
          <h2>Bienvenue dans votre espace d'administration</h2>
          <p>Gérez votre site web et vos contenus depuis ce panneau.</p>
        </div>

        <div className={styles.dashboardGrid}>
          <div className={styles.dashboardCard}>
            <h3>Données du Chatbot</h3>
            <p>Gérez les contacts collectés via le chatbot</p>
            <button 
              className={styles.cardButton}
              onClick={() => window.location.href = '/cms/chatbot-data'}
            >
              Voir les données
            </button>
          </div>

          <div className={styles.dashboardCard}>
            <h3>Statistiques</h3>
            <p>Consultez les statistiques de votre site</p>
            <button className={styles.cardButton}>Voir les statistiques</button>
          </div>

          <div className={styles.dashboardCard}>
            <h3>Contenu</h3>
            <p>Gérez le contenu de votre site</p>
            <button className={styles.cardButton}>Gérer le contenu</button>
          </div>

          <div className={styles.dashboardCard}>
            <h3>Paramètres</h3>
            <p>Configurez les paramètres de votre site</p>
            <button className={styles.cardButton}>Paramètres</button>
          </div>

          <div className={styles.dashboardCard}>
            <h3>Support</h3>
            <p>Besoin d'aide ? Contactez-nous</p>
            <button className={styles.cardButton}>Contacter le support</button>
          </div>
        </div>
      </main>
    </div>
  );
} 