import type { ReservationFormData } from '../types'

export function getFormSubmitEmail(): string {
  const email = import.meta.env.VITE_FORMSUBMIT_EMAIL?.trim()

  if (!email) {
    throw new Error(
      'La configuration FormSubmit est absente ou invalide. Veuillez définir VITE_FORMSUBMIT_EMAIL.',
    )
  }

  // Refuse les adresses d'exemple (dont le placeholder de .env.example) :
  // on ne doit jamais envoyer silencieusement vers une adresse factice.
  // Le test volontairement large évite de dupliquer le placeholder en clair dans le code.
  if (email.endsWith('@example.com')) {
    throw new Error(
      'La configuration FormSubmit est absente ou invalide. Veuillez définir VITE_FORMSUBMIT_EMAIL.',
    )
  }

  return email
}

export function getFormSubmitAction(): string {
  return `https://formsubmit.co/ajax/${getFormSubmitEmail()}`
}

export async function submitReservation(data: ReservationFormData): Promise<void> {
  const response = await fetch(`https://formsubmit.co/ajax/${getFormSubmitEmail()}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error("L'envoi de votre demande a échoué. Veuillez réessayer.")
  }
}
