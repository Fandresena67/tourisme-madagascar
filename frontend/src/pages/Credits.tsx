import { ArrowUpRight, Camera } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { listImages, type ImageCreditEntry } from '../assets/images'
import SectionTitle from '../components/ui/SectionTitle'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

interface ImageGroup {
  title: string
  entries: ImageCreditEntry[]
}

function groupTitle(key: string): string {
  if (key.startsWith('hotel-')) return 'Hôtels'
  if (key.startsWith('activity-')) return 'Activités'
  return 'Destinations'
}

function Credits() {
  useDocumentTitle('Crédits photos — Tourisme Madagascar')
  const groups = useMemo<ImageGroup[]>(() => {
    const order = ['Destinations', 'Hôtels', 'Activités']
    const byTitle = new Map<string, ImageCreditEntry[]>()
    for (const entry of listImages()) {
      const title = groupTitle(entry.key)
      const current = byTitle.get(title) ?? []
      current.push(entry)
      byTitle.set(title, current)
    }
    return order
      .filter((title) => (byTitle.get(title) ?? []).length > 0)
      .map((title) => ({ title, entries: byTitle.get(title) ?? [] }))
  }, [])

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
            Crédits
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Crédits photos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Les photographies utilisées sur ce site sont créditées ci-dessous, avec leur
            licence et un lien vers la source originale.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <SectionTitle
            eyebrow="Transparence"
            title="D'où viennent nos images"
            subtitle="Chaque image du site est référencée avec son auteur, sa licence et sa page source. Les photographies des hôtels sont des photos d'illustration : elles ne représentent pas nécessairement l'établissement nommé."
          />
        </div>
      </section>

      {/* Listes des crédits */}
      {groups.map((group) => (
        <section key={group.title} aria-label={`Crédits photos — ${group.title}`}>
          <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              {group.title}
            </h2>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.entries.map((entry) => (
                <li
                  key={entry.key}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80"
                >
                  <img
                    src={entry.src}
                    alt={entry.alt}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-ink">
                      <Camera className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                      {entry.alt}
                    </p>
                    <p className="mt-3 text-sm text-ink-soft">
                      <span className="font-semibold text-ink">Crédit : </span>
                      {entry.credit}
                    </p>
                    <a
                      href={entry.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-brand transition hover:text-brand-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                    >
                      Voir la source originale
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Retour */}
      <section>
        <div className="mx-auto max-w-7xl px-4 pb-16 text-center sm:px-6 md:pb-24 lg:px-8">
          <Link to="/" className="button button-outline">
            Retour à l'accueil
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Credits
