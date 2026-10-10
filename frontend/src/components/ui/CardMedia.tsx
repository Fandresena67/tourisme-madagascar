import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { resolveImage } from '../../assets/images'

interface CardMediaProps {
  imageKey?: string
  alt: string
  icon: LucideIcon
  className?: string
  children?: ReactNode
}

function CardMedia({ imageKey, alt, icon: Icon, className = '', children }: CardMediaProps) {
  const src = resolveImage(imageKey)

  return (
    <div className={`relative overflow-hidden bg-linear-to-br from-brand via-brand-dark to-brand-deep ${className}`}>
      <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-105">
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative flex h-full w-full items-center justify-center" aria-hidden="true">
            <div className="absolute -right-10 -bottom-12 h-36 w-36 rounded-full bg-white/10" />
            <div className="absolute -left-10 -top-12 h-32 w-32 rounded-full bg-white/5" />
            <Icon className="relative h-14 w-14 text-white/40" strokeWidth={1.25} />
          </div>
        )}
      </div>
      {children}
    </div>
  )
}

export default CardMedia
