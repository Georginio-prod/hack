# hack — Dashboard NFT « Ready Players » (React + Chart.js)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)

🔗 **Démo en ligne** : <https://nft-dashboard-react.vercel.app>
📦 **Code source** : <https://github.com/Georginio-prod/hack>
🔁 **Version Vue du même écran** : <https://github.com/Georginio-prod/Hackathon>

---

## 📌 Présentation

Seconde implémentation du **dashboard NFT / gaming** réalisé pendant un hackathon
(septembre 2024), cette fois en **React 18** avec un graphique **Chart.js** pour la
section portefeuille. L'objectif était de comparer la vitesse d'intégration et
l'ergonomie de React face à Vue + PrimeVue sur une maquette identique.

## ✨ Contenu de l'écran

- **Navbar** avec champ de recherche et liste de suggestions (« No options found » si vide).
- **Top Auction** : enchère en cours (NFT « Magic Bullets », vendeur Isaac Asante Asare, prix en *PLAYR*, compte à rebours, « Place a bid »).
- **Featured NFTs** : cartes des NFT en vedette.
- **My Wallet** : solde, BTC / ETH, **graphique Chart.js** (`<canvas id="myChart">`) des revenus / dépenses.
- **Recent Transactions**.

Données statiques (maquette), thème sombre.

## 🛠️ Stack technique

| Couche | Technologie |
|---|---|
| UI | React 18 (composants fonctionnels + hooks) |
| Graphiques | Chart.js 4 |
| Styles | Tailwind CSS 3, PostCSS |
| Build / qualité | Vite 5, ESLint 9 (react, react-hooks, react-refresh) |

## 📁 Structure

```
hack/
├── index.html
├── vite.config.js · tailwind.config.js · postcss.config.js · eslint.config.js
├── public/                 # Images de la maquette
└── src/
    ├── main.jsx            # Point d'entrée
    ├── Navbar.jsx          # Navigation + recherche
    ├── Content.jsx         # Sections du dashboard + initialisation du graphique
    └── index.css
```

## 🚀 Installation & lancement

```bash
git clone https://github.com/Georginio-prod/hack.git
cd hack
npm install
npm run dev          # http://localhost:5173
```

| Commande | Description |
|---|---|
| `npm run dev` | Développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation |
| `npm run lint` | ESLint |

## 🌐 Déploiement

Déployé sur **Vercel** (voir lien en haut de page). Build Vite statique, aucune variable d'environnement.

---

## 👤 Auteur

**Komla Etonam Georges EKLOU** (Georginio) — Développeur Full Stack Web & Web3

[![GitHub](https://img.shields.io/badge/GitHub-Georginio--prod-181717?logo=github)](https://github.com/Georginio-prod)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profil-0A66C2?logo=linkedin)](https://www.linkedin.com/in/komla-etonam-georges-eklou-68518b23b)
[![Portfolio](https://img.shields.io/badge/Portfolio-georginio.w3frame.com-6C63FF)](https://georginio.w3frame.com/)

> 📚 Tous mes projets sont listés et documentés sur mon [profil GitHub](https://github.com/Georginio-prod).
