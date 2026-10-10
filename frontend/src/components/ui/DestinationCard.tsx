import { ArrowRight, Mountain, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resolveImageAlt } from '../../assets/images'
import type { Destination } from '../../types'
import CardMedia from './CardMedia'

interface DestinationCardProps {
  destination: Destination
}

function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <CardMedia
        imageKey={destination.image}
        alt={resolveImageAlt(destination.image) ?? `Illustration de ${destination.name}`}
        icon={Mountain}
        className="aspect-[4/3]"
      >
        {destination.category && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand shadow-sm">
            {destination.category}
          </span>
        )}
      </CardMedia>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-1.5 text-sm text-ink-soft">
          <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          {destination.region ? `${destination.region} · ${destination.country}` : destination.country}
        </p>
        <h3 className="mt-1 text-lg font-bold text-ink transition group-hover:text-brand">
          {destination.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{destination.summary}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Découvrir
          <ArrowRight
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}

export default DestinationCard
