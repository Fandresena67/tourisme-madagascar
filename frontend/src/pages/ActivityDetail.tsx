import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Footprints,
  Gauge,
  MapPin,
  Sparkles,
  Tag,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import CardMedia from '../components/ui/CardMedia'
import ActivityCard from '../components/ui/ActivityCard'
import DestinationCard from '../components/ui/DestinationCard'
import SectionTitle from '../components/ui/SectionTitle'
import { resolveImageAlt, resolveImageCredit } from '../assets/images'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function ActivityDetail() {
  const { slug } = useParams()
  const activity = activities.find((item) => item.slug === slug)
  useDocumentTitle(
    activity ? `${activity.name} — Tourisme Madagascar` : 'Activité introuvable — Tourisme Madagascar',
  )

  if (!activity) {
    return (
      <main>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Erreur 404
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Activité introuvable
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
            L'activité que vous recherchez n'existe pas ou n'est plus disponible.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/activites" className="button">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour aux activités
            </Link>
          </div>
        </div>
      </main>
    )
  }

  const destination = destinations.find((item) => item.slug === activity.destinationSlug)
  const otherActivities = activities.filter((item) => item.slug !== activity.slug).slice(0, 3)
  const heroAlt = resolveImageAlt(activity.image) ?? `Illustration de ${activity.name}`
  const heroCredit = resolveImageCredit(activity.image)

  // Architecture galerie : plusieurs images quand disponibles, une seule sinon.
  const galleryImages = activity.images ?? (activity.image ? [activity.image] : [])

  const practicalInfos = [
    destination
      ? {
          icon: MapPin,
          label: 'Destination',
          value: destination.name,
          to: `/destinations/${destination.slug}`,
        }
      : null,
    activity.duration
      ? { icon: Clock, label: 'Durée', value: activity.duration, to: null }
      : null,
    activity.category
      ? { icon: Tag, label: 'Catégorie', value: activity.category, to: null }
      : null,
    activity.level
      ? { icon: Gauge, label: 'Niveau', value: activity.level, to: null }
      : null,
    activity.bestPeriod
      ? { icon: CalendarDays, label: 'Période recommandée', value: activity.bestPeriod, to: null }
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
              to="/activites"
              className="font-semibold text-ink-soft transition hover:text-brand"
            >
              Activités
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="h-4 w-4 text-slate-400" />
          </li>
          <li aria-current="page" className="font-bold text-brand">
            {activity.name}
          </li>
        </ol>
      </nav>

      {/* Hero détail */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-10 sm:px-6 md:pt-16 lg:px-8">
          <div className="grid items-end gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {activity.category && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    {activity.category}
                  </span>
                )}
                {destination && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {destination.name}
                  </span>
                )}
                {activity.duration && (
                  <span className="flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white ring-1 ring-white/25">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {activity.duration}
                  </span>
                )}
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
                {activity.name}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                {activity.summary}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  to={`/reservation?activity=${activity.slug}`}
                  className="button button-light"
                >
                  Planifier mon voyage
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {destination && (
                  <Link
                    to={`/destinations/${destination.slug}`}
                    className="button button-outline-light"
                  >
                    Voir {destination.name}
                  </Link>
                )}
              </div>
            </div>
            <CardMedia
              imageKey={activity.image}
              alt={heroAlt}
              icon={Footprints}
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
      {activity.description && activity.description.length > 0 && (
        <section aria-label={`À propos de ${activity.name}`} className="bg-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
              L'expérience
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              À propos de cette expérience
            </h2>
            <div className="mt-6 space-y-4">
              {activity.description.map((paragraph, index) => (
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
              subtitle={`L'essentiel pour préparer votre expérience : ${activity.name}.`}
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
                  <div className="min-w-0">
                    <dt className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                      {info.label}
                    </dt>
                    <dd className="mt-1 text-base font-bold text-ink">
                      {info.to ? (
                        <Link to={info.to} className="transition hover:text-brand">
                          {info.value}
                        </Link>
                      ) : (
                        info.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* Points forts */}
      {activity.highlights && activity.highlights.length > 0 && (
        <section aria-label={`Les points forts de ${activity.name}`} className="bg-brand-soft">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Points forts"
              title="Les points forts"
              subtitle="Ce qui rend cette expérience vraiment mémorable."
            />
            <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
              {activity.highlights.map((highlight) => (
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
        <section aria-label={`Galerie photo de ${activity.name}`} className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Galerie"
              title="L'expérience en images"
              subtitle="Un aperçu de ce qui vous attend."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((imageKey, index) => (
                <CardMedia
                  key={`${imageKey}-${index}`}
                  imageKey={imageKey}
                  alt={`${activity.name} — photo ${index + 1}`}
                  icon={Footprints}
                  className="aspect-[4/3] rounded-2xl"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Destination associée */}
      {destination && (
        <section aria-label="Découvrez cette destination" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <SectionTitle
              eyebrow="Destination"
              title="Découvrez cette destination"
              subtitle={`Cette expérience se vit à ${destination.name}.`}
            />
            <div className="mx-auto mt-10 max-w-md">
              <DestinationCard destination={destination} />
            </div>
          </div>
        </section>
      )}

      {/* Autres activités */}
      {otherActivities.length > 0 && (
        <section aria-label="Vous pourriez aussi aimer">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                  Continuer l'exploration
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  Vous pourriez aussi aimer
                </h2>
              </div>
              <Link
                to="/activites"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition hover:text-brand-dark"
              >
                Toutes les activités
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherActivities.map((item) => (
                <ActivityCard key={item.slug} activity={item} />
              ))}
            </div>
          </div>
        </section>
      )}

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
            Envie de vivre cette expérience&nbsp;?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            Racontez-nous votre projet de voyage : nous intégrons cette activité à un
            itinéraire à votre image.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to={`/reservation?activity=${activity.slug}`} className="button button-light">
              Planifier mon voyage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/activites" className="button button-outline-light">
              Voir les autres activités
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ActivityDetail
