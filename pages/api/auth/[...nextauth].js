import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import pool from '../../../utils/db';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email et mot de passe requis');
        }

        // Query the database for the user
        const [rows] = await pool.query(
          'SELECT * FROM users WHERE email = ? AND password = ?',
          [credentials.email, credentials.password]
        );

        if (rows.length > 0) {
          const user = rows[0];
          return {
            id: user.id,
            email: user.email,
            name: user.name
          };
        }

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