import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Clock, Users } from 'lucide-react';
import { fadeUp } from '../../config/animations';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

type FormStatus = '' | 'submitting' | 'submitted' | 'error';

const inputCls = 'w-full bg-surface border border-border rounded-lg px-4 py-2.5 text-base text-ink min-h-[44px] placeholder:text-ink-dim focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-colors';

export default function Contact() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<FormStatus>('');

  const handleFormChange = () => { if (status === 'submitted' || status === 'error') setStatus(''); };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const d = new FormData(e.currentTarget);
      const get = (k: string) => String(d.get(k) ?? '').trim();
      const body = encodeURIComponent([
        `Fornavn: ${get('firstName')}`, `Etternavn: ${get('lastName')}`,
        `Telefon: ${get('phone')}`,     `E-post: ${get('email')}`,
        `Emne: ${get('subject')}`,      '', 'Melding:', get('message'),
      ].join('\n'));
      setStatus('submitted');
      window.location.href = `mailto:post@ranaoyelegesenter.no?subject=${encodeURIComponent('Kontaktskjema - Rana Øyelegesenter')}&body=${body}`;
    } catch { setStatus('error'); }
  };

  return (
    <section id="kontakt" ref={ref} className="relative py-20 lg:py-28 bg-surface-2 border-t border-border">
      <div className="container">
        <motion.div className="text-center max-w-2xl mx-auto mb-12" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Kontakt oss</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline
              parts={[{ text: 'Bestill en time ', block: false }, { text: 'eller send en ', block: false }, { text: 'henvendelse', className: 'text-primary' }]}
              visible={inView}
            />
          </h2>
          <div className="divider mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.aside variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <Card className="p-6 flex flex-col gap-5">
              <div>
                <h3 className="text-lg font-bold text-ink">Rana Øyelegesenter</h3>
                <p className="text-sm text-ink-muted mt-1">Kirkegata 10, 8622 Mo i Rana</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { Icon: Phone, label: 'Telefon',    value: '+47 75 57 77 99',                        href: 'tel:+4775577799' },
                  { Icon: Clock, label: 'Besøkstid',  value: '08:00 – 16:00',                          href: undefined        },
                  { Icon: Clock, label: 'Telefontid', value: '09–11 og 13–14 (man, tors, fre)\n08:15–09 (tirs, ons)', href: undefined },
                  { Icon: Users, label: 'Henvisning', value: 'Fastlege, optiker, skolehelsetjeneste',  href: undefined        },
                ].map(({ Icon, label, value, href }) => (
                  <div key={label} className="p-4 bg-surface-2 rounded-lg border border-border">
                    <span className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-primary mb-1.5">
                      <Icon size={11} aria-hidden /> {label}
                    </span>
                    {href
                      ? <a href={href} className="text-sm font-semibold text-ink hover:text-primary transition-colors">{value}</a>
                      : <p className="text-sm font-semibold text-ink whitespace-pre-line">{value}</p>}
                  </div>
                ))}
              </div>
              <div className="overflow-hidden rounded-lg border border-border aspect-video">
                <iframe
                  className="w-full h-full border-0"
                  title="Kart til Rana Øyelegesenter"
                  src="https://www.google.com/maps?q=Kirkegata%2010,%208622%20Mo%20i%20Rana&output=embed"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </Card>
          </motion.aside>

          <motion.div variants={fadeUp(0.18)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <Card className="p-6 flex flex-col gap-5">
              <div>
                <span className="section-label !mb-2">Skriv til oss</span>
                <h3 className="text-lg font-bold text-ink">Send en trygg og tydelig henvendelse</h3>
                <p className="text-sm text-ink-muted mt-1">Fyll inn informasjonen din, så åpnes e-postklienten med en ferdig formulert melding.</p>
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleSubmit} onChange={handleFormChange}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Fornavn</span>
                    <input name="firstName" type="text" placeholder="Skriv fornavn" required className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Etternavn</span>
                    <input name="lastName" type="text" placeholder="Skriv etternavn" required className={inputCls} />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Telefon</span>
                    <input name="phone" type="tel" placeholder="+47 ..." className={inputCls} />
                  </label>
                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">E-post</span>
                    <input name="email" type="email" placeholder="navn@epost.no" required className={inputCls} />
                  </label>
                </div>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Emne</span>
                  <select name="subject" defaultValue="Konsultasjon" required className={inputCls}>
                    <option>Konsultasjon</option><option>Henvisning</option>
                    <option>Operasjon</option><option>Takst / pris</option><option>Annet</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">Melding</span>
                  <textarea name="message" rows={6} placeholder="Skriv kort hva henvendelsen gjelder" required className={`${inputCls} min-h-[150px] resize-y`} />
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <Button type="submit" variant="primary" size="md" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sender henvendelse...' : 'Send henvendelse'}
                  </Button>
                  {status === ''          && <p className="text-xs text-ink-muted">Svar sendes via e-postprogrammet ditt.</p>}
                  {status === 'submitting'&& <p className="text-xs text-ink-label">Forbereder melding i e-postklienten...</p>}
                  {status === 'submitted' && <p className="text-xs text-green-700">E-postklienten er åpnet. Du kan sende meldingen derfra.</p>}
                  {status === 'error'     && <p className="text-xs text-red-700">Noe gikk galt. Prøv igjen eller ring oss direkte.</p>}
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
