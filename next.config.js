/**
 * Configuration de Next.js
 * Ce fichier définit les paramètres de configuration pour l'application Next.js
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Active le mode strict de React pour une meilleure détection des problèmes
  reactStrictMode: true,
  
  // Configuration des images
  images: {
    // Configuration des patterns d'URL d'images autorisés
    remotePatterns: [
      {
        // Autorise les images provenant de n'importe quel domaine en HTTPS
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

// Export de la configuration
module.exports = nextConfig 