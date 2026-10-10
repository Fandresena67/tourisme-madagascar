import {
  ArrowRight,
  BadgeCheck,
  Compass,
  Gem,
  HandHeart,
  HeartHandshake,
  Leaf,
  Mountain,
  Send,
  TreePalm,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SearchBar from '../components/shared/SearchBar'
import ActivityCard from '../components/ui/ActivityCard'
import CardMedia from '../components/ui/CardMedia'
import DestinationCard from '../components/ui/DestinationCard'
import HotelCard from '../components/ui/HotelCard'
import ReviewCard from '../components/ui/ReviewCard'
import SectionTitle from '../components/ui/SectionTitle'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { reviews } from '../data/reviews'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const storyPoints = [
  { icon: Mountain, label: 'Paysages rares' },
  { icon: Leaf, label: 'Biodiversité unique' },
  { icon: TreePalm, label: 'Culture vivante' },
  { icon: HandHeart, label: 'Rencontres sincères' },
]

const advantages = [
  {
    icon: Compass,
    title: 'Expériences authentiques',
    text: "Découvrez Madagascar au-delà des lieux touristiques classiques.",
  },
  {
    icon: Gem,
    title: 'Destinations sélectionnées',
    text: 'Des lieux choisis pour leur intérêt touristique et leur beauté.',
  },
  {
    icon: Send,
    title: 'Réservation simple',
    text: 'Envoyez votre demande de réservation en quelques clics.',
  },
  {
    icon: HeartHandshake,
    title: 'Accompagnement',
    text: 'Une expérience pensée pour faciliter votre voyage de A à Z.',
  },
]

function Home() {
  useDocumentTitle('Tourisme Madagascar — Destinations, activités et hébergements')
  return (
    <main>
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sand/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-16 text-center sm:px-6 md:pt-24 md:pb-20 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-muted">
            Explorez Madagascar
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Découvrez Madagascar autrement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Explorez des paysages uniques, découvrez des cultures authentiques et vivez des
            expériences inoubliables au cœur de Madagascar.
          </p>

          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link to="/destinations" className="button button-light">
              Découvrir les destinations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/reservation" className="button button-outline-light">
              Planifier mon voyage
            </Link>
          </div>

          <div className="mx-auto mt-14 max-w-5xl text-left">
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionTitle
            eyebrow="Destinations"
            title="Découvrez nos destinations"
            subtitle="Des lieux d'exception, des lagoons aux forêts humides, pour vivre Madagascar pleinement."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.slice(0, 6).map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/destinations" className="button button-outline">
              Voir toutes les destinations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionTitle
            eyebrow="Activités"
            title="Des expériences à vivre"
            subtitle="Randonnées, lagoons, rencontres : choisissez l'aventure qui vous ressemble."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {activities.slice(0, 4).map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/activites" className="button button-outline">
              Voir toutes les activités
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-sand-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
          <CardMedia
            alt="Paysage typique de Madagascar"
            icon={TreePalm}
            className="aspect-[4/3] rounded-3xl"
          >
            <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-ink shadow-sm">
              Paysages uniques
            </span>
            <span className="absolute top-4 right-4 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-ink shadow-sm">
              Biodiversité exceptionnelle
            </span>
          </CardMedia>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">
              L'île aux mille visages
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Un voyage entre nature, culture et aventure
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
              Des forêts de l'est aux lagoons de l'ouest, Madagascar se découvre au rythme des
              sentiers, des marchés et des rencontres. Ici, chaque journée mêle paysages
              grandioses, biodiversité unique et héritage culturel vivant.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {storyPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
                    <point.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-ink">{point.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionTitle
            eyebrow="Hébergements"
            title="Où séjourner ?"
            subtitle="Des adresses soigneusement choisies pour prolonger la magie du voyage."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {hotels.slice(0, 4).map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/hotels" className="button button-outline">
              Voir tous les hôtels
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionTitle
            eyebrow="Pourquoi nous choisir"
            title="Voyager avec des experts du terrain"
            subtitle="Tout ce qu'il faut pour transformer une envie de voyage en souvenirs durables."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div
                key={advantage.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <advantage.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{advantage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{advantage.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionTitle
            eyebrow="Avis"
            title="Exemples de retours voyageurs"
            subtitle="Quelques exemples illustrant le type de retours partagés par les voyageurs : ils donnent une idée de l'expérience, sans constituer des avis clients vérifiés."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm font-semibold text-brand">
            <BadgeCheck className="h-5 w-5" aria-hidden="true" />
            Avis publiés à titre illustratif
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-deep">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-32 left-1/2 h-80 w-[700px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 md:py-28 lg:px-8">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            Prêt à découvrir Madagascar&nbsp;?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Dites-nous ce que vous rêvez de vivre : nous préparons avec vous un voyage à votre
            image, de la première idée au dernier souvenir.
          </p>
          <div className="mt-9 flex justify-center">
            <Link to="/reservation" className="button button-light">
              Planifier mon voyage
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
