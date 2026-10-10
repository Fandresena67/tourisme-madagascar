import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import HotelCard from '../components/ui/HotelCard'
import SectionTitle from '../components/ui/SectionTitle'
import { hotels } from '../data/hotels'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function Hotels() {
  useDocumentTitle('Hôtels — Tourisme Madagascar')
  return (
    <main>
      {/* Hero de page */}
      <section className="relative overflow-hidden bg-brand-deep text-white">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/40 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-sand/20 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-14 text-center sm:px-6 md:pt-20 md:pb-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-muted">
            Hébergements
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Où séjourner à Madagascar
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Lodges face au lagon, maisons d'hôtes des Hauts-Plateaux, adresses insulaires :
            des hébergements liés à nos destinations.
          </p>
        </div>
      </section>

      {/* Catalogue */}
      <section aria-label="Catalogue des hôtels">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle
            eyebrow="Nos adresses"
            title="Des hébergements à votre image"
            subtitle="Chaque hôtel est rattaché à une destination : retrouvez-le aussi depuis sa page destination."
          />
          <p className="mt-8 text-sm font-semibold text-ink-soft" role="status" aria-live="polite">
            {`${hotels.length} hébergement${hotels.length > 1 ? 's' : ''} proposé${hotels.length > 1 ? 's' : ''}`}
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              Un séjour à organiser&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              Dites-nous quel hébergement vous plaît et à quelles dates : nous nous occupons
              du reste.
            </p>
            <div className="mt-7">
              <Link to="/reservation" className="button button-light">
                Planifier mon voyage
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hotels
