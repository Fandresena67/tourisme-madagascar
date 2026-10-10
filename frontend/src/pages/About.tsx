import {
  ArrowRight,
  BedDouble,
  Compass,
  Footprints,
  MapPin,
  Send,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '../components/ui/SectionTitle'
import { activities } from '../data/activities'
import { destinations } from '../data/destinations'
import { hotels } from '../data/hotels'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const approaches = [
  {
    icon: MapPin,
    title: 'Des destinations choisies',
    text: 'Des lieux présentés pour leur intérêt réel, avec des descriptions factuelles et des photos vérifiées.',
  },
  {
    icon: Footprints,
    title: 'Des expériences reliées',
    text: 'Chaque activité est rattachée à sa destination, pour comprendre facilement où et comment la vivre.',
  },
  {
    icon: BedDouble,
    title: 'Des hébergements situés',
    text: 'Les hôtels présentés sont liés à leur destination, sans promesse inventée.',
  },
  {
    icon: Send,
    title: 'Une demande simple',
    text: 'Un seul formulaire pour décrire votre projet : destination, activité, hôtel, dates et message.',
  },
]

function About() {
  useDocumentTitle('À propos — Tourisme Madagascar')
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
            À propos
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Découvrir Madagascar, simplement
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Ce site présente des destinations, des activités et des hébergements à
            Madagascar, et permet de faire une demande de voyage en quelques clics.
          </p>
        </div>
      </section>

      {/* Objectif */}
      <section aria-label="Notre objectif" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 md:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
            Notre objectif
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Un guide clair avant le voyage
          </h2>
          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Madagascar concentre une diversité rare : îles et plages, forêts humides et
              sèches, parcs naturels, villes historiques et cultures vivantes. Ce site a
              pour objectif de présenter ces richesses de façon claire et honnête.
            </p>
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Plutôt que des promesses exagérées, vous trouverez ici des fiches
              descriptives, des photos dont la source est indiquée, et des liens directs
              entre chaque destination, ses activités et ses hébergements.
            </p>
          </div>
        </div>
      </section>

      {/* Approche */}
      <section aria-label="Notre approche">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <SectionTitle
            eyebrow="Notre approche"
            title="Comment ce site est construit"
            subtitle="Quatre principes simples, appliqués à chaque page."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le site en bref : chiffres réels issus du catalogue */}
      <section aria-label="Le site en bref" className="bg-brand-soft">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <SectionTitle
            eyebrow="Le site en bref"
            title="Ce que le catalogue contient aujourd'hui"
            subtitle="Des contenus ajoutés au fil de l'eau, sans remplissage artificiel."
          />
          <dl className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { value: String(destinations.length), label: 'Destinations présentées' },
              { value: String(activities.length), label: 'Activités proposées' },
              { value: String(hotels.length), label: 'Hébergements présentés' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200/80"
              >
                <dd className="text-4xl font-extrabold text-brand">{stat.value}</dd>
                <dt className="mt-2 text-sm font-semibold text-ink-soft">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Préparer son voyage */}
      <section aria-label="Préparer son voyage" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 md:py-20">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft text-brand">
            <Compass className="h-6 w-6" aria-hidden="true" />
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold tracking-tight text-balance text-ink sm:text-4xl">
            Préparer son voyage
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            Explorez les destinations, repérez les activités et hébergements qui vous
            correspondent, puis envoyez votre demande : nous revenons vers vous par
            e-mail.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/destinations" className="button">
              Découvrir les destinations
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/reservation" className="button button-outline">
              Faire une demande
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
