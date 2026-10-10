# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Configuration FormSubmit

Le formulaire de réservation envoie les demandes via FormSubmit
(`https://formsubmit.co/ajax/<email>`), sans backend.
L'adresse de réception est configurée par variable d'environnement :

1. Copier .env.example vers .env
2. Définir VITE_FORMSUBMIT_EMAIL
3. Lancer le projet
4. Envoyer une première demande de réservation
5. Vérifier l'e-mail de confirmation FormSubmit
6. Confirmer l'adresse si FormSubmit le demande

Sans `VITE_FORMSUBMIT_EMAIL` valide, l'envoi est bloqué avec un message
d'erreur explicite : aucune demande n'est envoyée vers une adresse factice.
Le fichier `.env` réel est ignoré par Git (voir `.gitignore`) ; seul
`.env.example` est commité. Sur Vercel/Netlify, définir `VITE_FORMSUBMIT_EMAIL`
dans les variables d'environnement du projet.
