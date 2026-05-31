import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { fadeUp } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { ButtonLink } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';

const benefits = [
  { title: 'Presis kirurgi',   text: 'Skånsom teknikk med moderne utstyr for stabilt resultat.' },
  { title: 'Kort prosedyre',   text: 'Selve inngrepet tar ofte rundt 15–20 minutter per øye.'   },
  { title: 'Linsevalg',        text: 'Vi vurderer linser i tråd med dine behov og forventninger.' },
  { title: 'Trygg oppfølging', text: 'Kontroller og tydelige råd for en trygg rekonvalesens.'    },
];

const stats = [
  { value: '98%',   label: 'Trygge resultater'     },
  { value: '15–20', label: 'Minutter prosedyre'     },
  { value: '1–2',   label: 'Dager til roligere øyer' },
];

export default function Cataract() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section id="katarakt" ref={ref} className="relative py-20 lg:py-28 bg-gradient-to-br from-surface-2 to-surface-3 border-t border-border overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" aria-hidden />

      <div className="container relative z-10">
        <motion.div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16" variants={fadeUp(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <span className="section-label">Kataraktkirurgi</span>
          <h2 className="text-3xl lg:text-4xl font-bold text-ink mt-3 mb-4">
            <AnimatedHeadline parts={[{ text: 'Egen seksjon for ', block: false }, { text: 'grå stær (katarakt)', className: 'text-primary' }]} visible={inView} />
          </h2>
          <div className="divider mx-auto" />
          <p className="text-sm lg:text-base text-ink-muted leading-relaxed">En dedikert behandlingsseksjon med fokus på et tydelig pasientforløp: vurdering, kirurgi, linsevalg og oppfølging.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div className="relative" variants={fadeUp(0.12)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <img src="/images/pexels-kseniachernaya-5765827.jpg" alt="Øyeundersøkelse under kataraktvurdering" className="w-full h-full object-cover" loading="lazy" decoding="async" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent" aria-hidden />
            </div>
            <div className="absolute -bottom-5 -right-5 z-10">
              <GlassCard className="px-5 py-4">
                <div className="flex gap-6">
                  {stats.map(s => (
                    <div key={s.label} className="text-center">
                      <p className="text-lg font-bold text-primary leading-tight">{s.value}</p>
                      <p className="text-[0.68rem] text-ink-muted whitespace-nowrap">{s.label}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </motion.div>

          <motion.article className="bg-surface border border-border rounded-xl shadow-sm p-6 lg:p-8 flex flex-col gap-5" variants={fadeUp(0.22)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">Hva er katarakt?</h3>
              <p className="text-sm text-ink-muted leading-relaxed">Katarakt er en uklaring av øyets naturlige linse. Typiske symptomer er tåket syn, blending og svakere kontraster, spesielt i motlys og ved mørkekjøring.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-ink mb-2">Vår prosedyre</h3>
              <p className="text-sm text-ink-muted leading-relaxed">Vi bruker moderne metoder for å erstatte den uklare linsen med en kunstig linse. Behandlingen planlegges individuelt, med fokus på trygghet og god synskvalitet.</p>
            </div>
            <ul className="flex flex-col gap-3" aria-label="Fordeler ved behandlingen">
              {benefits.map(b => (
                <li key={b.title} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="shrink-0 text-primary mt-0.5" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-ink">{b.title}</p>
                    <p className="text-xs text-ink-muted leading-relaxed">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ButtonLink to={`/#${SECTIONS.PRICING}`} variant="secondary" size="md" className="self-start">Kataraktkirurgi guide</ButtonLink>
            <div className="flex flex-wrap gap-3 pt-2 border-t border-border">
              <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="primary" size="md">Bestill vurdering</ButtonLink>
              <ButtonLink to="/diseases/gra-staer-katarakt" variant="secondary" size="md">Les om diagnosen</ButtonLink>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
