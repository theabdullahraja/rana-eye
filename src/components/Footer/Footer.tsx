import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SECTIONS } from '../../config/routes';

const pages = [
  { label: 'Om oss',       href: `/#${SECTIONS.ABOUT}`    },
  { label: 'Ansatte',      href: `/#${SECTIONS.TEAM}`     },
  { label: 'Øyesykdommer', href: `/#${SECTIONS.DISEASES}` },
  { label: 'Priser',       href: `/#${SECTIONS.PRICING}`  },
  { label: 'Partnere',     href: `/#${SECTIONS.PARTNERS}` },
  { label: 'Kontakt',      href: `/#${SECTIONS.CONTACT}`  },
];

export default function Footer() {
  return (
    <footer className="bg-surface-2 border-t border-border">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            <Link to={`/#${SECTIONS.HOME}`} className="flex items-center gap-3" aria-label="Rana Øyelegesenter hjem">
              <img src="/images/icon.svg" alt="Rana Øyelegesenter" className="h-9 w-auto" />
              <span className="font-display font-bold text-base text-ink">Rana Øyelegesenter</span>
            </Link>
            <p className="text-sm text-ink-muted leading-relaxed">
              Spesialisert øyeklinikk i Mo i Rana med fokus på presisjon, trygghet og tydelig kommunikasjon.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-label">Sider</h3>
            {pages.map(p => (
              <Link key={p.href} to={p.href} className="text-sm text-ink-muted hover:text-primary transition-colors">
                {p.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-label">Kontakt</h3>
            <div className="flex items-start gap-2 text-sm text-ink-muted">
              <MapPin size={15} className="shrink-0 mt-0.5 text-primary" aria-hidden />
              <span>Kirkegata 10, 8622 Mo i Rana</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-ink-muted">
              <Phone size={15} className="shrink-0 text-primary" aria-hidden />
              <a href="tel:+4775577799" className="hover:text-primary transition-colors">+47 75 57 77 99</a>
            </div>
            <div className="flex items-start gap-2 text-sm text-ink-muted">
              <Clock size={15} className="shrink-0 mt-0.5 text-primary" aria-hidden />
              <div className="flex flex-col gap-0.5">
                <span>Besøkstid: 08:00 – 16:00</span>
                <span>Telefon: 09:00–11:00 og 13:00–14:00 (man, tors, fre)</span>
                <span>Telefon: 08:15–09:00 (tirs og ons)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-dim">
          <span>© 2026 Rana Øyelegesenter</span>
          <span>Offentlig driftsavtale med Helse Nord</span>
        </div>
      </div>
    </footer>
  );
}
