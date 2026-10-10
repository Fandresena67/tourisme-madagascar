import { MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resolveImageAlt } from '../../assets/images'
import type { Hotel } from '../../types'
import CardMedia from './CardMedia'

interface HotelCardProps {
  hotel: Hotel
}

function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link
      to={`/hotels/${hotel.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <CardMedia
        imageKey={hotel.image}
        alt={resolveImageAlt(hotel.image) ?? `Illustration de ${hotel.name}`}
        icon={Star}
        className="aspect-[4/3]"
      >
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-ink shadow-sm">
          Photo d'illustration
        </span>
      </CardMedia>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-bold text-ink transition group-hover:text-brand">
            {hotel.name}
          </h3>
        </div>
        {hotel.location && (
          <p className="mt-1 flex items-center gap-1.5 text-sm text-ink-soft">
            <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
            {hotel.location}
          </p>
        )}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{hotel.summary}</p>
        <span className="mt-4 inline-flex w-fit items-center rounded-lg bg-brand-soft px-3 py-1.5 text-sm font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
          Voir l'hôtel
        </span>
      </div>
    </Link>
  )
}

export default HotelCard
