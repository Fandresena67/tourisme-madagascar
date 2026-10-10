export type DestinationCategory = 'Plage' | 'Nature' | 'Culture' | 'Aventure' | 'Ville' | 'Île'

export interface Destination {
  slug: string
  name: string
  /** Autres noms recherchables (ex. ancien nom colonial), sans créer de doublon d'affichage. */
  aliases?: string[]
  country: string
  region?: string
  category?: DestinationCategory
  summary: string
  description?: string[]
  highlights?: string[]
  bestPeriod?: string
  recommendedDuration?: string
  image?: string
  images?: string[]
}

export interface Activity {
  slug: string
  name: string
  destinationSlug: string
  summary: string
  category?: string
  duration?: string
  level?: string
  bestPeriod?: string
  description?: string[]
  highlights?: string[]
  image?: string
  images?: string[]
}

export interface Hotel {
  slug: string
  name: string
  destinationSlug: string
  location?: string
  summary: string
  pricePerNight?: number
  rating?: number
  image?: string
}

export interface Review {
  id: string
  author: string
  rating: number
  comment: string
  destinationSlug?: string
}

export interface ReservationFormData {
  nom: string
  prenom: string
  email: string
  telephone: string
  destination: string
  sejour: string
  arrivee: string
  depart: string
  personnes: string
  message: string
}

export type ReservationFormErrors = Partial<Record<keyof ReservationFormData, string>>
