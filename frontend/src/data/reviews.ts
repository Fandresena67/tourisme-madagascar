import type { Review } from '../types'

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Claire M.',
    rating: 5,
    comment:
      "Un voyage magique : les lagoons de Nosy Be et la chaleur de l'accueil malgache resteront longtemps dans nos souvenirs.",
    destinationSlug: 'nosy-be',
  },
  {
    id: '2',
    author: 'Julien R.',
    rating: 5,
    comment:
      "Le coucher de soleil à l'Allée des Baobabs vaut à lui seul le déplacement. Une organisation simple et vraiment claire.",
    destinationSlug: 'morondava',
  },
  {
    id: '3',
    author: 'Aina & Soa',
    rating: 4,
    comment:
      "Une randonnée inoubliable à Andasibe, guidée par des passionnés. Nous reviendrons sans hésiter.",
    destinationSlug: 'andasibe',
  },
]
