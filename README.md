# Azalée Patrimoine - Application Web

## Description
Application web de gestion de patrimoine développée avec Next.js, offrant des services de conseil en investissement, gestion de patrimoine et optimisation fiscale.

## Structure du Projet

### Pages Principales
- `/pages/index.js` - Page d'accueil
- `/pages/contact.js` - Page de contact
- `/pages/reduire-vos-impots.js` - Services de réduction d'impôts
- `/pages/proteger-vos-proches.js` - Protection patrimoniale
- `/pages/outils-pedagogiques.js` - Ressources éducatives
- `/pages/gestion-patrimoine-sur-mesure.js` - Gestion personnalisée
- `/pages/solutions-projets.js` - Solutions d'investissement
- `/pages/audit-patrimonial.js` - Audit patrimonial

### Composants
- `/components/Navbar.js` - Navigation principale
- `/components/Footer.js` - Pied de page
- `/components/ChatBot.js` - Assistant virtuel
- `/components/InvestmentChatBot.js` - Assistant spécialisé investissement
- `/components/CarouselBand.js` - Carrousel d'images

### Styles
- `/styles/globals.css` - Styles globaux
- Modules CSS pour chaque page (ex: `ReduireImpots.module.css`)

## Dépendances Principales
- **Next.js** (^14.1.0) - Framework React
- **React** (^18.2.0) - Bibliothèque UI
- **Prisma** (^6.8.2) - ORM pour la base de données
- **NextAuth** (^4.24.11) - Authentification
- **bcryptjs** (^3.0.2) - Hachage des mots de passe

## Scripts Disponibles
- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Crée une version de production
- `npm run start` - Démarre le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

## Configuration
- **Next.js** : Configuration dans `next.config.js`
  - Mode strict React activé
  - Support des images distantes
- **ESLint** : Configuration étendue avec `next/core-web-vitals`
- **Browsers** : Support des navigateurs modernes en production et développement

## Fonctionnalités
1. **Gestion de Patrimoine**
   - Audit patrimonial
   - Solutions d'investissement
   - Optimisation fiscale

2. **Outils Pédagogiques**
   - Ressources éducatives
   - Guides d'investissement
   - Calculateurs financiers

3. **Interface Interactive**
   - Chatbot d'investissement
   - Formulaires de contact
   - Carrousel d'informations

4. **Administration**
   - Interface d'administration
   - Gestion des utilisateurs
   - Suivi des demandes

## Installation
1. Cloner le repository
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement
4. Lancer le serveur de développement : `npm run dev`

## Déploiement
1. Créer une version de production : `npm run build`
2. Démarrer le serveur : `npm run start`

## Contribution
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## Licence
Propriétaire - Tous droits réservés
