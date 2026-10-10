import { Compass, House, Map } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

function NotFound() {
  useDocumentTitle('Page introuvable — Tourisme Madagascar')
  return (
    <main>
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 md:py-28">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
          <Compass className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-brand">
          Erreur 404
        </p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          Page introuvable
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink-soft">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className="button">
            <House className="h-4 w-4" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <Link to="/destinations" className="button button-outline">
            <Map className="h-4 w-4" aria-hidden="true" />
            Découvrir les destinations
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
