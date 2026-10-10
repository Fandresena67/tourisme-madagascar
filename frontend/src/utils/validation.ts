import type { ReservationFormData, ReservationFormErrors } from '../types'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

// Date locale du jour au format AAAA-MM-JJ, sans conversion UTC
// (évite tout décalage de jour lié au fuseau horaire).
function todayLocal(): string {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

export function validateReservationForm(data: ReservationFormData): ReservationFormErrors {
  const errors: ReservationFormErrors = {}

  if (!data.nom.trim()) errors.nom = 'Le nom est obligatoire.'
  if (!data.prenom.trim()) errors.prenom = 'Le prénom est obligatoire.'

  if (!data.email.trim()) {
    errors.email = 'L\'adresse e-mail est obligatoire.'
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'L\'adresse e-mail n\'est pas valide.'
  }

  if (!data.telephone.trim()) errors.telephone = 'Le téléphone est obligatoire.'
  if (!data.destination.trim()) errors.destination = 'La destination est obligatoire.'
  if (!data.sejour.trim()) errors.sejour = 'Indiquez un hôtel ou une activité.'
  if (!data.arrivee) errors.arrivee = 'La date d\'arrivée est obligatoire.'
  if (!data.depart) errors.depart = 'La date de départ est obligatoire.'

  if (data.arrivee && DATE_PATTERN.test(data.arrivee) && data.arrivee < todayLocal()) {
    errors.arrivee = 'La date d\'arrivée ne peut pas être antérieure à aujourd\'hui.'
  }

  if (data.arrivee && data.depart && data.depart < data.arrivee) {
    errors.depart = 'La date de départ doit être après la date d\'arrivée.'
  }

  const personnes = Number(data.personnes)
  if (!data.personnes.trim()) {
    errors.personnes = 'Le nombre de personnes est obligatoire.'
  } else if (!Number.isInteger(personnes) || personnes < 1) {
    errors.personnes = 'Indiquez un nombre entier supérieur à 0.'
  }

  if (!data.message.trim()) errors.message = 'Le message est obligatoire.'

  return errors
}
