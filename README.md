# New Deal Technologique - École des Maris

Site web moderne pour l'École des Maris, construit avec React, Vite et TailwindCSS.

## 🚀 Technologies

- **React 19** - Bibliothèque UI
- **Vite** - Build tool et dev server
- **TailwindCSS** - Framework CSS
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icônes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🌐 Déploiement sur Netlify

### Déploiement automatique via Git

1. Connectez votre dépôt GitHub/GitLab à Netlify
2. Netlify détectera automatiquement la configuration dans `netlify.toml`
3. Les paramètres de build sont :
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 20

### Déploiement manuel

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer
netlify deploy --prod
```

## 📁 Structure du projet

```
new-deal-technologique/
├── public/           # Fichiers statiques
│   └── _redirects   # Configuration des redirections SPA
├── src/
│   ├── components/  # Composants React
│   ├── pages/       # Pages de l'application
│   ├── App.jsx      # Composant principal
│   └── main.jsx     # Point d'entrée
├── netlify.toml     # Configuration Netlify
└── package.json
```

## 🔧 Configuration

Le fichier `netlify.toml` contient :
- Commandes de build
- Redirections pour le SPA routing
- Headers de sécurité
- Configuration du cache pour les assets

## 📝 License

Propriété de l'École des Maris
