# Matsennach – Services Rapides

**Matsennach** est une plateforme web qui facilite la mise en relation entre les clients et les prestataires de services. Elle permet aux utilisateurs de trouver rapidement un professionnel selon leurs besoins et de découvrir les services disponibles.

## 🎯 Objectif du projet

L'objectif de Matsennach est de simplifier la recherche de prestataires et de rendre les services de proximité plus accessibles grâce à une plateforme simple, moderne et intuitive.

## ✨ Fonctionnalités principales

### 👤 Espace Client
- Création de compte et connexion.
- Consultation des prestataires disponibles.
- Recherche de services selon les besoins.
- Consultation des profils des prestataires.
- Possibilité de demander un service.

### 🛠️ Espace Prestataire
- Création d'un compte prestataire.
- Gestion du profil personnel.
- Présentation des services proposés.
- Gestion des demandes des clients.

### 🔐 Sécurité
- Authentification des utilisateurs.
- Gestion des sessions avec JWT.
- Protection des données personnelles.

## 🧰 Technologies utilisées

| Technologie | Utilisation |
|---|---|
| React.js | Interface utilisateur |
| MongoDB | Base de données |
| JWT | Authentification |
| CSS | Mise en forme et design |

## 📁 Structure du projet

```text
Matsennach/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── package.json
│
└── README.md
```

*Structure indicative, à adapter aux fichiers réels du projet.*

## ⚙️ Installation

### 1. Cloner le projet

```bash
git clone URL_DU_DEPOT
cd Matsennach
```

### 2. Installer les dépendances

Dans le dossier frontend :

```bash
npm install
```

Dans le dossier backend :

```bash
npm install
```

### 3. Configuration

Configurer les variables d'environnement nécessaires dans un fichier `.env`, notamment :

```env
MONGO_URI=
JWT_SECRET=
PORT=
```

### 4. Lancer le projet

Démarrer le backend et le frontend dans leurs terminaux respectifs :

```bash
npm run dev
```

## 🚀 Perspectives d'amélioration

- Intégration d'un système de notation et d'avis.
- Ajout d'un système de messagerie entre clients et prestataires.
- Géolocalisation des prestataires.
- Notifications en temps réel.
- Système de réservation et suivi des demandes.

## 👩‍💻 Réalisation

Projet développé dans le cadre de la filière **Intelligence Artificielle – Option Développeur Big Data**.

**Nom du projet :** Matsennach – Services Rapides

