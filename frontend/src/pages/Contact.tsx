import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_LINK,
  CONTACT_WHATSAPP_URL,
} from '../components/layout/Footer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const contactCards = [
  {
    icon: Mail,
    title: 'Par e-mail',
    description: 'Écrivez-nous pour toute question ou demande de voyage.',
    actionLabel: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: Phone,
    title: 'Par téléphone',
    description: 'Appelez-nous pour échanger directement sur votre projet.',
    actionLabel: CONTACT_PHONE_DISPLAY,
    href: CONTACT_PHONE_LINK,
    external: false,
  },
  {
    icon: MessageCircle,
    title: 'Par WhatsApp',
    description: 'Le moyen le plus rapide pour une première prise de contact.',
    actionLabel: `Discuter sur WhatsApp`,
    href: CONTACT_WHATSAPP_URL,
    external: true,
  },
]

function Contact() {
  useDocumentTitle('Contact — Tourisme Madagascar')
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
            Contact
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Nous contacter
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Une question sur une destination, une activité ou un hébergement&nbsp;?
            Contactez-nous par le moyen qui vous convient.
          </p>
        </div>
      </section>

      {/* Moyens de contact */}
      <section aria-label="Moyens de contact">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <card.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-bold text-ink">{card.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {card.description}
                </p>
                <a
                  href={card.href}
                  {...(card.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-5 inline-flex w-fit max-w-full items-center gap-1.5 rounded-lg bg-brand-soft px-3 py-2 text-sm font-semibold break-all text-brand transition hover:bg-brand hover:text-white"
                >
                  {card.actionLabel}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white sm:px-10">
            <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
              Prêt à préparer votre voyage&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-white/75">
              Décrivez votre projet dans notre formulaire : nous revenons vers vous par
              e-mail.
            </p>
            <div className="mt-7">
              <Link to="/reservation" className="button button-light">
                Faire une demande de réservation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
