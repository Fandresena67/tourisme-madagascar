import { ArrowRight, MapPin, RotateCcw, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import DestinationCard from '../components/ui/DestinationCard'
import SectionTitle from '../components/ui/SectionTitle'
import { destinations } from '../data/destinations'
import type { DestinationCategory } from '../types'
import { normalizeKey, normalizeSearchText as normalize } from '../utils/search'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const categoryOrder: DestinationCategory[] = ['Plage', 'Nature', 'Culture', 'Aventure', 'Ville', 'Île']

function Destinations() {
  useDocumentTitle('Destinations — Tourisme Madagascar')
  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(() => searchParams.get('destination') ?? '')
  const [category, setCategory] = useState<'Toutes' | DestinationCategory>('Toutes')
  const [region, setRegion] = useState<string>('Toutes')

  const categories = useMemo(() => {
    const present = new Set(
      destinations.map((destination) => destination.category).filter((item) => item !== undefined),
    )
    return categoryOrder.filter((item) => present.has(item))
  }, [])

  const regions = useMemo(() => {
    const unique = new Set(
      destinations.map((destination) => destination.region).filter((item) => item !== undefined),
    )
    return [...unique].sort((a, b) => a.localeCompare(b, 'fr'))
  }, [])

  const filtered = useMemo(() => {
    const query = normalize(search)
    const queryKey = normalizeKey(search)
    // Variante par mots-clés : tous les mots significatifs doivent apparaître
    // (« montagne ambre » retrouve « Montagne d'Ambre »).
    const tokens = query.split(/[\s'’‘-]+/).filter((token) => token.length > 1)
    // Comparaisons secondaires insensibles aux espaces / apostrophes / tirets
    // (« ile sainte marie » retrouve « Île Sainte-Marie »). Strictement
    // additives : tout ce qui matchait avant matche toujours.
    function matchesField(field: string): boolean {
      const text = normalize(field)
      if (text.includes(query)) return true
      if (queryKey.length > 0 && normalizeKey(field).includes(queryKey)) return true
      return tokens.length > 0 && tokens.every((token) => text.includes(token))
    }
    return destinations.filter((destination) => {
      const matchesSearch =
        query.length === 0 ||
        matchesField(destination.name) ||
        matchesField(destination.region ?? '') ||
        matchesField(destination.summary) ||
        (destination.aliases ?? []).some((alias) => matchesField(alias))
      const matchesCategory = category === 'Toutes' || destination.category === category
      const matchesRegion = region === 'Toutes' || destination.region === region
      return matchesSearch && matchesCategory && matchesRegion
    })
  }, [search, category, region])

  const hasActiveFilters = search.trim() !== '' || category !== 'Toutes' || region !== 'Toutes'

  function resetFilters() {
    setSearch('')
    setCategory('Toutes')
    setRegion('Toutes')
  }

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
            Destinations
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Découvrez Madagascar
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Explorez les régions et les destinations les plus emblématiques de la Grande Île :
            îles, plages, forêts, villes et terres d'aventure.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle
            eyebrow="La Grande Île"
            title="Une île, mille visages"
            subtitle="Madagascar concentre une diversité rare : plages et lagoons, montagnes et forêts, parcs naturels uniques au monde, biodiversité endémique, culture vivante et patrimoine chargé d'histoire."
          />
        </div>
      </section>

      {/* Filtres + catalogue */}
      <section aria-label="Catalogue des destinations">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
          <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr_auto] lg:items-end">
              <div className="field">
                <label htmlFor="destination-search">Rechercher une destination</label>
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-ink-soft"
                    aria-hidden="true"
                  />
                  <input
                    id="destination-search"
                    type="search"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Ex. Nosy Be, Morondava, Andasibe…"
                    className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pr-3 pl-9 font-[inherit] text-[inherit] text-ink placeholder:text-slate-400 focus:border-brand focus:outline-2 focus:outline-brand"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="destination-region">Région</label>
                <select
                  id="destination-region"
                  value={region}
                  onChange={(event) => setRegion(event.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 font-[inherit] text-[inherit] text-ink focus:border-brand focus:outline-2 focus:outline-brand"
                >
                  <option value="Toutes">Toutes les régions</option>
                  {regions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="button button-outline inline-flex w-full items-center justify-center lg:w-auto"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Réinitialiser
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filtrer par type">
              {(['Toutes', ...categories] as const).map((item) => {
                const active = category === item
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    aria-pressed={active}
                    className={[
                      'rounded-full px-4 py-2 text-sm font-semibold transition',
                      active
                        ? 'bg-brand text-white shadow-sm'
                        : 'bg-brand-soft text-brand hover:bg-brand-muted',
                    ].join(' ')}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mt-8 text-sm font-semibold text-ink-soft" role="status" aria-live="polite">
            {filtered.length === 0
              ? 'Aucune destination trouvée'
              : `${filtered.length} destination${filtered.length > 1 ? 's' : ''} trouvée${filtered.length > 1 ? 's' : ''}`}
          </p>

          {filtered.length > 0 ? (
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((destination) => (
                <DestinationCard key={destination.slug} destination={destination} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-white p-10 text-center shadow-sm ring-1 ring-slate-200/80">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mx-auto mt-5 max-w-md text-xl font-bold text-ink">
                Nous n'avons trouvé aucune destination correspondant à votre recherche.
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink-soft">
                Essayez un autre mot-clé ou réinitialisez les filtres pour voir toutes les
                destinations.
              </p>
              <button type="button" onClick={resetFilters} className="button mt-6">
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Réinitialiser les filtres
              </button>
            </div>
          )}

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
              Une envie particulière&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              Dites-nous quelles destinations vous attirent : nous construisons avec vous un
              voyage sur mesure.
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

export default Destinations
