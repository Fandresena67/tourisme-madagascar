import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Footprints,
  MapPin,
  Mountain,
  Sparkles,
  Tag,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { resolveImageAlt, resolveImageCredit } from '../assets/images'
import CardMedia from '../components/ui/CardMedia'
import ActivityCard from '../components/ui/ActivityCard'
import DestinationCard from '../components/ui/DestinationCard'
import HotelCard from '../components/ui/HotelCard'
import SectionTitle from '../components/ui/SectionTitle'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function DestinationDetail() {
  const { slug } = useParams()
  const destination = destinations.find((item) => item.slug === slug)
  useDocumentTitle(
    destination ? `${destination.name} — Tourisme Madagascar` : 'Destination introuvable — Tourisme Madagascar',
  )

  if (!destination) {
    return (
      <main>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Erreur 404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Destination introuvable
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            La destination que vous recherchez n'existe pas ou n'est plus disponible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/destinations" className="button">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour aux destinations
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const relatedActivities = activities.filter(
    (activity) => activity.destinationSlug === destination.slug,
  )
  const heroAlt = resolveImageAlt(destination.image) ?? `Illustration de ${destination.name}`
  const heroCredit = resolveImageCredit(destination.image)
  const relatedHotels = hotels.filter((hotel) => hotel.destinationSlug === destination.slug)
  const otherDestinations = destinations.filter((item) => item.slug !== destination.slug).slice(0, 3)

  // Architecture galerie : plusieurs images quand disponibles, une seule sinon.
  const galleryImages = destination.images ?? (destination.image ? [destination.image] : [])

  const practicalInfos = [
    destination.region
      ? { icon: MapPin, label: 'Localisation', value: `${destination.region}, ${destination.country}` }
      : null,
    destination.category
      ? { icon: Tag, label: 'Type de destination', value: destination.category }
      : null,
    destination.bestPeriod
      ? { icon: CalendarDays, label: 'Meilleure période', value: destination.bestPeriod }
      : null,
    destination.recommendedDuration
      ? { icon: Clock, label: 'Durée recommandée', value: destination.recommendedDuration }
      : null,
  ].filter((item) => item !== null)

  return (
    <main>
      {/* Fil d'Ariane */}
      <nav aria-label="Fil d'Ariane" className="border-b border-slate-200/80 bg-white">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5 px-4 py-3 text-sm sm:px-6 lg:px-8">
          <li>
            <Link to="/" className="font-semibold text-ink-soft transition hover:text-brand">
              Accueil
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </li>
          <li>
            <Link
              to="/destinations"
              className="font-semibold text-ink-soft transition hover:text-brand"
            >
              Destinations
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </li>
          <li aria-current="page" className="font-bold text-brand">
            {destination.name}
          </li>
        </ol>
      </nav>

      {/* Introduction visuelle */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 md:pt-16 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {destination.category && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    {destination.category}
                  </span>
                )}
                {destination.region && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {destination.region}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {destination.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {destination.summary}
              </p>
            </div>
            <CardMedia
              imageKey={destination.image}
              alt={heroAlt}
              icon={Mountain}
              className="aspect-[16/9] rounded-3xl shadow-xl ring-1 ring-white/20"
            >
              {heroCredit && (
                <span className="absolute right-3 bottom-3 max-w-[calc(100%-1.5rem)] truncate rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white/90">
                  Photo : {heroCredit}
                </span>
              )}
            </CardMedia>
          </div>
        </div>
      </section>

      {/* Description */}
      {destination.description && destination.description.length > 0 && (
        <section aria-label={`Présentation de ${destination.name}`} className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              Présentation
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              {destination.name}, en quelques mots
            </h2>
            <div className="mt-6 space-y-4">
              {destination.description.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed text-ink-soft sm:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Informations pratiques */}
      {practicalInfos.length > 0 && (
        <section aria-label="Informations pratiques">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Bon à savoir"
              title="Informations pratiques"
              subtitle={`L'essentiel pour préparer votre visite à ${destination.name}.`}
            />
            <dl className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {practicalInfos.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                    <info.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                      {info.label}
                    </dt>
                    <dd className="mt-1 text-base font-bold text-ink">{info.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Points forts */}
      {destination.highlights && destination.highlights.length > 0 && (
        <section aria-label={`Pourquoi visiter ${destination.name}`} className="bg-brand-soft">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Points forts"
              title={`Pourquoi visiter ${destination.name} ?`}
              subtitle="Ce qui rend cette destination vraiment unique."
            />
            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {destination.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-relaxed text-ink sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Galerie (architecture multi-images) */}
      {galleryImages.length > 1 && (
        <section aria-label={`Galerie photo de ${destination.name}`} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Galerie"
              title={`${destination.name} en images`}
              subtitle="Un aperçu des paysages qui vous attendent."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((imageKey, index) => (
                <CardMedia
                  key={`${imageKey}-${index}`}
                  imageKey={imageKey}
                  alt={`${destination.name} — photo ${index + 1}`}
                  icon={Mountain}
                  className="aspect-[4/3] rounded-2xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Activités associées */}
      {relatedActivities.length > 0 && (
        <section aria-label={`Que faire à ${destination.name}`} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <Footprints className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Activités
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    Que faire à {destination.name}&nbsp;?
                  </h2>
                </div>
              </div>
              <Link
                to="/activites"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                Toutes les activités
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {relatedActivities.map((activity) => (
                <ActivityCard key={activity.slug} activity={activity} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Hôtels associés */}
      {relatedHotels.length > 0 && (
        <section aria-label={`Où séjourner à ${destination.name}`}>
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <BedDouble className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                    Hébergements
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                    Où séjourner&nbsp;?
                  </h2>
                </div>
              </div>
              <Link
                to="/hotels"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                Tous les hôtels
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {relatedHotels.map((hotel) => (
                <HotelCard key={hotel.slug} hotel={hotel} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Expériences et hébergements à venir */}
      {relatedActivities.length === 0 && relatedHotels.length === 0 && (
        <section aria-label={`Expériences à ${destination.name}`} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="mx-auto max-w-2xl rounded-3xl bg-brand-soft p-8 text-center sm:p-10">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand shadow-sm">
                <Footprints className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Expériences en préparation
              </h2>
              <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-soft">
                Les expériences et hébergements disponibles pour {destination.name} seront
                ajoutés prochainement. En attendant, décrivez-nous votre projet : nous vous
                proposons un voyage sur mesure.
              </p>
              <div className="mt-6">
                <Link
                  to={`/reservation?destination=${destination.slug}`}
                  className="button"
                >
                  Préparer mon voyage
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Autres destinations */}
      <section aria-label="Autres destinations" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <SectionTitle
            eyebrow="Continuer l'exploration"
            title="Voir les autres destinations"
            subtitle="Poursuivez votre découverte de Madagascar."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherDestinations.map((item) => (
              <DestinationCard key={item.slug} destination={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA réservation */}
      <section className="relative overflow-hidden bg-brand-deep">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 md:py-24 lg:px-8">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-brand-muted ring-1 ring-white/20">
            <Sparkles className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl">
            Prêt à découvrir {destination.name}&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Racontez-nous votre projet de voyage : nous vous aidons à organiser une expérience
            à votre image.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={`/reservation?destination=${destination.slug}`} className="button button-light">
              Planifier mon voyage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/destinations" className="button button-outline-light">
              Voir les autres destinations
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DestinationDetail
