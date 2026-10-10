import { Globe, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export const CONTACT_EMAIL = 'fandresenanatolo@gmail.com'
export const CONTACT_PHONE_DISPLAY = '+261 34 36 038 32'
export const CONTACT_PHONE_LINK = 'tel:+261343603832'
export const CONTACT_WHATSAPP_URL = 'https://wa.me/261343603832'

// ---------------------------------------------------------------------------
// Réseaux sociaux.
// WhatsApp utilise le numéro ci-dessus.
// Pour Facebook et Instagram : aucune URL réelle n'a été fournie.
// Laissez FACEBOOK_URL / INSTAGRAM_URL vides ('') pour afficher l'icône
// désactivée, ou renseignez l'URL complète du compte pour activer le lien.
// ---------------------------------------------------------------------------
export const FACEBOOK_URL = ''
export const INSTAGRAM_URL = ''

const navigation = [
  { to: '/', label: 'Accueil' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/activites', label: 'Activités' },
  { to: '/hotels', label: 'Hôtels' },
  { to: '/reservation', label: 'Réservation' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
  { to: '/credits', label: 'Crédits photos' },
]

// Icônes de marques au style Lucide (contour, 24x24) : cette version de
// lucide-react ne fournit pas les icônes Facebook / Instagram.
function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function SocialButton({
  label,
  href,
  children,
}: {
  label: string
  href?: string
  children: React.ReactNode
}) {
  const className =
    'flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/80 transition hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
        {children}
      </a>
    )
  }
  return (
    <span
      aria-label={`${label} — lien à renseigner`}
      title={`${label} — lien à renseigner`}
      aria-disabled="true"
      className={`${className} cursor-not-allowed opacity-40 hover:bg-white/10 hover:text-white/80`}
    >
      {children}
    </span>
  )
}

function Footer() {
  return (
    <footer className="bg-brand-deep text-white/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="min-w-0">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-lg font-extrabold text-white">Tourisme</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Votre porte d'entrée vers Madagascar : destinations, activités, hôtels et
            expériences authentiques.
          </p>
        </div>

        <nav aria-label="Navigation du pied de page" className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h2>
          <ul className="mt-4 grid gap-2.5 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm">
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="min-w-0 break-all transition hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden="true" />
              <a href={CONTACT_PHONE_LINK} className="transition hover:text-white">
                {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden="true" />
              <a
                href={CONTACT_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                WhatsApp : {CONTACT_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-brand-muted" aria-hidden="true" />
              <span>Madagascar</span>
            </li>
          </ul>
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Réseaux sociaux</h2>
          <p className="mt-4 text-sm">Suivez nos aventures à Madagascar.</p>
          <ul className="mt-4 flex flex-wrap gap-3" aria-label="Réseaux sociaux">
            <li>
              <SocialButton label="Facebook" href={FACEBOOK_URL || undefined}>
                <FacebookIcon className="h-5 w-5" />
              </SocialButton>
            </li>
            <li>
              <SocialButton label="WhatsApp" href={CONTACT_WHATSAPP_URL}>
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </SocialButton>
            </li>
            <li>
              <SocialButton label="Instagram" href={INSTAGRAM_URL || undefined}>
                <InstagramIcon className="h-5 w-5" />
              </SocialButton>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs sm:px-6 lg:px-8">
          © 2026 Tourisme · Une nouvelle façon de voyager à Madagascar.
        </p>
      </div>
    </footer>
  )
}

export default Footer
