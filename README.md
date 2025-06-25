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

# Azalée Patrimoine - Guide de démarrage

Ce projet est une application Next.js avec un chatbot patrimonial, un CMS, et une base de données MySQL (XAMPP).

## 🚀 Lancer le projet sur un autre ordinateur

### 1. **Cloner le dépôt**
```bash
# Cloner le projet
git clone https://github.com/hamzalazigheb/my-react-app.git
cd my-react-app
```

### 2. **Installer les dépendances**
```bash
npm install
```

### 3. **Configurer la base de données MySQL (XAMPP)**
- Démarrer XAMPP (Apache + MySQL)
- Créer une base de données nommée `azalee_patrimoine` dans phpMyAdmin
- Importer le schéma de la table principale :

```sql
CREATE TABLE chatbotacceuil (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nom VARCHAR(255),
  prenom VARCHAR(255),
  email VARCHAR(255),
  telephone VARCHAR(255),
  age INT,
  situation_matrimoniale VARCHAR(255),
  enfants VARCHAR(255),
  tmi VARCHAR(255),
  placements_actuels VARCHAR(255),
  source VARCHAR(255),
  pris_en_charge BOOLEAN DEFAULT FALSE,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

- (Optionnel) Importez vos données existantes si besoin.

### 4. **Configurer la connexion à la base de données**
- Ouvrez le fichier `utils/db.js` (ou équivalent)
- Vérifiez/ajustez les paramètres :
  - host: `localhost`
  - user: `root`
  - password: (laissez vide par défaut sous XAMPP)
  - database: `azalee_patrimoine`

### 5. **Lancer le serveur de développement**
```bash
npm run dev
```

- Accédez à l'application sur [http://localhost:3001](http://localhost:3001) ou [http://localhost:3000](http://localhost:3000) selon la config.

### 6. **Accéder au CMS**
- Page CMS : [http://localhost:3001/cms/chatbot-data](http://localhost:3001/cms/chatbot-data)

### 7. **Fonctionnalités principales**
- Chatbot transmission de patrimoine sur la page `financer-etudes-enfants`
- CMS avec recherche, filtres, et gestion du statut "pris en charge"

---

**Besoin d'aide ?**
- Vérifiez les logs du terminal et la console navigateur en cas d'erreur
- Assurez-vous que XAMPP (MySQL) est bien démarré
- Contactez le développeur du projet si besoin
