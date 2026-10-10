import { Search } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { destinations } from '../../data/destinations'

const experiences = ['Nature', 'Culture', 'Marine', 'Aventure', 'Randonnée']

function SearchBar() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('')
  const [experience, setExperience] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Seuls les critères réellement interprétés par les pages catalogue sont
    // transmis : la destination (lue par /destinations et /activites) et
    // l'expérience (catégorie d'activité lue par /activites).
    // Aucune donnée de disponibilité n'existant dans le projet, la recherche
    // ne filtre volontairement ni par date ni par nombre de voyageurs.
    if (experience) {
      const params = new URLSearchParams()
      params.set('experience', experience)
      if (destination) params.set('destination', destination)
      navigate(`/activites?${params.toString()}`)
      return
    }
    if (destination) {
      const params = new URLSearchParams()
      params.set('destination', destination)
      navigate(`/destinations?${params.toString()}`)
      return
    }
    navigate('/destinations')
  }

  const fieldClass =
    'mt-1 w-full rounded-lg bg-transparent text-sm font-medium text-ink outline-none'

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200/60 sm:p-5"
      aria-label="Rechercher un voyage"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_auto]">
        <label className="block rounded-lg px-3 py-2 ring-1 ring-slate-200 transition focus-within:ring-2 focus-within:ring-brand">
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
            Destination
          </span>
          <select
            className={fieldClass}
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          >
            <option value="">Toutes les destinations</option>
            {destinations.map((item) => (
              <option key={item.slug} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block rounded-lg px-3 py-2 ring-1 ring-slate-200 transition focus-within:ring-2 focus-within:ring-brand">
          <span className="flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink-soft">
            Expérience
          </span>
          <select
            className={fieldClass}
            value={experience}
            onChange={(event) => setExperience(event.target.value)}
          >
            <option value="">Toutes</option>
            {experiences.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <button type="submit" className="button sm:col-span-2 lg:col-span-1">
          <Search className="h-4 w-4" aria-hidden="true" />
          Rechercher
        </button>
      </div>
    </form>
  )
}

export default SearchBar
