import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Configuration temporaire - À remplacer par une vraie base de données
const ADMIN_EMAIL = 'admin@azalee.fr';
const ADMIN_PASSWORD = 'Admin123!'; // Mot de passe en clair pour le test

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        console.log('Tentative de connexion avec:', credentials.email);
        
        if (!credentials?.email || !credentials?.password) {
          console.log('Email ou mot de passe manquant');
          throw new Error('Email et mot de passe requis');
        }

        // Vérification simple pour le test
        if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
          console.log('Authentification réussie');
          return {
            id: '1',
            email: ADMIN_EMAIL,
            name: 'Administrateur'
          };
        }

        console.log('Authentification échouée');
        throw new Error('Email ou mot de passe incorrect');
      }
    })
  ],
  pages: {
    signIn: '/cms',
    error: '/cms'
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 jours
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    }
  },
  debug: true // Active les logs de débogage
}); 