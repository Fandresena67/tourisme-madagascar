import type { Hotel } from '../types'

export const hotels: Hotel[] = [
  {
    slug: 'hotel-lagon-bleu',
    image: 'hotel-lagon-bleu',
    name: 'Hôtel Lagon Bleu',
    destinationSlug: 'nosy-be',
    location: 'Nosy Be',
    summary: 'Bungalows face au lagon, accès direct à la plage et table locale.',
    pricePerNight: 95,
    rating: 5,
  },
  {
    slug: 'relais-des-baobabs',
    image: 'hotel-relais-baobabs',
    name: 'Relais des Baobabs',
    destinationSlug: 'morondava',
    location: 'Morondava',
    summary: 'Un lodge paisible entre rivière et forêt de baobabs.',
    pricePerNight: 78,
    rating: 4,
  },
  {
    slug: 'villa-hauts-plateaux',
    image: 'hotel-villa-plateaux',
    name: 'Villa des Hauts-Plateaux',
    destinationSlug: 'antananarivo',
    location: 'Antananarivo',
    summary: 'Une maison d\'hôtes élégante au cœur des collines de la capitale.',
    pricePerNight: 65,
    rating: 4,
  },
  {
    slug: 'pavillon-sainte-marie',
    image: 'hotel-pavillon-sainte-marie',
    name: 'Pavillon Sainte-Marie',
    destinationSlug: 'sainte-marie',
    location: 'Île Sainte-Marie',
    summary: 'Crête face à l\'océan, hamacs, piscine et cuisine créole.',
    pricePerNight: 110,
    rating: 5,
  },
]
