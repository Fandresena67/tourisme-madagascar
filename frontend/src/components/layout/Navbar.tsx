import { Menu, MapPin, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/activites', label: 'Activités' },
  { to: '/hotels', label: 'Hôtels' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function linkClass({ isActive }: { isActive: boolean }) {
  return [
    'rounded-lg px-3 py-2 text-sm font-semibold transition',
    isActive ? 'bg-brand-soft text-brand' : 'text-ink-soft hover:bg-brand-soft hover:text-brand',
  ].join(' ')
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open ])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-extrabold text-ink">Tourisme</span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
              Madagascar
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <NavLink
            to="/reservation"
            className={({ isActive }) =>
              [
                'hidden rounded-full px-5 py-2.5 text-sm font-bold text-white transition lg:inline-flex focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand',
                isActive ? 'bg-brand-dark' : 'bg-brand hover:bg-brand-dark',
              ].join(' ')
            }
          >
            Réserver
          </NavLink>
          <button
            type="button"
            ref={menuButtonRef}
            className="rounded-lg p-2 text-ink transition hover:bg-brand-soft hover:text-brand lg:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navigation mobile"
          className="absolute inset-x-0 top-full border-b border-slate-200 bg-white px-4 pb-5 pt-2 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    'rounded-lg px-3 py-2.5 text-sm font-semibold transition',
                    isActive
                      ? 'bg-brand-soft text-brand'
                      : 'text-ink-soft hover:bg-brand-soft hover:text-brand',
                  ].join(' ')
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                [
                  'mt-2 rounded-full px-5 py-2.5 text-center text-sm font-bold text-white transition',
                  isActive ? 'bg-brand-dark' : 'bg-brand hover:bg-brand-dark',
                ].join(' ')
              }
            >
              Réserver
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
