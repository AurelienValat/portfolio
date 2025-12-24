# Portfolio - Aurélien Valat

Ce projet est un portfolio construit avec **Next.js 16**, **React 19** et **Tailwind CSS 4**. Il intègre une gestion complète de l'internationalisation (i18n) pour supporter le français et l'anglais.

## 🚀 Technologies utilisées

* **Framework** : [Next.js 16.1.1](https://nextjs.org/)
* **Bibliothèque UI** : [React 19.2.3](https://react.dev/)
* **Stylisation** : [Tailwind CSS 4.1.18](https://tailwindcss.com/)
* **Internationalisation** : [next-intl 4.6.1](https://next-intl-docs.vercel.app/)
* **Icônes** : [Lucide React](https://lucide.dev/)
* **Thème** : [next-themes](https://github.com/pacocoursey/next-themes) (Support mode sombre/clair)
* **Typographie** : Police Inter (via Next Font)

## ✨ Fonctionnalités

* **Support Multilingue** : Bascule complète entre le Français et l'Anglais via un système de dictionnaire JSON.
* **Mode Sombre/Clair** : Intégration fluide avec détection des préférences système.
* **Design Responsive** : Interface optimisée pour tous les types d'écrans grâce à Tailwind CSS.
* **Routing Dynamique** : Utilisation du segment `[locale]` pour une gestion propre des URLs par langue.


## 📦 Installation locale et Lancement

1.  **Cloner le dépôt** :
    ```bash
    git clone https://github.com/AurelienValat/portfolio.git
    cd portfolio
    ```

2.  **Installer les dépendances** :
    ```bash
    npm install
    ```

3.  **Lancer le serveur de développement** :
    ```bash
    npm run dev
    ```
    Accédez ensuite à [http://localhost:3000](http://localhost:3000).

## 📂 Structure du projet

* `app/[locale]/` : Contient les routes principales de l'application encapsulées par la locale.
* `components/` : Composants React réutilisables (Navbar, ThemeToggle, etc.).
* `messages/` : Fichiers de traduction JSON (`fr.json`, `en.json`).
* `i18n.ts` & `middleware.ts` : Configuration centrale de l'internationalisation et du routage.
* `next.config.ts` : Configuration Next.js incluant le plugin `next-intl`.

## 🛠 Configuration I18n

Le projet utilise `next-intl` avec une configuration asynchrone pour charger les messages dynamiquement selon la langue détectée ou choisie par l'utilisateur. Les langues supportées sont définies dans `i18n.ts` : `fr` et `en`.


---
Développé par **Aurélien Valat**.
