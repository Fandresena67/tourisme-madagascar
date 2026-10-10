# Tourisme

Site touristique **frontend-only** : présentation de destinations, d'activités et
d'hôtels, avec formulaire de demande de réservation envoyé via FormSubmit.

## Stack

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS**
- **React Router**
- **Lucide React**
- **FormSubmit** (envoi des demandes de réservation par e-mail)

Axios est disponible pour les futurs appels réseau si nécessaire.

## Architecture

```text
Tourisme/
├── frontend/
│   ├── .env.example          # VITE_FORMSUBMIT_EMAIL
│   └── src/
│       ├── assets/
│       ├── components/       # layout / ui / shared
│       ├── data/             # données touristiques (destinations, activités, hôtels, avis)
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/         # intégration FormSubmit
│       ├── types/
│       ├── utils/
│       ├── App.tsx
│       ├── main.tsx
│       └── index.css
├── .gitignore
└── README.md
```

Il n'y a **pas de backend** : aucune API, aucune base de données, aucune
authentification.

## Installation et lancement

```bash
cd frontend
npm install
cp .env.example .env   # puis renseigner VITE_FORMSUBMIT_EMAIL
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Réservations (FormSubmit)

La page `/reservation` contient un formulaire de demande de réservation.
À l'envoi, les données sont transmises à FormSubmit :

```text
Visiteur → Formulaire React → https://formsubmit.co/EMAIL → e-mail du propriétaire
```

L'adresse destinataire est configurée via la variable d'environnement :

```bash
VITE_FORMSUBMIT_EMAIL=your-email@example.com
```

Les variables `VITE_*` sont visibles dans le navigateur : elles ne doivent
jamais contenir de secret (mot de passe, token, clé privée…).

## Routes

| Route                  | Page                        |
| ---------------------- | --------------------------- |
| `/`                    | Accueil                     |
| `/destinations`        | Liste des destinations      |
| `/destinations/:slug`  | Détail d'une destination    |
| `/activites`           | Liste des activités         |
| `/activites/:slug`     | Détail d'une activité       |
| `/hotels`              | Liste des hôtels            |
| `/hotels/:slug`        | Détail d'un hôtel           |
| `/reservation`         | Formulaire de réservation   |
| `/a-propos`            | À propos                    |
| `/contact`             | Contact                     |

## Vérifications

```bash
cd frontend
npx tsc -b
npm run build
npx vite --version
```
