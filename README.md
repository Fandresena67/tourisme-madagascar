# Tourisme

Socle technique de la plateforme touristique, mis en place pour l'étape 2.

## Stack

- **Frontend** : React, TypeScript, Vite, Tailwind CSS, React Router, Axios et Lucide React.
- **Backend** : Node.js, Express, TypeScript, Prisma, Zod, CORS et dotenv.
- **Base de données** : PostgreSQL (schéma Prisma volontairement sans modèle métier).

## Structure

```text
Tourisme/
├── frontend/                 # Application React/Vite
│   └── src/
├── backend/                  # API Express/TypeScript
│   ├── prisma/schema.prisma
│   └── src/server.ts
├── .env.example
├── .gitignore
└── README.md
```

## Installation et lancement

```bash
cd frontend && npm install && npm run dev
```

Dans un autre terminal :

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

Le frontend est disponible sur `http://localhost:5173` et l'API sur
`http://localhost:3000`.

### Vérification de l'API

```bash
curl http://localhost:3000/api/health
# {"status":"ok","service":"tourisme-api"}
```

Les variables d'environnement sont documentées dans `.env.example` et
`backend/.env.example`. Les modèles Prisma et les fonctionnalités métier seront
ajoutés lors des étapes suivantes.
