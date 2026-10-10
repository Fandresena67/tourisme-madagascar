import { useState, type FormEvent } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { submitReservation } from '../services/formsubmit'
import type { Activity, Destination, Hotel, ReservationFormData, ReservationFormErrors } from '../types'
import { findBySlugOrName } from '../utils/search'
import { validateReservationForm } from '../utils/validation'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const initialForm: ReservationFormData = {
  nom: '',
  prenom: '',
  email: '',
  telephone: '',
  destination: '',
  sejour: '',
  arrivee: '',
  depart: '',
  personnes: '1',
  message: '',
}

interface ReservationContext {
  destination?: Destination
  activity?: Activity
  hotel?: Hotel
}

function Reservation() {
  useDocumentTitle('Réservation — Tourisme Madagascar')
  const [searchParams] = useSearchParams()

  const [context] = useState<ReservationContext>(() => ({
    destination: findBySlugOrName(destinations, searchParams.get('destination')),
    activity: findBySlugOrName(activities, searchParams.get('activity')),
    hotel: findBySlugOrName(hotels, searchParams.get('hotel')),
  }))

  const [form, setForm] = useState<ReservationFormData>(() => ({
    ...initialForm,
    destination: context.destination?.name ?? initialForm.destination,
    sejour: context.activity?.name ?? context.hotel?.name ?? initialForm.sejour,
  }))
  const [errors, setErrors] = useState<ReservationFormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  function updateField(field: keyof ReservationFormData, value: string) {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)

    const nextErrors = validateReservationForm(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      await submitReservation(form)
      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "L'envoi de votre demande a échoué. Veuillez réessayer.",
      )
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <main className="section">
        <p className="eyebrow">Réservation</p>
        <h1>Demande envoyée</h1>
        <p>
          Merci ! Votre demande de réservation a bien été transmise. Nous vous
          répondrons par e-mail dans les plus brefs délais.
        </p>
        <div className="form-actions">
          <button className="button" type="button" onClick={() => setSubmitted(false)}>
            Faire une nouvelle demande
          </button>
          <Link to="/destinations" className="button button-outline">
            Continuer à explorer
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="section">
      <p className="eyebrow">Réservation</p>
      <h1>Demande de réservation</h1>
      <p>Remplissez le formulaire ci-dessous : votre demande nous sera envoyée par e-mail.</p>

      {(context.destination || context.activity || context.hotel) && (
        <div
          className="reservation-context"
          role="status"
          aria-live="polite"
          aria-label="Contexte de votre demande"
        >
          <p>
            <strong>Votre demande concerne&nbsp;:</strong>{' '}
            {context.destination && (
              <Link to={`/destinations/${context.destination.slug}`}>
                {context.destination.name}
              </Link>
            )}
            {context.destination && (context.activity || context.hotel) && ' · '}
            {context.activity && (
              <Link to={`/activites/${context.activity.slug}`}>{context.activity.name}</Link>
            )}
            {context.hotel && (
              <Link to={`/hotels/${context.hotel.slug}`}>{context.hotel.name}</Link>
            )}
          </p>
          <p className="reservation-context-hint">
            Les champs correspondants ont été pré-remplis : vous pouvez les modifier librement.
          </p>
        </div>
      )}

      <form className="reservation-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="nom">Nom *</label>
            <input
              id="nom"
              name="nom"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Votre nom"
              value={form.nom}
              onChange={(event) => updateField('nom', event.target.value)}
              aria-invalid={Boolean(errors.nom)}
            />
            {errors.nom && <p className="field-error">{errors.nom}</p>}
          </div>

          <div className="field">
            <label htmlFor="prenom">Prénom *</label>
            <input
              id="prenom"
              name="prenom"
              type="text"
              required
              autoComplete="given-name"
              placeholder="Votre prénom"
              value={form.prenom}
              onChange={(event) => updateField('prenom', event.target.value)}
              aria-invalid={Boolean(errors.prenom)}
            />
            {errors.prenom && <p className="field-error">{errors.prenom}</p>}
          </div>

          <div className="field">
            <label htmlFor="email">E-mail *</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="vous@exemple.com"
              value={form.email}
              onChange={(event) => updateField('email', event.target.value)}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <p className="field-error">{errors.email}</p>}
          </div>

          <div className="field">
            <label htmlFor="telephone">Téléphone *</label>
            <input
              id="telephone"
              name="telephone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="+261 …"
              value={form.telephone}
              onChange={(event) => updateField('telephone', event.target.value)}
              aria-invalid={Boolean(errors.telephone)}
            />
            {errors.telephone && <p className="field-error">{errors.telephone}</p>}
          </div>

          <div className="field">
            <label htmlFor="destination">Destination *</label>
            <select
              id="destination"
              name="destination"
              required
              value={form.destination}
              onChange={(event) => updateField('destination', event.target.value)}
              aria-invalid={Boolean(errors.destination)}
            >
              <option value="">Choisir une destination</option>
              {destinations.map((destination) => (
                <option key={destination.slug} value={destination.name}>
                  {destination.name}
                </option>
              ))}
            </select>
            {errors.destination && <p className="field-error">{errors.destination}</p>}
          </div>

          <div className="field">
            <label htmlFor="sejour">Hôtel ou activité *</label>
            <select
              id="sejour"
              name="sejour"
              required
              value={form.sejour}
              onChange={(event) => updateField('sejour', event.target.value)}
              aria-invalid={Boolean(errors.sejour)}
            >
              <option value="">Choisir un hôtel ou une activité</option>
              <optgroup label="Hôtels">
                {hotels.map((hotel) => (
                  <option key={hotel.slug} value={hotel.name}>
                    {hotel.name}
                  </option>
                ))}
              </optgroup>
              <optgroup label="Activités">
                {activities.map((activity) => (
                  <option key={activity.slug} value={activity.name}>
                    {activity.name}
                  </option>
                ))}
              </optgroup>
            </select>
            {errors.sejour && <p className="field-error">{errors.sejour}</p>}
          </div>

          <div className="field">
            <label htmlFor="arrivee">Date d'arrivée *</label>
            <input
              id="arrivee"
              name="arrivee"
              type="date"
              required
              value={form.arrivee}
              onChange={(event) => updateField('arrivee', event.target.value)}
              aria-invalid={Boolean(errors.arrivee)}
            />
            {errors.arrivee && <p className="field-error">{errors.arrivee}</p>}
          </div>

          <div className="field">
            <label htmlFor="depart">Date de départ *</label>
            <input
              id="depart"
              name="depart"
              type="date"
              required
              value={form.depart}
              onChange={(event) => updateField('depart', event.target.value)}
              aria-invalid={Boolean(errors.depart)}
            />
            {errors.depart && <p className="field-error">{errors.depart}</p>}
          </div>

          <div className="field">
            <label htmlFor="personnes">Nombre de personnes *</label>
            <input
              id="personnes"
              name="personnes"
              type="number"
              min={1}
              step={1}
              required
              value={form.personnes}
              onChange={(event) => updateField('personnes', event.target.value)}
              aria-invalid={Boolean(errors.personnes)}
            />
            {errors.personnes && <p className="field-error">{errors.personnes}</p>}
          </div>
        </div>

        <div className="field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            aria-invalid={Boolean(errors.message)}
            placeholder="Précisez vos souhaits, questions ou contraintes…"
          />
          {errors.message && <p className="field-error">{errors.message}</p>}
        </div>

        {submitError && <p className="form-error">{submitError}</p>}

        <button className="button" type="submit" disabled={submitting}>
          {submitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
        </button>
      </form>
    </main>
  )
}

export default Reservation
