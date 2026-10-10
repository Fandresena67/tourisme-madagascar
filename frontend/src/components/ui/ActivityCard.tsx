import { ArrowRight, Clock, Footprints, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Activity } from '../../types'
import { resolveImageAlt } from '../../assets/images'
import { destinations } from '../../data/destinations'
import CardMedia from './CardMedia'

interface ActivityCardProps {
  activity: Activity
}

function ActivityCard({ activity }: ActivityCardProps) {
  const destination = destinations.find((item) => item.slug === activity.destinationSlug)

  return (
    <Link
      to={`/activites/${activity.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 transition duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
    >
      <CardMedia
        imageKey={activity.image}
        alt={resolveImageAlt(activity.image) ?? `Illustration de ${activity.name}`}
        icon={Footprints}
        className="aspect-[4/3]"
      >
        {activity.category && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-brand shadow-sm">
            {activity.category}
          </span>
        )}
      </CardMedia>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink transition group-hover:text-brand">
          {activity.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{activity.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-semibold text-ink-soft">
          {destination && (
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {destination.name}
            </span>
          )}
          {activity.duration && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              {activity.duration}
            </span>
          )}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
          Découvrir l'activité
          <ArrowRight
            className="h-4 w-4 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}

export default ActivityCard
