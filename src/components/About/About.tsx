import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { EASING, fadeUp, fadeLeft, fadeRight } from '../../config/animations';
import { SECTIONS } from '../../config/routes';
import AnimatedHeadline from '../AnimatedHeadline/AnimatedHeadline';
import { ButtonLink } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { Card } from '../ui/Card';

const highlights = [
  { id: 'h1', label: 'Egen operasjonsavdeling'      },
  { id: 'h2', label: 'Internasjonalt utstyr'         },
  { id: 'h3', label: 'Helse Nord – offentlig avtale' },
  { id: 'h4', label: 'Grå stær og øyelokkskirurgi'   },
];

export default function About() {
  const ref    = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="om" ref={ref} className="relative py-20 lg:py-28 bg-surface border-t border-border overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div className="relative" variants={fadeLeft(0)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <div className="relative rounded-2xl overflow-hidden aspect-[3/2] shadow-lg bg-surface-2">
            <img src="/images/clinic-view.png" alt="Klinikkinteriør" className="absolute inset-0 w-full h-full object-cover object-center" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent pointer-events-none" aria-hidden />
          </div>
          <motion.div className="absolute -bottom-4 -right-4 z-10" initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }} transition={{ delay: 0.5, duration: 0.45, ease: EASING }}>
            <GlassCard className="px-5 py-3 text-center min-w-[140px]">
              <p className="text-lg font-bold text-primary leading-tight">Helse Nord</p>
              <p className="text-xs text-ink-muted">Offentlig driftsavtale</p>
            </GlassCard>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.span className="section-label" variants={fadeUp(0.1)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>Om oss</motion.span>

          <motion.h2 className="text-3xl lg:text-4xl font-bold text-ink" variants={fadeUp(0.2)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <AnimatedHeadline
              parts={[{ text: 'Toppmoderne øyeklinikk i ', block: false }, { text: 'Mo i Rana', className: 'text-primary' }]}
              visible={inView}
            />
          </motion.h2>

          <motion.span className="divider" variants={fadeUp(0.25)} initial="hidden" animate={inView ? 'visible' : 'hidden'} />

          <motion.div className="flex flex-col gap-4 text-sm lg:text-base text-ink-muted leading-relaxed" variants={fadeUp(0.3)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <p>Rana øyelegesenter er et topp moderne øyelegesenter i hjertet av Mo i Rana. Vi har egen operasjonsavdeling og kan skryte av topp internasjonalt anerkjent utstyr. Senteret har egen øyekirurgisk klinikk for operasjon av grå stær og øyelokkskirurgi.</p>
            <p>Vi tar imot pasienter etter henvisning fra fastlege, optiker, skolehelsetjeneste og spesialisthelsetjenesten. Senteret har offentlig driftsavtale med Helse Nord.</p>
            <p>Vi forstår at besøk hos øyelegen kan være forbundet med nervøsitet og usikkerhet, og vår oppgave er å gjøre opplevelsen så behagelig og beroligende som mulig. Våre dyktige medarbeidere tar seg tid til å forklare alle prosedyrer og alternativer.</p>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-3" variants={fadeRight(0.4)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            {highlights.map((h, i) => (
              <Card key={h.id} className="flex items-center gap-3 p-4">
                <span className="text-[0.68rem] font-bold text-ink-label shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm font-semibold text-ink leading-tight">{h.label}</span>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={fadeUp(0.5)} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <ButtonLink to={`/#${SECTIONS.CONTACT}`} variant="primary" size="lg">
              Ta kontakt med oss <ArrowRight size={16} strokeWidth={2.5} aria-hidden />
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
